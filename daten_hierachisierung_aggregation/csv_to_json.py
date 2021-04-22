import csv
import json
import pandas as pd
# source: https://stackoverflow.com/questions/51245686/parent-child-json-from-csv-using-python

class Node(object):
    def __init__(self, name, size=None, extra=None):
        self.name = name
        self.children = []
        self.size = size
        self.extra = extra

    def child(self, cname, size=None, extra=None):
        child_found = [c for c in self.children if c.name == cname]
        if not child_found:
            _child = Node(cname, size, extra)
            self.children.append(_child)
        else:
            _child = child_found[0]
        return _child

    def as_dict(self):
        res = {'name': self.name}
        if self.size is None:
            res['children'] = [c.as_dict() for c in self.children]
        else:
            res['value'] = int(self.size)

        if self.extra:
            res.update(self.extra)

        return res

exel_path = r'/Users/janoliverliechti/Documents/UNI/UNI/FS20/open_data/BLW_projekt/200318_opendata_coach_uni_bern_DZ_manipuliert.xlsx'

# Daten vorbereiten, Codes beseitigen & ausummieren

data_raw_tab = pd.read_excel(exel_path, 'data')
data_legend_raw = pd.read_excel(exel_path, 'legend')

#einzelne Legenden erstellen
legend_fat = data_legend_raw.iloc[0:12, [0,1]]
legend_geb = data_legend_raw.iloc[0:2, [3,4]]
legend_bio = data_legend_raw.iloc[0:2, [9,10]]
# FAT_enc	GEBIET_enc	BIO_enc B_VERSORGUNGSSICHERHEIT	B_BIODIVERSITAET	B_PRODUKTIONSSYSTEME	B_LANDSCHAFTSQUALITAET	B_RESSOURCENEFFIZIENZ

data_raw_tab['FAT_enc'] = pd.merge(data_raw_tab, legend_fat, 'left', 'FAT' )['BESCHREIBUNG_DE']
data_raw_tab['GEBIET_enc'] = pd.merge(data_raw_tab, legend_geb, 'left', 'GEBIET' )['BESCHREIBUNG_DE.1']
data_raw_tab['BIO_enc'] = pd.merge(data_raw_tab, legend_bio, 'left', 'BIO' )['Beschreibung']
data_raw_tab['Summe_tot'] = data_raw_tab.loc[:, ["B_KULTURLAND", "B_VERSORGUNGSSICHERHEIT", "B_BIODIVERSITAET",	"B_PRODUKTIONSSYSTEME",	"B_LANDSCHAFTSQUALITAET", "B_RESSOURCENEFFIZIENZ"]].sum(axis=1)

data_tab = data_raw_tab.loc[:, ["JAHR",	"KT", "Summe_tot", "FAT_enc", "GEBIET_enc", "BIO_enc"]]
data_tab = data_raw_tab.loc[:, ["JAHR",	"KT", "Summe_tot", "FAT_enc", "GEBIET_enc", "BIO_enc"] + ["B_KULTURLAND", "B_VERSORGUNGSSICHERHEIT", "B_BIODIVERSITAET",	"B_PRODUKTIONSSYSTEME",	"B_LANDSCHAFTSQUALITAET", "B_RESSOURCENEFFIZIENZ"]]
# alternativ:
# data_tab = pd.read_excel(exel_path, 'data_simple')

# ev. noch bereinigen der Katons-None Werte (=99)
csv_path = r'/Users/janoliverliechti/Documents/UNI/UNI/FS20/open_data/BLW_projekt/data_simple.csv'

# data_tab.columns
cnames_order = ['BIO_enc',  'FAT_enc', 'KT', 'GEBIET_enc', 'JAHR',  'Summe_tot' ] + ["B_KULTURLAND", "B_VERSORGUNGSSICHERHEIT", "B_BIODIVERSITAET",	"B_PRODUKTIONSSYSTEME",	"B_LANDSCHAFTSQUALITAET", "B_RESSOURCENEFFIZIENZ"] # Ordnen wäre nicht notwendig, machts aber nachvollziehbarer
data_tab.loc[:, cnames_order].to_csv(csv_path.replace('data_simple', 'data_simple_utf'), index=False)
csv_path = csv_path.replace('data_simple', 'data_simple_utf')



