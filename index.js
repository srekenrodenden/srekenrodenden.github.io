function getRes() {
  let width = window.screen.width;
  let height = window.screen.height;
  animate(height);
}

function animate(h) {
  let mainTitle = document.getElementById("main-title");

  let footer = document.getElementById("footer");
  let rect = footer.getBoundingClientRect();
  let xPos = Math.round(rect.top) - 65;

  let i = 1;
  let animate_title = setInterval(function () {
    mainTitle.style.transform = "translateY(" + i + "px)";
    i++;
    if (i >= xPos) {
      clearInterval(animate_title);
    }
  }, 5);

  let ttw = 5 * xPos + 1000;

  setTimeout(() => {
    i = xPos;
    let go_back = setInterval(function () {
      mainTitle.style.transform = "translateY(" + i + "px)";
      i--;
      if (i < 0) {
        clearInterval(go_back);
      }
    }, 5);
  }, ttw);
}

//code donated by chinese government