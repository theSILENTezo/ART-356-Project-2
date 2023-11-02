let oscar = [];
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTra-zd_xv5k8Fq_J5obXEdtjECbLFmK-vk8wYLFrYt37yiTD4kEOCA734UmLvH8yjMG3ms23CjdvQL/pub?gid=0&single=true&output=csv";
let bar_dist; //distance bewtween the mouse coordinates and the bar
let data_count = 1;

//images array
    let celeb = [];

function preload() {
  oscar_data = loadTable(url, 'csv', 'header');

  /*
  //images
   celeb[0] = loadImage("image/Disney Oscar.png");
   celeb[1] = loadImage("image/Leonardo DiCaprio.png");
   celeb[2] = loadImage("image/Katharine Hepburn.png");
   celeb[3] = loadImage("image/Daniel Day-Lewis.png");
   celeb[4] = loadImage("image/Dennis Muren.png");
   celeb[5] = loadImage("image/Meryl Streep.png");
  */
}

function setup() {
  let canvas = createCanvas(800, 800);
}

function draw() {
  background(0);
  
  //Loads in csv's data
  if (oscar_data){
    //Receives Data from csv
    let numRows = oscar_data.getRowCount();

    let wins = oscar_data.getColumn('Won');
    let noms = oscar_data.getColumn('Nominated');
    let name = oscar_data.getColumn('Celebrity');
    
    //Creates bar graph 
    for(let i = 0; i < numRows; i++){
      let x = 50;
      let y = 100 + i*50;
      let w = wins[i]*30;
      let h = 10;

      fill(255);
      textSize(14);
      text(name[i], x, y-5);

      rect(x, y, w, h);
      //image(celeb[i], i*10, i*10, 800/5, 450/5);
    }
  }

  //Disney
  if(mouseX > 0 && mouseX < 740 && mouseY > 90 && mouseY < 120){
    fill(219, 176, 83);
    rect(mouseX, mouseY, 500, 120);
    textSize(24);
    fill("black");
    text("Name:", mouseX+5, mouseY+28);
    text("Oscars Won:", mouseX+5, mouseY+53);
    text("Times Nominated:", mouseX+5, mouseY+79);
    text("Fun Fact:", mouseX+5, mouseY+105);
    fill(53, 161, 66);
    text("Walt Disney", mouseX+78, mouseY+28);
    text("22", mouseX+148, mouseY+53);
    text("59", mouseX+200, mouseY+79);
    text("Most wins by a single person", mouseX+109, mouseY+105);
  }

  //DiCaprio
  if(mouseX > 0 && mouseX < 94 && mouseY > 150 && mouseY < 165){
    fill(219, 176, 83);
    rect(mouseX, mouseY, 500, 120);
    textSize(24);
    fill("black");
    text("Name:", mouseX+5, mouseY+28);
    text("Oscars Won:", mouseX+5, mouseY+53);
    text("Times Nominated:", mouseX+5, mouseY+79);
    text("Fun Fact:", mouseX+5, mouseY+105);
    fill(53, 161, 66);
    text("Leonardo DiCaprio", mouseX+78, mouseY+28);
    text("1", mouseX+148, mouseY+53);
    text("7", mouseX+200, mouseY+79);
    text("Finally got one", mouseX+109, mouseY+105);
  }

  //Hepburn
  if(mouseX > 0 && mouseX < 174 && mouseY > 200 && mouseY < 215){
    fill(219, 176, 83);
    rect(mouseX, mouseY, 500, 120);
    textSize(24);
    fill("black");
    text("Name:", mouseX+5, mouseY+28);
    text("Oscars Won:", mouseX+5, mouseY+53);
    text("Times Nominated:", mouseX+5, mouseY+79);
    text("Fun Fact:", mouseX+5, mouseY+105);
    fill(53, 161, 66);
    text("Katharine Hepburn", mouseX+78, mouseY+28);
    text("4", mouseX+148, mouseY+53);
    text("12", mouseX+200, mouseY+79);
    text("Most wins for best actress", mouseX+109, mouseY+105);
  }

  //Day-Lewis
  if(mouseX > 0 && mouseX < 150 && mouseY > 250 && mouseY < 265){
    fill(219, 176, 83);
    rect(mouseX, mouseY, 500, 120);
    textSize(24);
    fill("black");
    text("Name:", mouseX+5, mouseY+28);
    text("Oscars Won:", mouseX+5, mouseY+53);
    text("Times Nominated:", mouseX+5, mouseY+79);
    text("Fun Fact:", mouseX+5, mouseY+105);
    fill(53, 161, 66);
    text("Daniel Day-Lewis", mouseX+78, mouseY+28);
    text("3", mouseX+148, mouseY+53);
    text("6", mouseX+200, mouseY+79);
    text("Most wins for best actor", mouseX+109, mouseY+105);
  }

  //Muren
  if(mouseX > 0 && mouseX < 330 && mouseY > 300 && mouseY < 315){
    fill(219, 176, 83);
    rect(mouseX, mouseY, 500, 120);
    textSize(24);
    fill("black");
    text("Name:", mouseX+5, mouseY+28);
    text("Oscars Won:", mouseX+5, mouseY+53);
    text("Times Nominated:", mouseX+5, mouseY+79);
    text("Fun Fact:", mouseX+5, mouseY+105);
    fill(53, 161, 66);
    text("Dennis Muren", mouseX+78, mouseY+28);
    text("9", mouseX+148, mouseY+53);
    text("13", mouseX+200, mouseY+79);
    text("Most wins for visual effects", mouseX+109, mouseY+105);
  }

  //Streep
  if(mouseX > 0 && mouseX < 150 && mouseY > 351 && mouseY < 363){
    fill(219, 176, 83);
    rect(mouseX, mouseY, 500, 120);
    textSize(24);
    fill("black");
    text("Name:", mouseX+5, mouseY+28);
    text("Oscars Won:", mouseX+5, mouseY+53);
    text("Times Nominated:", mouseX+5, mouseY+79);
    text("Fun Fact:", mouseX+5, mouseY+105);
    fill(53, 161, 66);
    text("Meryl Streep", mouseX+78, mouseY+28);
    text("3", mouseX+148, mouseY+53);
    text("21", mouseX+200, mouseY+79);
    text("Most acting nominations of all time", mouseX+109, mouseY+105);
  }

  //Loads in Stats of Oscar Winner
  stats;
}

