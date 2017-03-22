function pyramid(char, rows) {
    var output = "";
    for(var i=0;i<rows;i++) {
        console.log(output+=char);
    }
}
pyramid("x",20);
