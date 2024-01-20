function getRes() {
    let width = window.screen.width;
    let height = window.screen.height;
    console.log("h: " + height + " w: " + width);
    animate(height);
}

function animate(h) {
    let mainTitle = document.getElementById("main-title");
    //h+=200;
    console.log("h: " + h);
    mainTitle.style.transform = "translateY("+ h +"px)";
    mainTitle.style.transform = "translateY(0)";
}