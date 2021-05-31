/* --------------------------------------------------------
 Flot Charts
 -----------------------------------------------------------*/

 

//Pie Chart
$(function(){
    
    function getPieData(){
        $.ajax({
            url: "Index/Top_events_by_pro",
            async: true,
            dataType: 'json',
            success:function(data, status, xhr) {
                drawPie(data);
            }, 
            error: function () {
                //console.log("----check requested url---");
            }
        });
    }
//alert(events);
//console.log(events);
               // console.log(pieData);
function drawPie(pieData){
    if($('#pie-chart')[0]){
        $.plot('#pie-chart', pieData, {
            series: {
                pie: {
                    show: true,
                    stroke: { 
                        width: 0,
                        
                    },
                    label: {
                        show: true,
                        radius: 3/4,
                        formatter: function(label, series){
                            return '<div class="pieLabel">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
                        },
                        background: { 
                            opacity: 0.5,
                            color: '#000'
                        }
                    }
                }
            }
        });
    }         
}
    getPieData();
    setInterval(getPieData,300000);//update every 5 minute
 
//Line Chart

    function top_alerts() {
    	$.ajax({
            url: "Index/Top_Alerts",
    		async: true,
            dataType: 'json',
            success:function(data, status, xhr) {
    			drawLine(data);
    		},  
            error: function () {
    			//console.log("----check requested url---");
            }
        });
	}


    function drawLine(aaData) {
        if ($('#line-chart')[0]) {
    		
            $.plot('#line-chart', [ {
                data: aaData,
                label: "Alert ",

            },],

                {
                    series: {
                        lines: {
                            show: true,
                            lineWidth: 1,
                            fill: 0.25,
                        },

                        color: 'rgba(255,255,255,0.7)',
                        shadowSize: 0,
                        points: {
                            show: true,
                        }
                    },

                    yaxis: {
                        tickColor: 'rgba(255,255,255,0.15)',
                        tickDecimals: 0,
                        font :{
                            lineHeight: 13,
                            style: "normal",
                            color: "rgba(255,255,255,0.8)",
                        },
                        shadowSize: 0,
                    },
                    xaxis: {
                        tickColor: 'rgba(255,255,255,0)',
                        tickDecimals: 0,
                        font :{
                            lineHeight: 13,
                            style: "normal",
                            color: "rgba(255,255,255,0.8)",
                        }
                    },
                    grid: {
                        borderWidth: 1,
                        borderColor: 'rgba(255,255,255,0.25)',
                        labelMargin:10,
                        hoverable: true,
                        clickable: true,
                        mouseActiveRadius:6,
                    },
                    legend: {
                        show: false
                    }
                });

            $("#line-chart").bind("plothover", function (event, pos, item) {
                if (item) {
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);
                    $("#linechart-tooltip").html(item.series.label + " of " + x + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
                }
                else {
                    $("#linechart-tooltip").hide();
                }
            });

            $("<div id='linechart-tooltip' class='chart-tooltip'></div>").appendTo("body");
        }
    }

    top_alerts();
    setInterval(top_alerts , 310000); // update every 5 minute

//Bar Chart

   function malVic() { 
         var malicious;
            $.ajax({
                url: "Index/Top_Ten_Malcious",
                async: false,
                dataType: 'json',
                success:function(data, status, xhr) {
                    malicious=data;
                }, 
                error: function () {
                    //console.log("----check requested url---");
                }
            });

         var victim;
            $.ajax({
                url: "Index/Top_Ten_Victims",
                async: false,
                dataType: 'json',
                success:function(data, status, xhr) {
                    victim=data;
                    //alert(data[1]);
                }, 
                error: function () {
                    //console.log("----check requested url---");
                }
            });
        drawBar(malicious , victim);    
    }        

function drawBar(malicious , victim) {
    if ($("#bar-chart")[0]) 
    {
        var data2 = malicious;
        var data3 = victim;
    
        var barData = new Array();

        barData.push({
                data : data2,
                label: 'Malicious ',
                bars : {
                        show : true,
                        barWidth : 0.1,
                        order : 2,
                        fill:1,
                        lineWidth: 0,
                        fillColor: 'rgba(255,255,255,0.8)'
                }
        });
        barData.push({
                data : data3,
                label: 'Victim ',
                bars : {
                        show : true,
                        barWidth : 0.1,
                        order : 3,
                        fill:1,
                        lineWidth: 0,
                        fillColor: 'rgba(255,255,255,0.3)'
                },
        });

        //Display graph
        $.plot($("#bar-chart"), barData, {
                
                grid : {
                        borderWidth: 1,
                        borderColor: 'rgba(255,255,255,0.25)',
                        show : true,
                        hoverable : true,
                        clickable : true,       
                },
                
                yaxis: {
                    tickColor: 'rgba(255,255,255,0.15)',
                    tickDecimals: 0,
                    font :{
                        lineHeight: 13,
                        style: "normal",
                        color: "rgba(255,255,255,0.8)",
                    },
                    shadowSize: 0,
                },
                
                xaxis: {
                    tickColor: 'rgba(255,255,255,0)',
                    tickDecimals: 0,
                    font :{
                        lineHeight: 13,
                        style: "normal",
                        color: "rgba(255,255,255,0.8)",
                    },
                    shadowSize: 0,
                },
                
                legend : true,
                tooltip : true,
                tooltipOpts : {
                        content : "<b>%x</b> = <span>%y</span>",
                        defaultTheme : false
                }

        });
        //Display graph
        $.plot($("#bar-chart"), barData, {
                
                grid : {
                        borderWidth: 1,
                        borderColor: 'rgba(255,255,255,0.25)',
                        show : true,
                        hoverable : true,
                        clickable : true,       
                },
                
                yaxis: {
                    tickColor: 'rgba(255,255,255,0.15)',
                    tickDecimals: 0,
                    font :{
                        lineHeight: 13,
                        style: "normal",
                        color: "rgba(255,255,255,0.8)",
                    },
                    shadowSize: 0,
                },
                
                xaxis: {
                    tickColor: 'rgba(255,255,255,0)',
                    tickDecimals: 0,
                    font :{
                        lineHeight: 13,
                        style: "normal",
                        color: "rgba(255,255,255,0.8)",
                    },
                    shadowSize: 0,
                },
                
                legend : true,
                tooltip : true,
                tooltipOpts : {
                        content : "<b>%x</b> = <span>%y</span>",
                        defaultTheme : false
                }

        });
        $("#bar-chart").bind("plothover", function (event, pos, item) {
          
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                    //z= item.datapoint[0][2];
            //$("#barchart-tooltip").html(Math.round(x) + " " + item.series.label + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
            $("#barchart-tooltip").html("IP = " + item.series.data[Math.round(x-1)][2] + " , " + item.series.label + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
            //$("#barchart-tooltip").html("ip = " +z + " " + item.series.label + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
             
            }
            else {
                $("#barchart-tooltip").hide();
            }
        });
        
        $("<div id='barchart-tooltip' class='chart-tooltip'></div>").appendTo("body");
    }
  }  
    malVic();
    setInterval(malVic , 320000); // update every 5 minute


//Bar Chart
    function top_hosts() {
        $.ajax({
            url: "Index/Top_Hosts",
            async: false,
            dataType: 'json',
            success:function(data, status, xhr) {
                drawHostsBar(data);
                //alert(data);
            }, 
            error: function () {
                //console.log("----check requested url---");
            }
        });
    }

    function drawHostsBar(top_hosts) {
        if ($("#bar-chart-host")[0]) {
            var data2 = top_hosts;

            var barData = new Array();

            barData.push({
                    data : data2,
                    label: 'Top hosts with multiple events ',
                    bars : {
                            show : true,
                            barWidth : 0.1,
                            order : 2,
                            fill:1,
                            lineWidth: 0,
                            fillColor: 'rgba(255,255,255,0.8)'
                    }
            });

            //Display graph
            $.plot($("#bar-chart-host"), barData, {
                    
                    grid : {
                            borderWidth: 1,
                            borderColor: 'rgba(255,255,255,0.25)',
                            show : true,
                            hoverable : true,
                            clickable : true,       
                    },
                    
                    yaxis: {
                        tickColor: 'rgba(255,255,255,0.15)',
                        tickDecimals: 0,
                        font :{
                            lineHeight: 13,
                            style: "normal",
                            color: "rgba(255,255,255,0.8)",
                        },
                        shadowSize: 0,
                    },
                    
                    xaxis: {
                        tickColor: 'rgba(255,255,255,0)',
                        tickDecimals: 0,
                        font :{
                            lineHeight: 13,
                            style: "normal",
                            color: "rgba(255,255,255,0.8)",
                        },
                        shadowSize: 0,
                    },
                    
                    legend : true,
                    tooltip : true,
                    tooltipOpts : {
                            content : "<b>%x</b> = <span>%y</span>",
                            defaultTheme : false
                    }

            });
            
            
            $("#bar-chart-host").bind("plothover", function (event, pos, item) {
                if (item) {
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);
                   // $("#barchart-tooltip").html(Math.round(x) + " " + item.series.label + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
                $("#barchart-tooltip").html("IP = " + data2[Math.round(x)][2]  + " , " + item.series.label + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
               
                }
                else {
                    $("#barchart-tooltip").hide();
                }
            });

            $("<div id='barchart-tooltip' class='chart-tooltip'></div>").appendTo("body");

        }
    }

    top_hosts();
    setInterval(top_hosts , 330000); // update every 5 minute

});



