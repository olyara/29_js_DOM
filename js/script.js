// 1. Создать страницу, которая выводит нумерованный список песен:
let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];
let list = document.createElement("ol");
for (let element of playList) {
  let newLi = document.createElement("li");
  newLi.innerText = `${element.author} - ${element.song}`;
  list.appendChild(newLi);
}
// document.body.appendChild(list);

// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

document.getElementById("open").onclick = function () {
  document.getElementById("modal").style.display = "block";
};

document.getElementById("close").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
let mainer = document.getElementById("mainer");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let switcher = document.getElementById("switcher");

switcher.onclick = function () {
  if (
    red.style.backgroundColor === "" ||
    red.style.backgroundColor === "#ccc"
  ) {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "#ccc";
    green.style.backgroundColor = "#ccc";
  } else if (red.style.backgroundColor === "red") {
    red.style.backgroundColor = "#ccc";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "#ccc";
  } else if (yellow.style.backgroundColor === "yellow") {
    yellow.style.backgroundColor = "#ccc";
    green.style.backgroundColor = "green";
  } else if (green.style.backgroundColor === "green") {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "#ccc";
    green.style.backgroundColor = "#ccc";
  }
};
