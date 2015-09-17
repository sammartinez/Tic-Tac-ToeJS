function Player(mark, markImage) {
  this.mark = mark;
  this.markImage = markImage;
}

function Space(markedBy) {
  this.markedBy = markedBy;
}

Space.prototype.mark = function(player) {
  this.markedBy = player;
}

function Board(size) {
  this.boardArray = [];
  for(var x=1; x<=(size*size); x++) {
      var newSpace = new Space(x);
      this.boardArray.push(newSpace);
    }
}

Board.prototype.checkGameOver = function(game, turnCount) {
    var gameOver=false;
    //Diagonals
    if((this.boardArray[0].markedBy === this.boardArray[4].markedBy) && (this.boardArray[0].markedBy === this.boardArray[8].markedBy) ||
    (this.boardArray[2].markedBy === this.boardArray[4].markedBy) && (this.boardArray[2].markedBy === this.boardArray[6].markedBy)) {
      gameOver = true;
    }
    //Rows
    for(var i=0; i<this.boardArray.length; i+=3) {
      if((this.boardArray[i].markedBy === this.boardArray[i+1].markedBy) && (this.boardArray[i].markedBy === this.boardArray[i+2].markedBy)) {
        gameOver = true;
      }
    }
    // Columns
    for(var j=0; j<3; j++) {
      if((this.boardArray[j].markedBy === this.boardArray[j+3].markedBy) && (this.boardArray[j].markedBy === this.boardArray[j+6].markedBy)) {
        gameOver = true;
      }
    }

    if(gameOver) {
      if(game.turn === game.player1) {
        var winner = "Player 1";
      } else {
        var winner = "Player 2";
      }
      alert("Game Over! " + winner + " won!!!");
      window.location.reload(true);
    } else if(turnCount===9) {
        alert("Cat's Game!!!");
        window.location.reload(true);
    }
}

function Game(player1, player2, board) {
  this.player1 = player1;
  this.player2 = player2;
  this.board = board;
  this.turn = player1;
}

Game.prototype.nextTurn = function() {
  if(this.turn === this.player1) {
    this.turn = this.player2;
  } else {
    this.turn = this.player1;
  }
  // Insert a header for which player's turn it is (if two player)
  // $(".player_turn").empty();
  // $(".player_turn").append("<h3>")
}

Game.prototype.computerTurnRandom = function() {
  var computerSpace = Math.floor(Math.random() * 9);
  while(isNaN(this.board.boardArray[computerSpace].markedBy)) {
    computerSpace = Math.floor(Math.random() * 9);
  }
  this.board.boardArray[computerSpace].mark(this.player2);
}

function Team(teamName, logo) {
  this.teamName = teamName;
  this.logo = logo;
}

function resetBoard() {
  $(".zero").empty();
  $(".one").empty();
  $(".two").empty();
  $(".three").empty();
  $(".four").empty();
  $(".five").empty();
  $(".six").empty();
  $(".seven").empty();
  $(".eight").empty();
}

