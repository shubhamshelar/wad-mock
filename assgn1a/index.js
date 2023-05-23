let btn = document.getElementById("btn")
let table = document.getElementById("table")
btn.addEventListener("click", () => {
    console.log("called")
    table.innerHTML +=
        "<tr><td>3</td><td>Michael Johnson</td><td>92</td><td>88</td><td>95</td></tr>";
})