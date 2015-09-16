function Player(mark) {
  this.mark = mark;
}

function Space(xCoordinate, yCoordinate, markedBy) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.markedBy = markedBy;
}

Space.prototype.mark = function(player) {
  this.markedBy = player;
}

function Board() {
  var board_array = [];
  for(var x=1; x<4; x++) {
    for(var y=1; y<4; y++) {
      var newSpace = new Space(x,y,null);
      board_array.push(newSpace);
    }
  }
  return board_array;
}
