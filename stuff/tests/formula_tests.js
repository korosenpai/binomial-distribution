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
    for (x = 0; x < n; x++) {
        probabilityOfSuccess.push(_pmf(x, n, p))
    }
  
    return probabilityOfSuccess
}



console.log(P(5, 0.5))