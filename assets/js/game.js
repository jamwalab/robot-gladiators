var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert players that they are starting the round.
    window.alert("Welcome to Robot Gladiators");

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
}

fight();
