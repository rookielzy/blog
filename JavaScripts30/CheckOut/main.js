$("main").addClass("pre-enter").removeClass("with-hover");
setTimeout(function(){
	$("main").addClass("on-enter");
}, 500);
setTimeout(function(){
	$("main").removeClass("pre-enter on-enter");
	setTimeout(function(){
		$("main").addClass("with-hover");
	}, 50);
}, 3000);

$("#same").click(function(){
	var sameInfo = $(this);
	sameInfo.toggleClass("active");
	var nameVal = document.getElementById('name').value;
	var codeVal = document.getElementById('code').value;
	console.log(nameVal);
	setTimeout(function(){
		if (sameInfo.hasClass("active")) {
			document.getElementById('card-name').value = nameVal;
			document.getElementById('card-code').value = codeVal;
		} else {
			document.getElementById('card-name').value = "";
			document.getElementById('card-code').value = "";
		}
	}, 100);
});