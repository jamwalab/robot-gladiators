var randomNumber = function(min, max) {
    var value = Math.floor(Math.random()*(max - min +1) + min);
    return value;
}

var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = window.prompt("What is your robot's name");    
    }  
    console.log("Your robot's name is " + name);
    return name
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money : 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function() {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -=7;
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("Sorry!! You dont have enough money!!")
        }
    }
};
var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
//var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
//var enemyHealth = randomNumber(40, 60);
//var enemyAttack = 12;


//---FUNCTION FIGHT() DECLARATION START
var fight = function(enemy) {
    //Alert players that they are starting the round.
    //Game states
    //"WIN" - Player robot has defeated all enemy-robots
    // *Fight all enemy robots
    // *Defeat all enemy robots
    //"LOSE" - Player robot health is 0 or less
    while (enemy.health > 0 && playerInfo.health > 0) {
        var promptFight = window.prompt("Would you like to FIGHT (F) or SKIP (S) this battle? Enter 'F' to fight or 'S' to skip.");
            //check if skip was chosen.
        if (promptFight.toUpperCase() === "S") {
            //confirm if player wants to quit
            var confirmSkip = window.confirm("Are you sure you want to quit?");
            //if yes, leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money",playerInfo.money);
                break;
            }
        }

        //Subtract player attack from value of enemy health
        var damage = randomNumber(playerInfo.attack-3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        //Log a resulting message in console
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
        //check enemy health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            playerInfo.money = playerInfo.money + 20;
            //enemy is dead leave while loop
            break;
        } 
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        //subtract value of enemy attack from players health
        var damage = randomNumber(enemy.attack-3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log resulting message in console
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
}
//---FUNCTION FIGHT() DECLARATION END

//---FUNCTION TO START NEW GAME
var startGame = function() {
    playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators!!! Round: " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                var storeConfirm = window.confirm("The fight is over this round, visit the store before the next round?");
                //if yes take them to the store
                if (storeConfirm) {
                    shop();  
                }    
            }
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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

//---SHOP FUNCTION
var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health (R), UPGRADE your attack (U), or LEAVE the store (L)? Please enter one: 'R' to REFILL, 'U' to UPGRADE, or 'L' to LEAVE.");
    switch (shopOptionPrompt.toUpperCase()) {
        case "R":
            playerInfo.refillHealth();
            break;
        case "U":
            playerInfo.upgradeAttack();
            break;
        case "L":
            window.alert("Leaving the store!!");
            break;
        default:
            window.alert("You did not pick a valid option, please try again.");
            shop();
            break;
    }
}

startGame();