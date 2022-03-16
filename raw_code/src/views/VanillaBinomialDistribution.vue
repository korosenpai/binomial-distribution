<template>
  <div class="distribution">
    <div class="white-box distribution-chart-box">
      <h1>Distribuzione binomiale semplice</h1>
      <canvas id="distribution-chart"></canvas>

      <div class="separator"></div>

      <div class="sliders">
        
        <div class="slider">
          <p>probabilità di successo</p>
          <input v-model="binomialP" type="range" id="pSlider" min="0" max="100">
        </div>

        <div class="slider">
          <p>tentativi</p>
          <input v-model="binomialN" type="range" id="nSlider" min="0" max="100">
        </div>

      </div>

      <!-- <div class="values">
        <p>valore di P: {{pSlider}}%</p>
        <p>valore di N: {{nSlider}}</p>
      </div> -->

    </div>

    <div class="side-values">
      <div class="white-box values">
          <p>valore di P: {{ binomialP }}%</p>
          <p>valore di N: {{ binomialN }}</p>
      </div>

      <div class="white-box values">
          <p>media: &mu; = {{ mean }}</p>
          <p>varianza: &sigma;<sup>2</sup> = {{ variance }}</p>
          <p>deviazione standard: &sigma; = {{ standardDeviation }}</p>
      </div>

    </div>
  </div>

  <Explanation />
</template>

<script>
import Explanation from '@/components/vanillaDistribution/Explanation.vue'
import { P, range } from '@/functions'

// console.log(P(binomialN, binomialP))

// get data
// k -> number of successes
// n -> number of trials
// p = Probability of success

const binomialN = 100
const binomialP = 0.50

let mean = (binomialN * binomialP).toFixed(2)
let variance = (mean * (1 - binomialP)).toFixed(2)
let standardDeviation = Math.sqrt(variance).toFixed(2)

const x = range(0, binomialN)


// setup
// const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const labels = x
const data = {
    labels: labels,
    datasets: [{
        label: 'distribuzione binomiale semplice',
        data: P(binomialN, binomialP),
        backgroundColor: [
        'rgba(56, 161, 105, 0.2)',
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
        'rgba(56, 161, 105, 1)',
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
    }]
}

// config 
const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true
                
            }
        },
        plugins: {
          legend: {
            display: false
          }
        }
    }
}


export default {
  components: {
    Explanation
    
  },
  
  data() {
    return {
      probability: P(binomialN, binomialP),
      binomialP: binomialP * 100,
      binomialN,
      variance,
      mean,
      standardDeviation

    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.BDistChart = new Chart(document.getElementById('distribution-chart'),config)
  },
  updated() {
    // update graph with slider values
    this.mean = (this.binomialN * this.binomialP/100).toFixed(2)
    this.variance = (this.mean * (1 - this.binomialP/100)).toFixed(2)
    this.standardDeviation = Math.sqrt(this.variance).toFixed(2)

    const new_trials = range(0, this.binomialN)
    const new_probabilities = P(this.binomialN, this.binomialP/100)

    this.BDistChart.config.data.labels = new_trials
    this.BDistChart.config.data.datasets[0].data = new_probabilities
    this.BDistChart.update()
  }

  

}
</script>

<style scoped>

.distribution {
  display: flex;
  flex-direction: row;

  margin-top: 20px;
  height: 100%;
}

.distribution-chart-box {
  width: 50vmax;
  height: 80vh;
  padding: 20px;
  /* border: solid 3px var(--sidebar-bg-color); */
  /* background-color: #91c1c3; */
}

.separator {
  width: 80%;
  height: 2px;
  background-color: var(--bg-color);
  margin: 5px;
}

.sliders {
  display: grid;
  /* flex-direction: row;
  justify-content: center; */
  grid-template-columns: 1fr 1fr;
}

@media only screen and (max-width: 750px) {
    .sliders {
      grid-template-columns: 1fr;
    }

    .distribution {
      display: flex;
      flex-direction: column;
    }
}

.slider {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2px;
}

.slider p, .values p {
  margin: 10px;
  font-size: 2.5vh;
  font-weight: bold;
}

.values {
  height: 20vh;
  padding: 20px;

}

</style>