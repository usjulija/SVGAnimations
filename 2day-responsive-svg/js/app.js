var shape = document.getElementById("svg");

// media query event handler
if (matchMedia) {
	var mq = window.matchMedia("(max-width: 500px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}
// media query change
function WidthChange(mq) {
	if (mq.matches) {
    shape.setAttribute("viewBox", "0 490 450 450");
    shape.setAttribute("enable-background", "0 490 450 450");
	}
	else {
    shape.setAttribute("viewBox", "0 0 446.9 446.9");
    shape.setAttribute("enable-background", "0 0 446.9 446.9");
	}
};
