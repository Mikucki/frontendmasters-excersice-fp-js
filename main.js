
let arr = function(a, b, c) {
    let arr = Array.from(arguments)
    arr.push("20 yo")
    return arr.join(" ")
}

arr("Hi", "There", "I'm", "Piotr");



//change into ES6


// var increment = function(n){ return n + 1; };

// var square = function(n){ return n*n; };

// var doMathSoIDontHaveTo = function(n, func){ return func(n); };

// doMathSoIDontHaveTo(5, square);

// doMathSoIDontHaveTo(4, increment);


let increment =  function(n) {
     return n++; };

let square = function(n) {
     return n * n; };

let doMathSoIDontHaveTo = function(n, func) {
    return func(n);
}

doMathSoIDontHaveTo(5, square);

doMathSoIDontHaveTo(4, increment);




//redu                      ce 