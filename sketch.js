function preload() {
  teksturBumi       = loadImage('earthmap1k.jpg');
  teksturMoon       = loadImage('moonmap1k.jpg');
  teksturSun        = loadImage('sunmap.jpg');
  teksturVenus      = loadImage('venusmap.jpg');
  teksturMercury    = loadImage('textures/mercurymap.jpg');
  tekstureMars      = loadImage('textures/mars_1k_color.jpg');
 
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  createEasyCam({distance:1200, center:[0,-100,0]});
  document.oncontextmenu = ()=>false;
}


function draw() {
  background('Gray');
  //enable this to turn on the lights :D
  //lights();
  
  //sun
  sun();
  
  //parameters size, z, rev, warna, reverse
  mercury(500,450,1, 'orange');
  venus(90, 750, 2, 'yellow', -100);
  earth(100, 980, 3, 'blue');
  mars(80, 1300, 4, 'red');
 
}

function sun() {
  push();
  translate(0, 0, 0);
  rotateY(millis()* 0.001 * radians(-10));
  texture(teksturSun);
  noStroke();
  sphere(80); //matahari = 300
  pop();
}
  
function mercury(size, z, rev, warna) {
  push();
  rotateY(millis() * 0.001 * radians(60/rev));
  pointLight(200, 200, 200, 0, 0, 0); 
  translate(0, 0, z);
  rotateY(millis() * 0.001 * radians(60));
  texture(teksturMercury);
  noStroke();
  sphere(30);
  pop();
  
  //orbit
  push();
  pointLight(200, 200, 200, 1, 0, 0); 
  translate(0, 0, 0);
  rotateX(30);
  fill(warna);
  noStroke();
  torus(z, 2);
  pop();
}

function venus(size, z, rev, warna) {
  push();
  rotateY(millis() * 0.001 * radians(60/rev));
  pointLight(200, 200, 200, 0, 0, 0); 
  translate(0, 0, z);
  rotateY(millis() * 0.001 * radians(60));
  texture(teksturVenus);
  noStroke();
  sphere(30); 
  pop();   //venus = 100
  
  //orbit
  push();
  pointLight(200, 200, 200, 1, 0, 0);
  translate(0, 0, 0);
  rotateX(30);
  fill(warna);
  noStroke();
  torus(z, 2);
  pop();
}
 
function earth(size, z, rev, warna) {
  push();
  rotateY(millis() * 0.001 * radians(60/rev));
  pointLight(255, 255, 255, 0, 0, 0);
  translate(0, 0, z);
  rotateY(millis() * 0.001 * radians(60));
  texture(teksturBumi);
  noStroke();
  sphere(size);   //Bumi = 100 = 30
  
  //moon
  push();
  rotateY(millis() * 0.0002 * radians(60));
  pointLight(200, 200, 200, 0, 0, 0);
  translate(0, 0, 0);
  rotateY(millis() * 0.002 * radians(60));
  translate(30, 20, 100);
  texture(teksturMoon);
  noStroke();
  sphere(25);  //bulan = 30
  
  pop();
  pop();
  
  //earth orbit
  push();
  pointLight(225, 255, 255, 1, 0, 0);
  translate(0, 0, 0);
  rotateX(30);
  fill(warna);
  noStroke();
  torus(z, 2);
  pop();
}

function mars(size, z, rev, warna) {
  push();
  rotateY(millis() * 0.001 * radians(60/rev));
  pointLight(255, 255, 255, 0, 0, 0); 
  translate(0, 0, z);
  rotateY(millis() * 0.001 * radians(60));
  texture(tekstureMars);
  noStroke();
  sphere(size); 
  pop();
  
  //orbit
  push();
  pointLight(225, 255, 255, 1, 0, 0);
  translate(0, 0, 0);
  rotateX(30);
  fill(warna);
  noStroke();
  torus(z, 2);
  pop();
}


