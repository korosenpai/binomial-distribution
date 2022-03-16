# spiegazione della formula
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
* media -> situata al centro della distribuzione -> $\mu =$ $np$
* varianza -> $\sigma^2 =$ $np (1 - p)$
* deviazione standard -> $\sigma = \sqrt{varianza} = \sqrt{np(1 - p)}$

La media descrive sinteticamente un insieme di dati, e comunemente viene utilizzata la media aritmetica
La varianza e la deviazione standard misurano la dispersione dei valori attorno al valore medio. Piu grande è minore è la precisione della media

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