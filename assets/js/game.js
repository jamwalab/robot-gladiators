var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//---FUNCTION FIGHT() DECLARATION START
var fight = function(enemyName) {
    //Alert players that they are starting the round.
    //Game states
    //"WIN" - Player robot has defeated all enemy-robots
    // *Fight all enemy robots
    // *Defeat all enemy robots
    //"LOSE" - Player robot health is 0 or less
    while (enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT (F) or SKIP (S) this battle? Enter 'F' to fight or 'S' to skip.");
            //check if skip was chosen.
        if (promptFight.toUpperCase() === "S") {
            //confirm if player wants to quit
            var confirmSkip = window.confirm("Are you sure you want to quit?");
            //if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney",playerMoney);
                break;
            }
        }

        //Subtract player attack from value of enemy health
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message in console
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        //check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            //enemy is dead leave while loop
            break;
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
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}
//---FUNCTION FIGHT() DECLARATION END

//---FUNCTION TO START NEW GAME
var startGame = function() {
    playerHealth = 100;
    playerMoney = 10;
    playerAttack = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators!!! Round: " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(enemyNames[i]);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!!");
            break;
        }
    }
    endGame();
}

//---FUNCION FOR END GAME
var endGame = function() {
    //if player is allive they win
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in the battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again!");
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
startGame();