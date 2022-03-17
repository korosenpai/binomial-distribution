<template>
  <div class="conclusions">
    <h1>Conclusioni</h1>
    <p>
      In questo sito ho mostrato come la distribuzione binomiale possa essere utilizzata efficientemente come strumento <br>
      per prendere decisioni e per capire fenomeni sociali.
    </p>

    <p>
      Normalmente i fenomeni sociali vengono sintetizzati come valori medi (es percentuale studenti che lavorano, percentuale che si laureino). <br>
      Le distribuzioni che ho mostrato fanno vedere che è importante anche considerare l'affidabilità di questi dati, <br>
      cosa data sempre per scontata.
    </p>

    <p>
      Detto questo, spero di aver trasformato quel 4 di prima in almeno un 6-.
    </p>

    <p>
      Per fare questo sito ho impiegato molto più tempo di quanto avrei dovuto (e voluto!), <br>
      ma ho pensato che potesse essere una buona occasione per fare qualcosa di diverso.
    </p>

    <p>
      Tuttavia, sono stanco e non ho più idee.
    </p>

    <p class="end">
      Fine.
    </p>

    <!-- <img src="@/assets/copyright.png" alt=""> -->


  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>

.conclusions {
  width: 100%;
  height: 150vh;
  background-color: var(--sidebar-item-hover);
  /* background-color: var(--sidebar-item-hover); */

  color: white;

  text-align: center;
}
p {
    margin: 0 30px 30px 60px;
    font-size: 18px;
}

.end {
  font-size: 40px;
}

img {
  margin-top: 60px;
  width: 30vh;
  position: absolute;
  right: 10px;
}

</style>