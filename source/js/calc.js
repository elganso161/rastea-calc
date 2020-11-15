"use strict";

let btn = document.querySelector(".btn");


// substrate.value = 0;
// stage.value = 0;
// nutrients.value = 0;
// weekVeg.value = 0;
// weekBloom.value = 0;

let substrate = document.querySelector(".substrate");
let stage = document.querySelector(".stage");
let nutrients = document.querySelector(".nutrients");

let weekVeg = document.querySelector(".week-veg");
let weekBloom = document.querySelector(".week-bloom");


let n1 = document.querySelector(".n1");
let n2 = document.querySelector(".n2");
let n3 = document.querySelector(".n3");
let n4 = document.querySelector(".n4");

let out = document.querySelector(".out");
let outSub = document.querySelector(".out-sub");
let outStage = document.querySelector(".out-stage");
let outNutr = document.querySelector(".out-nutr");
let outWeek = document.querySelector(".out-week");

// вывод субстрата
function f1() {
  if (substrate.value == "soil") {
    outSub.style.background = "url(./img/soil.jpg)center no-repeat";
    outSub.style.backgroundSize = "cover";
    n1.style.display = "none";
    n2.style.display = "block";
    n3.style.display = "block";
    n4.style.display = "block";
    stage.style.display = "block";
  } else if (substrate.value == "water") {
    outSub.style.background = "url(./img/water.jpg)center no-repeat";
    outSub.style.backgroundSize = "cover";
    n1.style.display = "none";
    n2.style.display = "none";
    n3.style.display = "block";
    n4.style.display = "block";
    stage.style.display = "block";
  } else if (substrate.value == "coco") {
    outSub.style.background = "url(./img/coco.jpg)center no-repeat";
    outSub.style.backgroundSize = "cover";
    n1.style.display = "block";
    n2.style.display = "none";
    n3.style.display = "none";
    n4.style.display = "none";
    stage.style.display = "block";
  }
}
document.querySelector(".substrate").onchange = f1;

// вывод стадии
function f2() {
  if (stage.value == "vegetation" && substrate.value == "soil") {
    outStage.style.background = "url(./img/veg.jpg)center no-repeat";
    outStage.style.backgroundSize = "cover";
    n1.style.display = "none";
    n2.style.display = "block";
    n3.style.display = "block";
    n4.style.display = "none";
    nutrients.style.display = "block";
  } else if (stage.value == "bloom" && substrate.value == "soil") {
    outStage.style.background = "url(./img/bloom.jpg)center no-repeat";
    outStage.style.backgroundSize = "cover";
    n1.style.display = "none";
    n2.style.display = "block";
    n3.style.display = "none";
    n4.style.display = "block";
    nutrients.style.display = "block";
  } else if (stage.value == "vegetation" && substrate.value == "coco") {
    outStage.style.background = "url(./img/veg.jpg)center no-repeat";
    outStage.style.backgroundSize = "cover";
    n1.style.display = "block";
    n2.style.display = "none";
    n3.style.display = "none";
    n4.style.display = "none";
    nutrients.style.display = "block";
  } else if (stage.value == "bloom" && substrate.value == "coco") {
    outStage.style.background = "url(./img/bloom.jpg)center no-repeat";
    outStage.style.backgroundSize = "cover";
    n1.style.display = "block";
    n2.style.display = "none";
    n3.style.display = "none";
    n4.style.display = "none";
    nutrients.style.display = "block";
  } else if (stage.value == "vegetation" && substrate.value == "water") {
    outStage.style.background = "url(./img/veg.jpg)center no-repeat";
    outStage.style.backgroundSize = "cover";
    n1.style.display = "none";
    n2.style.display = "none";
    n3.style.display = "block";
    n4.style.display = "none";
    nutrients.style.display = "block";
  } else if (stage.value == "bloom" && substrate.value == "water") {
    outStage.style.background = "url(./img/bloom.jpg)center no-repeat";
    outStage.style.backgroundSize = "cover";
    n1.style.display = "none";
    n2.style.display = "none";
    n3.style.display = "none";
    n4.style.display = "block";
    nutrients.style.display = "block";
  }
}
document.querySelector(".stage").onchange = f2;

