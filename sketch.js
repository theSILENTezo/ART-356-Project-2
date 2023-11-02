let oscar = [];
let url = "Celebrities_Oscars.csv";

//background image
  let bg;

//images array
    let celeb = [];

function preload() {
  oscar_data = loadTable(url, 'csv', 'header');

  //images
    bg = loadImage("images/oscars_bg.jpg");

   celeb[0] = loadImage("images/Disney_Oscar.jpg");
   celeb[1] = loadImage("images/Leonardo_DiCaprio.jpg");
   celeb[2] = loadImage("images/Katharine_Hepburn.jpg");
   celeb[3] = loadImage("images/Daniel_Day-Lewis.jpg");
   celeb[4] = loadImage("images/Dennis_Muren.jpg");
   celeb[5] = loadImage("images/Meryl_Streep.jpg");
}

function setup() {
  let canvas = createCanvas(1080, 500);
}

function draw() {
  background(bg);
  
  //Loads in csv's data
  if (oscar_data){
    //Receives Data from csv
      let numRows = oscar_data.getRowCount();

      let wins = oscar_data.getColumn('Won');
      let noms = oscar_data.getColumn('Nominated');
      let name = oscar_data.getColumn('Celebrity');
    
    //Creates bar graph 
    for(let i = 0; i < numRows; i++){
      let x = 100;
      let y = 100 + i*50;
      let w = wins[i]*30;
      let h = 10;

      fill(255);
      textSize(14);
      text(name[i], x, y-5);

      rect(x, y, w, h);
    }
  }

  //Displays more stats if user hovers over bar
    showFace();

}

function showFace() {
  //If user hovers over a bar, display image and oscar stats

  //Disney
    if(mouseX > 100 && mouseX < 765 && mouseY > 90 && mouseY < 120){
      fill(219, 176, 83);
      rect(mouseX, mouseY, 610, 120);
      image(celeb[0], mouseX, mouseY, 120, 120);
      textSize(24);
      fill("black");
      text("Name:", mouseX+125, mouseY+28);
      text("Oscars Won:", mouseX+125, mouseY+53);
      text("Times Nominated:", mouseX+125, mouseY+79);
      text("Fun Fact:", mouseX+125, mouseY+105);
      fill(53, 161, 66);
      text("Walt Disney", mouseX+203, mouseY+28);
      text("22", mouseX+265, mouseY+53);
      text("59", mouseX+325, mouseY+79);
      text("Most wins by a single person", mouseX+234, mouseY+105);
    }

  //DiCaprio
    if(mouseX > 100 && mouseX < 135 && mouseY > 150 && mouseY < 165){
      fill(219, 176, 83);
      rect(mouseX, mouseY, 610, 120);
      image(celeb[1], mouseX, mouseY, 120, 120);
      textSize(24);
      fill("black");
      text("Name:", mouseX+125, mouseY+28);
      text("Oscars Won:", mouseX+125, mouseY+53);
      text("Times Nominated:", mouseX+125, mouseY+79);
      text("Fun Fact:", mouseX+125, mouseY+105);
      fill(53, 161, 66);
      text("Leonardo DiCaprio", mouseX+203, mouseY+28);
      text("1", mouseX+265, mouseY+53);
      text("7", mouseX+325, mouseY+79);
      text("Finally got one", mouseX+234, mouseY+105);
    }

  //Hepburn
    if(mouseX > 100 && mouseX < 222 && mouseY > 200 && mouseY < 215){
      fill(219, 176, 83);
      rect(mouseX, mouseY, 610, 120);
      image(celeb[2], mouseX, mouseY, 120, 120);
      textSize(24);
      fill("black");
      text("Name:", mouseX+125, mouseY+28);
      text("Oscars Won:", mouseX+125, mouseY+53);
      text("Times Nominated:", mouseX+125, mouseY+79);
      text("Fun Fact:", mouseX+125, mouseY+105);
      fill(53, 161, 66);
      text("Katharine Hepburn", mouseX+203, mouseY+28);
      text("4", mouseX+265, mouseY+53);
      text("12", mouseX+325, mouseY+79);
      text("Most wins for best actress", mouseX+234, mouseY+105);
    }

  //Day-Lewis
    if(mouseX > 100 && mouseX < 193 && mouseY > 250 && mouseY < 265){
      fill(219, 176, 83);
      rect(mouseX, mouseY, 610, 120);
      image(celeb[3], mouseX, mouseY, 120, 120);
      textSize(24);
      fill("black");
      text("Name:", mouseX+125, mouseY+28);
      text("Oscars Won:", mouseX+125, mouseY+53);
      text("Times Nominated:", mouseX+125, mouseY+79);
      text("Fun Fact:", mouseX+125, mouseY+105);
      fill(53, 161, 66);
      text("Daniel Day-Lewis", mouseX+203, mouseY+28);
      text("3", mouseX+265, mouseY+53);
      text("6", mouseX+325, mouseY+79);
      text("Most wins for best actor", mouseX+234, mouseY+105);
    }

  //Muren
    if(mouseX > 100 && mouseX < 376 && mouseY > 300 && mouseY < 315){
      fill(219, 176, 83);
      rect(mouseX, mouseY, 610, 120);
      image(celeb[4], mouseX, mouseY, 120, 120);
      textSize(24);
      fill("black");
      text("Name:", mouseX+125, mouseY+28);
      text("Oscars Won:", mouseX+125, mouseY+53);
      text("Times Nominated:", mouseX+125, mouseY+79);
      text("Fun Fact:", mouseX+125, mouseY+105);
      fill(53, 161, 66);
      text("Dennis Muren", mouseX+203, mouseY+28);
      text("9", mouseX+265, mouseY+53);
      text("13", mouseX+325, mouseY+79);
      text("Most wins for visual effects", mouseX+234, mouseY+105);
    }

  //Streep
    if(mouseX > 100 && mouseX < 193 && mouseY > 351 && mouseY < 363){
      fill(219, 176, 83);
      rect(mouseX, mouseY, 610, 120);
      image(celeb[5], mouseX, mouseY, 120, 120);
      textSize(24);
      fill("black");
      text("Name:", mouseX+125, mouseY+28);
      text("Oscars Won:", mouseX+125, mouseY+53);
      text("Times Nominated:", mouseX+125, mouseY+79);
      text("Fun Fact:", mouseX+125, mouseY+105);
      fill(53, 161, 66);
      text("Meryl Streep", mouseX+203, mouseY+28);
      text("3", mouseX+265, mouseY+53);
      text("21", mouseX+325, mouseY+79);
      text("Most acting nominations of all time", mouseX+234, mouseY+105);
    }
}
