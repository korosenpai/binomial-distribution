// Binomial Distribution
function P(n, p) {
    
    // p = 0.5
    // n = 2
  
    function _productRange(a,b) {
      var product=a,i=a;
    
      while (i++<b) {
        product*=i;
      }
    
      return product;
    }
  
    function _combination(n,k) {
        if (n==k || k==0) {
          return 1;
        } 
        else if (n < k) {
            return 0;
        }
        else {
          k=Math.max(k,n-k);
          return _productRange(k+1,n)/_productRange(1,n-k);
        }
      }
  
    // pmf(successes, number_of_trials, prob_of_success)
    function _pmf(x, n, p) {
      x = eval(x);
      return _combination(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);
    }
  
    probabilityOfSuccess = []
    for (x = 0; x <= n; x++) {
        probabilityOfSuccess.push(_pmf(x, n, p))
    }
  
    return probabilityOfSuccess
}
// console.log(P(binomialN, binomialP))

// get data
// k -> number of successes
// n -> number of trials
// p = Probability of success

const binomialN = 100
const binomialP = 0.50

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => (start + idx).toString())
}


x = range(0, binomialN)

// probabilities = P(binomialN, binomialP)
// console.log(P(binomialN + 1, binomialP))


// change slider start value
pSlider = document.getElementById("pSlider")
pSlider.value = (binomialN * binomialP) // the mean

nSlider = document.getElementById("nSlider")
nSlider.value = x.length

// change the span value at start
spanP = document.getElementById("pValue")
spanN = document.getElementById("nValue")

spanP.innerHTML = binomialP
spanN.innerHTML = binomialN


// setup
// const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const labels = x
const data = {
    labels: labels,
    datasets: [{
        label: 'Binomial Distribution',
        // data: [18, 12, 6, 9, 12, 3, 9,],
        data: P(binomialN, binomialP),
        backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
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
        }
    }
}


  
// render init block
const BDistChart = new Chart(document.getElementById('BinomialDistributionChart'),config)


//slider
function changePValues(p) {
    // console.log(range.value)
    // // console.log(BDistChart.config.data.labels)

    // // slice the labels and adjust to range
    // const rangeValue = labels.slice(0, range.value)
    
    // BDistChart.config.data.labels = rangeValue
    // BDistChart.update()
    
    console.log("new P: ", p.value/100)

    const new_probabilities = P(nSlider.value, p.value/100)
    BDistChart.config.data.datasets[0].data = new_probabilities
    BDistChart.update()

    spanP.innerHTML = p.value/100

}

function changeNValues(n) {
    console.log("new N: ", n.value)

    const new_trials = range(0, n.value)
    const new_probabilities = P(n.value, pSlider.value/100)

    BDistChart.config.data.labels = new_trials
    BDistChart.config.data.datasets[0].data = new_probabilities
    BDistChart.update()

    // spanP.innerHTML = p.value/100
    spanN.innerHTML = n.value
}