// вывод удобрения
function f3() {
  if (nutrients.value == "1" && stage.value == "vegetation") {
    outNutr.style.background = "url(./img/coco-nut.jpg)center no-repeat";
    outNutr.style.backgroundSize = "cover";
    weekVeg.style.display = "block";
    weekBloom.style.display = "none";
  } else if (nutrients.value == "2" && stage.value == "vegetation") {
    outNutr.style.background = "url(./img/soil-auto.jpg)center no-repeat";
    outNutr.style.backgroundSize = "cover";
    weekVeg.style.display = "block";
    weekBloom.style.display = "none";
  } else if (nutrients.value == "3" && stage.value == "vegetation") {
    outNutr.style.background = "url(./img/egv.jpg)center no-repeat";
    outNutr.style.backgroundSize = "cover";
    weekVeg.style.display = "block";
    weekBloom.style.display = "none";
  } else if (nutrients.value == "4" && stage.value == "vegetation") {
    outNutr.style.background = "url(./img/egf.jpg)center no-repeat";
    outNutr.style.backgroundSize = "cover";
    weekVeg.style.display = "block";
    weekBloom.style.display = "none";
  } else if (nutrients.value == "1" && stage.value == "bloom") {
    outNutr.style.background = "url(./img/coco-nut.jpg)center no-repeat";
    outNutr.style.backgroundSize = "cover";
    weekBloom.style.display = "block";
    weekVeg.style.display = "none";
  } else if (nutrients.value == "2" && stage.value == "bloom") {
    outNutr.style.background = "url(./img/soil-auto.jpg)center no-repeat";
    outNutr.style.backgroundSize = "cover";
    weekBloom.style.display = "block";
    weekVeg.style.display = "none";
  } else if (nutrients.value == "3" && stage.value == "bloom") {
    outNutr.style.background = "url(./img/egv.jpg)center no-repeat";
    outNutr.style.backgroundSize = "cover";
    weekBloom.style.display = "block";
    weekVeg.style.display = "none";
  } else if (nutrients.value == "4" && stage.value == "bloom") {
    outNutr.style.background = "url(./img/egf.jpg)center no-repeat";
    outNutr.style.backgroundSize = "cover";
    weekBloom.style.display = "block";
    weekVeg.style.display = "none";
  }
}
document.querySelector(".nutrients").onchange = f3;

// вывод картинки недели
function f4() {
  if (weekVeg.value == "v1") {
    outWeek.innerHTML = "<p>1</p>";
    btn.style.display = "block";
    out.style.display = "block";
  } else if (weekVeg.value == "v2") {
    outWeek.innerHTML = "<p>2</p>";
    btn.style.display = "block";
    out.style.display = "block";
  } else if (weekVeg.value == "v3") {
    outWeek.innerHTML = "<p>3</p>";
    btn.style.display = "block";
    out.style.display = "block";
  } else if (weekVeg.value == "v4") {
    outWeek.innerHTML = "<p>4</p>";
    btn.style.display = "block";
    out.style.display = "block";
  } else if (weekVeg.value == "v5") {
    outWeek.innerHTML = "<p>4+</p>";
    btn.style.display = "block";
    out.style.display = "block";
  }
}
document.querySelector(".week-veg").onchange = f4;

