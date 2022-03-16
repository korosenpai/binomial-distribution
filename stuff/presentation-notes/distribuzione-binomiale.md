# Probabilità di una probabilità
---
## Problematica
Stai comprando un libro online, e vedi tre venditori differenti.
Tutti offrono la stessa cosa a piu o meno lo stesso prezzo.

* il primo ha il 90% di recensioni positive, ma solo 10 recensioni [1]
* il secondo ha il 80% di recensioni positive, e 200 recensioni [2]
* il terzo ha ha il 75% di recensioni positive, e 30 recensioni [3]

Da chi dovresti comprare?

In generale le persone quando vedono piu dati si sentono più tranquilli, mentre vedendone di meno si sentono inquieti.
Ma quale è il metodo razionale per capire quale è l'affare piu sicuro?


## introduzione alla distribuzione binomiale
Per poter rispondere a questa domanda in modo scientifico utilizzeremo la distribuzione binomiale.
La distribuzione binomiale serve per calcolare la probabilità di avere x successi in n prove indipendenti.
Per evento indipendente intendiamo che la probabilità che tale prova abbia successo o meno non venga influenzata dalla prova precedente e non abbia a sua volta influenza sulla prova successiva.

In sostanza, una variabile o processo può essere definito binomiale se rispetta tutti i seguenti criteri:

-   il risultato di ogni evento può essere considerato di due sole tipologie: positivo o negativo, successo o fallimento.
-   ciascun evento è indipendente da tutti gli altri possibili
-   la probabilità di successo o fallimento di ogni evento è costante

Nell'esempio di prima n sarebbe il numero di recensioni indipendenti (fatte da persone diverse) e p la probabilità che essi risultino positive.



## Probabilità di probabilità
Cerchiamo di capire esattamente quale è la situazione e cosa vogliamo ottimizzare.

Possiamo vedere i venditori come distributori di esperienze, positive o negative, e ognuno avente una qualche probabilità implicita costante di dare una buona esperienza. Questa probabilità la chiameremo 'tasso di successo' $p$ .
La sfida è che noi non sappiamo il vero valore di $p$.

Quando vediamo il rating di [1] con $\frac{10}{10}$ questo non vuol dire che $p$ sia $1$, in quanto potrebbe benissimo essere qualcosa come $0.95$

Facciamo un piccolo esperimento.
Prendiamo un numero casuale compreso tra [0, 1] e se esso è minore di $0.95$ registriamo un esperienza positiva, registriamo invece un esperienza negativa se il numero è maggiore di $0.95$. Facciamolo per dieci volte, altre dieci volte, e ancora e ancora per capire più o meno quanta è la percentuale di recensioni $\frac{10}{10}$ di un venditore con $p = 0.95$. Questa percentuale ammonta a $60\%$, ed è quindi perfettamente possibile che  il $p$ di [1] possa essere $0.95$

Il nostro obiettivo è massimizzare la nostra probabilità di avere un'esperienza positiva, nonostante noi non sappiamo mai il vero valore di $p$.

Abbiamo quindi diversi possibili $p$ per ogni venditore, che vanno da $0$ a $1$.
Dobbiamo perciò trovare per ogni valore di $p$, la probabilità che si possa verificare. Quasi una probabilità di probabilità.

Diversamente dagli esempi del lancio di una moneta o di un dado, dove è nota una percentuale di successo ($0.5$ nel lancio della moneta e $\frac{1}{6}$ nel tiro dei dadi), quella che abbiamo noi è un' incertezza proprio sulla nostra percentuale di successo.

### calcolare la distribuzione
Riprendendo l'esempio dei venditori, se ipoteticamente sapessimo il vero $p$ di un venditore (diciamo $0.95$), come calcoleresti la probabilità di vedere $\frac{10}{10}$ recensioni positive?

Abbiamo fatto prima un esperimento simile a questo con una simulazione che genera delle possibili recensioni. Con un pò di programmazione potresti farlo molte volte, e con questi dati costruire un grafico.
Potremmo anche semplicemente provare con 50 recensioni e vedere quale è la probabilità che $\frac{48}{50}$ siano positive.

Intendendo come successi le esperienze positive, possiamo usare una [[formula-binomiale |formula]]:
> $P(48$ successi, $2$ fallimenti | $p = 0.95)$ = $\binom{50}{48} \times 0.95^{48} \times (1 - 0.95)^2 = 0.26$ 

* $\binom{50}{48}$ è la combinazione totale dei casi dove si ha $\frac{48}{50}$ successi -> $1124$
* $0.95^{48} \times (1 - 0.95)^2$ è la probabilità che esca un certo risultato

Questa è una distribuzione binomiale, una delle piu importanti distribuzioni in statistica.
Si usa ogni volta che occorre un evento casuale, come l'esito di un lancio di una moneta, che ripetiamo un numero $n$ di volte, e quello che vogliamo sapere è la probabilità che ogni evento ha di verificarsi o non verificarsi.

> $P(n, p)$

Nel nostro caso questa formumla ci da la probabilità di vedere ogni dato, dato un valore di successo assunto, che alla fine ci porterà alla probabilità di successo.

[[visualizzando-il-grafico |Possiamo anche osservare come cambiano i valori in base ai parametri.]]

Ma cosa ci facciamo di questo grafico? il nostro obiettivo rimane sempre il trovare la probabilità di avere una buona esperienza con il venditore.

Possiamo quindi pensare che il $p$  della probabilità di avere $\frac{48}{50}$ recensioni positive è $95\% \le p \le 96\%$, dato che nel grafico la probabilità che capitino esattamente 48 successi si massimizza in questi casi (con il $26\%$ di possibilità di accadere).





### Nella vita reale
Va anche precisato che questo problema è rilevante in molte situazioni reali (come vedremo dopo), dove occorre giudicare un processo randomico con dati limitati.

Diciamo che in una fabbrica di macchine $\frac{2}{100}$ escono con qualche problema. Quanta è la percentuale di macchine difettate che uscirebbero su $10^6$ macchine?
FINIRE