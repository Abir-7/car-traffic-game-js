document.getElementById("start").addEventListener("click", scrollingRoad);

const road = document.getElementById("road");
let value = 0;
let scrollRoadInterval;
let carGridColumn = 3;
let carGridRow = 12;
let mainDiv;
let div;
let div2;
let car2GridRow = 1;
let car3GridRow = 1;
let mainCar = { x: 3, y: 13 };
let car = makeCar();
let car2 = makeCar();
let carInterval;
let carInterval2;

let speed1=100
let speed2=110

let score = 0;
let isCrash = false
const carImage = ["car2.png", "car3.png", "car4.png"];


const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//document.getElementById("car").style.gridColumn = carGridColumn;

function crash() {
  //console.log(carGridColumn === car.x && car3GridRow === car2GridRow);
  if (
    (carGridColumn === car.x && carGridRow === car2GridRow) ||
    (carGridColumn === car2.x && carGridRow === car3GridRow)
  ) {

    isCrash = true
    //console.log("hit");

    clearInterval(scrollRoadInterval);
    clearInterval(carInterval)
    clearInterval(carInterval2);
    carGridColumn = 3;
    carGridRow = 12;
    car2GridRow = 1;
    car3GridRow = 1;
    score = 0;
    speed1=100
    speed2=110

    document.getElementById("intro").style.display = "inline";
  }

  const GameOver = document.createElement("h1");
  GameOver.innerText = "Game Over";
  road.append;
}

function scrollingRoad() {
  isCrash = false
  document.getElementById("score").innerText = score;
  document.getElementById("intro").style.display = "none";
  road.innerHTML = "";
  drawCar();
  drawCar2();
  drawCar3();
  ////console.log("hit");
/////////////////////////////////////////////////
  scrollRoadInterval = setInterval(() => {
    value = value + 220;
    road.style.backgroundPositionY = value + "px";
   
    ////console.log("hit");
  }, 100);
//////////////////////////////////////////////////////
carMoveSpeed1()
function carMoveSpeed1(){
  carInterval2=setInterval(()=>{
    crash();
    if(crash==true){
      //console.log(true)
      clearInterval(carInterval)
      clearInterval(carInterval2)
      return
    }
    car2GridRow++;

    if (car2GridRow > 13) {
      score++;

      clearInterval(carInterval2)

      carMoveSpeed1()


      document.getElementById("score").innerText = score;
      div.remove();
      drawCar2();
      car2GridRow = 1;
    }
    div.style.gridRow = car2GridRow;
  },speed1)

}
carMoveSpeed2()
function carMoveSpeed2(){
  console.log(speed1,speed2)
  carInterval = setInterval(() => {
   
    crash();
    if(crash==true){
      clearInterval(carInterval)
      clearInterval(carInterval2)
      //console.log(true)
      return
    }
    car3GridRow++;
    if (car3GridRow > 13) {
      speed2=speed2-1
      clearInterval(carInterval)
      carMoveSpeed2()
      score++;
      document.getElementById("score").innerText = score;
      div2.remove();
      drawCar3();

      car3GridRow = 1;
    }
   
    div2.style.gridRow = car3GridRow;
  }, speed2);
}
  //////////////////////////////////////////////////////
}

document.addEventListener("keydown", movement);

function movement(e) {
  switch (e.key) {
    case "ArrowRight":
      if (carGridColumn < 6) {
        crash();
        carGridColumn++;

        document.getElementById("car").style.gridColumn = carGridColumn;
      }
      break;

    case "ArrowLeft":
      if (carGridColumn > 2) {
        crash();
        carGridColumn--;

        document.getElementById("car").style.gridColumn = carGridColumn;
      }
      break;

    case "ArrowUp":
      ////console.log("hit");

      if (carGridRow <= 14) {
        crash();
        carGridRow--;
        ////console.log(carGridRow);

        document.getElementById("car").style.gridRow = carGridRow;
      }
      break;

    case "ArrowDown":
      ////console.log("hit");

      if (carGridRow < 13) {
        crash();
        carGridRow++;
        document.getElementById("car").style.gridRow = carGridRow;
        ////console.log(carGridRow);
      }
      break;
  }
}


function GameControl2(direction2) {

    switch (direction2) {
      case "ArrowRight":
        if (carGridColumn < 6) {
          crash();
          carGridColumn++;
  
          document.getElementById("car").style.gridColumn = carGridColumn;
        }
        break;
  
      case "ArrowLeft":
        if (carGridColumn > 2) {
          crash();
          carGridColumn--;
  
          document.getElementById("car").style.gridColumn = carGridColumn;
        }
        break;
  
      case "ArrowUp":
        ////console.log("hit");
  
        if (carGridRow <= 14) {
          crash();
          carGridRow--;
          ////console.log(carGridRow);
  
          document.getElementById("car").style.gridRow = carGridRow;
        }
        break;
  
      case "ArrowDown":
        ////console.log("hit");
  
        if (carGridRow < 13) {
          crash();
          carGridRow++;
          document.getElementById("car").style.gridRow = carGridRow;
          ////console.log(carGridRow);
        }
        break;
    }
  
}

upButton.addEventListener("click", () => GameControl2("ArrowUp"));
downButton.addEventListener("click", () => GameControl2("ArrowDown"));
leftButton.addEventListener("click", () => GameControl2("ArrowLeft"));
rightButton.addEventListener("click", () => GameControl2("ArrowRight"));


function makeCar() {
  x = Math.ceil(Math.random() * 5) + 1;
  y = 1;

  return { x: x, y: 1 };
}

function drawCar() {
  mainDiv = createGameEliment("div", "car");
  mainDiv.id = "car";
  const imageTag = document.createElement("img");
  imageTag.src = "car.png";
  mainDiv.appendChild(imageTag);
  setPosition(mainDiv, mainCar);
  road.appendChild(mainDiv);
}

function drawCar2() {

  if(car2.x===car.x){
    car = makeCar();
  }
  else{
    car = makeCar();
  }
  div = createGameEliment("div", "car2");
  const imageTag = document.createElement("img");
  imageTag.src = getRandomElement(carImage);
  div.appendChild(imageTag);
  setPosition(div, car);
  road.appendChild(div);
}

function drawCar3() {


  if(car.x==car2.x){
    car2 = makeCar();
  }
  else{
    car2 = makeCar();
  }
  div2 = createGameEliment("div", "car3");
  const imageTag = document.createElement("img");
  imageTag.src = getRandomElement(carImage);
  div2.appendChild(imageTag);
  setPosition(div2, car2);
  road.appendChild(div2);
}

function createGameEliment(Etag, tagClassName) {
  const tag = document.createElement(Etag);
  tag.className = tagClassName;
  return tag;
}

function setPosition(element, position) {
  ////console.log(position);
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}
