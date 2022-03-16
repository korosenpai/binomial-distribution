<template>
  <Explanation />

  <div class="distribution">
    <div class="distribution-chartbox white-box">
      <h1>Studiare aiuta a trovare lavoro?</h1>
      <canvas id="school-grades-chart"></canvas>

    </div>

    <div class="side-values">

      <div class="values white-box">
        <h3>Licenza media</h3>
        <p>p: 44.8</p>
      </div>

      <div class="values white-box">
        <h3>Diploma</h3>
        <p>p: 63.58</p>
      </div>

      <div class="values white-box">
        <h3>Laurea</h3>
        <p>p: 78</p>
      </div>
    </div>


  </div>

  <div class="separator"></div>

  <div class="distribution">
    <!-- universita -->
    <div class="distribution-chartbox white-box">
      <h1>Lauree</h1>
      <canvas id="university-degrees-chart"></canvas>

    </div>

    <div class="university-side-values">

      <div class="values white-box">
        <h3>Letteratura</h3>
        <p>p: 61.7</p>
      </div>

      <div class="values white-box">
        <h3>Medico</h3>
        <p>p: 85.6</p>
      </div>

      <div class="values white-box">
        <h3>Psicologia</h3>
        <p>p: 54.5</p>
      </div>

      <div class="values white-box">
        <h3>Scientifico</h3>
        <p>p: 80.5</p>
      </div>
    </div>


  </div>

  <DatiExplanation />
</template>

<script>
import { range } from "@/functions"
import DatiExplanation from "@/components/RendimentoIstruzione/DatiExplanation.vue"
import Explanation from "@/components/RendimentoIstruzione/Explanation.vue"

const middleSchool = require("@/assets/data/school_grades/json/medie.json")
const highSchool = require("@/assets/data/school_grades/json/diploma.json")
const university = require("@/assets/data/school_grades/json/laurea.json")

const literature = require("@/assets/data/university_degrees/json/laurea_lettere.json")
const medical = require("@/assets/data/university_degrees/json/laurea_medico.json")
const psicology = require("@/assets/data/university_degrees/json/laurea_psicologia.json")
const scientific = require("@/assets/data/university_degrees/json/laurea_scientifico.json")

const labels = range(0, 100)

// setup
const schoolGradesData = {
    labels: labels,
    datasets: [
    {
        label: 'licenza media',
        // data: [18, 12, 6, 9, 12, 3, 9,],
        data: middleSchool.y,
        backgroundColor: [
        'rgba(56, 161, 105, 0.2)',
        ],
        borderColor: 'rgba(56, 161, 105, 1)',
        fill: true,
        tension: 0.3
    },
    {
        label: 'diploma',
        // data: [18, 12, 6, 9, 12, 3, 9,],
        data: highSchool.y,
        backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        ],
        borderColor: 'rgba(255, 26, 104, 1)',
        fill: true,
        tension: 0.3
    },
    {
        label: 'laurea',
        // data: [18, 12, 6, 9, 12, 3, 9,],
        data: university.y,
        backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: true,
        tension: 0.3
    },]
}

const universityDegreesData = {
    labels: labels,
    datasets: [
    {
        label: 'letteratura',
        // data: [18, 12, 6, 9, 12, 3, 9,],
        data: literature.y,
        backgroundColor: [
        'rgba(56, 161, 105, 0.2)',
        ],
        borderColor: 'rgba(56, 161, 105, 1)',
        fill: true,
        tension: 0.3
    },
    {
        label: 'medico',
        // data: [18, 12, 6, 9, 12, 3, 9,],
        data: medical.y,
        backgroundColor: [
        'rgba(218, 113, 31, 0.2)',
        ],
        borderColor: 'rgba(218, 113, 31, 1)',
        fill: true,
        tension: 0.3
    },
    {
        label: 'psicologia',
        // data: [18, 12, 6, 9, 12, 3, 9,],
        data: psicology.y,
        backgroundColor: [
        'rgba(37, 185, 250, 0.2)',
        ],
        borderColor: 'rgba(37, 185, 250, 1)',
        fill: true,
        tension: 0.3
    },
    {
        label: 'scientifico',
        // data: [18, 12, 6, 9, 12, 3, 9,],
        data: scientific.y,
        backgroundColor: [
        'rgba(235, 181, 23, 0.2)',
        ],
        borderColor: 'rgba(235, 181, 23, 1)',
        fill: true,
        tension: 0.3
    },]
}


// config 
const schoolGradesConfig = {
    type: 'line',
    data: schoolGradesData,
    options: {

      scales: {
          y: {
            beginAtZero: true,
                
          }
      }
    }
}

const universityDegreesConfig = {
    type: 'line',
    data: universityDegreesData,
    options: {

      scales: {
          y: {
            beginAtZero: true
                
          }
      }
    }
}

export default {
  methods: {
  },
  components: {
    DatiExplanation,
    Explanation
  },
  
  data() {
    return {
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.schoolGradesChart = new Chart(document.getElementById('school-grades-chart'),schoolGradesConfig)
    this.universityDegreesChart = new Chart(document.getElementById('university-degrees-chart'),universityDegreesConfig)
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
  height: 80vh;
  padding: 20px;
  /* border: solid 3px var(--sidebar-bg-color); */
  /* background-color: #91c1c3; */
}

h3 {
  margin: 0;
}

.values {
  height: 20vh;
  padding: 20px;

  line-height: 1.5;

}

.values p {
  margin: 10px;
  font-size: 2.5vh;
  font-weight: bold;
}

.university-side-values {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 60vh;
}

@media only screen and (max-width: 750px) {

    .distribution {
      display: flex;
      flex-direction: column;
    }

}


</style>