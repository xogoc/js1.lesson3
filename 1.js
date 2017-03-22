function isPrime(number) {
    if(number == 2) return true;
    if(((number % 2) == 0) || (number < 2)) return false;
    for(var i=3;i<=Math.ceil(Math.sqrt(number));i+=2) {
        if((number % i) == 0) return false;
    }
    return true;
}
function primeNumbers(start, end) {
    while(start <= end) {
        if(isPrime(start)) console.log(start);
        start++;
    }
}

primeNumbers(0,100);