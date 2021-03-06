
let start = true; 
const mint = "#31E981";
const lilac = "#dcd8e6";
const green = "#35605A";
const darklilac = "#985F99";
const darkpurp= "#1F0322";

var mic; 



function setup () {
  createCanvas(1200, 800, WEBGL);
  mic = new p5.AudioIn(); 
  mic.start(); 
 

  fft = new p5.FFT(0.8, 512); 
  angleMode(DEGREES);
}



function draw() {
  
 let startvol = mic.getLevel(); 
  let vol = startvol*10; 
  
  rotateX(60);
 background(darkpurp);
  noFill();
  for (let i = 0; i<45; i++){
    let r = map(sin(frameCount), -1, 1, 0, 255);
    let g = map(i, 0, 20, 0, 255);
    let b = map(cos(frameCount), -1, 1, 255, 0)
    stroke(r, g, b);
    beginShape()
    for (let j = 0; j<360; j+=18){
      let rad = i*8; 
      let x = rad*cos(j);
      let y = rad*sin(j);
      let z = sin((frameCount)*2+i*20 )* 50;
      vertex(x, y,z)
    }
    endShape(CLOSE);
      
  }
   let diam = map(vol, 0.1, 0.3, 30, 200);
  let diam2= map(vol, 0.3, 0.9, 40, 100);
    for (let i = 0; i<45; i++){
    let r = map(sin(frameCount), -1, 1, 0, 255);
    let g = map(i, 0, 20, 0, 255);
    let b = map(cos(frameCount), -1, 1, 255, 0)
    stroke(r, g, b);
   push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(diam);
  pop();
 }
  


}