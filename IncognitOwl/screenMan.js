clearColor = [0, 0, 0, 0];
use2D = true;
initGame("canvas");

//Create a screen class
function Screen(alwaysUpdate, alwaysDraw) {
    //Call the Sprite constructor to copy any object properties
    Sprite.call(this);
    
    //These determine if the screen should be update/drawn when it is not the top screen
    this.alwaysUpdate = alwaysUpdate;
    this.alwaysDraw = alwaysDraw;
    
    //Has the screen been initialized
    this.initialized = false;
    
    //Create a stage for the screen that we can add sprites to
    this.stage = new Sprite();
    this.addChild(this.stage);
    
    //Create a gui object which extends sprite and supports buttons
    this.gui = new GUI(gInput);
    this.addChild(this.gui);
}
//Inherit all Sprite properties
Screen.prototype = new Sprite();

//Called once to set up anything that needs to be called after the game is initialized
//some values aren't available before initGame such as any canvas property
Screen.prototype.init = function(){
};

//Create a screen manager class
function ScreenManager() {
    //Call the Sprite constructor to copy any object properties
    Sprite.call(this);

    this.screens = new List();
}
//Inherit all Sprite properties
ScreenManager.prototype = new Sprite();

//Push a screen on to the stack
ScreenManager.prototype.push = function(screen){
    this.screens.remove(screen);
    this.screens.push(screen);
};

//Pop a screen off of the stack
ScreenManager.prototype.pop = function(){
    this.screens.tail.item.gui.visible = false;
    return this.screens.pop();
};

//Remove a screen from the stack
ScreenManager.prototype.remove = function(screen){
    screen.gui.visible = false;
    this.screens.remove(screen);
};

//Override th defult update function
ScreenManager.prototype.update = function (d) {
    var screens = this.screens;
    
    //Loop through the screens and update if they are supposed to always update or if they ar the top screen
    for (var node = screens.head; node != null; node = node.link) {
        var screen = node.item;
        
        //The gui wasn't exactly made for this situation so we need to hide it if it's not in the current screen
        if(node != screens.tail){
            screen.gui.visible = false;
        }else{
            screen.gui.visible = true;
        }
        
        if (screen.alwaysUpdate || node == screens.tail) {
            if(!screen.initialized){
                screen.init();
                screen.initialized = true;
            }
            screen.update(d);
        }
    }
};

//Override the defualt draw function the same as the update function except we're drawing
ScreenManager.prototype.draw = function (ctx) {
    var screens = this.screens;
    
    for (var node = screens.head; node != null; node = node.link) {
        var screen = node.item;
        if (screen.alwaysDraw || node == screens.tail) {
            screen.draw(ctx);
        }
    }
};

//Create a new screen manager
var screenMan = new ScreenManager();
//Add it as a child of the world.
//Here we're taking advantage of the sprite hierarchy structure
world.addChild(screenMan);

//Create a main menu screen
var mainMenu = new Screen(false, false);
//Optionally set a background for the screen
mainMenu.image = Textures.load("https://raw.github.com/moschwar/CMPS20/85733bebcd9156b6407a82b347c2b07049d7ab48/IncognitOwl/Resources/temporary_menu.png");
screenMan.push(mainMenu);

//Override the empty init function to set some properties
mainMenu.init = function(){
    //Since we set a background we want the screen to fill  the canvas
    this.width = canvas.width;
    this.height = canvas.height;
    
    this.gui.x = canvas.width/2;
    this.gui.y = canvas.height/2;
    
    //Add some sprites to the main menu    
    var newGame = new TextButton("New Game");
    newGame.center = true;
    newGame.label.dropShadow = true;
    newGame.label.fontSize = 30;
    newGame.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
    this.gui.addChild(newGame);
    
    newGame.func = function(){
        screenMan.remove(mainMenu);
        screenMan.push(gameScreen);
    };
    
    var resumeGame = new TextButton("Level Select");
    resumeGame.y = 50;
    resumeGame.center = true;
    resumeGame.label.dropShadow = true;
    resumeGame.label.fontSize = 30;
    resumeGame.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
    this.gui.addChild(resumeGame);
};

var pauseMenu = new Screen(false, true);
//Override the empty init function to set some properties
pauseMenu.init = function(){
    //Since we set a background we want the screen to fill  the canvas
    this.width = canvas.width;
    this.height = canvas.height;
    
    this.gui.x = canvas.width/2 + -world.x;
    this.gui.y = canvas.height/2 + -world.y;
    
    var pause = new TextBox("[PAUSED]");
    pause.y = -50;
    pause.center = true;
    pause.fontSize = 40;
    pause.drawBG = true;
    pause.bgColor = "#8D8D8D";
    this.gui.addChild(pause);
    
    var resumeGame = new TextBox("Esc to Resume");
    resumeGame.center = true;
    resumeGame.fontSize = 24;
    resumeGame.drawBG = true;
    resumeGame.bgColor = "#8D8D8D";
    this.gui.addChild(resumeGame);
    
    var returnToMenu = new TextBox("Space to Return to Main Menu");
    returnToMenu.y = 50;
    returnToMenu.center = true;
    returnToMenu.fontSize = 24;
    returnToMenu.drawBG = true;
    returnToMenu.bgColor = "#8D8D8D";
    returnToMenu.border = 0;
    returnToMenu.borderColor = "purple";
    this.gui.addChild(returnToMenu);
    returnToMenu.func = function(){
        screenMan.remove(pauseMenu);
        screenMan.remove(gameScreen);
    };
};

var scriptScreen = new Screen(false, true);

scriptScreen.init = function(){
	
	this.width = canvas.width;
    this.height = canvas.height;
    
    this.gui.x = canvas.width/2 + -world.x;
    this.gui.y = canvas.height/2 + -world.y;
    
	var text = new TextBox(tutorialText[0]);
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
    
	var jax = new Sprite();
	jax.x = 70 + -world.x;
	jax.y = 370 + -world.y;
	jax.height = 150;
	jax.width = 200;
	jax.image = Textures.load("https://raw.github.com/moschwar/CMPS20/master/IncognitOwl/Resources/Jax_text.png");
	scriptScreen.gui.addChild(jax);

	var athene = new Sprite();
	athene.x = 580 + -world.x;
	athene.y = 350 + -world.y;
	athene.height = 150;
	athene.width = 170;
	athene.image = Textures.load("https://raw.github.com/moschwar/CMPS20/master/IncognitOwl/Resources/Titan_text_update-1.png");
	scriptScreen.stage.addChild(athene);

};

var gameScreen = new Screen(false, true);
gameScreen.image = Textures.load("https://raw.github.com/moschwar/CMPS20/master/IncognitOwl/Resources/TutorialLevelUpdate-4.png");

//Override the empty init function to set some properties
gameScreen.init = function(){
    //Since we set a background we want the screen to fill  the canvas
    this.width = 1194;
    this.height = 1050;
    start();
};



gInput.addFunc(27, function(){
    if(screenMan.screens.find(gameScreen) && !screenMan.screens.find(pauseMenu)){
        pauseMenu.gui.x = canvas.width/2 + -world.x;
        pauseMenu.gui.y = canvas.height/2 + -world.y;
        screenMan.push(pauseMenu);
    } else if(screenMan.screens.find(pauseMenu)){
        screenMan.remove(pauseMenu);
    }
});

gInput.addFunc(32, function(){
    if(screenMan.screens.find(pauseMenu)){
        location.reload();
    }
});