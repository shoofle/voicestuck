current_url = window.location.href;

function change_hamsteak_url(url, amount) {
	number = (parseInt(url.slice(-6), 10)+amount).toString();
	while (number.length < 6) { number = "0" + number; }
	return url.slice(0,-6) + number;
}
function do_load_thinger(url) {
	$("body").load(url).ready(function() {show();});
	history.pushState({"whatofit": "punk"}, document.title, url);
}

function show() {
	$("button:contains(Show)").click();
}
function hide() {
	$("button:contains(Hide)").click();
}
function forward() {
	current_url = change_hamsteak_url(window.location.href, 1);
	do_load_thinger(current_url)
}
function back() {
	current_url = change_hamsteak_url(window.location.href, -1);
	do_load_thinger(current_url)
}
function scroll_down_for_what() {
	document.body.scrollTop += 500;
}
function up() {
	document.body.scrollTop -= 500;
}

$(document).ready(function() {show();});

var definitions = {
	"show": show,
	"hide": hide,
	"next": forward,
	"back": back,
	"down": scroll_down_for_what,
	"up": up
};

annyang.addCommands(definitions);
annyang.start();

