//Bidimensional vector constructor with properties and methos

function Vector(x,y) {

  this.x = x;
  this.y = y

}

Vector.prototype = {

  plus: function(vector) {

    return new Vector(this.x + vector.x, this.y + vector.y);

  },

  minus: function(vector) {

    return new Vector(this.x - vector.x, this.y - vector.y);

  },

  get length() {

    return Math.sqrt(this.x * this.x + this.y * this.y);

  }

}

var v1 = new Vector(1,1);
var v2 = new Vector(2,2);
var v3 = new Vector(6,3);
var v4 = new Vector(4,3);

console.log(v2.plus(v3));
console.log(v1.minus(v2));
console.log(v4.length);
