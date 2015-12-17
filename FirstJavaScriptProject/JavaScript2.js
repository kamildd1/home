alert((function() {
    return arguments[0] + arguments[1];
})(1, 2));

//tablice
var array = [];

// array.name 
array["name"] = 1;
array[2] = "second";
array[3] = "four";

//
var arrays = ["1", "2", "3"];

//Pętla for 
for (var i in arrays) {
    if (arrays.hasOwnProperty(i)) {
        document.write("<br />" + arrays[i]);
    }
//Pętla while
    var i = 0;
    while (i < arrays.length) {
        document.write("<br />" + arrays[i]);
        i++;
    }
//Pętla do while
    do {
        document.write("<br />" + arrays[i]);
    } while (i < arrays.length)

}
