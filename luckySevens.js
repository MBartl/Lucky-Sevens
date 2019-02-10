var startingBet = 0;
var maxMoney = 0;
var rollTotal = 0;
var maxCount = 0;

function displayResults() {
  document.getElementById("results").hidden = false;
  document.getElementById("startBet").innerHTML = (startingBet);
  document.getElementById("total").innerHTML = (rollTotal);
  document.getElementById("highest").innerHTML = (maxMoney);
  document.getElementById("count").innerHTML = (maxCount);
  console.log("GAME OVER!");
  //document.getElementById("results").style.display = "block";
}

function rollDice() {
  return ((Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1));
}

function disablePlay() {
  document.getElementById("play").disabled = true;
}

function enablePlay() {
  document.getElementById("play").disabled = false;
  document.getElementById("results").hidden = true;
}

function play() {
  rollTotal = (rollTotal - rollTotal);
  maxMoney = (maxMoney - maxMoney);
  maxCount = (maxCount - maxCount);
  startingBet = (document.getElementById("startingBet").value);

  if (startingBet <= 0) {
    alert("The starting bet must be $1 or more!");
  } else if (startingBet > 9999) {
    alert("The starting bet must be under $10,000!");
  } else {
    gameMoney = startingBet;
    console.log("Your starting money is " + gameMoney);
    while (gameMoney > 0) {
      if (maxMoney < gameMoney) {
        maxMoney = gameMoney;
        maxCount = rollTotal;
      }
      rollTotal++;
      //Main game code
      if (rollDice() == 7) {
        gameMoney = (parseInt(gameMoney) + 4);
        console.log("Roll: " + rollTotal + " was a 7! Your new total is: " + gameMoney);
      } else {
        gameMoney = (parseInt(gameMoney) - 1);
        console.log("Roll: " + rollTotal + " lost. New total: " + gameMoney);
      }
    }
    if (gameMoney == 0) {
      startingBet = (document.getElementById("startingBet").value);
      displayResults();
      disablePlay();
    }
  }
}
