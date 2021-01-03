var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_img_h = 30;
block_img_w = 30;

player_object = "";
block_img_object = "";

function player_update() {

    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x

        });
        canvas.add(player_object);
    });
}

function new_img_update(get_img) {

    fabric.Image.fromURL(get_img, function (Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_w);
        block_img_object.scaleToHeight(block_img_h);
        block_img_object.set({
            top: player_y,
            left: player_x

        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e)

{
    keyPress = e.keyCode

    if (e.shiftKey == true && keyPress == "80") //shift and p pressed together
    {
        block_img_h = block_img_h + 10;
        block_img_w = block_img_w + 10;

        document.getElementById("block_height").innerHTML = block_img_h;
        document.getElementById("block_width").innerHTML = block_img_w;
    }

    if (e.shiftKey == true && keyPress == "77") //shift and m pressed together
    {
        block_img_h = block_img_h - 10;
        block_img_w = block_img_w - 10;

        document.getElementById("block_height").innerHTML = block_img_h;
        document.getElementById("block_width").innerHTML = block_img_w;
    }

    if (keyPress == "37") {

        left();
    }

    if (keyPress == "39") {

        right();
    }

    if (keyPress == "38") {

        up();
    }

    if (keyPress == "40") {

        down();
    }

    if (keyPress == "70") {

        new_img_update("ironman_face.png");

    }

    if (keyPress == "82") {

        new_img_update("spiderman_right_.png");

    }

    if (keyPress == "76") {

        new_img_update("thor_left.png");

    }
    if (keyPress == "66") {

        new_img_update("hulkd_body.png");

    }
    if (keyPress == "90") {

        new_img_update("ironman_legs.png");

    }
    


}

function up() {

    if (player_y >= 0) {
        player_y = player_y - block_img_h;
        canvas.remove(player_object);
        player_update();
    }

}

function down() {

    if (player_y <= 500) {
        player_y = player_y + block_img_h;
        canvas.remove(player_object);
        player_update();
    }

}

function left() {

    if (player_x >= 0) {
        player_x = player_x - block_img_w;
        canvas.remove(player_object);
        player_update();
    }

}

function right() {

    if (player_x <= 850) {
        player_x = player_x + block_img_w;
        canvas.remove(player_object);
        player_update();
    }

}