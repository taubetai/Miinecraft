var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_width = 30;
player_x = 10;
player_y = 10;
var player_object= "";
function player_update()
{
fabric.Image.fromURL("player.png ", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);


});

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
  console.log(keypressed = e.keyCode);
   if(e.shiftKey == true && keyPressed == '80')
{
    consolele.log("p and shift pressed together");
    block_image_width = block_image_width + 10;
    block_image_width = block_image_height + 10;
    document.getElementById("current_width").innerHtml = block_image_width;
    document.getElementById("current_height").innerHtml = block_image_height;
}
if(e.shiftKey  && keyPressed == '77')
{
    consolele.log("m and shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_width = block_image_height - 10;
    document.getElementById("current_width").innerHtml = block_image_width;
    document.getElementById("current_height").innerHtml = block_image_height;
}
if(keyPressed == '38')
{
    up();
    console.log("up")
}
if(keyPressed == '40')
{
    down();
    console.log("down")
}
if(keyPressed == '37')
{
    left();
    console.log("left")
}
if(keyPressed == '39')
{
    right();
    console.log("right")
}
if(keyPressed == '87')
{
new_image('wall.png');
console.log("w");
}
if (keyPressed == '71')
{
    new_image('ground.png');
    console.log ("g");
}
if(keyPressed == '76')
{
    new_image('light_green.png');
    console.log("l");
}
if(keyPressed == '82')
{
    new_image('trunk');
    console.log("t");
}
if(keyPressed == '89')
{
    new_image('yellow_wall.png');
    console.log("y");
}
if(keyPressed == '68')
{
    new_image('dark_green.png');
    console.log("d");
}
if(keyPressed == '85')
{
    new_image('unique.png');
    console.log("u");
}
if(keyPressed == '67')
{
    new_image('clound');
    console.log("c");
}
}
function up()

{
    
   if (player_y >=0)
    {
    player_y = player_y - block_image_height;
    console.log("block image height = "+ block_image_height);
    console.log("When up arrow key is pressed, X = " + player_x + "Y ="+player_y);
     canvas.remove(player_object);
    player_update();
}
}
function down()

{
    
   if (player_y<=500)
    {
    player_y = player_y + block_image_height;
    console.log("block image height = "+ block_image_height);
    console.log("When down arrow key is pressed, X = " + player_x + "Y ="+player_y);
     canvas.remove(player_object);
    player_update();
}
}
function left()

{
    
    if(player_x >=0)
    {
    player_y = player_y + block_image_height;
    console.log("block image height = "+ block_image_height);
    console.log("When left arrow key is pressed, X = " + player_x + "Y ="+player_y);
     canvas.remove(player_object);
    player_update();
}
}
function dowm()

{
    if
    (player_x<=850)
    {
    player_y = player_y + block_image_height;
    console.log("block image height = "+ block_image_height);
    console.log("When right arrow key is pressed, X = " + player_x + "Y ="+player_y);
     canvas.remove(player_object);
    player_update();
}
}