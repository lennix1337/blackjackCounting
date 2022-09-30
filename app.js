const prompt = require("prompt-sync")({ sigint: true });

let count = 0;
while (true) {
  let card = prompt("Next card: ").toLowerCase();
  // card = card.toLowerCase();
  if (
    card === `2` ||
    card === `3` ||
    card === `4` ||
    card === `5` ||
    card === `6`
  ) {
    count++;
  }
  if (
    card === `10` ||
    card === "j" ||
    card === "q" ||
    card === "k" ||
    card === "a"
  ) {
    count--;
  }
  if (count > 0) {
    console.log(`Count is: ${count} BET HIGH`);
  }
  if (count <= 0){
    console.log(`Count is: ${count} BET LOW`);
  }
}
