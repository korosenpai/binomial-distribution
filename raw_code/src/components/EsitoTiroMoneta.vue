<template>
  <div class="lancio-moneta">
    <h1>Esito di un tiro di una moneta</h1>

    <p>Proviamo a calcolare tutti i casi che si possono verificare tirando una moneta 2 volte.
        <br>Consideriamo come un successo il caso in cui esca testa.</p>
    <div class="problema">
        <div class="dati">
            <p>Dati: <br>k = 0, 1, 2 (possibili vittorie)<br>n = 2 (numero di lanci)<br>p = 0.5 (probabilità di avere testa)</p>
        </div>

        <div class="calcolo">
            <p>Usiamo la funzione P(n, p, k) per calcolarci <br>la probabilità che esca ogni valore di k:<br>
                <i> P(2, 0.5, 0) = 0.25 <br>P(2, 0.5, 1) = 0.5 <br>P(2, 0.5, 2) = 0.25 </i></p>
        </div>
    </div>

    <p>Notiamo che in due lanci abbiamo il 50% di probabilità  di vedere testa una volta, e il 25% di vederla 2 o 0 volte.</p>

    
  </div>
</template>

<style scoped>
.lancio-moneta {
  width: 100%;
  margin-top: 60px;
  padding: 40px 0 0 0;
  background-color: var(--sidebar-item-hover);
  /* background-color: var(--sidebar-item-hover); */

  color: white;

  text-align: center;
  font-size: 16px;
}
.problema {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;

}
p, h1 {
    margin: 0 60px 60px 60px;
}

@media only screen and (max-width: 750px) {
    .problema {
        flex-direction: column;
    }
}
</style>