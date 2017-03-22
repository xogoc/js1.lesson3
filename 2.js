function numbers(start, end) {
    var even = " - четное число";
    var odd = " - нечетное число";
    do {
        if(start == 0) {
            console.log(start + " - это ноль");
        }
        else {
            console.log(start + (((start % 2) == 0) ? even : odd));
        }
    } while(start++ < end);
}

numbers(0,10);
