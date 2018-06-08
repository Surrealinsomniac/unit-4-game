$(document).ready(function() {
 
    var kenobi = {
        name : "Ben Kenobi",
        HP : 100,
        DMG : function() {
           var damage = Math.floor(Math.random() * ( 11 - 0 + 1)) + 1;
            return damage
        }

    };

    var maul = {
        name : "Darth Maul",
        HP : 100,
        DMG : function() {
            var damage = Math.floor(Math.random() * ( 11 - 0 + 1)) + 1;
             return damage
         }
    };

    var vader = {
        name : "Darth Vader",
        HP: 100,
        DMG : function() {
            var damage = Math.floor(Math.random() * ( 11 - 0 + 1)) + 1;
             return damage
         }
    };

    var luke = {
        name : "Luke Skywalker",
        HP : 100,
        DMG : function() {
            var damage = Math.floor(Math.random() * ( 11 - 0 + 1)) + 1;
             return damage
         }
    };

    var yourChar = []

    var enemyTeam = []





    
    $(".characters").on("click", function(){
        $(this).attr("class", "characters your-character");
        $(".active-char").append(this);
        (yourChar).push(this);
        console.log(yourChar);
    });
    
 
});