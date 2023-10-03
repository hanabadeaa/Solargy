
let score = 0;

function updateScore() {
  const scoreElement = document.querySelector("#score");
  scoreElement.textContent = score;
}

AFRAME.registerComponent("score-handler", {
  init: function () {
    const el = this.el;

    el.addEventListener("click", function () {
      score += 1;

      updateScore();
    });
  },
});

const entity = document.querySelector("#avatarModel");
entity.setAttribute("score-handler", "");

updateScore();

