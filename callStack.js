function takeShower() {
  return "Showering!";
}

function eatBreakFast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakFast();
  console.log("Ok ready ro go to work!");
}

wakeUp();