function f4b() {
  if (weekBloom.value == "b1") {
    outWeek.innerHTML = "<p>1</p>";
    btn.style.display = "block";
    out.style.display = "block";
  } else if (weekBloom.value == "b2") {
    outWeek.innerHTML = "<p>2</p>";
    btn.style.display = "block";
    out.style.display = "block";
  } else if (weekBloom.value == "b3") {
    outWeek.innerHTML = "<p>3</p>";
    btn.style.display = "block";
    out.style.display = "block";
  } else if (weekBloom.value == "b4") {
    outWeek.innerHTML = "<p>4</p>";
    btn.style.display = "block";
    out.style.display = "block";
  } else if (weekBloom.value == "b5") {
    outWeek.innerHTML = "<p>5</p>";
    btn.style.display = "block";
    out.style.display = "block";
  } else if (weekBloom.value == "b6") {
    outWeek.innerHTML = "<p>6</p>";
    btn.style.display = "block";
    out.style.display = "block";
  } else if (weekBloom.value == "b7") {
    outWeek.innerHTML = "<p>7</p>";
    btn.style.display = "block";
    out.style.display = "block";
  } else if (weekBloom.value == "b8") {
    outWeek.innerHTML = "<p>8+</p>";
    btn.style.display = "block";
    out.style.display = "block";
  }
}
document.querySelector(".week-bloom").onchange = f4b;


function f5() {
  if (
    substrate.value == "soil" &&
    stage.value == "vegetation" &&
    nutrients.value == "2" &&
    weekVeg.value == "v1"
  ) {
    out.innerHTML = "";
    out.innerHTML = arrSoilAuto[0];
  } else if (
    substrate.value == "soil" &&
    stage.value == "vegetation" &&
    nutrients.value == "2" &&
    weekVeg.value == "v2"
  ) {
    out.innerHTML = "";
    out.innerHTML = arrSoilAuto[1];
  } else if (
    substrate.value == "soil" &&
    stage.value == "vegetation" &&
    nutrients.value == "2" &&
    weekVeg.value == "v3"
  ) {
    out.innerHTML = "";
    out.innerHTML = arrSoilAuto[2];
  } else if (
    substrate.value == "soil" &&
    stage.value == "vegetation" &&
    nutrients.value == "2" &&
    weekVeg.value == "v4"
  ) {
    out.innerHTML = "";
    out.innerHTML = arrSoilAuto[3];
  } else if (
    substrate.value == "soil" &&
    stage.value == "vegetation" &&
    nutrients.value == "2" &&
    weekVeg.value == "v5"
  ) {
    out.innerHTML = "";
    out.innerHTML = arrSoilAuto[4];
  } else if (
    substrate.value == "soil" &&
    stage.value == "bloom" &&
    nutrients.value == "2" &&
    weekBloom.value == "b1"
  ) {
    out.innerHTML = "";
    out.innerHTML = arrSoilAuto[5];
  } else if (
    substrate.value == "soil" &&
    stage.value == "bloom" &&
    nutrients.value == "2" &&
    weekBloom.value == "b2"
  ) {
    out.innerHTML = "";
    out.innerHTML = arrSoilAuto[6];
  } else if (
    substrate.value == "soil" &&
    stage.value == "bloom" &&
    nutrients.value == "2" &&
    weekBloom.value == "b3"
  ) {
    out.innerHTML = "";
    out.innerHTML = arrSoilAuto[7];
  } else if (
    substrate.value == "soil" &&
    stage.value == "bloom" &&
    nutrients.value == "2" &&
    weekBloom.value == "b4"
  ) {
    out.innerHTML = "";
    out.innerHTML = arrSoilAuto[8];
  } else if (
    substrate.value == "soil" &&
    stage.value == "bloom" &&
    nutrients.value == "2" &&
    weekBloom.value == "b5"
  ) {
    out.innerHTML = "";
    out.innerHTML = arrSoilAuto[9];
  } else if (
    substrate.value == "soil" &&
    stage.value == "bloom" &&
    nutrients.value == "2" &&
    weekBloom.value == "b6"
  ) {
    out.innerHTML = "";
    out.innerHTML = arrSoilAuto[10];
  } else if (
    substrate.value == "soil" &&
    stage.value == "bloom" &&
    nutrients.value == "2" &&
    weekBloom.value == "b7"
  ) {
    out.innerHTML = "";
    out.innerHTML = arrSoilAuto[11];
  } else if (
    substrate.value == "soil" &&
    stage.value == "bloom" &&
    nutrients.value == "2" &&
    weekBloom.value == "b8"
  ) {
    out.innerHTML = "";
    out.innerHTML = arrSoilAuto[12];
  } else if (
    substrate.value == "soil" &&
    stage.value == "vegetation" &&
    nutrients.value == "3" &&
    weekVeg.value == "v1"
  ) {
    out.innerHTML = "";
    out.innerHTML = 1111;
  }
}
document.querySelector(".btn").onclick = f5;

