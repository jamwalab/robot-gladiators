var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //Alert players that they are starting the round.
    //Game states
    //"WIN" - Player robot has defeated all enemy-robots
    // *Fight all enemy robots
    // *Defeat all enemy robots
    //"LOSE" - Player robot health is 0 or less
    window.alert("Welcome to Robot Gladiators");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    if (promptFight.toUpperCase() === "FIGHT") {
        
        //Subtract player attack from value of enemy health
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message in console
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        //check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //subtract value of enemy attack from players health
        playerHealth = playerHealth - enemyAttack;
        // Log resulting message in console
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm if player wants to quit
        var confirmSkip = window.confirm("Are you sure you want to quit?");
        //if yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        //if no run fight again
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}