var WIDTH = 5;
var COLOR = 'white';
var MENU_STATUS = 0;
var coloroptions = ['white', 'red', 'purple', 'green']
var currentindex = 0

var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

function switchColor(index) {
	COLOR = coloroptions[index]
	$(myCanvas)
		.mousedown(function (e) {
			isDown = true;
			ctx.beginPath();
			canvasX = e.pageX - myCanvas.offsetLeft;
			canvasY = e.pageY - myCanvas.offsetTop;
			ctx.moveTo(canvasX, canvasY);
		})
		.mousemove(function (e) {
			if (isDown !== false) {
				canvasX = e.pageX - myCanvas.offsetLeft;
				canvasY = e.pageY - myCanvas.offsetTop;
				ctx.lineTo(canvasX, canvasY);
				ctx.strokeStyle = COLOR;
				ctx.stroke();
			}
		})
		.mouseup(function (e) {
			isDown = false;
			ctx.closePath();
		});


	// Touch Events Handlers
	draw = {
		started: false,
		start: function (evt) {

			ctx.beginPath();
			ctx.moveTo(
				evt.touches[0].pageX,
				evt.touches[0].pageY
			);

			this.started = true;

		},
		move: function (evt) {

			if (this.started) {
				ctx.lineTo(
					evt.touches[0].pageX,
					evt.touches[0].pageY
				);

				ctx.strokeStyle = COLOR;
				ctx.lineWidth = WIDTH;
				ctx.stroke();
			}

		},
		end: function (evt) {
			this.started = false;
		}
	};

	// Touch Events
	myCanvas.addEventListener('touchstart', draw.start, false);
	myCanvas.addEventListener('touchend', draw.end, false);
	myCanvas.addEventListener('touchmove', draw.move, false);

	// Disable Page Move
	document.body.addEventListener('touchmove', function (evt) {
		evt.preventDefault();
	}, false);

}

window.onload = function () {
	// var myCanvas = document.getElementById("myCanvas");
	// var ctx = myCanvas.getContext("2d");

	

	// Fill Window Width and Height
	myCanvas.width = window.innerWidth;
	myCanvas.height = window.innerHeight;

	// Set Background Color
	ctx.fillStyle = "#212121";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

	// Mouse Event Handlers
	if (myCanvas) {
		var isDown = false;
		var canvasX, canvasY;
		ctx.lineWidth = WIDTH;

		$(myCanvas)
			.mousedown(function (e) {
				isDown = true;
				ctx.beginPath();
				canvasX = e.pageX - myCanvas.offsetLeft;
				canvasY = e.pageY - myCanvas.offsetTop;
				ctx.moveTo(canvasX, canvasY);
			})
			.mousemove(function (e) {
				if (isDown !== false) {
					canvasX = e.pageX - myCanvas.offsetLeft;
					canvasY = e.pageY - myCanvas.offsetTop;
					ctx.lineTo(canvasX, canvasY);
					ctx.strokeStyle = COLOR;
					ctx.stroke();
				}
			})
			.mouseup(function (e) {
				isDown = false;
				ctx.closePath();
			});
	}

	// Touch Events Handlers
	draw = {
		started: false,
		start: function (evt) {

			ctx.beginPath();
			ctx.moveTo(
				evt.touches[0].pageX,
				evt.touches[0].pageY
			);

			this.started = true;

		},
		move: function (evt) {

			if (this.started) {
				ctx.lineTo(
					evt.touches[0].pageX,
					evt.touches[0].pageY
				);

				ctx.strokeStyle = COLOR;
				ctx.lineWidth = WIDTH;
				ctx.stroke();
			}

		},
		end: function (evt) {
			this.started = false;
		}
	};

	// Touch Events
	myCanvas.addEventListener('touchstart', draw.start, false);
	myCanvas.addEventListener('touchend', draw.end, false);
	myCanvas.addEventListener('touchmove', draw.move, false);

	// Disable Page Move
	document.body.addEventListener('touchmove', function (evt) {
		evt.preventDefault();
	}, false);

	document.getElementById('menu-bar').addEventListener('click', () => {
		const menuitems = document.getElementsByClassName('menu-item')
		if (MENU_STATUS == 0) {
			var i;
			for (i = 0; i < menuitems.length; i++) {
				menuitems[i].style.display = "block";
			}
			MENU_STATUS = 1
		} else if (MENU_STATUS == 1) {
			var i;
			for (i = 0; i < menuitems.length; i++) {
				menuitems[i].style.display = "none";
			}
			MENU_STATUS = 0
		}
	})

	document.getElementById('color').addEventListener('click', () => {
		if (currentindex + 1 == coloroptions.length) {
			var currentindex = 0
			switchColor(currentindex)
		} else {
			var currentindex = currentindex + 1
			switchColor(currentindex)
		}
	})
};