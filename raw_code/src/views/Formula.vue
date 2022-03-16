<template>
    <!-- <h1>formula</h1> -->
    <div class="formula">
        <div class="formulas">
            <h1>formule</h1>
            <img class="white-box formula-img" src="../assets/formula/given_k.png" alt="formula of a specific k">
            <img class="white-box formula-img" src="../assets/formula/get_all_values.png" alt="formula to get all possible values">
            <img class="white-box formula-img" src="../assets/formula/mean_variance.png" alt="how to calulate mean, variance and standard variance">
        </div>

        <div class="params">
            <h1>parametri</h1>
            <img class="white-box formula-img" src="../assets/formula/parameters.png" alt="function parameters">
            <img class="white-box formula-img" src="../assets/formula/combination.png" alt="n choose k formula">
        </div>

    </div>
    <EsitoTiroMoneta />
</template>

<script>
import EsitoTiroMoneta from '@/components/EsitoTiroMoneta.vue'

export default {
    components: { EsitoTiroMoneta },
    mounted() {
        window.scrollTo(0, 0)
    } 

}
</script>

<style scoped>
.formula {
  display: flex;
  flex-direction: row;

  height: 100%;
}

.formula-img {
    padding: 10px;
    width: 50vh;
}

@media only screen and (max-width: 750px) {
    .formula {
      display: flex;
      flex-direction: column;
    }

    .params, .formulas {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .formula-img {
        width: 50%;
    }
}
</style>