<template>
  <Intro />

  <div class="distribution">
    <div class="distribution-chartbox white-box">
      <canvas id="sellers-chart"></canvas>

    </div>


  </div>

  <Conclusions />
</template>

<script>
import { range } from "@/functions"
import Intro from "@/components/SellerProblem/ProblemIntro.vue"
import Conclusions from "@/components/SellerProblem/ProblemConclusions.vue"

const vend1 = require("@/assets/data/sellers/json/vend1.json")
const vend2 = require("@/assets/data/sellers/json/vend2.json")
const vend3 = require("@/assets/data/sellers/json/vend3.json")

const labels = range(0, 100)

// setup
const sellersData = {
    labels: labels,
    datasets: [
    {
        label: 'venditore 1',
        // data: [18, 12, 6, 9, 12, 3, 9,],
        data: vend1.y,
        backgroundColor: [
        'rgba(56, 161, 105, 0.2)',
        ],
        borderColor: 'rgba(56, 161, 105, 1)',
        fill: true,
        tension: 0.3
    },
    {
        label: 'venditore 2',
        // data: [18, 12, 6, 9, 12, 3, 9,],
        data: vend2.y,
        backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        ],
        borderColor: 'rgba(255, 26, 104, 1)',
        fill: true,
        tension: 0.3
    },
    {
        label: 'venditore 3',
        // data: [18, 12, 6, 9, 12, 3, 9,],
        data: vend3.y,
        backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: true,
        tension: 0.3
    },]
}


// config 
const sellersConfig = {
    type: 'line',
    data: sellersData,
    options: {

      scales: {
          y: {
            beginAtZero: true,
                
          }
      }
    }
}

export default {
  methods: {
  },
  components: {
    Intro,
    Conclusions
  },
  
  data() {
    return {
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.schoolGradesChart = new Chart(document.getElementById('sellers-chart'),sellersConfig)
  }
}
</script>

<style scoped>

.separator {
  width: 80%;
  height: 2px;
  background-color: white;
  border-radius: 50px;

  margin: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.distribution {
  display: flex;
  flex-direction: row;

  margin: 20px;
  padding: 20px;
  height: 100%;
}

.distribution-chartbox {
  width: 50vmax;
  height: 60vh;
  padding: 20px;
  /* border: solid 3px var(--sidebar-bg-color); */
  /* background-color: #91c1c3; */
}


/* @media only screen and (max-width: 750px) {

    .distribution {
      display: flex;
      flex-direction: column;
    }

} */


</style>