function showFace() {
    for (let d = 0; d < numRows; d++) {
      bar_dist = dist(wins[d].x, wins[d].y, mouseX, mouseY);

      if (bar_dist < oscar[d].bar_radius) {
        //celeb[d];
        oscar[d].displayData();
      }
    }

    //baby way out, if I can't get the complex hover to work
    /*
    if(mouseX && mouseY === "Walt Disney"){
      print("Name:", width/2, height/2);
      print("Number of Times Nominated:", this.data_split[1]);
      print("Oscars Won:", this.data_split[2]);
    }
    */
}

class stats{
  constructor(){
    this.x;
    this.y;

    this.bar_radius;
    this.design_num;
    
    this.data;
    this.data_split;

    this.init;
    this.printData;
  }
  
  init(){
    ths.design_num = int(random(5));
    this.bar_radius = rect.width/10;

    this.x = mouseX;
    this.y = mouseY;

    this.data = oscar_data[data_count];
    this.data_split = split(this.data, ',');

    if(data_count != oscar_data.length){
      data_count++;
    }else{
      print("Its Over.");
    }
  }


  //Displays a person's Oscar stats
  displayData(){
    fill(219, 176, 83);
    rect(mouseX, mouseY, 500, 120);

    textAlign(LEFT);
    fill("black");

    text("Name:", mouseX+10, mouseY+30);
    text("Number of Times Nominated:", mouseX+10, mouseY+55);
    text("Oscars Won:", mouseX+10, mouseY+80);

    fill(53, 161, 66);
    text(ths.data_split[0], mouseX+140, mouseY+30);
    text(ths.data_split[1], mouseX+235, mouseY+55);
    text(ths.data_split[2], mouseX+290, mouseY+80);
  }

  printData(){
    //If unable to get the data
      if(this.data_split[0] == "") {
        this.data_split[0] = "undefined";
      }
      
      if(this.data_split[1] == "") {
        this.data_split[1] = "undefined";
      }
      
      if(this.data_split[2] == "") {
        this.data_split[2] = "undefined";
      }

    //Displays Oscar Stats
      print("Name:", this.data_split[0]);
      print("Number of Times Nominated:", this.data_split[1]);
      print("Oscars Won:", this.data_split[2]);
  }
}
