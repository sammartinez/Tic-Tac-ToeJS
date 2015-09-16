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
