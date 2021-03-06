'use strict';

angular.module('methodsioApp')
  .factory('AppDatabase', function (CreateDB) {
    return {
      createStep: function (obj) {
         //
         // post -> create a new entry with id
         //
         // put -> create new entry a _id must be set
         CreateDB.post({step: obj})
            .then(function (response) {
               console.log(response);
             }).catch(function (error) {
               console.warn(error,obj);
             }).finally(function() {
               console.log('finished');
             });
      },
      createDummy:function () {
         CreateDB.put({
            '_id':'dummy',
            "abstract": "**Einer der grundlegenden Prozesse** in der Molekularbiologie ist die Aufreinigung von Nukleinsäuren.Während dieses Prozesses ist es häufig non Nöten, Enzyme oder andere Proteine zu desaktivieren oderzu entfernen, die aus den ursprünglichen Zellextrakten stammen oder die während der Klonierungverwendet wurden. Dieses Entfernen der **Proteine** kann häufig durch einfache Extraktion der wässrigenNukleinsäure-Lösung mit Phenol, Phenol/Chloroform oder Phenol/Chloroform/Isoamylalkoholdurchgeführt werden.Die am weitesten verbreitete Version dieser Aufreinigung besteht aus einer Extraktion mit Phenol/Chloroform (1:1), häufig versetzt mit 0,1 %, Hydroxychinolin, gefolgt von einem oder zwei Aufreini-gungsschritten mit Chloroform. Diese zusätzliche Chloroform-Extraktion entfernt restliches Phenol ausder Lösung, das die Nukleinsäure verunreinigen könnte. ",
            "introduction": "Einer der grundlegenden Prozesse in der Molekularbiologie ist die Aufreinigung von Nukleinsäuren. Während dieses Prozesses ist es häufig non Nöten, Enzyme oder andere Proteine zu desaktivieren oder zu entfernen, die aus den ursprünglichen Zellextrakten stammen oder die während der Klonierung verwendet wurden. Dieses Entfernen der Proteine kann häufig durch einfache Extraktion der wässrigen Nukleinsäure-Lösung mit Phenol, Phenol/Chloroform oder Phenol/Chloroform/Isoamylalkohol durchgeführt werden.Die am weitesten verbreitete Version dieser Aufreinigung besteht aus einer Extraktion mit Phenol/Chloroform (1:1), häufig versetzt mit 0,1 %, Hydroxychinolin, gefolgt von einem oder zwei Aufreini-gungsschritten mit Chloroform. Diese zusätzliche Chloroform-Extraktion entfernt restliches Phenol ausder Lösung, das die Nukleinsäure verunreinigen könnte. Für ein ausführliches Protokoll siehe unten.Hinweis: Eine Deproteinierung ist effizienter, wenn während des Prozesses zwei unterschiedlicheorganische Lösungsmittel verwendet werden.Im Jahre 1956 publizierte Kirby die erste Verwendung von Phenol bei der Aufreinigung vonNukleinsäuren [1]. Seine Idee basierte auf den Veröffentlichungen von Grassmann und Deffner (1953),die zuvor gezeigt hatten, dass man mittels Phenol Proteine aus wässrigen Lösungen isolieren kann [2].In seinem Paper wies Kirby nach, dass die Extraktion von Proteinen aus Säugetier-Gewebsextraktenmittels einer zwei-Phasen-Phenol/Wasser-Mischung bei Raumtemperatur zur Anreicherung der RNA inder wässrigen Phase führt. Die DNA bleibt zusammen mit den Proteinen in der Interphase. Kirby zeigte,dass sich, wenn das reine Wasser durch anionische Salze ersetzt wird, beide Moleküle, RNA wie auchDNA, in der wässrigen Phase finden. In der Nachfolge wurden dann zwar die anionischen Salze in ihrerFunktion, Nukleinsäure von Proteinen freizusetzen, ersetzt durch stark anionische Detergenzien wie SDS,der grundlegende Ansatz aber, der in dieser ersten Publikation veröffentlicht worden war, wurde kaumgeändert und bildet immer noch die Basis der meisten gebräuchlichen Aufreinigungsmethoden.Hinweis: Die Funktion des Phenols während dieses Prozesses ist höchstwahrscheinlich die einesProteinlösungsmittels – die Extraktion der Proteine, die durch Detergenzien von der Nukleinsäuregetrennt wurden.Die Phenolextraktion von Nukleinsäuren ist hocheffizient. Bereits nach zwei oder drei Phenolextraktionenwerden hoch-reine Nukleinsäure-Fraktionen erhalten. Denaturierte Proteine sammeln sich an der Grenzezwischen den beiden Phasen, Fette sammeln sich in der organischen Phase. DNA oder, abhängig vomtatsächlich verwendeten Phenol, Gesamt-Nukleinsäuren reichert sich stark in der wässrigen Phase anund kann leicht von der organischen und der Zwischenphase getrennt werden. Zur Isolation von DNAwird Tris- oder TE-gesättigtes Phenol mit einem pH von etwa 7,8 verwendet. Phenol mit diesem pH-Wertunterdrückt das Abwandern der DNA in die organische Phase und unterscheidet nicht zwischen DNA undRNA, so dass es die gemeinsame Isolation beider Nukleinsäuren erlaubt. Entsprechend wird für dieRNA-Aufreinigung reines Wasser als Lösungsmittel für Phenol verwendet, das damit einen pH-Wert vonetwa 4,8 erhält. Bei diesem pH wird die DNA gezwungen, sich in der organischen und der Protein-Interphase anzureichern, was die DNA-Kontamination der RNA-Isolate deutlich verringert.Gereinigtes, gelöstes Phenol besitzt eine Dichte von 1,07 und bildet deshalb die untere Phase, wenn esmit Wasser oder wässrigen Lösungen gemischt wird. Normalerweise befindet sich die wässrige Phaseoben. Allerdings sind die beiden Phasen manchmal schwer zu trennen oder können unter bestimmtenUmständen sogar invertieren.Hinweis: Die Phenol- und die wässrige Phase können invertieren, wenn Phenol verwendet wird, umNukleinsäure aus Lösungen zu extrahieren, die hohe Konzentrationen an gelösten Stoffen aufweisen(z.B. >0,5 M Salz oder >10 % Zucker).Dieses Problem kann vermieden werden, indem eine 1:1 Mischung aus Phenol und Chloroformverwendet wird, da die höhere Dichte des Chloroforms (1,47) eine klare Unterscheidung und Trennungder beiden Phasen bewirkt. Das Entnehmen der oberen Phase ist dann in den meisten Fällen sehr leichtmöglich. Um ein Schäumen der organischen Phase zu vermeiden, welches das Pipettieren behindert,kann eine kleine Menge Isoamylalkohol zugegeben werden. Weiterhin inhibiert diese Mischung auchvollständig RNAsen und verhindert die Anreicherung von poly(A)-RNA in der Phenolphase.Hinweis: Obwohl reines Phenol Proteine effizient denaturiert, inhibiert es nicht vollständig die RNAseAktivität und dienst als Lösungsmittel für RNA-Moleküle mit langen poly(A)-Schwänzen [3], die somitbei der Präparation verloren gehen können.",
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
        "enviromentConditions": "Phenolische DNA Aufreinigung - Hintergrund und Protokoll > **Hinnweis:** Kontrollieren Sie das Phenol vor Gebrauch! Phenolische Lösungen sollten wasserklar und ungefärbt sein und können für etwa 1 Jahr im Kühlschrank aufbewahrt werden (dunkel und bei konstanter Temperatur). Sollte eine mehr oder weniger deutliche, rötliche oder pinkfarbene Färbung der Lösung zu sehen sein, hat der Oxidationsprozess des Phenols begonnen, und das Phenol wird die Nukleinsäuren während der Isolation angreifen und beschädigen. Verwerfen Sie das Phenol und verwenden sie eine neue Charge!",
        "procedure": [
          {
            "processGroupId":1,
            "processGroupTitle": "Groupe Title 1",
            "processSteps": [
              {
                "processStepId": 1,
                "title": "Step title",
                "context": "Überführen der Probe in ein Reaktionsgefäß. Zugabe von 1 Volumen Phenol/Chloroform oder Phenol/Chloroform/Isoamylalkohol.",
                "highlights": "**Hinweis**: Phenol sollte zur DNA-Isolation einen pH-Wert von 7,5-8,0 und zur RNA-Isolation einen pH-Wert von \n4,5-5,0 haben.",
                "critical": "Critical Context",
                "safety": "Safety Context",
                "behavior": "Behavior Context",
                "userInput": {
                  "lable": "weight",
                  "type": "range",
                  "expectedValue": [
                    {
                      "value" : 2.5,
                      "minValue": 1,
                      "maxValue": 4
                    }
                  ],
                  'value':'',
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
                "userInput": {
                  "lable": "weight",
                  "type": "Checkbox",
                  "expectedValue": [
                    "Red",
                    "Blue",
                    "Black"
                  ],
                  'value':'',
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
                "userInput": {
                  "lable": "weight",
                  "type": "radio",
                  "expectedValue": [
                    "Red",
                    "Blue",
                    "Black"
                  ],
                  'value':'',
                  "user": "Peter",
                  "date": "12.12.12"
                }
              }
            ]
          },
          {
            "processGroupId":2,
            "processGroupTitle": "Groupe Title 2",
            "processSteps": [
              {
                "processStepId": 4,
                "title": "Step title",
                "context": "Context",
                "highlights": "Highlights Context",
                "critical": "Critical Context",
                "safety": "Safety Context",
                "behavior": "Behavior Context",
                "userInput": {
                  "lable": "weight",
                  "type": "range",
                  "expectedValue": [
                    {
                      "value" : 2.5,
                      "minValue": 1,
                      "maxValue": 4
                    }
                  ],
                  'value':'',
                  "user": "Peter",
                  "date": "12.12.12"
                }
              },
              {
                "processStepId": 5,
                "title": "Step title",
                "context": "Context",
                "highlights": "Highlights Context",
                "critical": "Critical Context",
                "safety": "Safety Context",
                "behavior": "Behavior Context",
                "userInput": {
                  "lable": "weight",
                  "type": "Checkbox",
                  "expectedValue": [
                    "Red",
                    "Blue",
                    "Black"
                  ],
                  'value':'',
                  "user": "Peter",
                  "date": "12.12.12"
                }
              },
              {
                "processStepId": 6,
                "title": "Step  asdas title",
                "context": "Context",
                "highlights": "Highlights Context",
                "critical": "Critical Context",
                "safety": "Safety Context",
                "behavior": "Behavior Context",
                "userInput": {
                  "lable": "weight",
                  "type": "radio",
                  "expectedValue": [
                    "Red",
                    "Blue",
                    "Black"
                  ],
                  'value':'',
                  "user": "Peter",
                  "date": "12.12.12"
                }
              }
            ]
          }
        ]
});
      }
    };
  });
