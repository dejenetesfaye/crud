function hideall() {
	var elements = "#chartOne, #chartTwo, #chartThree, #chartFour, #chartFive, #chartSix, #recentInfo, #completedTickets";
	$(elements).hide();
}

function unhideall() {
	var elements = "#chartOne, #chartTwo, #chartThree, #chartFour, #chartFive, #chartSix, #recentInfo, #completedTickets";
	$(elements).show();
}

function unhide(boxid) {
	//var box = document.getElementByid(boxid);
	$('#'+boxid).show();
}

//////////////////////////////////////////////////////////////////////// MAIN FUNCTIONS ENDS HERE;

function expandChartOne() {
	hideall();
	unhide('chartOne');
	$('#chartOne').removeClass('col-md-4');
	$('#chartOne #line-chart').css('height','400px');
	$('#chartOneCaller').removeClass('fa-expand').addClass('fa-compress');
	$(this).one("click", compressChartOne);
}


function compressChartOne() {
	unhideall();
	$('#chartOne').addClass('col-md-4');
	$('#chartOne #line-chart').css('height','250px');
	$('#chartOneCaller').removeClass('fa-compress').addClass('fa-expand');
	$(this).one("click", expandChartOne);
}

$('#chartOneCaller').one("click", expandChartOne);

function expandChartTwo() {
	hideall();
	unhide('chartTwo');
	$('#chartTwo').removeClass('col-md-3');
	$('#chartTwo #pie-chart').css('height','400px');
	$('#chartTwoCaller').removeClass('fa-expand').addClass('fa-compress');
	$(this).one("click", compressChartTwo);
}


function compressChartTwo() {
	unhideall();
	$('#chartTwo').addClass('col-md-3');
	$('#chartTwo #pie-chart').css('height','250px');
	$('#chartTwoCaller').removeClass('fa-compress').addClass('fa-expand');
	$(this).one("click", expandChartTwo);
}

$('#chartTwoCaller').one("click", expandChartTwo);

function expandChartThree() {
	hideall();
	unhide('chartThree');
	$('#chartThree').removeClass('col-md-5');
	$('#chartThree #bar-chart').css('height','400px');
	$('#chartThreeCaller').removeClass('fa-expand').addClass('fa-compress');
	$(this).one("click", compressChartThree);
}


function compressChartThree() {
	unhideall();
	$('#chartThree').addClass('col-md-5');
	$('#chartThree #bar-chart').css('height','250px');
	$('#chartThreeCaller').removeClass('fa-compress').addClass('fa-expand');
	$(this).one("click", expandChartThree);
}

$('#chartThreeCaller').one("click", expandChartThree);

function expandChartFour() {
	hideall();
	unhide('chartFour');
	$('#chartFour').removeClass('col-md-7');
	$('#chartFourCaller').removeClass('fa-expand').addClass('fa-compress');
	$(this).one("click", compressChartFour);
}


function compressChartFour() {
	unhideall();
	$('#chartFour').addClass('col-md-7');
	$('#chartFourCaller').removeClass('fa-compress').addClass('fa-expand');
	$(this).one("click", expandChartFour);
}

$('#chartFourCaller').one("click", expandChartFour);

function expandChartFive() {
	hideall();
	unhide('chartFive');
	$('#chartFive').removeClass('col-md-5');
	$('#chartFive #bar-chart-host').css('height','400px');
	$('#chartFiveCaller').removeClass('fa-expand').addClass('fa-compress');
	$(this).one("click", compressChartFive);
}


function compressChartFive() {
	unhideall();
	$('#chartFive').addClass('col-md-5');
	$('#chartFive #bar-chart-host').css('height','200px');
	$('#chartFiveCaller').removeClass('fa-compress').addClass('fa-expand');
	$(this).one("click", expandChartFive);
}

$('#chartFiveCaller').one("click", expandChartFive);
