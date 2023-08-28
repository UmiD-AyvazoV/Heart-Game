window.addEventListener("load", () => {
  const laugh = new Audio("sound/laugh.mp3");
  const punch = new Audio("sound/punch.wav");
  const rhodesmas = new Audio("sound/rhodesmas.mp3");
  const gameSong = new Audio("sound/game.mp3");

  const games = document.querySelectorAll(".games div");

  games.forEach((game) => {
    game.addEventListener("click", () => {
      if (game.classList.contains("active")) {
        rhodesmas.play();
        let coins = Number(coin.innerText);
        coin.innerText = coins + 1;
        Clear();
      } else {
        punch.play();
        let hearts = Number(heart.innerText);
        heart.innerText = hearts - 1;
        if (hearts - 1 <= 0) {
          laugh.play();
          open("index.html", "_parent");
          infoModal.style.left = "50%";
        }
      }
    });
  });

  function RandomIndex(start, end) {
    return Math.floor(start - Math.random() * (start - end));
  }

  function Clear(){
    games.forEach( game => game.classList.remove('active'));
  }

  setInterval(() => {
    Clear();
    let index = RandomIndex(0, games.length);
    games[index].classList.add("active");
  }, 1500);

  btn.addEventListener("click", () => {
    infoModal.style.left = "-100%";
    gameSong.play();
  });

  form.addEventListener("submit", () => {
    let name = inputName.value || 'Guest';
    let city = inputCity.value || '*****';
    userName.innerText = name;
    userCity.innerText = city;
  });
});