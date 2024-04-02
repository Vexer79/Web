(function (global) {
    const difficulty = document.getElementById("difficulty");
    const color = document.getElementById("color");
    const menu = document.getElementById("menu");
    const game = document.getElementById("game");
    const scoreField = document.getElementById("score");
    let timer = 0;
    let score = 0;
    const addScore = function () {
        score++;
        scoreField.textContent = score;
    };
    document.getElementById("start").addEventListener("click", function (event) {
        if (difficulty.value && color.value) {
            const player = document.getElementById("player");
            menu.style.display = "none";
            game.style.display = "block";
            player.style.display = "block";
            player.style.backgroundColor = color.value;
            player.addEventListener("click", addScore);
            setTimeout(function () {
                if (!alert("my text here")) {
                    menu.style.display = "block";
                    game.style.display = "none";
                    player.style.display = "none";
                    score = 0;
                    scoreField.textContent = score;
                    player.removeEventListener("click", addScore, true);
                }
            }, 10000);
        }
    });
})(window);
