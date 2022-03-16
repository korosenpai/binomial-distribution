<template>
  <nav>13/marzo/2022 - VI I</nav>
  <h1 class="title">La Distribuzione Binomiale </h1>

  <div class="intro">
    <p>Lo so cosa starà pensando ora. Oh ma perchè un intero sito? <br>
      Mi lasci in pace, sono molto annoiato e il mio voto verrà influenzato anche dall'originalità.</p>

    <p>Inoltre non l'ho testato a fondo e potrebbero esserci qua e la qualche bug, <br>
      considerando che per la metà del tempo non avevo idea di cosa stavo facendo. <br>
      Che dire, non sono uno statistico.</p>

    <p>Se, dopo questa introduzione, non è ancora andata a mettermi 4, <br>
      troverà qua sotto delle istruzioni per muoversi in giro e utilizzare il sito.</p>

    <p>Ho avuto molti, e dico molti problemi a farlo funzionare più o meno decentemente sul telefono, <br>
      ma consiglio comunque di vedere questo sito dal computer.</p>
    
    <p>In basso a destra vedrà un pulsante che la porterà nella GitHub repository di questo progetto, <br>
      dove si potrànno vedere delle informazioni aggiuntive tra cui il codice del sito (nella cartella 'raw_code'), <br>
      dove si potrà vedere come ho programmato i diversi grafici.</p>
    
    <p>Attraverso l'uso della barra laterale può muoversi fra le diverse sezioni. <br>
      Cliccando su una delle icone verrà aperto il contenuto. <br>
      Se si desidera vedere anche i nomi delle sezioni, <br>
      basterà cliccare su qualsiasi parte vuota della barra ed essa si espanderà.</p>
    
    <p>Importante notare che tutte le sezioni hanno una parte di spiegazione o esempio. <br>
      In alcune sezioni non sarà subito visibile, in quel caso scrolli in basso!</p>


    <p>Detto ciò, so che la grafica non è delle migliori, <br>
      ma per averlo fatto in poco meno di una settimana, <br>
      secondo me ha speranze :)</p>
  </div>

    <!-- <a href="https://www.google.com" target="_blank" class="white-box">
      <i class="fas fa-film"></i>
      presentazione
    </a> -->

  <footer>
    <a href="https://github.com/korosenpai/binomial-distribution" target="_blank" class="white-box">
      <i class="fab fa-github"></i>
      repository
    </a>
  </footer>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  mounted() {
    window.scrollTo(0, 0)
  } 
}
</script>

<style scoped>
nav {
  margin-right: 50px;
  height: 1px;
  width: 90%;
  display: flex;
  justify-content: flex-end;

  font-weight: bold;
}
.title {
  /* margin-top: 0; */
  margin: 0 20px 20px 20px;

  font-weight: bold;
  font-size: 8vh;
}

.intro {
  text-align: center;
  margin: 0 65px 65px 65px;
}

p {
  margin: 0 0 20px 0;
  font-size: 18px;
}

@media only screen and (max-width: 750px) {
    .title {
      font-size: 6vh;
    }
}

footer {
    position: fixed;
    bottom: 10px;
    width: 90%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

footer a {
  padding: 10px;
  text-decoration: none;
  color: var(--sidebar-bg);
}
</style>