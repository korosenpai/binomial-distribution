<template>
  <div class="binomial-distribution-explanation">
    <h1>Interpretazione dati</h1>
    
    <p>Nei grafici: <br>
        asse delle x: percentuale di persone con quel titolo di studio occupate. <br>
        asse delle y: distribuzione delle probabilità.</p>
        
    <p>
      La distribuzione della licenza media (linea verde) è concentrata su valori più bassi rispetto alla distribuzione di persone con un diploma (linea rosso) <br>
      o una laurea (linea blu). Questo significa che avere un diploma, e tanto più una laurea aumenta la probabilità di trovare lavoro. <br>
      È da notare come le distribuzioni dei diplomati e dei laureati in parte si sovrappongono. <br>
      Ciò vuol dire che  anche se avere una laurea in media ti dà una maggiore possibilità di essere occupati, ci sono casi in cui non è vero. <br>
      Questo può dipendere dal fatto che per alcuni lavori non c'è bisogno di una laurea, <br>
      o dal fatto che con alcune lauree non si trovi facilmente lavoro.
    </p>

    <p>
      Infatti, anche se in media essere laureato vuol dire riuscire a trovare lavoro facilmente, ci sono comunque delle differenze tra le tipologie di lauree. <br>
      Quelle che ti fanno trovare lavoro più facilmente sono le lauree in medicina (linea arancione) o materie scientifiche (linea gialla). <br>
      Le lauree in letteratura (linea verde) e psicologia (linea celeste) invece hanno una probabilità un pò piu bassa ma ancora abbastanza buona.
    </p>

    <p>
      In generale però con questi dati possiamo confermare che avere un titolo di studio più alto aumenta la tua probabilità di trovare lavoro.
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