//0. arriba
//1.izquierda
//2.abajo
//3. derecha

const config = {
  y: 24,
  x: 18,
  frame: 0,
  direction: 0,
  score: 0,
  lifes: 3,
  powers: [],
  image: "bomberman.png"
};

//prettier-ignore
const map =  [
  ["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X", ],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X",],
  ["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X", ],
];

const stadium = document.getElementById("stadium");

for (let rIndex = 0; rIndex < map.length; rIndex++) {
  const row = map[rIndex];

  for (let cIndex = 0; cIndex < row.length; cIndex++) {
    const colm = row[cIndex];
    if (colm === "X") {
      const block = document.createElement("div");
      block.classList.add("block");
      stadium.appendChild(block);
      block.style.setProperty("--blockY", rIndex);
      block.style.setProperty("--blockX", cIndex);
    }
  }
}

document.body.addEventListener("keydown", event => {
  console.log(event);

  switch (event.key) {
    case "ArrowUp":
      config.y -= 6;
      config.direction = 0;
      break;
    case "ArrowDown":
      config.y += 6;
      config.direction = 2;
      break;
    case "ArrowLeft":
      config.x -= 6;
      config.direction = 1;
      break;
    case "ArrowRight":
      config.x += 6;
      config.direction = 3;
      break;
  }
});

setInterval(() => {
  const player1 = document.getElementById("player1");

  config.frame++;
  if (config.frame > 2) config.frame = 0;

  //Variables declaradas en js
  player1.style.setProperty("--x", config.x);
  player1.style.setProperty("--y", config.y);
  player1.style.setProperty("--frame", config.frame);
  player1.style.setProperty("--direction", config.direction);
}, 250);