// Земля, соил-авто
let arrSoilAuto = [
  // вегетация ---------------------------------------------------------------
  [
    "<p><span>Rastea Soil Auto-Flowering:&nbsp;</span>1 мл на 1 литр воды</p>" +
      "<p><span>Bio-Energy Spell:&nbsp;</span>1 мл на 1 литр воды</p>" +
      "<p><span>Bio-Care Root:&nbsp;</span>1 капля на 1 литр воды</p>" +
      "<p><span>Bio-Spray Shield:&nbsp;</span>1 мл на 1 литр воды, раз в 5 дней</p>" +
      "<p><span>Tricomizer:&nbsp;</span>2 мл на 1 литр воды/листовая подкормка</p>",
  ],
  [
    "<p><span>Rastea Soil Auto-Flowering:&nbsp;</span>1 мл на 1 литр воды</p>" +
      "<p><span>Bio-Energy Spell:&nbsp;</span>1 мл на 1 литр воды</p>" +
      "<p><span>Bio-Care Root:&nbsp;</span>3 капля на 1 литр воды</p>" +
      "<p><span>Bio-Spray Shield:&nbsp;</span>1 мл на 1 литр воды, раз в 5 дней</p>",
  ],
  [
    "<p><span>Rastea Soil Auto-Flowering:&nbsp;</span>1-2 мл на 1 литр воды</p>" +
      "<p><span>Bio-Energy Spell:&nbsp;</span>1 мл на 1 литр воды</p>" +
      "<p><span>Bio-Care Root:&nbsp;</span>3 капля на 1 литр воды</p>" +
      "<p><span>Bio-Spray Shield:&nbsp;</span>1 мл на 1 литр воды, раз в 5 дней</p>",
  ],
  [
    "<p><span>Rastea Soil Auto-Flowering:&nbsp;</span>1-2 мл на 1 литр воды</p>" +
      "<p><span>Bio-Energy Spell:&nbsp;</span>1 мл на 1 литр воды</p>" +
      "<p><span>Bio-Care Root:&nbsp;</span>3 капля на 1 литр воды</p>" +
      "<p><span>Bio-Spray Shield:&nbsp;</span>1 мл на 1 литр воды, раз в 5 дней</p>",
  ],
  [
    "<p><span>Rastea Soil Auto-Flowering:&nbsp;</span>1-2 мл на 1 литр воды</p>" +
      "<p><span>Bio-Energy Spell:&nbsp;</span>1 мл на 1 литр воды</p>" +
      "<p><span>Bio-Care Root:&nbsp;</span>3 капля на 1 литр воды</p>" +
      "<p><span>Bio-Spray Shield:&nbsp;</span>1 мл на 1 литр воды, раз в 5 дней</p>",
  ],
  // Цветение ---------------------------------------------------------------
  // 1 неделя
  [
    "</a><p><span>Rastea Soil Auto-Flowering:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Energy Spell:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Care Root:&nbsp;</span>1-2 капли на 1 литр воды</p>" +
      "<p><span>Bio-Spray Shield:&nbsp;</span>1 мл на 1 литр воды, раз в 5 дней</p>" +
      "<p><span>Bio-bloom booster:&nbsp;</span>3 капли на 1 литр воды</p>" +
      "<p><span>Tricomizer:&nbsp;</span>2 мл на 1 литр воды/листовая подкормка</p>",
  ],
  // 2 неделя
  [
    "</a><p><span>Rastea Soil Auto-Flowering:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Energy Spell:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Care Root:&nbsp;</span>1-2 капли на 1 литр воды</p>" +
      "<p><span>Bio-Spray Shield:&nbsp;</span>1 мл на 1 литр воды, раз в 5 дней</p>" +
      "<p><span>Bio-bloom booster:&nbsp;</span>3 капли на 1 литр воды</p>",
  ],
  // 3 неделя
  [
    "</a><p><span>Rastea Soil Auto-Flowering:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Energy Spell:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Care Root:&nbsp;</span>1-2 капли на 1 литр воды</p>" +
      "<p><span>Bio-Spray Shield:&nbsp;</span>1 мл на 1 литр воды, раз в 5 дней</p>" +
      "<p><span>Bio-bloom booster:&nbsp;</span>3 капли на 1 литр воды</p>",
  ],
  // 4 неделя
  [
    "</a><p><span>Rastea Soil Auto-Flowering:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Energy Spell:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Care Root:&nbsp;</span>1-2 капли на 1 литр воды</p>" +
      "<p><span>Bio-Spray Shield:&nbsp;</span>1 мл на 1 литр воды, раз в 5 дней</p>" +
      "<p><span>Bio-bloom booster:&nbsp;</span>3 капли на 1 литр воды</p>" +
      "<p><span>Eco-hydro PK classic:&nbsp;</span>2 мл на 1 литр воды</p>" +
      "<p><span>Tricomizer:&nbsp;</span>2 мл на 1 литр воды/под корень</p>",
  ],
  // 5 неделя
  [
    "</a><p><span>Rastea Soil Auto-Flowering:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Energy Spell:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Care Root:&nbsp;</span>1-2 капли на 1 литр воды</p>" +
      "<p><span>Bio-Spray Shield:&nbsp;</span>1 мл на 1 литр воды, раз в 5 дней</p>" +
      "<p><span>Bio-bloom booster:&nbsp;</span>3 капли на 1 литр воды</p>" +
      "<p><span>Eco-hydro PK classic:&nbsp;</span>2 мл на 1 литр воды</p>" +
      "<p>555</p>",
  ],
  // 6 неделя
  [
    "</a><p><span>Rastea Soil Auto-Flowering:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Energy Spell:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Care Root:&nbsp;</span>1-2 капли на 1 литр воды</p>" +
      "<p><span>Bio-Spray Shield:&nbsp;</span>1 мл на 1 литр воды, раз в 5 дней</p>" +
      "<p><span>Bio-bloom booster:&nbsp;</span>3 капли на 1 литр воды</p>" +
      "<p><span>Eco-hydro PK classic:&nbsp;</span>2 мл на 1 литр воды</p>" +
      "<p>666</p>",
  ],
  // 7 неделя
  [
    "</a><p><span>Rastea Soil Auto-Flowering:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Energy Spell:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Care Root:&nbsp;</span>1-2 капли на 1 литр воды</p>" +
      "<p><span>Bio-Spray Shield:&nbsp;</span>1 мл на 1 литр воды, раз в 5 дней</p>" +
      "<p><span>Bio-bloom booster:&nbsp;</span>3 капли на 1 литр воды</p>" +
      "<p><span>Eco-hydro PK classic:&nbsp;</span>2 мл на 1 литр воды</p>" +
      "<p>777</p>",
  ],
  // 8 неделя
  [
    "</a><p><span>Rastea Soil Auto-Flowering:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Energy Spell:&nbsp;</span>3 мл на 1 литр воды</p>" +
      "<p><span>Bio-Care Root:&nbsp;</span>1-2 капли на 1 литр воды</p>" +
      "<p><span>Bio-Spray Shield:&nbsp;</span>1 мл на 1 литр воды, раз в 5 дней</p>" +
      "<p><span>Bio-bloom booster:&nbsp;</span>3 капли на 1 литр воды</p>" +
      "<p><span>Eco-hydro PK classic:&nbsp;</span>2 мл на 1 литр воды</p>" +
      "<p>888</p>",
  ],
];
