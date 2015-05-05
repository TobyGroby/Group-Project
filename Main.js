var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var player = document.createElement("img");
player.src = "robot1.png";

window.addEventListener('keyDown', function(evt) {onKeyDown(evt);},false);
window.addEventListener('keyUp', function(evt){ onKeyUp(evt); },false);

var x = 250;
var y = 200;
var directionX = 200;

var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_SPACE = 32;

function onKeyDown(event)
{
	if(event.keyCode == KEY_37)
	{
		directionX -= 1;
	}
	if(event.keyCode == KEY_39)
	{
		directionX += 1;
	}
}

function onKeyUp(event)
{
	
}

function run()
{	
	context.fillStyle = "#ccc;";
	context.fillRect(0, 0, canvas.width, canvas. height);
	
	context.drawImage(player, x, y);
}

(function(){
	var onEachFrame;
	if (window.requestAnimationFrame){
		onEachFrame = function(cb){
			var _cb = function() { cb(); window.requestAnimationFrame(_cb);} 
			_cb();
		};
	}else if (window.mozRequestAnimationFrame){
		onEachFrame = function(cb){
			var _cb = function() { cb();
			window.mozRequestAnimationFrame(_cb); }
		_cb();
		};
		}else{ 
		onEachFrame = function(cb) {
			setInterval(cb, 1000 / 60);
			}
		}
				
		window.onEachFrame = onEachFrame;
})();
		
window.onEachFrame(run);
			
		
	
