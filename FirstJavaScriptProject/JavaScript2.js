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
    document.write("<br />" + arrays[i]);
}
