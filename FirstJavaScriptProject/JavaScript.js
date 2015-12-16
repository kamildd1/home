function substitute() {
    var alertValue = "Please enter a real value in the text box!";

    // typ zmiennej
    var type = typeof alertValue;

    var myValue = document.getElementById('myTextBox').value;

    var number = 20;

    if (myValue.length === 0) {
        alert(alertValue);
        alert(type);
    }

    // zapis "if" 
    var myResult = (number === 20) ? "true" : "false";
    alert(myResult);

    var myTitle = document.getElementById('title');
    myTitle.innerHTML = myValue;

    var rightNow = new Date();
    var currentHour = rightNow.getHours();

    switch (true) {
        case (currentHour > 8 && currentHour < 12):
            document.write("Good morning");
            break;
        case (currentHour === 12):
            document.write("Lunch time!");
            break;
        case (currentHour > 12):
            document.write("Good afternoon");
            break;
        default:
            document.write("You are hard worker!");
            break;
    }
}