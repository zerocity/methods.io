'use strict';

angular.module('methodsioApp')
  .factory('dummyJson', function () {
    // Service logic
    // ...
    var dummy = {
  "abstract": "Einer der grundlegenden Prozesse in der Molekularbiologie ist die Aufreinigung von Nukleinsäuren.\nWährend dieses Prozesses ist es häufig non Nöten, Enzyme oder andere Proteine zu desaktivieren oder\nzu entfernen, die aus den ursprünglichen Zellextrakten stammen oder die während der Klonierung\nverwendet wurden. Dieses Entfernen der Proteine kann häufig durch einfache Extraktion der wässrigen\nNukleinsäure-Lösung mit Phenol, Phenol/Chloroform oder Phenol/Chloroform/Isoamylalkohol\ndurchgeführt werden.\nDie am weitesten verbreitete Version dieser Aufreinigung besteht aus einer Extraktion mit Phenol/\nChloroform (1:1), häufig versetzt mit 0,1 %, Hydroxychinolin, gefolgt von einem oder zwei Aufreini-\ngungsschritten mit Chloroform. Diese zusätzliche Chloroform-Extraktion entfernt restliches Phenol aus\nder Lösung, das die Nukleinsäure verunreinigen könnte. ",
  "introduction": "Einer der grundlegenden Prozesse in der Molekularbiologie ist die Aufreinigung von Nukleinsäuren. \nWährend dieses Prozesses ist es häufig non Nöten, Enzyme oder andere Proteine zu desaktivieren oder \nzu entfernen, die aus den ursprünglichen Zellextrakten stammen oder die während der Klonierung \nverwendet wurden. Dieses Entfernen der Proteine kann häufig durch einfache Extraktion der wässrigen \nNukleinsäure-Lösung mit Phenol, Phenol/Chloroform oder Phenol/Chloroform/Isoamylalkohol \ndurchgeführt werden.\n\nDie am weitesten verbreitete Version dieser Aufreinigung besteht aus einer Extraktion mit Phenol/\nChloroform (1:1), häufig versetzt mit 0,1 %, Hydroxychinolin, gefolgt von einem oder zwei Aufreini-\ngungsschritten mit Chloroform. Diese zusätzliche Chloroform-Extraktion entfernt restliches Phenol aus\nder Lösung, das die Nukleinsäure verunreinigen könnte. Für ein ausführliches Protokoll siehe unten.\n\nHinweis: Eine Deproteinierung ist effizienter, wenn während des Prozesses zwei unterschiedliche\norganische Lösungsmittel verwendet werden.\nIm Jahre 1956 publizierte Kirby die erste Verwendung von Phenol bei der Aufreinigung von\nNukleinsäuren [1]. Seine Idee basierte auf den Veröffentlichungen von Grassmann und Deffner (1953),\ndie zuvor gezeigt hatten, dass man mittels Phenol Proteine aus wässrigen Lösungen isolieren kann [2].\nIn seinem Paper wies Kirby nach, dass die Extraktion von Proteinen aus Säugetier-Gewebsextrakten\nmittels einer zwei-Phasen-Phenol/Wasser-Mischung bei Raumtemperatur zur Anreicherung der RNA in\nder wässrigen Phase führt. Die DNA bleibt zusammen mit den Proteinen in der Interphase. Kirby zeigte,\ndass sich, wenn das reine Wasser durch anionische Salze ersetzt wird, beide Moleküle, RNA wie auch\nDNA, in der wässrigen Phase finden. In der Nachfolge wurden dann zwar die anionischen Salze in ihrer\nFunktion, Nukleinsäure von Proteinen freizusetzen, ersetzt durch stark anionische Detergenzien wie SDS,\nder grundlegende Ansatz aber, der in dieser ersten Publikation veröffentlicht worden war, wurde kaum\ngeändert und bildet immer noch die Basis der meisten gebräuchlichen Aufreinigungsmethoden.\nHinweis: Die Funktion des Phenols während dieses Prozesses ist höchstwahrscheinlich die eines\nProteinlösungsmittels – die Extraktion der Proteine, die durch Detergenzien von der Nukleinsäure\ngetrennt wurden.\n\nDie Phenolextraktion von Nukleinsäuren ist hocheffizient. Bereits nach zwei oder drei Phenolextraktionen\nwerden hoch-reine Nukleinsäure-Fraktionen erhalten. Denaturierte Proteine sammeln sich an der Grenze\nzwischen den beiden Phasen, Fette sammeln sich in der organischen Phase. DNA oder, abhängig vom\ntatsächlich verwendeten Phenol, Gesamt-Nukleinsäuren reichert sich stark in der wässrigen Phase an\nund kann leicht von der organischen und der Zwischenphase getrennt werden. Zur Isolation von DNA\nwird Tris- oder TE-gesättigtes Phenol mit einem pH von etwa 7,8 verwendet. Phenol mit diesem pH-Wert\nunterdrückt das Abwandern der DNA in die organische Phase und unterscheidet nicht zwischen DNA und\nRNA, so dass es die gemeinsame Isolation beider Nukleinsäuren erlaubt. Entsprechend wird für die\nRNA-Aufreinigung reines Wasser als Lösungsmittel für Phenol verwendet, das damit einen pH-Wert von\netwa 4,8 erhält. Bei diesem pH wird die DNA gezwungen, sich in der organischen und der Protein-\nInterphase anzureichern, was die DNA-Kontamination der RNA-Isolate deutlich verringert.\nGereinigtes, gelöstes Phenol besitzt eine Dichte von 1,07 und bildet deshalb die untere Phase, wenn es\nmit Wasser oder wässrigen Lösungen gemischt wird. Normalerweise befindet sich die wässrige Phase\noben. Allerdings sind die beiden Phasen manchmal schwer zu trennen oder können unter bestimmten\nUmständen sogar invertieren.\nHinweis: Die Phenol- und die wässrige Phase können invertieren, wenn Phenol verwendet wird, um\nNukleinsäure aus Lösungen zu extrahieren, die hohe Konzentrationen an gelösten Stoffen aufweisen\n(z.B. >0,5 M Salz oder >10 % Zucker).\nDieses Problem kann vermieden werden, indem eine 1:1 Mischung aus Phenol und Chloroform\nverwendet wird, da die höhere Dichte des Chloroforms (1,47) eine klare Unterscheidung und Trennung\nder beiden Phasen bewirkt. Das Entnehmen der oberen Phase ist dann in den meisten Fällen sehr leicht\nmöglich. Um ein Schäumen der organischen Phase zu vermeiden, welches das Pipettieren behindert,\nkann eine kleine Menge Isoamylalkohol zugegeben werden. Weiterhin inhibiert diese Mischung auch\nvollständig RNAsen und verhindert die Anreicherung von poly(A)-RNA in der Phenolphase.\nHinweis: Obwohl reines Phenol Proteine effizient denaturiert, inhibiert es nicht vollständig die RNAse\nAktivität und dienst als Lösungsmittel für RNA-Moleküle mit langen poly(A)-Schwänzen [3], die somit\nbei der Präparation verloren gehen können.",
  "equipment": [
    "Equipment dummy 1",
    "Equipment dummy 2",
    "Equipment dummy 3"
  ],
  "materials": [
    "Materials dummy 1",
    "Materials dummy 2",
    "Materials dummy 3"
  ],
  "enviromentConditions": "# Phenolische DNA Aufreinigung - Hintergrund und Protokoll \n> **Hinnweis:** Kontrollieren Sie das Phenol vor Gebrauch! Phenolische Lösungen sollten wasserklar und \nungefärbt sein und können für etwa 1 Jahr im Kühlschrank aufbewahrt werden (dunkel und bei \nkonstanter Temperatur). Sollte eine mehr oder weniger deutliche, rötliche oder pinkfarbene Färbung der \nLösung zu sehen sein, hat der Oxidationsprozess des Phenols begonnen, und das Phenol wird die \nNukleinsäuren während der Isolation angreifen und beschädigen. Verwerfen Sie das Phenol und \nverwenden sie eine neue Charge!",
  "procedure": [
    {
      "processGroupTitle": "Groupe Title 1",
      "processSteps": [
        {
          "processStepId": 1,
          "title": "Step title",
          "context": "1. Überführen der Probe in ein Reaktionsgefäß. Zugabe von 1 Volumen Phenol/Chloroform oder \nPhenol/Chloroform/Isoamylalkohol.",
          "highlights": "**Hinweis**: Phenol sollte zur DNA-Isolation einen pH-Wert von 7,5-8,0 und zur RNA-Isolation einen pH-Wert von \n4,5-5,0 haben.",
          "critical": "Critical Context",
          "safety": "Safety Context",
          "behavior": "Behavior Context",
          "userImput": {
            "lable": "weight",
            "type": "range",
            "value": [
              {
                "minValue": 1,
                "maxValue": 4
              }
            ],
            "user": "Peter",
            "date": "12.12.12"
          }
        },
        {
          "processStepId": 2,
          "title": "Kräftiges Mischen der Komponenten im Röhrchen bis sich eine Emulsion bildet. ",
          "context": "Context",
          "highlights": "Hinweis: Mischen wie folgt: zur Isolation von a) kleinen DNA Molekülen ( < 100 kb) durch Vortexen, b) mittlere \nDNA Moleküle (10-30 kb) durch leichtes Schütteln oder durch schnelles Kippen, c) große DNA Moleküle ( > 30 \nkb) durch Drehen auf einem Radschüttler. ",
          "critical": "Critical Context",
          "safety": "Safety Context",
          "behavior": "Behavior Context",
          "userImput": {
            "lable": "weight",
            "type": "Checkbox",
            "value": [
              "Red",
              "Blue",
              "Black"
            ],
            "user": "Peter",
            "date": "12.12.12"
          }
        },
        {
          "processStepId": 3,
          "title": "Step title",
          "context": "Zentrifugation des Röhrchens bei 80 % der für die Röhrchen maximal möglichen Geschwindigkeit \n(normalerweise 14 000 g) für 1 min bei Raumtemperatur. Wiederholung der Zentrifugation (für bis \nzu 10 min), wenn sich die beiden Phasen nicht sauber unterscheiden lassen. An der Grenzschicht ist \neine mehr oder weniger deutliche, helle Proteinschicht zu erkennen. ",
          "highlights": "Hinweis: Normalerweise befindet sich die wässrige Phase oben. Bei besonderer Zusammensetzung der \nwässrigen Phase kann allerdings eine Phaseninvertierung stattfinden (siehe oben). Die organische Phase ist \nleicht erkennbar an der leicht gelblichen Farbe, die vom zugegebenen Hydroxychinolin stammt. ",
          "critical": "Critical Context",
          "safety": "Safety Context",
          "behavior": "Behavior Context",
          "userImput": {
            "lable": "weight",
            "type": "radio",
            "value": [
              "Red",
              "Blue",
              "Black"
            ],
            "user": "Peter",
            "date": "12.12.12"
          }
        }
      ]
    },
    {
      "processGroupTitle": "Groupe Title 2",
      "processSteps": [
        {
          "processStepId": 1,
          "title": "Step title",
          "context": "Context",
          "highlights": "Highlights Context",
          "critical": "Critical Context",
          "safety": "Safety Context",
          "behavior": "Behavior Context",
          "userImput": {
            "lable": "weight",
            "type": "range",
            "value": [
              {
                "minValue": 1,
                "maxValue": 4
              }
            ],
            "user": "Peter",
            "date": "12.12.12"
          }
        },
        {
          "processStepId": 2,
          "title": "Step title",
          "context": "Context",
          "highlights": "Highlights Context",
          "critical": "Critical Context",
          "safety": "Safety Context",
          "behavior": "Behavior Context",
          "userImput": {
            "lable": "weight",
            "type": "Checkbox",
            "value": [
              "Red",
              "Blue",
              "Black"
            ],
            "user": "Peter",
            "date": "12.12.12"
          }
        },
        {
          "processStepId": 3,
          "title": "Step title",
          "context": "Context",
          "highlights": "Highlights Context",
          "critical": "Critical Context",
          "safety": "Safety Context",
          "behavior": "Behavior Context",
          "userImput": {
            "lable": "weight",
            "type": "radio",
            "value": [
              "Red",
              "Blue",
              "Black"
            ],
            "user": "Peter",
            "date": "12.12.12"
          }
        }
      ]
    }
  ]
}

    // Public API here
    return {
      getDummy: function () {
        return dummy;
      }
    };
  });
