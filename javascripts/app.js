var Gauntlet = (function(Gauntlet){

  /*
    Test code to generate a human player and an orc player
  */
  var warrior = new Gauntlet.Combatants.Human();
  warrior.setWeapon(new Gauntlet.WarAxe());
  warrior.generateClass();  // This will be used for "Surprise me" option
  console.log(warrior.toString());

  Gauntlet.orc = new Gauntlet.Combatants.Orc();
  Gauntlet.orc.generateClass();
  Gauntlet.orc.generateName();
  Gauntlet.orc.setWeapon(new Gauntlet.BroadSword());
  console.log(Gauntlet.orc.toString());
  console.log("my orc mate", Gauntlet.orc);

  /*
    Test code to generate a spell
   */
  var spell = new Gauntlet.SpellBook.Sphere();
  console.log("spell: ", spell.toString());


  $(document).ready(function() {
    /*
      Show the initial view that accepts player name
     */
    $("#player-setup").show();

    $("#player-name").keyup(function(event){
    if(event.keyCode === 13){
        $("#enterKey").click();
    }
});


    /*
      When any button with card__link class is clicked,
      move on to the next view.
     */
    $(".card__link").click(function(e) {
      var nextCard = $(this).attr("next");
      var moveAlong = false;

      switch (nextCard) {
        case "card--class":
          moveAlong = ($("#player-name").val() !== "");
          console.log(nextCard);
          break;
        case "card--weapon":
          moveAlong = ($("#player-name").val() !== "");
          console.log(nextCard);
          break;
        case "card--battleground":
          moveAlong = ($("#player-name").val() !== "");
          Gauntlet.playerInfoDiv();
          Gauntlet.enemyInfoDiv();
          console.log(nextCard);
          break;

      }

      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show();
      }
    });

    /*
      When the back button clicked, move back a view.
     */
    $(".card__back").click(function(e) {
      var previousCard = $(this).attr("previous");
      $(".card").hide();
      $("." + previousCard).show();
    });

  });

  return Gauntlet

}(Gauntlet || {}));
