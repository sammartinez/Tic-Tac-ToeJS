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

Board.prototype.checkGameOver = function() {
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
  return gameOver;
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

// function newGame() {
//   var player1 = new Player("X", "http://fauwt.nl/wp-content/uploads/2014/11/xx.png");
//   var player2 = new Player("O", "https://upload.wikimedia.org/wikipedia/commons/7/73/Deseret_small_long_O.svg");
//   var board = new Board(3);
//   var game = new Game(player1, player2, board);
//   $(".board").show();
//   event.preventDefault();
// }

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

$(document).ready(function() {
  $("button").click(function(event) {
    resetBoard();

    var player1 = new Player("X", "http://fauwt.nl/wp-content/uploads/2014/11/xx.png");
    var player2 = new Player("O", "https://upload.wikimedia.org/wikipedia/commons/7/73/Deseret_small_long_O.svg");
    var board = new Board(3);
    var game = new Game(player1, player2, board);
    $(".board").show();
    event.preventDefault();
    console.log(game);

    //create a grid with clickable squares
    $(".two").one("click", function() {
      game.board.boardArray[2].mark(game.turn);
      $(".two").append("<img src=" + game.turn.markImage + ">");
      game.board.checkGameOver();
      game.nextTurn();
    });
    $(".five").one("click", function() {
      game.board.boardArray[5].mark(game.turn);
      $(".five").append("<img src=" + game.turn.markImage + ">");
      game.board.checkGameOver();
      game.nextTurn();
    });
    $(".eight").one("click", function() {
      game.board.boardArray[8].mark(game.turn);
      $(".eight").append("<img src=" + game.turn.markImage + ">");
      game.board.checkGameOver();
      game.nextTurn();
    });
    $(".one").one("click", function() {
      game.board.boardArray[1].mark(game.turn);
      $(".one").append("<img src=" + game.turn.markImage + ">");
      game.board.checkGameOver();
      game.nextTurn();
    });
    $(".four").one("click", function() {
      game.board.boardArray[4].mark(game.turn);
      $(".four").append("<img src=" + game.turn.markImage + ">");
      game.board.checkGameOver();
      game.nextTurn();
    });
    $(".seven").one("click", function() {
      game.board.boardArray[7].mark(game.turn);
      $(".seven").append("<img src=" + game.turn.markImage + ">");
      game.board.checkGameOver();
      game.nextTurn();
    });
    $(".zero").one("click", function() {
      game.board.boardArray[0].mark(game.turn);
      $(".zero").append("<img src=" + game.turn.markImage + ">");
      game.board.checkGameOver();
      game.nextTurn();
    });
    $(".three").one("click", function() {
      game.board.boardArray[3].mark(game.turn);
      $(".three").append("<img src=" + game.turn.markImage + ">");
      game.board.checkGameOver();
      game.nextTurn();
    });
    $(".six").one("click", function() {
      game.board.boardArray[6].mark(game.turn);
      $(".six").append("<img src=" + game.turn.markImage + ">");
      game.board.checkGameOver();
      game.nextTurn();
    });
  });
});
