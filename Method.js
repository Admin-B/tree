/*********************************************/
/*Method about Math*/
/*********************************************/
function Vector2(x, y) {
  if (!(this instanceof arguments.callee)) {
    return new arguments.callee(x, y);
  }
  if (Vector.isVector(arguments[0])) {
    this.x = arguments[0].x;
    this.y = arguments[0].y;
    return;
  }
  this.x = typeof x === 'number' ? x : 0;
  this.y = typeof y === 'number' ? y : 0;
}
Vector2.prototype.sum = function () {
  if (arguments.length == 1 && Vector.isVector(arguments[0])) {
    var oX = arguments[0].x,
      oY = arguments[0].y;
  } else if (arguments.length == 1 && typeof arguments[0] === 'number') {
    var oX = arguments[0],
      oY = arguments[0];
  } else if (arguments.length == 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
    var oX = arguments[0],
      oY = arguments[1];
  } else {
    return;
  }
  this.x += oX;
  this.y += oY;
  return this;
}
Vector2.prototype.sub = function () {
  if (arguments.length == 1 && Vector.isVector(arguments[0])) {
    var oX = arguments[0].x,
      oY = arguments[0].y;
  } else if (arguments.length == 1 && typeof arguments[0] === 'number') {
    var oX = arguments[0],
      oY = arguments[0];
  } else if (arguments.length == 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
    var oX = arguments[0],
      oY = arguments[1];
  } else {
    return;
  }
  this.x -= oX;
  this.y -= oY;

  return this;
}
Vector2.prototype.mul = function () {
  if (arguments.length === 1) {
    if (typeof arguments[0] === 'number') {
      this.x *= arguments[0];
      this.y *= arguments[0];
    } else if (Vector.isVector(arguments[0])) {
      this.x *= arguments[0].x;
      this.y *= arguments[0].y;
    }
  }
  return this;
}
Vector2.prototype.len = function () {
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}
Vector2.prototype.normalize = function () {
  return this.mul(1/this.len());
}
/*Vector*/
var Vector = {
  isVector: function (v) {
    return v && getPrototypeOf(v) === Vector2.prototype;
  }
};
//random()
//:arguments.length == 0 => 0~1
//:arguments.length == 1 => 0~a
//:arguments.length == 2 => a~b
function randomF(a, b) {
  if (arguments.length == 0) {
    return Math.random();
  } else if (arguments.length == 1) {
    return Math.random() * a;
  } else if (arguments.length == 2) {
    var min = Math.min(a, b);
    return Math.random() * (Math.max(a, b) - min) + min;
  } else {
    console.warn('The input value of the randomF function is 2 or less.');
    return NaN;
  }
}
function random(a, b) {
  var a = int(a),
    b = int(b);
  if (arguments.length == 1) {
    return int(Math.random() * (a + 1));
  } else if (arguments.length == 2) {
    var min = Math.min(a, b);
    return int(Math.random() * (Math.max(a, b) - min + 1)) + min;
  }
  console.warn('The input value of the random function is 1 to 2.');
  return NaN;
}
function degree(r) {
  return Math.PI / 180 * r;
}
function radian(d) {
  return 180 / Math.PI * d;
}
/*transform int type*/
function int(n) {
  return ~~n;
}
/*Methods about Time*/
function getTime() {
  return (new Date()).getTime();
}
/*Methods about Draw*/
function clear(ctx, width, height) {
  if (getPrototypeOf(ctx) === CanvasRenderingContext2D.prototype) {
    ctx.clearRect(0, 0, width, height);
  }
}

function isContext(ctx) {
  return ctx && getPrototypeOf(ctx) === CanvasRenderingContext2D.prototype;
}
function getPrototypeOf(obj) {
  return obj && Object.getPrototypeOf(obj);
}