var teamList = [];
var ducks = new Team("Oregon Ducks", "http://www.prosportsblogging.com/psb/themes/psb/images/icons/ncaa-oregonstateducks.png");
var cougs = new Team("Washington State Cougars", "https://upload.wikimedia.org/wikipedia/en/9/95/WashingtonStateCougars.png");
var bsu = new Team("Boise State Broncos", "https://upload.wikimedia.org/wikipedia/commons/0/0f/Boise_State_Athletic_%22B%22.png");
var asu = new Team("Arizona State Sun Devils", "https://upload.wikimedia.org/wikipedia/en/2/21/Arizona_State_Sun_Devils_trident_logo.png");
var unc = new Team("North Carolina Tar Heels", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/University_of_North_Carolina_Tarheels_Interlocking_NC_logo.svg/2000px-University_of_North_Carolina_Tarheels_Interlocking_NC_logo.svg.png");
var nebraska = new Team("Nebraska Cornhuskers", "http://www.huskerj.com/Logos/Mascots-Logos/BlockN_Huskers.gif");
var beavers = new Team("Oregon State Beavers", "http://3.bp.blogspot.com/-_P4oyCkyQVc/VJXbUAQesVI/AAAAAAAAHps/71kgPmqHW1c/s1600/Logo%2BOregon_State_Beavers.png");
var utah = new Team("Utah Utes", "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Utah_Utes_logo.svg/1054px-Utah_Utes_logo.svg.png");
teamList.push(asu, bsu, cougs, ducks, nebraska, unc, beavers, utah);

function listTeams() {
   teamList.sort(function(obj1, obj2) {
     if(obj1.teamName > obj2.teamName) {
       return 1;
     }
     if(obj1.teamName < obj2.teamName) {
       return -1;
     }
     return 0;
   });

   teamList.forEach(function(team) {
     $("#team-list1").append('<option value=' + team.logo + '>' + team.teamName + '</option>');
     $("#team-list2").append('<option value=' + team.logo + '>' + team.teamName + '</option>');
   });
}

//Preset Variables for the Game when the 'New Game' button is pressed
var player1;
var player2;
var board;
var game;
var turnCount;

$(document).ready(function() {

    $("button").click(function(event) {
      resetBoard();
      $("button.new-game").hide();
      $("#team-select").show();
      listTeams();
    });

    $("form#team-select").submit(function(event) {

      $("#team-select").hide();
      player1 = new Player("X", $("#team-list1").val());
      player2 = new Player("O", $("#team-list2").val());
      board = new Board(3);
      game = new Game(player1, player2, board);
      turnCount = 0;
      $(".board").show();
      event.preventDefault();

      //create a grid with clickable squares
      $(".two").one("click", function() {
        game.board.boardArray[2].mark(game.turn);
        console.log(game.turn);
        $(".two").empty();
        $(".two").append("<img src=" + game.turn.markImage + ">");
        turnCount++;
        game.board.checkGameOver(game, turnCount);
        game.nextTurn();
      });

      $(".five").one("click", function() {
        game.board.boardArray[5].mark(game.turn);
        $(".five").empty();
        $(".five").append("<img src=" + game.turn.markImage + ">");
        turnCount++;
        game.board.checkGameOver(game, turnCount);
        game.nextTurn();
      });

      $(".eight").one("click", function() {
        game.board.boardArray[8].mark(game.turn);
        $(".eight").empty();
        $(".eight").append("<img src=" + game.turn.markImage + ">");
        turnCount++;
        game.board.checkGameOver(game, turnCount);
        game.nextTurn();
      });

      $(".one").one("click", function() {
        game.board.boardArray[1].mark(game.turn);
        $(".one").empty();
        $(".one").append("<img src=" + game.turn.markImage + ">");
        turnCount++;
        game.board.checkGameOver(game, turnCount);
        game.nextTurn();
      });

      $(".four").one("click", function() {
        game.board.boardArray[4].mark(game.turn);
        $(".four").empty();
        $(".four").append("<img src=" + game.turn.markImage + ">");
        turnCount++;
        game.board.checkGameOver(game, turnCount);
        game.nextTurn();
      });

      $(".seven").one("click", function() {
        game.board.boardArray[7].mark(game.turn);
        $(".seven").empty();
        $(".seven").append("<img src=" + game.turn.markImage + ">");
        turnCount++;
        game.board.checkGameOver(game, turnCount);
        game.nextTurn();
      });

      $(".zero").one("click", function() {
        game.board.boardArray[0].mark(game.turn);
        $(".zero").empty();
        $(".zero").append("<img src=" + game.turn.markImage + ">");
        turnCount++;
        game.board.checkGameOver(game, turnCount);
        game.nextTurn();
      });

      $(".three").one("click", function() {
        game.board.boardArray[3].mark(game.turn);
        $(".three").empty();
        $(".three").append("<img src=" + game.turn.markImage + ">");
        turnCount++;
        game.board.checkGameOver(game, turnCount);
        game.nextTurn();
      });

      $(".six").one("click", function() {
        game.board.boardArray[6].mark(game.turn);
        $(".six").empty();
        $(".six").append("<img src=" + game.turn.markImage + ">");
        turnCount++;
        game.board.checkGameOver(game, turnCount);
        game.nextTurn();
      });

    });
});
