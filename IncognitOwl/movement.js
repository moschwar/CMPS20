bplist00�_WebMainResource�	
^WebResourceURL_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingName_WebResourceFrameName_file:///index.htmlO�<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1265">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">clearColor = [1, 1, 1, 1];</p>
<p class="p1">use2D = true;</p>
<p class="p1">initGame("canvas");</p>
<p class="p2"><br></p>
<p class="p1">var player = new Sprite();</p>
<p class="p1">player.image = Textures.load("http://farm8.staticflickr.com/7297/12423082713_bb63071bc2_b.jpg");</p>
<p class="p1">player.width = 100;</p>
<p class="p1">player.height = 100;</p>
<p class="p1">player.x = 100;</p>
<p class="p1">player.y = 100;</p>
<p class="p2"><br></p>
<p class="p1">player.frameWidth = 255;</p>
<p class="p1">player.frameHeight = 202;</p>
<p class="p1">player.frameCount = 4;</p>
<p class="p1">player.frameRate = 1;</p>
<p class="p1">player.moveRate = 15;</p>
<p class="p2"><br></p>
<p class="p1">var cursor = new Sprite();</p>
<p class="p1">cursor.image = Textures.load("http://i.imgur.com/QmfNXwL.png");</p>
<p class="p1">cursor.width = 40;</p>
<p class="p1">cursor.height = 40;</p>
<p class="p1">cursor.x = 100;</p>
<p class="p1">cursor.y = 300;</p>
<p class="p1">cursor.moving = false;</p>
<p class="p2"><br></p>
<p class="p1">gInput.addBool(87, "c_up");</p>
<p class="p1">gInput.addBool(83, "c_down");</p>
<p class="p1">gInput.addBool(65, "c_left");</p>
<p class="p1">gInput.addBool(68, "c_right");</p>
<p class="p2"><br></p>
<p class="p1">cursor.update = function (d) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (!this.moving) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (gInput.c_up) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.moving = true;</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.y -= this.height;</p>
<p class="p1"><span class="Apple-converted-space">            </span>setTimeout(function() {cursor.moving = false;}, 50);</p>
<p class="p1"><span class="Apple-converted-space">        </span>} else if (gInput.c_down) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.moving = true;</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.y += this.height;</p>
<p class="p1"><span class="Apple-converted-space">            </span>setTimeout(function() {cursor.moving = false;}, 50);</p>
<p class="p1"><span class="Apple-converted-space">        </span>} else if (gInput.c_left) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.moving = true;</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.x -= this.width;</p>
<p class="p1"><span class="Apple-converted-space">            </span>setTimeout(function() {cursor.moving = false;},<span class="Apple-converted-space">  </span>50);</p>
<p class="p1"><span class="Apple-converted-space">        </span>} else if (gInput.c_right) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.moving = true;</p>
<p class="p1"><span class="Apple-converted-space">            </span>this.x += this.width;</p>
<p class="p1"><span class="Apple-converted-space">            </span>setTimeout(function() {cursor.moving = false;}, 50);</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">//Add all of the animatios at once</p>
<p class="p1">//First supply an array of animations names</p>
<p class="p1">//Then supply an array of animation lengths</p>
<p class="p1">//This assumes that the animations are one after the other</p>
<p class="p1">player.addAnimations(["down", "right", "up", "left"], [1, 1, 1, 1]);</p>
<p class="p2"><br></p>
<p class="p1">//You cxan also add a single animation like this</p>
<p class="p1">//the numbers are the first frame and the length of the animation</p>
<p class="p1">player.addAnimation("idle", 0, 1);</p>
<p class="p2"><br></p>
<p class="p1">//Set the starting animation</p>
<p class="p1">player.animation = "down";</p>
<p class="p2"><br></p>
<p class="p1">gInput.addBool(40, "down");</p>
<p class="p1">gInput.addBool(38, "up");</p>
<p class="p1">gInput.addBool(37, "left");</p>
<p class="p1">gInput.addBool(39, "right");</p>
<p class="p1">player.speed = 4;</p>
<p class="p1">player.update = function (d) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>//If the character isn't moving, set the frameRate to 0</p>
<p class="p1"><span class="Apple-converted-space">    </span>//If the character had an idle animation we wouldn't need to do this</p>
<p class="p1"><span class="Apple-converted-space">    </span>this.frameRate = 0;</p>
<p class="p1"><span class="Apple-converted-space">    </span>var speed = this.speed * d;</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (gInput.down) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>this.animation = "down";</p>
<p class="p1"><span class="Apple-converted-space">        </span>this.y += speed;</p>
<p class="p1"><span class="Apple-converted-space">        </span>this.frameRate = this.moveRate;</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (gInput.up) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>this.animation = "up";</p>
<p class="p1"><span class="Apple-converted-space">        </span>this.y -= speed;</p>
<p class="p1"><span class="Apple-converted-space">        </span>this.frameRate = this.moveRate;</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (gInput.left) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>this.animation = "left";</p>
<p class="p1"><span class="Apple-converted-space">        </span>this.x -= speed;</p>
<p class="p1"><span class="Apple-converted-space">        </span>this.frameRate = this.moveRate;</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (gInput.right) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>this.animation = "right";</p>
<p class="p1"><span class="Apple-converted-space">        </span>this.x += speed;</p>
<p class="p1"><span class="Apple-converted-space">        </span>//The right animation is weird on this sprite and appears to go in reverse when playing forward</p>
<p class="p1"><span class="Apple-converted-space">        </span>//so I reverse the player directio here</p>
<p class="p1"><span class="Apple-converted-space">        </span>this.frameRate = -this.moveRate;</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>//This just makes it so the position values are always whole numbers</p>
<p class="p1"><span class="Apple-converted-space">    </span>//which makes the pixel sprite look better</p>
<p class="p1"><span class="Apple-converted-space">    </span>//otherwise we get ugly pixel antialiasing</p>
<p class="p1"><span class="Apple-converted-space">    </span>this.x = Math.round(this.x);</p>
<p class="p1"><span class="Apple-converted-space">    </span>this.y = Math.round(this.y);</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">world.addChild(cursor);</p>
<p class="p1">world.addChild(player);</p>
</body>
</html>
Ytext/htmlUutf-8P    ( 7 I _ } � � O Y _                            `