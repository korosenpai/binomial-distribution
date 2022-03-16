# intro


x -> percentuale di recensioni positive
y -> probabilità di ottenere quella percentuale di recensioni positive (approssimato per semplicità)


riprendendo l'esempio di prima sui venditori, cerchiamo di capire ora da quale venditore ci converrebbe comprare.

Possiamo vedere i venditori come distributori di esperienze, positive o negative, e ognuno avente una qualche probabilità implicita costante di dare una buona esperienza, che chiamiamo 'tasso di successo' $p$.

La sfida è che noi non sappiamo il valore preciso di $p$.

ipotizzando che la distribuzione binomiale descriva correttamente il fenomeno è possibile rappresentare graficamente tutti i valori plausibili della percentuale di recensioni positive.


# interpretazioni dati
---
[1] ha solo 10 recensioni e il valore finale è molto incerto
[2] numero di giudizi troppo basso e incerto
[3] numero di giudizi tale che anche se il numero di recensioni positive è piu basso, si puo essere piu fiduciosi che il valore vero sia vicino a quel valore osservato

[1] pur avendo 90% di recensioni positive, le recensioni sono talmente poche da non permettere di ritenere affidabile quel risultato. In effetti, guardando la distribuzione, la probabilità di avere 90% di soddisfazioni è quasi uguale a quella di avere ne 50%.  

Anche la distribuzione [2] oscilla molto,  l'intervallo di valori ugualmente plausiibili è compreso tra 50% e 80%

Sicuramente quindi il [3] sarà il piu affidabile. Anche se infatti ha un percentuale di valori minori di [1] abbiamo piu recensioni che ci fanno pensare che il valore vero (che nessuno conosce) oscillerà attorno all 80%

Per massimizzare la probabilità di ricevere un'esperzienza positiva di shopping online ci converrebbe quindi andare sul sicuro e comprare da [3] 