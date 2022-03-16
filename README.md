# Presentazione probabilità applicata a temi di carattere sociale
Sito web -> https://korosenpai.github.io/binomial-distribution/
SIto Istat -> http://dati.istat.it/

## indice
---
* [introduzione](#problematica)
* [[README#introduzione alla distribuzione binomiale |Introduzione alla distribuzione binomiale]]
* [[README#aspetti matematici|Aspetti matematici]]
* [[README#esito di un tiro di una moneta |esito tiro di  una moneta]]
* [[README#Giocando con i parametri| Giocando con i parametri]]
* [[README#Problema dei venditori |problema dei venditori]]
* [[README#Da chi dovresti comprare |da chi dovresti comprare?]]
* [[README#Studiare aiuta a trovare lavoro |studiare aiuta a trovare lavoro?]]
* [[README#Interpretazione dati |interpretazione dei dati]]


# Probabilità di una probabilità

## Introduzione
---
Stai comprando un libro online, e vedi tre venditori differenti.
Tutti offrono la stessa cosa a piu o meno lo stesso prezzo.

* il primo ha il 90% di recensioni positive, ma solo 10 recensioni [1]
* il secondo ha ha il 75% di recensioni positive, e 30 recensioni [2]
* il terzo ha il 80% di recensioni positive, e 200 recensioni [3]

Da chi dovresti comprare?

In generale le persone quando vedono piu dati si sentono più tranquille, mentre vedendone di meno si sentono inquiete.
Ma quale è il metodo razionale per capire quale è l'affare piu sicuro?


## introduzione alla distribuzione binomiale
---
Per poter rispondere a questa domanda in modo scientifico utilizzeremo la distribuzione binomiale.
La distribuzione binomiale serve per calcolare la probabilità di avere x successi in n prove indipendenti.
Per evento indipendente intendiamo che la probabilità che tale prova abbia successo o meno non venga influenzata dalla prova precedente e non abbia a sua volta influenza sulla prova successiva.

In sostanza, una variabile o processo può essere definito binomiale se rispetta tutti i seguenti criteri:

-   il risultato di ogni evento può essere considerato di due sole tipologie: positivo o negativo, successo o fallimento.
-   ciascun evento è indipendente da tutti gli altri possibili
-   la probabilità di successo o fallimento di ogni evento è costante

Nell'esempio di prima n sarebbe il numero di recensioni indipendenti (fatte da persone diverse) e p la probabilità che essi risultino positive.


## aspetti matematici
---
$k$ -> numero di successi
$n$ -> numero di tentativi
$p$ -> probabilità di successo
$P$ -> probabilità che un caso $k$ si verifichi

![binomial formula](./src/formulas/given_k.png)

dove:
![binomial formula](./src/combination.png)

Notiamo:
* $1 - p$ -> probabilità di fallimento
* $n - k$ -> numero di fallimenti

Questa formula però non ci da tutti i casi, ma bensì uno specifico.
Se vogliamo invece tutti i possibili risultati:

![binomial formula](./src/formulas/get_all_values.png)

Inoltre nel grafico è importante evidenziare:
media -> situata al centro della distribuzione -> $\mu =$ $np$
varianza -> $\sigma^2 =$ $np (1 - p)$
deviazione standard -> $\sigma =$ $\sqrt{np(1 - p)}$

## esito di un tiro di una moneta
Proviamo a calcolare tutti i casi che si possono verificare tirando una moneta 2 volte
Consideriamo come un successo il caso in cui esca testa.

Dati
$k = 0, 1, 2$
$n = 2$
$p = 0.5$ -> probabilità che esca testa

usiamo la formula per calcolarci la probabilità che esca ogni valore di k:

$P(2, 0.5, 0) = 0.25$
$P(2, 0.5, 1) = 0.5$
$P(2, 0.5, 2) = 0.25$

Notiamo che in due lanci abbiamo il $50\%$ di probabilità  di vedere testa una volta, e il $25\%$ di vederla $2$ o $0$ volte.


## Giocando con i parametri
---
* Cambiando $p$ -> la distribuzione viene traslata a destra o a sinistra. possiamo quindi dire che la forma della distribuzione dipende da $p$.
* Aumentando $n$ -> il grafico comincia a sembrare sempre di più una normale distribuzione. quando lavoriamo con delle distribuzioni traslate $n$ va aumentato significativamente, tranne se la distribuzione è simmetrica, in quanto non cambierà forma.
* Quando $p = 0.5$ la distribuzione è simmetrica
* Più $p$ è vicino ad 1, maggiore è la probabilità di vedere di vedere tutti successi
* $0 \le p \le 1$ -> $\sum P(n, p) = 1$


## Problema dei venditori
---
Riprendendo l'esempio di prima sui venditori, cerchiamo di capire ora da quale venditore ci converrebbe comprare.

Possiamo vedere i venditori come distributori di esperienze, positive o negative, e ognuno avente una qualche probabilità implicita  
costante di dare una buona esperienza, che chiamiamo 'tasso di successo' p.  
La sfida è che noi non sappiamo il valore preciso di p e dobbiamo capirlo in qualche modo dai dati a disposizione.

Ipotizzando che la distribuzione binomiale descriva correttamente il fenomeno è possibile  
rappresentare graficamente tutti i valori plausibili della percentuale di recensioni positive.

Nel grafico:  
asse delle x: percentuale di recensioni positive  
asse delle y: probabilità di ottenere quella percentuale di recensioni positive (approssimato per semplicità con la Distribuzione Normale)


## Da chi dovresti comprare?
---
Il venditore 1, pur avendo il 90% di recensioni positive, ha talmente poche recensioni che non si può ritenere affidabile quel risultato  
In effetti, guardando la distribuzione, la probabilità di avere 90% di soddisfazioni è quasi uguale a quella di avere ne 50%.

Anche la distribuzione del venditore 2 oscilla molto,  
l'intervallo di valori ugualmente plausiibili della percentuale di giudizi positivi è compreso tra il 50% e l'80%.

Sicuramente quindi il venditore 3 sarà il piu affidabile.  
Anche se infatti ha un percentuale di giudizi positivi minore del venditore 1 abbiamo piu recensioni che ci fanno pensare che  
il valore vero (che nessuno conosce) di soddisfazione oscillerà attorno all 80%.

Per massimizzare la probabilità di ricevere un'esperienza positiva di shopping online  
ci converrebbe quindi andare sul sicuro e comprare dal venditore 3.


## Studiare aiuta a trovare lavoro?
---
Si. In teoria.  
Ma è sempre meglio verificarlo con dei dati.

Applicando la Distribuzione Binomiale è possibile risolvere questi problemi della vita di tutti i giorni.

I seguenti grafici mostrano la percentuale di persone occupate avente un certo titolo di studio (in Italia).

Tutti i dati sono stati presi dal [sito dell'istat](http://dati.istat.it/)


## Interpretazione dati
---
Nei grafici:  
asse delle x: percentuale di persone con quel titolo di studio occupate.  
asse delle y: distribuzione delle probabilità.

La distribuzione della licenza media (linea verde) è concentrata su valori più bassi rispetto alla distribuzione di persone con un diploma (linea rosso)  
o una laurea (linea blu). Questo significa che avere un diploma, e tanto più una laurea aumenta la probabilità di trovare lavoro.  
È da notare come le distribuzioni dei diplomati e dei laureati in parte si sovrappongono.  
Ciò vuol dire che anche se avere una laurea in media ti dà una maggiore possibilità di essere occupati, ci sono casi in cui non è vero.  
Questo può dipendere dal fatto che per alcuni lavori non c'è bisogno di una laurea,  
o dal fatto che con alcune lauree non si trovi facilmente lavoro.

Infatti, anche se in media essere laureato vuol dire riuscire a trovare lavoro facilmente, ci sono comunque delle differenze tra le tipologie di lauree.  
Quelle che ti fanno trovare lavoro più facilmente sono le lauree in medicina (linea arancione) o materie scientifiche (linea gialla).  
Le lauree in letteratura (linea verde) e psicologia (linea celeste) invece hanno una probabilità un pò piu bassa ma ancora abbastanza buona.

In generale però con questi dati possiamo confermare che avere un titolo di studio più alto aumenta la tua probabilità di trovare lavoro.