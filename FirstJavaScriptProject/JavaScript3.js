//Zmienna globalna
myScope = "global";

// Struktura obiektowa
var structure = {
    status: "Ready",
    resorceFunction: function () {
        document.write("Coś tam");
    },
    table: [
        { locationId: 15, name: "KKK" },
        { locationId: 16, name: "DDD" }
]
};
if (structure.status === "Ready") {
    document.write(structure.table[0].name);
}