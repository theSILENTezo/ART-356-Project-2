//Global Variables for data (csv file).
let oscar = []; //Array to store all ExoPlanet objects
let data_count = 1;  //Initializing data_count, how many data lines to read
let bar_dist;     //The distance between a planet and user's mouse coordinates

//Images
    let disney;
    let leo;
    let kat;
    let daniel;
    let dennis;
    let meryl;

//Array to store all celebrity images
    let celebs = [];  

function preload() {
    oscar_data = loadStrings("Celebrities_Oscars.csv");

  disney = loadImage("Disney_Oscar.png");
  append(celebs, disney);
  
  leo = loadImage("Leonardo_DiCaprio.png");
  append(celebs, leo);
  
  kat = loadImage("Katharine_Hepburn.png");
  append(celebs, kat);
  
  daniel = loadImage("Daniel_Day-Lewis.png");   
  append(celebs, daniel);
  
  dennis = loadImage("Dennis_Muren.png");
  append(celebs, dennis);

  meryl = loadImage("Meryl_Streep.png");
  append(celebs, meryl);
}

function setup() {
  createCanvas(800, 800);

  
  //If the file fails to open, then it will print the error and continuously loop.
  if(oscar_data == null) {
    print("Failed to open Celebrities Oscars.csv");
    while(true) {}
  }
  
  //Else it will print out that it was successful and how many lines were loaded. 
  print("File successfully loaded:",oscar_data.length,"lines scanned.");

}

function draw() {
  background(0);
  //Here we continuously draw the planets on the canvas
  for(let j=0; j<oscar.length; j++) {
    oscar[j].draw();
    planet_dist = dist(oscar[j].x, oscar[j].y, mouseX, mouseY);
    
    //If the mouse coordinates hit's the planet, it will print the data of that planet.
    if(planet_dist < oscar[j].bar_radius) {
        oscar[j].displayData();
    }
  }
}

//If the mouse is clicked, it will add a stats object into the oscar array.
function mouseClicked() {
  append(oscar, new stats());
}


class stats {
  constructor() {
    this.x;                  //X coordinate for celebrity                     
    this.y;                  //Y coordinate for celebrity 
    this.bar_radius;        //Radius of the celebrity image
    this.design_num;         //Image of celebrity celebs array
    this.data;               //String data of the celebrity
    this.data_split;         //Splits the data into an array of its data
    
    this.init();
    this.printData();
  }
  
  //loads in stats of each celebrity
  init() {
    this.design_num = int(oscar(5));
    this.bar_radius = celebs[this.design_num].width/10;
    
    this.x = mouseX;
    this.y = mouseY;
    
    this.data = oscar_data[data_count];
    this.data_split = split(this.data, ',');
    if(data_count != oscar_data.length) {
      data_count++;
    }
    else {
      print("its over");
    }
  }
  
  //This function takes a celebrity image and draws it at a random (x,y) coordinate on the canvas
  draw() {
    image(celebs[this.design_num], this.x, this.y, celebs[this.design_num].width/5, celebs[this.design_num].height/5);   
  }
  
  displayData() {
    fill(255, 255, 180);
    rect(mouseX, mouseY, 500, 120);
    
    textAlign(LEFT);
    fill("black");
    
    text("Name:", mouseX+10, mouseY+30);
    text("Times Nominated:", mouseX+10, mouseY+55);
    text("Oscars Won:", mouseX+10, mouseY+80);
    
    fill("red");
    text(this.data_split[0], mouseX+140, mouseY+30);
    text(this.data_split[1], mouseX+235, mouseY+55);
    text(this.data_split[2], mouseX+290, mouseY+80);
    text(this.data_split[3], mouseX+125, mouseY+105);
  }
  
  //Debugs code and runs it 
  printData() {    
    print("Celebrity Image:",this.design_num);
    print("Bar Radius:",this.bar_radius);
    print("Oscar Data:",this.data);
    
    if(this.data_split[0] == "") {
      this.data_split[0] = "undefined";
    }
    
    if(this.data_split[1] == "") {
      this.data_split[1] = "undefined";
    }
    
    if(this.data_split[2] == "") {
      this.data_split[2] = "undefined";
    }
    
    print("Name:",this.data_split[0]);
    print("Times Nominated:",this.data_split[1]);
    print("Oscars Won:",this.data_split[2]);
  }
}