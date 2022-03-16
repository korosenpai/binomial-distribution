<template>
  <div class="binomial-distribution-explanation">
    <h1>Da chi dovresti comprare?</h1>

    <p>
      Il venditore 1, pur avendo il 90% di recensioni positive, ha talmente poche recensioni che non si può ritenere affidabile quel risultato <br>
      In effetti, guardando la distribuzione, la probabilità di avere 90% di soddisfazioni è quasi uguale a quella di avere ne 50%.  
    </p>

    <p>
      Anche la distribuzione del venditore 2 oscilla molto, <br>
      l'intervallo di valori ugualmente plausiibili della percentuale di giudizi positivi è compreso tra il 50% e l'80%.
    </p>

    <p>
      Sicuramente quindi il venditore 3 sarà il piu affidabile. <br>
      Anche se infatti ha un percentuale di giudizi positivi minore del venditore 1 abbiamo piu recensioni che ci fanno pensare che <br>
      il valore vero (che nessuno conosce) di soddisfazione oscillerà attorno all 80%.
    </p>

    <p>
      Per massimizzare la probabilità di ricevere un'esperienza positiva di shopping online <br>
      ci converrebbe quindi andare sul sicuro e comprare dal venditore 3.
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
    margin: 0 30px 30px 60px;
}


</style>