//Dynamic Chart
$(function() {
    if ($('#dynamic-chart')[0]) {
        var data = [],
            totalPoints = 300;

        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);

            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                } else if (y > 90) {
                    y = 90;
                }

                data.push(y);
            }

            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }

            return res;
        }


        var updateInterval = 30;
        var plot = $.plot("#dynamic-chart", [ getRandomData() ], {
            series: {
                label: "Data",
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: 0.25,
                },

                color: 'rgba(255,255,255,0.2)',
                shadowSize: 0,
            },
            yaxis: {
                min: 0,
                max: 100,
                tickColor: 'rgba(255,255,255,0.15)',
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "rgba(255,255,255,0.8)",
                },
                shadowSize: 0,

            },
            xaxis: {
                tickColor: 'rgba(255,255,255,0.15)',
                show: true,
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "rgba(255,255,255,0.8)",
                },
                shadowSize: 0,
                min: 0,
                max: 250
            },
            grid: {
                borderWidth: 1,
                borderColor: 'rgba(255,255,255,0.25)',
                labelMargin:10,
                hoverable: true,
                clickable: true,
                mouseActiveRadius:6,
            },
            legend: {
                show: false
            }
        });

        function update() {
            plot.setData([getRandomData()]);
            // Since the axes don't change, we don't need to call plot.setupGrid()

            plot.draw();
            setTimeout(update, updateInterval);
        }

        update();

        $("#dynamic-chart").bind("plothover", function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                $("#dynamic-chart-tooltip").html(item.series.label + " of " + x + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
            }
            else {
                $("#dynamic-chart-tooltip").hide();
            }
        });

        $("<div id='dynamic-chart-tooltip' class='chart-tooltip'></div>").appendTo("body");
    }
});




