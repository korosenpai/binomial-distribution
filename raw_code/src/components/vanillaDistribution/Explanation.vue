<template>
  <div class="binomial-distribution-explanation">
    <h1>Giocando con i parametri</h1>

    <p>Vediamo ora come cambia la distribuzione al variare dei valori di n, p</p>

    <p>
      - dove 0 &le; p &le; 1: &Sigma;P(n, p) = 1 <br>
      - Cambiando p: la distribuzione viene traslata a destra o a sinistra. Possiamo dire che la forma della distribuzione dipende da p. <br>
      - Più p è vicino ad 1, maggiore è la probabilità di vedere solo successi. <br>
      - Aumentando n: il grafico comincia a sembrare sempre di più una Distribuzione Normale, con la classica forma a campana. <br>
      - Quando p = 0.5 la deviazione standard assume il valore massimo. <br>
    </p>

  </div>
</template>

<style scoped>
.binomial-distribution-explanation {
  margin-top: 60px;
  width: 100%;
  background-color: var(--sidebar-item-hover);
  /* background-color: var(--sidebar-item-hover); */

  color: white;

  text-align: center;
}
p {
    margin: 0 60px 20px 60px;
    line-height: 1.5;
}

</style>