<template>
  <div class="binomial-distribution-explanation">
    <h1>Problema dei venditori</h1>
    
        
    <p>Riprendendo l'esempio di prima sui venditori, cerchiamo di capire ora da quale venditore ci converrebbe comprare.</p>

    <p>
      Possiamo vedere i venditori come distributori di esperienze, positive o negative, e ognuno avente una qualche probabilità implicita <br>
      costante di dare una buona esperienza, che chiamiamo 'tasso di successo' p. <br>
      La sfida è che noi non sappiamo il valore preciso di p e dobbiamo capirlo in qualche modo  dai dati a disposizione.
    </p>

    <p>Ipotizzando che la distribuzione binomiale descriva correttamente il fenomeno è possibile <br>rappresentare graficamente tutti i valori plausibili della percentuale di recensioni positive.</p>

    <p>Nel grafico: <br>
        asse delle x: percentuale di recensioni positive <br>
        asse delle y: probabilità di ottenere quella percentuale di recensioni positive (approssimato per semplicità con la Distribuzione Normale)</p>
  </div>
</template>

<style scoped>
.binomial-distribution-explanation {
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

a {
  color: #eee;
}

</style>