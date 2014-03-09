var levelOneText = new Array();
var levelScriptOne = false;
levelOneText[0] = "Featherwick: Alright Jax, today marks the start of a newer, more\npeaceful kind of warfare.";
levelOneText[1] = "Tallon:  Hoo-rah.\n";
levelOneText[2] = "Featherwick: Your objective is to reach that building at the back of\nthe military base.";
levelOneText[3] = "We have reason to believe there is a briefcase inside containing\nsome valuable intel concerning the Bat Army’s higher-ups.";
levelOneText[4] = "Tallon: All the way on the other side?\n";
levelOneText[5] = "Featherwick: Unfortunately. They have guards and searchlights within\nthe perimeter to prevent intruders like you.";
levelOneText[6] = "Make sure to utilize the tools we’ve provided you for both day and\nnight time.";
levelOneText[7] = "Tallon: Well it’s a lot of walking, but a stud like me can handle it. Now\nlet’s get tactical.";
levelOneText[8] = "Featherwick: Roger that. Be sure to keep your eyes peeled for light towers\nand guard entrances when placing crates in the day.";
levelOneText[9] = "Tallon: But of course. Let’s do this.\n";

//CURSOR ACTIVATOR
/* 		if (!cursor.active && levelScriptOne == true) {
			cursor.moving = true;
			setTimeout(function() {
				cursor.moving = false;
			}, 150);
			world.addChild(cursor);
			cursor.active = true;
		} */

function textLevelOne() {
	//Stop the game
	/* CHANGE LOCATION OF PLAYER DECLARATION FOR THIS TO WORK
	player.alpha = 0 ;
	traps = 0;
	player.speed = 0;
	player.moveRate = 0; */
	//Add text overlay
	var jax = new Sprite();
	jax.x = canvas.width / 2 + -world.x - 300;
	jax.y = canvas.height / 2 + -world.y + 75;
	jax.image = Textures.load("Resources/Jax_character_for_text.png");
	scriptScreen.stage.addChild(jax);

	var tyton = new Sprite();
	tyton.x = canvas.width / 2 + -world.x + 200;
	tyton.y = canvas.height / 2 + -world.y + 65;
	tyton.image = Textures.load("Resources/athena_character_text.png");
	scriptScreen.stage.addChild(tyton);

	var test = new TextBox(levelOneText[0]);
	test.x = 0 + -world.x;
	test.y = 480 + -world.y;
	test.minWidth = 840;
	test.fontSize = 24;
	test.drawBG = true;
	test.bgColor = "white";
	test.borderColor = "black";
	test.border = 4;
	test.padTop = 55;
	test.padBottom = 47;
	test.padLeft = 30;
	scriptScreen.stage.addChild(test);

	screenMan.push(scriptScreen);

	var i = 0;
	var pressed = true;

	test.update = function(d) {
		while (gInput.place && pressed == true && i < 10) {
			pressed = false;
			i++;
			test.text = levelOneText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 10) {
				levelScriptOne = true;
	            scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
			}
		}
	};
};