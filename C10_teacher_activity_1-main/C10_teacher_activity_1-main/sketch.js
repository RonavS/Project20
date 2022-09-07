


var marks = [30,35,38,45,40];
console.log(marks);
console.log(marks[0]);
console.log(marks[3]);

function average(){
  var total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
 var average = total / marks.length;
 console.log(average);
}

var trex = createSprite(200,200,20,30);
function setup() {
  createCanvas(400, 400);

  var array1 = [35,40,45,38]
  var sum = array1[0] + array1[1] + array1[2] + array1[3];
  var abg = sum / array1.length;
  console.log(abg)
  average();
}

function draw() {
  background('white');
  drawSprites();
}