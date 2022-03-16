<template>
  <h1 class="title">Il dilemma dell'acquirente</h1>
  <div class="problem">
    <img src="@/assets/online_shopping.png" alt="">
    <div class="intro white-box">
        <p>Stai comprando qualcosa online, e vedi tre venditori differenti. <br>
            Tutti offrono la stessa cosa a più o meno lo stesso prezzo.</p>
        <p class="dati">[1] Il primo ha il 90% di recensioni positive, e 10 recensioni <br>
            [2] Il secondo ha ha il 75% di recensioni positive, e 30 recensioni <br>
            [3] Il terzo ha il 80% di recensioni positive, e 200 recensioni </p>
        <p>Da chi dovresti comprare?</p>
        <p>In generale le persone quando vedono più recensioni si sentono più tranquille, mentre vedendone di meno si sentono inquiete. <br>
            Ma quale è il metodo razionale per capire quale è l'affare piu sicuro?</p>
    </div>
  </div>

  <IntroduzioneDistribuzione />

</template>

<script>
import IntroduzioneDistribuzione from '@/components/IntroduzioneDistribuzione.vue'

export default {
  components: {
      IntroduzioneDistribuzione
  },
  mounted() {
    window.scrollTo(0, 0)
  } 
}
</script>

<style scoped>
.problem {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 0 60px;
}
.title {
  /* margin-top: 30px; */
  margin: 20px;
  font-weight: bold;
  font-size: 8vh;
}

.intro {
  /* margin: 0 65px 65px 65px; */
  padding: 20px;
}

p {
  margin: 0 0 20px 0;
  font-size: 18px;
}

img {
    margin-bottom: 20px;
}

.dati {
    padding: 5px;
    line-height: 1.5;
}

@media only screen and (max-width: 750px) {
    .problem {
        flex-direction: column;
    }
    .title {
      font-size: 6vh;
    }
}
</style>