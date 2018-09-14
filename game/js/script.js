let box = document.getElementById("box");
let squar = document.getElementById('squar');
let circle = document.getElementById('cko');
let leftposition = 0;
let topposition  = 0;

document.addEventListener("keyup", function (e){
	if(e.which == 39) {
		if(squar.offsetLeft<450){
			leftposition += 50;
			squar.style.left=leftposition+'px';
		}
	}
	else if(e.which == 37) {
		if (squar.offsetLeft > 0) {
			leftposition -= 50;
			squar.style.left=leftposition+'px';
		}
	}
	if(e.which == 40) {
		if (squar.offsetTop<421) {
			topposition+=50;
			squar.style.top=topposition+'px'
		}
	}

	if(e.which == 38) {
		if (squar.offsetTop>0) {
			topposition -= 50;
			squar.style.top = topposition+'px';
		}
	}

})


document.addEventListener("keyup", function (d){
	if(d.which == 68) {
		if(circle.offsetLeft<450){
			leftposition += 50;
			circle.style.left=leftposition+'px';
		}
	}
	else if(d.which == 65) {
		if (circle.offsetLeft > 0) {
			leftposition -= 50;
			circle.style.left=leftposition+'px';
		}
	}
	if(d.which == 83) {
		if (circle.offsetTop<421) {
			topposition+=50;
			circle.style.top=topposition+'px'
		}
	}

	if(d.which == 87) {
		if (circle.offsetTop>0) {
			topposition -= 50;
			circle.style.top = topposition+'px';
		}
	}

})
