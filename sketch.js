let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTra-zd_xv5k8Fq_J5obXEdtjECbLFmK-vk8wYLFrYt37yiTD4kEOCA734UmLvH8yjMG3ms23CjdvQL/pub?gid=0&single=true&output=csv";
let bar_dist;
let data_count = 1;
//let celeb = [];

//images
    let disney;
    let leo;
    let kat;
    let dan;
    let dennis;
    let streep;

function preload() {
  data = loadTable(url, 'csv', 'header');

  
  //images
   disney = loadImage("Disney_Oscar.jgp");
   leo = loadImage("Leonardo_DiCaprio.jpg");
   kat = loadImage("Katharine_Hepburn.jgp");
   dan = loadImage("Daniel_Day-Lewis.jgp");
   dennis = loadImage("Dennis_Muren.jgp");
   streep = loadImage("Meryl Streep.jgp");
  
}

function setup() {
  let canvas = createCanvas(800, 800);
}

function draw() {
  background(0);

  if (data){
    let numRows = data.getRowCount();

    let wins = data.getColumn('Won');
    let noms = data.getColumn('Nominated');
    let celeb = data.getColumn('Celebrity');

    rect(50, 350, wins[0], 10);

    
    //Creates bar graph 
    for(let i = 0; i < numRows; i++){
      let x = 50;
      let y = 100 + i*50;
      let w = wins[i]*30;
      let h = 10;

      fill(255);
      textSize(14);
      text(celeb[i], x, y-5);

      rect(x, y, w, h);
    }
  }
}

function showFace() {
    for (let d = 0; d < data.length; d++) {
        if (bar_dist < data) {
          data[d].displayData();
        }
    }

    
}

class stats{
  constructor(){
    this.x;
    this.y;
    
    this.data;
    this.data_split;
  }
  


  displayData(){
    fill(255, 255, 180);
    rect(mouseX, mouseY, 500, 120);

    textAlign(LEFT);
    fill("black");

    text("Name:", mouseX+10, mouseY+30);
    text("Number of Times Nominated:", mouseX+10, mouseY+30);
    text("Oscars Won:", mouseX+10, mouseY+30);

    fill(82, 130, 88);
    text(ths.data_split[0], mouseX+140, mouseY+30);
    text(ths.data_split[1], mouseX+140, mouseY+30);
    text(ths.data_split[2], mouseX+140, mouseY+30);
  }

  printData(){


    if(this.data_split[0] == "") {
      this.data_split[0] = "undefined";
    }
    
    if(this.data_split[1] == "") {
      this.data_split[1] = "undefined";
    }
    
    if(this.data_split[2] == "") {
      this.data_split[2] = "undefined";
    }

    print("Name:", this.data_split[0]);
    print("Number of Times Nominated:", this.data_split[1]);
    print("Oscars Won:", this.data_split[2]);
  }
}
