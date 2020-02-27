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

const stadium = document.getElementById("stadium");

//prettier-ignore
const map=[
["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],
["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X"],
["X"," "," ","Y","X","X","X"," "," "," "," ","Y"," ","X"," ","X"," ","X"," ","X"," "," "," "," "," "," "," "," "," ","X"],
["X"," "," ","Y"," "," "," "," "," "," "," ","Y"," "," "," "," "," "," "," "," "," ","X"," "," ","Y","Y","Y","Y","Y","X"],
["X"," "," ","Y"," "," "," "," "," "," "," ","Y"," "," "," "," "," "," "," "," "," ","X"," "," ","Y","Y","Y","Y","Y","X"],
["X"," ","Y","X"," ","X"," ","X"," "," "," ","Y"," "," "," "," "," "," "," "," "," ","X"," "," ","Y","Y","Y","Y","Y","X"],
["X"," ","Y"," "," "," "," "," "," ","X","X","X","X"," "," ","X","X","X"," "," "," ","X"," "," ","Y","Y","Y","Y","Y","X"],
["X"," ","Y"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X","X"," ","X"," "," "," "," "," "," "," ","X"],
["X"," ","Y"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X"],
["X"," ","Y"," ","X"," ","X"," ","X"," "," ","Y","Y","X","X","X","X"," "," "," "," "," ","Y","X","Y","X","X"," "," ","X"],
["X"," ","Y"," "," "," "," "," "," "," "," ","Y"," ","X"," "," ","X"," "," "," "," "," ","Y"," "," "," ","Y"," "," ","X"],
["X"," ","Y"," "," "," "," "," "," "," "," ","X"," ","Y"," "," ","Y"," "," "," "," "," ","Y"," "," "," ","Y"," "," ","X"],
["X"," ","Y"," "," "," "," "," "," "," "," ","X"," ","X"," "," ","X"," "," "," "," "," ","Y"," "," "," ","Y"," "," ","X"],
["X"," ","X","X"," ","X"," ","X","X"," "," ","X","X","X","X","X","X"," "," "," "," "," ","Y","Y","Y","Y","Y"," "," ","X"],
["X"," "," "," "," "," "," "," "," "," "," ","Y"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X"],
["X"," "," "," "," "," "," "," "," "," "," "," ","Y","Y"," "," "," "," ","X"," ","X"," ","X"," ","X"," "," "," "," ","X"],
["X"," "," "," "," "," "," "," "," "," "," "," "," "," ","Y"," "," ","Y"," "," "," "," "," "," "," "," "," "," "," ","X"],
["X"," "," "," ","X"," ","X"," ","X"," ","X"," "," "," "," ","X","Y","X"," "," "," "," "," "," "," "," "," "," "," ","X"],
["X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X"],
["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"]
];

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
    } else if (colm === "Y") {
      const blockBroken = document.createElement("div");
      blockBroken.classList.add("blockBroken");
      blockBroken.style.setProperty("--yblockBroken", rIndex);
      blockBroken.style.setProperty("--xblockBroken", cIndex);
      stadium.appendChild(blockBroken);
    }
  }
}

const doOverlap = (l1, r1, l2, r2) =>
  l1.x > r2.x - 1 || r1.x < l2.x + 1 || l1.y > r2.y - 1 || r1.y < l2.y + 1;

const colition = (x, y) => {
  debugger;
  const width = 18;
  const height = 24;
  const yHeight = y + height;
  const xWidth = x + width;

  for (let rIndex = 0; rIndex < map.length; rIndex++) {
    const row = map[rIndex];

    for (let cIndex = 0; cIndex < row.length; cIndex++) {
      const colm = row[cIndex];

      if (colm !== " ") {
        debugger;
        const blockX = cIndex * width;
        const blockY = rIndex * height;
        const blockXWidth = blockX + width;
        const blockYHeight = blockY + height;
        //   l1 = x, y
        //   r1 = xWidth, yHeight
        //   l2 = blockX, blockY
        //   l2 = blockXWidth, blockYHeight

        const overlap = !doOverlap(
          { x, y },
          { x: xWidth, y: yHeight },
          { x: blockX, y: blockY },
          { x: blockXWidth, y: blockYHeight }
        );
        if (overlap) return true;
      }
    }
  }
  return false;
};

document.body.addEventListener("keydown", event => {
  let newX, newY;
  switch (event.key) {
    case "ArrowUp":
      config.direction = 0;
      newY = config.y - 2;
      debugger;
      if (!colition(config.x, newY)) config.y = newY;
      break;
    case "ArrowDown":
      config.direction = 2;
      newY = config.y + 2;
      if (!colition(config.x, newY)) config.y = newY;
      break;
    case "ArrowLeft":
      config.direction = 1;
      newX = config.x - 2;
      if (!colition(newX, config.y)) config.x = newX;
      break;
    case "ArrowRight":
      config.direction = 3;
      newX = config.x + 2;
      if (!colition(newX, config.y)) config.x = newX;
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
}, 150);
