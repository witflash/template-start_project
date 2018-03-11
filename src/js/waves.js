;(function() {

	function wavify (canvas) {
		var ctx = canvas.getContext("2d");
		
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		
		var waves = [
		  "rgba(0, 0, 50, 0.05)",
		  "rgba(0, 0, 50, 0.05)"
		];
		
		var i = 0;
		
		function draw() {
		  canvas.width = canvas.width;
		
		  for (var j = waves.length - 1; j >= 0; j--) {
			var offset = i + j * Math.PI * 12;
			ctx.fillStyle = waves[j];
			var randomLeft = (Math.sin(offset / 100) + 3) / 2 * 200;
			var randomRight = (Math.sin(offset / 100 + 10) + 2) / 2 * 200;
			var randomLeftConstraint = (Math.sin(offset / 60 + 2) + 1) / 2 * 600;
			var randomRightConstraint = (Math.sin(offset / 60 + 1) + 1) / 2 * 600;
		
			ctx.beginPath();
			ctx.moveTo(0, randomLeft + 100);
		
			ctx.bezierCurveTo(
			  canvas.width / 3,
			  randomLeftConstraint,
			  canvas.width / 3 * 2,
			  randomRightConstraint,
			  canvas.width,
			  randomRight + 100
			);
			ctx.lineTo(canvas.width, canvas.height);
			ctx.lineTo(0, canvas.height);
			ctx.lineTo(0, randomLeft + 50);
		
			ctx.closePath();
			ctx.fill();
		  }
		
		  i = i + 3;
		}
		setInterval(draw, 40);
	};

	var allCanvas = document.querySelectorAll(".canvas-wave");
	allCanvas.forEach( function(canvas) {
		wavify(canvas);	
	})

})();