def schoenheitskorrektur(zahl): # Für die anschliessend dargestellten Summen
    schoenhkr = True
    while schoenhkr:
        if zahl / 1000000000 >= 0.1:
            zahl = str(round(zahl / 1000000000, 2)) + ' Mrd. CHF'
            break
        if zahl / 1000000 >= 0.1:
            zahl = str(round(zahl / 1000000, 2)) + ' Mio. CHF'
            break
        else:
            zahl = str(f"{zahl:,d}".replace(',', "'")) + " CHF"
            schoenhkr = False
    return '\n' +zahl

# Abfüllen der Daten in dict-Struktur, anschliessender export als json

root = Node('Flare')
with open(csv_path, 'r') as f:
    reader = csv.reader(f)
    header = next(reader)
    print(header)
    for row in reader:
        bio, fat, kt, geb, jahr, sum_tot, b_kult, b_vers, b_biodiv, b_prodsys, b_landqual, b_resseff = row
        # print(str(sum(data_tab.loc[(data_tab['JAHR']==int(jahr)) & (data_tab['KT'] == kt) & (data_tab['FAT_enc'] == fat) & (data_tab['GEBIET_enc'] == geb) & (data_tab['BIO_enc'] == bio), 'Summe_tot' ])))
        sum_append_lvl5 = sum(data_tab.loc[(data_tab['JAHR'] == int(jahr)) &
                                      (data_tab['KT'] == kt) &
                                      (data_tab['FAT_enc'] == fat) &
                                      (data_tab['GEBIET_enc'] == geb) &
                                      (data_tab['BIO_enc'] == bio), 'Summe_tot']) # Summe für Jahre
        sum_append_lvl4 = sum(data_tab.loc[(data_tab['KT'] == kt) &
                                           (data_tab['FAT_enc'] == fat) &
                                           (data_tab['GEBIET_enc'] == geb) &
                                           (data_tab['BIO_enc'] == bio), 'Summe_tot'])  # Summe zum Gebiete
        sum_append_lvl3 = sum(data_tab.loc[(data_tab['KT'] == kt) &
                                           (data_tab['FAT_enc'] == fat) &
                                           (data_tab['BIO_enc'] == bio), 'Summe_tot'])  # Summe für Kantone
        sum_append_lvl2 = sum(data_tab.loc[(data_tab['FAT_enc'] == fat) &
                                           (data_tab['BIO_enc'] == bio), 'Summe_tot'])  # Summe für Betriebsart
        sum_append_lvl1 = sum(data_tab.loc[(data_tab['BIO_enc'] == bio), 'Summe_tot'])  # Summe für Bio

        # Damit die Zahlen nicht so gigantisch werden Mrd oder Mio ergänzen
        sum_append_lvl1 = schoenheitskorrektur(sum_append_lvl1)
        sum_append_lvl2 = schoenheitskorrektur(sum_append_lvl2)
        sum_append_lvl3 = schoenheitskorrektur(sum_append_lvl3)
        sum_append_lvl4 = schoenheitskorrektur(sum_append_lvl4)
        sum_append_lvl5 = schoenheitskorrektur(sum_append_lvl5)

        if bio == "Ja":# ist nur Kosmetik, hätte auch in den Ursprungsdaten geändert werden können
            bio = "biologisch"
        else:
            bio = "konventionell"
        root.child(bio, extra={'name' : bio + ': ' + sum_append_lvl1}) \
            .child(fat, extra={'name' : 'Betriebsart:\n' + fat + ': ' + sum_append_lvl2}) \
            .child(kt, extra={'name' : kt + ': ' + sum_append_lvl3}) \
            .child(geb, extra={'name' : geb + ': ' + sum_append_lvl4}) \
            .child(jahr + ': ' + sum_append_lvl5, size=sum_tot)

tab_check = pd.DataFrame(list_sum_raw, list_sum_schoen)
print(json.dumps(root.as_dict(), indent=4))

export_file = r'/Users/janoliverliechti/Documents/UNI/UNI/FS20/open_data/BLW_projekt/json_data.json'
with open(export_file, 'w') as outfile:
    json.dump(root.as_dict(), outfile)

# experiment aggregation test -> Idee: Werte gleich zu Text dazuschreiben
data_tab.loc[0, :] # erste Spalte
sum_append = str(sum(data_tab.loc[(data_tab['JAHR']==int(jahr)) & (data_tab['KT'] == kt) & (data_tab['FAT_enc'] == fat) & (data_tab['GEBIET_enc'] == geb) & (data_tab['BIO_enc'] == bio), 'Summe_tot' ]))