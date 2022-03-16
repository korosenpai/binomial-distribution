<template>
  <div class="binomial-distribution-explanation">
    <h1>La distribuzione binomiale</h1>
    
    <p>
      Per poter rispondere a questa domanda in modo scientifico utilizzeremo la distribuzione binomiale. <br>
      La distribuzione binomiale serve per calcolare la probabilità di avere x successi in n prove indipendenti. <br>
      Per evento indipendente intendiamo che la probabilità che tale prova abbia successo o meno non venga influenzata <br>
        dalla prova precedente e non abbia a sua volta influenza sulla prova successiva. <br>
    </p>
    <p>
      In sostanza, una variabile o processo può essere definito binomiale se rispetta tutti i seguenti criteri: <br>
    </p>

    <p class="binomial-criteria">
      -   Il risultato di ogni evento può essere considerato di due sole tipologie: positivo o negativo, successo o fallimento. <br>
      -   Ciascun evento è indipendente da tutti gli altri possibili. <br>
      -   La probabilità di successo o fallimento di ogni evento è costante <br>
    </p>

    <p>
      Nell esempio di prima n sarebbe il numero di recensioni indipendenti (fatte da persone diverse) e p la probabilità che essi risultino positive.

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

.binomial-criteria {
  line-height: 1.5;
}

</style>