/* --------------------------------------------------------
 Sparkline
 -----------------------------------------------------------*/
(function(){
    //Bar
    
        function getSparkyZero(){
            $.ajax({
               url: "Index/Alerts_today",
                async: true,
                dataType: 'json',
                method: "POST",
                data: {day:'0'},
                success:function(data, status, xhr) {
                    drawSparkToday(data , "");
                }, 
                error: function () {
                    //console.log("----check requested url---");
                }
            });
       }
    
        function getSparkyOne(){
            $.ajax({
                url: "Index/Alerts_today",
                async: true,
                dataType: 'json',
                method: "POST",
                data: {day:'1'},
                success:function(data, status, xhr) {
                    drawSparkToday(data , "-2");
                }, 
                error: function () {
                    //console.log("----check requested url---");
                }
            });
       }
    
        function getSparkyTwo(){
            $.ajax({
                url: "Index/Alerts_today",
                async: true,
                dataType: 'json',
                method: "POST",
                data: {day:'2'},
                success:function(data, status, xhr) {
                    drawSparkToday(data , "-3");
                }, 
                error: function () {
                    //console.log("----check requested url---");
                }
            });
       }
	
		function getSparkyThree(){
			$.ajax({
				url: "Index/Alerts_today",
				async: true,
				dataType: 'json',
                                 method: "POST",
                                data: {day:'3'},
				success:function(data, status, xhr) {
					drawSparkToday(data , "-4");
                                        }, 
				error: function () {
					//console.log("----check requested url---");
				}
			});
	   }
        getSparkyZero();
        setInterval(getSparkyZero,3600000); // update every hour

        getSparkyOne();
        setInterval(getSparkyOne,3600000); // update every hour

        getSparkyTwo();
        setInterval(getSparkyTwo,3600000); // update every hour

        getSparkyThree();
        setInterval(getSparkyThree,3600000); // update every hour

	


	function drawSparkToday(sliceData , id){
		//Line
		$("#stats-line" + id).sparkline(sliceData, {
			type: 'line',
			width: '100%',
			height: '65',
			lineColor: 'rgba(255,255,255,0.4)',
			fillColor: 'rgba(0,0,0,0.2)',
			lineWidth: 1.25,
            barWidth: 5,
            barColor: '#C5CED6',
		});
	}

    //Tristate
    $("#stats-tristate").sparkline([2,2,-2,2,-2,-2,2,2,2,2,2], {
        type: 'tristate',
        width: '100%',
        height: '52',
        barWidth: 4,
        barSpacing: 3,
        zeroAxis: false,
        posBarColor: '#fff',
        negBarColor: '#fff',
        zeroBarColor: '#fff',
        lineWidth: 0,
        lineColor: 'rgba(0,0,0,0)',
    });
})();


