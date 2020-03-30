function openNav() {
    document.getElementById("myNav").style.width = "15%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function openTab(tabName, photoName) {
    var i, x, y;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    y = document.getElementsByClassName("column");
    for (i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = "white";
    }
   document.getElementById(photoName).style.backgroundColor = "black";
    document.getElementById(tabName).style.display = "block";
}