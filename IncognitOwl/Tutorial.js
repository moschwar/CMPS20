function start (){
var bg = new Sprite(); 

bg.width = 1194;
bg.height = 1050;
    
var can = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
world.x = -70 * 1;
world.y = -70 * 5;

var lights = new Array();
lights[0] = new Light(70*3.5, 70*5, 1, "down");

lights[0].update = function (d) {
    if (lights[0].reverse) {
        lights[0].rot -= 0.01;
    } else {
        lights[0].rot += 0.01;
    }
    if (lights[0].rot > lights[0].rotation) {
        lights[0].reverse = !lights[0].reverse;
    } else if (lights[0].rot < 0) {
        lights[0].reverse = !lights[0].reverse;
    }
    if(lights[0].direc == "up") {
        var x1 = lights[0].origin.x + Math.cos(lights[0].rot) * -100;
        var y1 = lights[0].origin.y + Math.sin(lights[0].rot) * -100;
        var x2 = lights[0].origin.x + Math.cos(lights[0].rot + .1) * -100;
        var y2 = lights[0].origin.y + Math.sin(lights[0].rot + .1) * -100;
        var x3 = lights[0].origin.x + Math.cos(lights[0].rot + .2) * -100;
        var y3 = lights[0].origin.y + Math.sin(lights[0].rot + .2) * -100;
        var x4 = lights[0].origin.x + Math.cos(lights[0].rot + .3) * -100;
        var y4 = lights[0].origin.y + Math.sin(lights[0].rot + .3) * -100;
    } else if(lights[0].direc == "down") {
        var x1 = lights[0].origin.x + Math.cos(lights[0].rot) * 100;
        var y1 = lights[0].origin.y + Math.sin(lights[0].rot) * 100;
        var x2 = lights[0].origin.x + Math.cos(lights[0].rot + .1) * 100;
        var y2 = lights[0].origin.y + Math.sin(lights[0].rot + .1) * 100;
        var x3 = lights[0].origin.x + Math.cos(lights[0].rot + .2) * 100;
        var y3 = lights[0].origin.y + Math.sin(lights[0].rot + .2) * 100;
        var x4 = lights[0].origin.x + Math.cos(lights[0].rot + .3) * 100;
        var y4 = lights[0].origin.y + Math.sin(lights[0].rot + .3) * 100;
    } else if(lights[0].direc == "right") {
        var x1 = lights[0].origin.x + Math.sin(lights[0].rot) * 100;
        var y1 = lights[0].origin.y + Math.cos(lights[0].rot) * 100;
        var x2 = lights[0].origin.x + Math.sin(lights[0].rot + .1) * 100;
        var y2 = lights[0].origin.y + Math.cos(lights[0].rot + .1) * 100;
        var x3 = lights[0].origin.x + Math.sin(lights[0].rot + .2) * 100;
        var y3 = lights[0].origin.y + Math.cos(lights[0].rot + .2) * 100;
        var x4 = lights[0].origin.x + Math.sin(lights[0].rot + .3) * 100;
        var y4 = lights[0].origin.y + Math.cos(lights[0].rot + .3) * 100;
    } else if(lights[0].direc == "left") {
        var x1 = lights[0].origin.x + Math.sin(lights[0].rot) * -100;
        var y1 = lights[0].origin.y + Math.cos(lights[0].rot) * -100;
        var x2 = lights[0].origin.x + Math.sin(lights[0].rot + .1) * -100;
        var y2 = lights[0].origin.y + Math.cos(lights[0].rot + .1) * -100;
        var x3 = lights[0].origin.x + Math.sin(lights[0].rot + .2) * -100;
        var y3 = lights[0].origin.y + Math.cos(lights[0].rot + .2) * -100;
        var x4 = lights[0].origin.x + Math.sin(lights[0].rot + .3) * -100;
        var y4 = lights[0].origin.y + Math.cos(lights[0].rot + .3) * -100;
    }
    
    
    /*for (var i = 0; i < bcollisions.length; i++) {
        if (!(bcollisions[i] == undefined) && bcollisions[i].occurred) {
            if(i == 0){
            lights[0].lp[0].x = bcollisions[i].point.x;
            lights[0].lp[0].y = bcollisions[i].point.y;
            }
            if(i == 1){
            lights[0].lp[1].x = bcollisions[i].point.x;
            lights[0].lp[1].y = bcollisions[i].point.y;
            }
            if(i == 2){
            lights[0].lp[2].x = bcollisions[i].point.x;
            lights[0].lp[2].y = bcollisions[i].point.y;
            }
            if(i == 3){
            lights[0].lp[3].x = bcollisions[i].point.x;
            lights[0].lp[3].y = bcollisions[i].point.y;
            }
            //break;
        } 
    }*/
    //if(!(!(bcollisions[0] == undefined) && bcollisions[0].occurred)) {
        lights[0].lp[0].x = x1;
        lights[0].lp[0].y = y1;
        lights[0].lp[1].x = x2;
        lights[0].lp[1].y = y2;
        lights[0].lp[2].x = x3;
        lights[0].lp[2].y = y3;
        lights[0].lp[3].x = x4;
        lights[0].lp[3].y = y4;
    //}

};

function Light(x, y, rotation, direc){
    light = new Object();
    light.origin = new Vector(x, y);
    light.lp = new Array(4);
    light.rot = 0;
    light.reverse = false;
    light.rotation;
    if(rotation == 0){
        light.rotation = 1.25;
    } else if (rotation == 1){
        light.rotation = 2.9;
    }
    light.direc = direc;
    for (var i = 0; i < light.lp.length; i++) {
        light.lp[i] = new Vector(light.origin.x, light.origin.y);
    }
    return light;
}


var xcenter = 420;
var ycenter = 315;
var traps = 0;

var trap = new Sprite();
trap.width = 35;
trap.height = 35;
trap.image = Textures.load("https://raw.github.com/moschwar/CMPS20/master/IncognitOwl/Resources/snap_trap-png.png");

var win = new Sprite();
win.image = Textures.load("http://static2.wikia.nocookie.net/__cb20100728113416/mafiawars/images/7/7e/Boss_title_youwin.png");
win.width = 70 * 4;
win.height = 70 * 1;
win.x = 70 * 11;
win.y = 70 * 2;

var alert = new Sprite();
alert.image = Textures.load("http://www.universalcargo.com/Portals/57382/images/shipping%20alert.png");
alert.width = 70 * 2;
alert.height = 70 * 2;
alert.x = 70 * 8;
alert.y = 70 * 8;


/*var light = new Sprite();
light.image = Textures.load("https://raw.github.com/moschwar/CMPS20/master/IncognitOwl/Resources/light.png");
light.width = 72;
light.height = 140;
light.x = 70 * 3;
light.y = 70 * 5;*/

var dirts = new Array();
for (var i = 0; i < 10; i++) {
	dirts[i] = new Object();
}
dirts.at = function(x, y) {
	var coords = new Object();
	coords.x = 70 * x;
	coords.y = 70 * y;
	return coords;
};

//make sure to scale the dirts array
dirts[0] = dirts.at(8, 6);
dirts[1] = dirts.at(2, 5);
dirts[2] = dirts.at(3, 5);
dirts[3] = dirts.at(4, 5);
dirts[4] = dirts.at(2, 6);
dirts[5] = dirts.at(3, 6);
dirts[6] = dirts.at(4, 6);
dirts[7] = dirts.at(2, 7);
dirts[8] = dirts.at(3, 7);
dirts[9] = dirts.at(4, 7);

var walls = new Array();
for (var i = 0; i < 14; i++) {
	walls[i] = new Object();
}

walls.u = function(x1, y, x2) {
	var coords = new Object();
	coords.left = 70 * x1;
	coords.right = 70 * x2;
	coords.bot = 70 * y;
	coords.top = coords.bot - 4;
	return coords;
};
walls.d = function(x1, y, x2) {
	var coords = new Object();
	coords.left = 70 * x1;
	coords.top = 70 * y;
	coords.right = 70 * x2;
	coords.bot = coords.top + 3;
	return coords;
};
walls.l = function(x, y1, y2) {
	var coords = new Object();
	coords.top = 70 * y1;
	coords.right = 70 * x;
	coords.left = coords.right - 3;
	coords.bot = 70 * y2;
	return coords;
};
walls.r = function(x, y1, y2) {
	var coords = new Object();
	coords.left = 70 * x;
	coords.top = 70 * y1;
	coords.right = coords.left + 3;
	coords.bot = 70 * y2;
	return coords;
};

//MAKE SURE TO SET WALLS LENGTH
walls[0] = walls.l(2, 5, 13);
walls[1] = walls.u(2, 5, 12);
walls[2] = walls.r(4, 8, 13);
walls[3] = walls.d(2, 13, 4);
walls[4] = walls.d(4, 8, 15);
walls[5] = walls.r(7, 6, 7);
walls[6] = walls.u(7, 7, 8);
walls[7] = walls.r(15, 0, 8);
walls[8] = walls.l(12, 0, 5);
walls[9] = walls.u(12, 0, 15);
walls[10] = walls.r(13, 6, 7);
walls[11] = walls.d(13, 6, 14);
walls[12] = walls.u(13, 7, 14);
walls[13] = walls.l(14, 6, 7);

var boxes = new Array();
for (var i = 0; i < 2; i++) {
	boxes[i] = new Sprite();
	boxes[i].image = Textures.load("https://raw.github.com/moschwar/CMPS20/master/IncognitOwl/Resources/box_game_sprite_update-2.png");
	boxes[i].width = 70;
	boxes[i].height = 70;
	boxes[i].x = -70;
	boxes[i].y = 0;
	boxes[i].placed = false;
	world.addChild(boxes[i]);
}

gInput.addBool(32, "place");

var red = new Sprite();
red.image = Textures.load("http://i.imgur.com/TF4RvJN.png");
var green = new Sprite();
green.image = Textures.load("http://i.imgur.com/MnKEQ5X.png");

var end1 = new Sprite();
var end2 = new Sprite();
var end3 = new Sprite();
end1.width = 70;
end2.width = 70;
end3.width = 70;
end1.height = 35;
end2.height = 35;
end3.height = 35;
end1.x = 70 * 12;
end2.x = 70 * 13;
end3.x = 70 * 14;
end1.y = 0;
end2.y = 0;
end3.y = 0;


var cursor = new Sprite();
cursor.image = red.image;
cursor.width = 70;
cursor.height = 70;
cursor.x = 70 * 2;
cursor.y = 70 * 11;
cursor.speed = 70;

cursor.isdirt = function() {
	for (var i = 0; i < dirts.length; i++) {
		if (this.x == dirts[i].x && this.y == dirts[i].y) {
			return true;
		}
	}
	return false;
};

cursor.update = function() {
	if (!this.moving) {
		if (this.isdirt()) {
			this.image = green.image;
		} else {
			this.image = red.image;
		}
		if (gInput.up) {
			this.moving = true;
            if(this.y != 70){
                this.y -= this.speed;
            }
            if (world.y < -72 && this.y < ycenter + 70 * 4) {
                world.y += this.speed;
            }
			setTimeout(function() {
				cursor.moving = false;
			}, 200);
		} else if (gInput.down) {
			this.moving = true;
            if(this.y != 910){
                this.y += this.speed;
            }
            if (world.y > -308 && this.y > ycenter + 70) {
                world.y -= this.speed;
            }
			setTimeout(function() {
				cursor.moving = false;
			}, 200);
		} else if (gInput.left) {
			this.moving = true;
            if(this.x != 70){
               this.x -= this.speed;
            }
            if (world.x < -72 && this.x < xcenter + 70 * 4) {
                world.x += this.speed;
            }
			setTimeout(function() {
				cursor.moving = false;
			}, 200);
		} else if (gInput.right) {
			this.moving = true;
            if(this.x != 1120){
                this.x += this.speed;
            }
            if (world.x > -308 && this.x > xcenter + 70) {
                world.x -= this.speed;
            }
			setTimeout(function() {
				cursor.moving = false;
			}, 200);
		}
        if(screenMan.screens.find(pauseMenu)){
            cursor.speed = 0;
            for(var k = 0; k < 2; k++){
                boxes[k].alpha = .2;
            }    
        } else if (!screenMan.screens.find(pauseMenu)){
            cursor.speed = 70;
            for(var k = 0; k < 2; k++){
                boxes[k].alpha = 1;
            }
        }
		if (gInput.place && !boxes[0].placed && this.isdirt()) {
			this.moving = true;
			boxes[0].x = this.x;
			boxes[0].y = this.y;
			boxes[0].placed = true;
			if (boxes[0].x == 70 * 3 && boxes[0].y == 70 * 5) {
				world.removeChild(light);
			}
			setTimeout(function() {
				cursor.moving = false;
			}, 200);
		} else if (gInput.place && !boxes[1].placed && this.isdirt()) {
			this.moving = true;
			boxes[1].x = this.x;
			boxes[1].y = this.y;
			boxes[1].placed = true;
			this.remove();
			world.x = -70 * 1;
			world.y = -70 * 5;
			world.addChild(player);
			world.addChild(guard);
			//textOne();
            setTimeout(function () {
                traps = 1;
            }, 300);
			world.addChild(end1);
			world.addChild(end2);
			world.addChild(end3);
			if (!((boxes[0].x == 70 * 3 && boxes[0].y == 70 * 5) || (boxes[1].x == 70 * 3 && boxes[1].y == 70 * 5))) {
				world.addChild(light);
			} else {
				light.x = 0;
			}
			if (!((boxes[0].x == 70 * 8 && boxes[0].y == 70 * 6) || (boxes[1].x == 70 * 8 && boxes[1].y == 70 * 6))) {
				guard.vision = 1;
			} else {
				guard.vision = 0;
			}
		}
	}
};

var guard = new Sprite();
guard.image = Textures.load("https://raw.github.com/moschwar/CMPS20/master/IncognitOwl/Resources/bat_full.png");
guard.width = 67;
guard.height = 67;
guard.x = 70 * 8 + 2;
guard.y = 70 * 4;
guard.alerted = false;
guard.frameWidth = 63;
guard.frameHeight = 49;
guard.frameCount = 21;
guard.frameRate = 0;
guard.moveRate = 0;

function short_collision(px, py) {
	if (px > 70 * 8 - 35 && px < 70 * 9 - 30 && py > 70 * 5 - 35 && py < 70 * 6) {
		return true;
	}
	return false;
}

function long_collision(px, py) {
	if (px > 70 * 8 - 35 && px < 70 * 9 - 30 && py > 70 * 5 - 35 && py < 70 * 8) {
		return true;
	}
	return false;
}

var player = new Sprite();
player.image = Textures.load("https://raw2.github.com/moschwar/CMPS20/master/IncognitOwl/Resources/Jax_walk_FULL.png");
player.width = 67;
player.height = 67;
player.x = 70 * 2.5;
player.y = 70 * 11.5;
player.tl = new Vector(player.x, player.y); //top left
player.tr = new Vector((player.x + player.width), player.y); //top right
player.bl = new Vector(player.x, (player.y + player.height)); //bottom left
player.br = new Vector((player.x + player.width), (player.y + player.height)); //bottom right

player.frameWidth = 62.8;
player.frameHeight = 49;
player.frameCount = 20;
player.frameRate = 7;
player.moveRate = 7;

//Add all of the animatios at once
//First supply an array of animations names
//Then supply an array of animation lengths
//This assumes that the animations are one after the other
player.addAnimations(["up", "down", "left", "right"], [5, 5, 5, 5]);

//You cxan also add a single animation like this
//the numbers are the first frame and the length of the animation
player.addAnimation("idle", 0, 1);

//Set the starting animation
player.animation = "down";

gInput.addBool(40, "down");
gInput.addBool(38, "up");
gInput.addBool(37, "left");
gInput.addBool(39, "right");
player.speed = 3;
player.noright = false;
player.noleft = false;
player.noup = false;
player.nodown = false;

player.update = function(d) {
	//If the character misn't moving, set the frameRate to 0
	//If the character had an idle animation we wouldn't need to do this
    player.tl = new Vector(player.x, player.y); //top left
    player.tr = new Vector((player.x + player.width), player.y); //top right
    player.bl = new Vector(player.x, (player.y + player.height)); //bottom left
    player.br = new Vector((player.x + player.width), (player.y + player.height)); //bottom right
	this.frameRate = 0;
	var speed = this.speed * d;
	if (player.noleft || player.noright) {
		if (player.collisionvert(boxes[0]) || player.collisionvert(boxes[1])) {
			player.noleft = false;
			player.noright = false;
		}
	}
	if (player.noup || player.nodown) {
		if (player.collisionhorz(boxes[0]) || player.collisionhorz(boxes[1])) {
			player.noup = false;
			player.nodown = false;
		}
	}

	if (gInput.down) {
		player.noup = false;
		if (!player.nodown) {
			player.down(speed);
		}
	}
	if (gInput.up) {
		player.nodown = false;
		if (!player.noup) {
			player.up(speed);
		}
	}
	if (gInput.left) {
		player.noright = false;
		if (!player.noleft) {
			player.left(speed);
		}
	}
	if (gInput.right) {
		player.noleft = false;
		if (!player.noright) {
			player.right(speed);
		}
	}
	if (!guard.alerted) {
		if (guard.vision == 0 && short_collision(this.x, this.y)) {
			guard.frameRate = 7;
			guard.moveRate = 7;
			world.addChild(alert);
			guard.alerted = true;
		} else if (guard.vision == 1 && long_collision(this.x, this.y)) {
			guard.frameRate = 7;
			guard.moveRate = 7;
			world.addChild(alert);
			guard.alerted = true;
		}
		if (this.collision(light)) {
			guard.frameRate = 7;
			guard.moveRate = 7;
			world.addChild(alert);
			guard.alerted = true;
		}
		if(player.collision(end1) || player.collision(end2) || player.collision(end3)){
			world.addChild(win);
			guard.alerted = true;

		}
	}
    if(screenMan.screens.find(pauseMenu)){
        traps = 0;
        player.speed = 0;
        player.moveRate = 0;
        player.alpha = .5;
        for(var k = 0; k < 2; k++){
            boxes[k].alpha = .2;
        }    
    } else if (!screenMan.screens.find(pauseMenu)){
        player.speed = 2;
        player.moveRate = 7;
        player.alpha = 1;
        for(var k = 0; k < 2; k++){
            boxes[k].alpha = 1;
        }
    }
	if (gInput.place && traps != 0) {
        trap.x = player.x + 17.5;
        trap.y = player.y + 17.5;
        world.addChild(trap);
        trap--;
    }
    if(player.y < 550) {
    	textTwo();
    }
	//This just makes it so the position values are always whole numbers
	//which makes the pixel sprite look better
	//otherwise we get ugly pixel antialiasing
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
};

function startGame() {
    cursor.moving = true;
	setTimeout(function() {
	cursor.moving = false;
	}, 150);
	world.addChild(cursor);
}

world.draw = function(ctx) {
	this.drawChildren(ctx);
	ctx.fillStyle = "green";
	ctx.fillText("noup " + player.noup, 70, 80);
	ctx.fillText("nodown " + player.nodown, 70, 90);
	ctx.fillText("noleft " + player.noleft, 70, 100);
	ctx.fillText("noright " + player.noright, 70, 110);
	ctx.fillText("player.x " + player.x, 70, 120);
	ctx.fillText("player.y " + player.y, 70, 130);
    ctx.moveTo(lights[0].origin.x, lights[0].origin.y);
    ctx.lineTo(lights[0].lp[0].x, lights[0].lp[0].y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(lights[0].origin.x, lights[0].origin.y);
    ctx.lineTo(lights[0].lp[1].x, lights[0].lp[1].y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(lights[0].origin.x, lights[0].origin.y);
    ctx.lineTo(lights[0].lp[2].x, lights[0].lp[2].y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(lights[0].origin.x, lights[0].origin.y);
    ctx.lineTo(lights[0].lp[3].x, lights[0].lp[3].y);
    ctx.stroke();
};

// CONTROL CHECKS
player.up = function(speed) {
	var after = this.y - speed;
	if (upcollide(after, boxes[0]) || upcollide(after, boxes[1]) || wallcollideup(after)) {
		this.noup = true;
	} else {
        if(world.y < 0 && player.y < bg.height - ycenter){
           world.y += player.speed;
        }
		this.animation = "up";
		this.y = after;
		this.frameRate = this.moveRate;
	}
};
player.down = function(speed) {
	var after = this.y + speed;
	if (downcollide(after, boxes[0]) || downcollide(after, boxes[1]) || wallcollidedown(after)) {
		this.nodown = true;
	} else {
        if(player.y + 315 < bg.height && player.y > ycenter){
           world.y -= player.speed;
        }
		this.animation = "down";
		this.y = after;
		this.frameRate = this.moveRate;
	}
};
player.left = function(speed) {
	var after = this.x - speed;
	if (leftcollide(after, boxes[0]) || leftcollide(after, boxes[1]) || wallcollideleft(after)) {
		this.noleft = true;
	} else {
        if(world.x < 0  && player.x < bg.width - xcenter){
           world.x += player.speed;
        }
		this.animation = "left";
		this.x = after;
		this.frameRate = this.moveRate;
	}
};
player.right = function(speed) {
	var after = this.x + speed;
	if (rightcollide(after, boxes[0]) || rightcollide(after, boxes[1]) || wallcollideright(after)) {
		this.noright = true;
	} else {
        if(player.x + 420 < bg.width && player.x > xcenter){
           world.x -= player.speed;
        }
		this.animation = "right";
		this.x = after;
		this.frameRate = this.moveRate;
	}
};

//BOX COLLIDE CHECKS
var upcollide = function(after, obj) {
	if (after > obj.y && ((after < (obj.y + obj.height + 1) && !player.collisionvert(obj)))) {
		return true;
	} else {
		return false;
	}
};

var downcollide = function(after, obj) {
	if (((after + player.height) < (obj.y + obj.height)) && ((((after + player.height) > (obj.y - 1) && !player.collisionvert(obj))))) {
		return true;
	} else {
		return false;
	}
};

var leftcollide = function(after, obj) {
	if ((after > obj.x && ((after < (obj.x + obj.width + 1) && !player.collisionhorz(obj))))) {
		return true;
	} else {
		return false;
	}
};

var rightcollide = function(after, obj) {
	if (((after + player.width) < (obj.x + obj.width)) && ((((after + player.width) > (obj.x - 1) && !player.collisionhorz(obj))))) {
		return true;
	} else {
		return false;
	}
};

//WALL COLLIDE CHECKS
var wallcollideup = function(after) {
	for (var i = 0; i < walls.length; i++) {
		if (after - 1 > walls[i].top && after - 1 < (walls[i].bot) && player.wallcollisionvert(i)) {
			return true;
		}
	}
	return false;
};
var wallcollidedown = function(after) {
	for (var i = 0; i < walls.length; i++) {
		if ((after + 68) < (walls[i].bot) && (after + 68) > (walls[i].top) && player.wallcollisionvert(i)) {
			return true;
		}
	}
	return false;
};
var wallcollideleft = function(after) {
	for (var i = 0; i < walls.length; i++) {
		if (after - 1 > walls[i].left && after - 1 < walls[i].right && player.wallcollisionhorz(i)) {
			return true;
		}
	}
	return false;
};
var wallcollideright = function(after) {
	for (var i = 0; i < walls.length; i++) {
		if ((after + 68) < (walls[i].right) && (after + 68) > (walls[i].left) && player.wallcollisionhorz(i)) {
			return true;
		}
	}
	return false;
};

//BOX SLIDE OFF CHECKS
player.collisionvert = function(sprite) {
	if (this.x + this.width < sprite.x || this.x > sprite.x + sprite.width) {
		return true;
	} else {
		return false;
	}
};
player.collisionhorz = function(sprite) {
	if (this.y > sprite.y + sprite.height || this.y + this.height < sprite.y) {
		return true;
	} else {
		return false;
	}
};

//WALL SLIDE OFF CHECKS
player.wallcollisionhorz = function(i) {
	if (this.y > walls[i].bot || this.y + 67 < walls[i].top) {
		return false;
	} else {
		return true;
	}
};
player.wallcollisionvert = function(i) {
	if (this.x + 67 < walls[i].left || this.x > walls[i].right) {
		return false;
	} else {
		return true;
	}
};
player.collision = function(sprite) {
	if (this.x < sprite.x + sprite.width && this.x + this.width > sprite.x && this.y < sprite.y + sprite.height && this.y + this.height > sprite.y) {
		return true;
	} else {
		return false;
	}
};
    

function intersect(l0p0, l0p1, l1p0, l1p1) {
    var coll = new Object();
    coll.occurred = false;
    coll.point = new Vector(0, 0);

    var qp = l1p0.sub(l0p0);
    var r = l0p1.sub(l0p0);
    var s = l1p1.sub(l1p0);
    var rXs = r.cross(s);
    var qpXr = qp.cross(r);
    var qpXs = qp.cross(s);

    if (qpXr.length == 0 && qpXs.length == 0) { //colinear
        var min0 = Math.min(l0p0.x, l0p1.x);
        var max0 = Math.min(l0p0.x, l0p1.x);
        var min1 = Math.min(l1p0.x, l1p1.x);
        var max1 = Math.min(l1p0.x, l1p1.x);

        coll.occurred = (min0 <= max1) && (min1 <= max0);
        coll.point = l0p0.add(l0p1).add(l1p0).add(l1p1).div(4);
    } else if (rXs.length == 0) { //parallel
        coll.occurred = false;
    } else {
        var t = qpXs.div(rXs.z).z;
        var u = qpXr.div(rXs.z).z;

        coll.occurred = (t >= 0 && t <= 1 && u >= 0 && u <= 1);
        coll.point = l0p0.add(r.mult(t));
    }
    return coll;
}

var pcollisions = new Array();
var bcollisions = new Array();
startGame();

world.update = function(d){
    lights[0].update(d);
    //Simulate checking against 500 rectangles    
    for (var i = 0; i < 4 * 500; i++) {
        //collisions
        //if (pcollisions[i] == undefined) {continue;}
        pcollisions[0] = intersect(player.tl, player.br, lights[0].origin, lights[0].lp[0]);
        pcollisions[1] = intersect(player.tr, player.bl, lights[0].origin, lights[0].lp[0]);
        pcollisions[2] = intersect(player.tl, player.br, lights[0].origin, lights[0].lp[1]);
        pcollisions[3] = intersect(player.tr, player.bl, lights[0].origin, lights[0].lp[1]);
        pcollisions[4] = intersect(player.tl, player.br, lights[0].origin, lights[0].lp[2]);
        pcollisions[5] = intersect(player.tr, player.bl, lights[0].origin, lights[0].lp[2]);
        pcollisions[6] = intersect(player.tl, player.br, lights[0].origin, lights[0].lp[3]);
        pcollisions[7] = intersect(player.tr, player.bl, lights[0].origin, lights[0].lp[3]);
        //bcollisions[0] = intersect(bear.tl, bear.tr, lights[0].origin, lights[0].lp[0]);
        //bcollisions[1] = intersect(bear.tl, bear.tr, lights[0].origin, lights[0].lp[1]);
        //bcollisions[2] = intersect(bear.tl, bear.tr, lights[0].origin, lights[0].lp[2]);
        //bcollisions[3] = intersect(bear.tl, bear.tr, lights[0].origin, lights[0].lp[3]);
    }
    for (var i = 0; i < pcollisions.length; i++){
        if (pcollisions[i].occurred) {
            world.addChild(alert);
            break;
        }
    }
    this.updateChildren(d);
};
};