/* --------------------------------------------------------
 Map
 -----------------------------------------------------------*/
 /*
$(function(){
    //USA Map
    if($('#usa-map')[0]) {
	$('#usa-map').vectorMap({
            map: 'us_aea_en',
            backgroundColor: 'rgba(0,0,0,0.25)',
            regionStyle: {
                initial: {
                    fill: 'rgba(255,2552,255,0.7)'
                },
                hover: {
                    fill: '#fff'
                },
            },
    
            zoomMin:0.88,
            focusOn:{
                x: 5,
                y: 1,
                scale: 1.8
            },
            markerStyle: {
                initial: {
                    fill: '#e80000',
                    stroke: 'rgba(0,0,0,0.4)',
                    "fill-opacity": 2,
                    "stroke-width": 7,
                    "stroke-opacity": 0.5,
                    r: 4
                },
                hover: {
                    stroke: 'black',
                    "stroke-width": 2,
                },
                selected: {
                    fill: 'blue'
                },
                selectedHover: {
                }
            },
            zoomOnScroll: false,
    
            markers :[
                {latLng: [33, -86], name: 'Sample Name 1'},
                {latLng: [33.7, -93], name: 'Sample Name 2'},
                {latLng: [36, -79], name: 'Sample Name 3'},
                {latLng: [29, -99], name: 'Sample Name 4'},
                {latLng: [33, -95], name: 'Sample Name 4'},
                {latLng: [31, -92], name: 'Liechtenstein'},
            ],
        });
    }
    
    //World Map
    if($('#world-map')[0]) {
	$('#world-map').vectorMap({
            map: 'world_mill_en',
            backgroundColor: 'rgba(0,0,0,0)',
            series: {
                regions: [{
                    scale: ['#C8EEFF', '#0071A4'],
                    normalizeFunction: 'polynomial'
                }]
            },
            regionStyle: {
                initial: {
                    fill: 'rgba(255,2552,255,0.7)'
                },
                hover: {
                    fill: '#fff'
                },
            },
        });
    }
});
*/
/* --------------------------------------------------------
 Easy Pie Charts
 -----------------------------------------------------------*/
$(function() {
    $('.pie-chart-tiny').easyPieChart({
        easing: 'easeOutBounce',
        barColor: 'rgba(255,255,255,0.75)',
        trackColor: 'rgba(0,0,0,0.3)',
        scaleColor: 'rgba(255,255,255,0.3)',
        lineCap: 'square',
        lineWidth: 4,
        size: 100,
        animate: 3000,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    var chart = window.chart = $('.pie-chart-tiny').data('easyPieChart');
    $('.pie-chart-tiny .pie-title > i').on('click', function() {
        $(this).closest('.pie-chart-tiny').data('easyPieChart').update(Math.random()*200-100);
    });
});