


function get_date_alerts() {
    $.ajax({
        url: "Index/Date_alerts_today",
        async: true,
        dataType: 'json',
        success: function(data, status, xhr) {
             //alert(data);
            $('#todayalert').html(data);

        },
        error: function() {
            //console.log("----check requested url---");
        }
    });
 
	}
get_date_alerts();
setInterval(get_date_alerts, 340000);

function addTicket()
    {
        var title = $('#ttitle').val();
        var note = $('#tnote').val();
        var priority = $('#tpriority').val();
        var user = $('#tuser').val();

        var email = $('#temail').val();
        var subject = $('#tsubject').val();
        var body = $('#tbody').val();
         if (!title)
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill Title Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } 
        else if (!note )
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill Note Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } 
        else if (user === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Select User Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } 
        else if (priority === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Select Priority Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } 
              else{
        $.ajax({
          
            url: '../Tickets/Add_tickets',
            method: 'POST',
            data: {title: title, uname: user, note: note, priority: priority, email: email, subject: subject, body: body, jsonData: alerts},
              //params: {title:title,uname:user,note:note,priority:priority},
             jsonData: alerts,
            dataType: 'json',
            
              success: function (data, status, xhr)
            {      
                  if (data.found === 'Found')
                {  
                     
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Information");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    $('#confirm_modal').modal('show');
                    //window.setTimeout(function () {
                     //location.reload(true)
                     //}, 2000);
                } else if (data.found === 'Not Found')
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Success");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-danger");
                    $('#msg_conf').addClass("alert-info");
                   // window.setTimeout(function () {
                   //location.reload(true)
                   //}, 2000);
                } else
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-danger");
                    $('#msg_conf').addClass("alert-info");
                    //window.setTimeout(function () {
                    // location.reload(true)
                    // }, 2000);
                }
                $('#addPlugin').modal('hide');
              
            }
            , error: function ()
            {
                $('#confirm_modal').modal('show');
                $('#confirm_title').html("Error");
                $('#msg_conf').html(" CHECK REQIUSTED URL");
                $('#msg_conf').removeClass("alert-info");
                $('#msg_conf').addClass("alert-danger");
                 //window.setTimeout(function () {
                 //location.reload(true)
                 //}, 2000);
            }
         
        });
    }
    }
       
    

    
  function updateTicket()
    {

        var title = $('#title2').val();
        var status = $('#status').val();
        if (title==="")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Error");
            $('#msg_conf').html("Please Select Ticket type!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } 
        else{
        $.ajax({
            url: '../Tickets/Update_tickets',
            method: 'POST',
            data: {title: title, status: status, jsonData: alerts},
            jsonData: alerts,
            dataType: 'json',
            success: function (data, status, xhr)
            {      
                if (data.found === 'Found')
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Information");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    $('#confirm_modal').modal('show');
//                    window.setTimeout(function () {
//                     location.reload(true)
//                     }, 2000);
                } else if (data.found === 'Not Found')
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Success");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-danger");
                    $('#msg_conf').addClass("alert-info");
//                    window.setTimeout(function () {
//                     location.reload(true)
//                   }, 2000);
                } else
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-danger");
                    $('#msg_conf').addClass("alert-info");
//                   window.setTimeout(function () {
//                     location.reload(true)
//                     }, 2000);
                }
                $('#addPlugin').modal('hide');
            }, error: function ()
            {
                $('#confirm_modal').modal('show');
                $('#confirm_title').html("Error");
                $('#msg_conf').html(" CHECK REQIUSTED URL");
                $('#msg_conf').removeClass("alert-info");
                $('#msg_conf').addClass("alert-danger");
//                  window.setTimeout(function () {
//                 location.reload(true)
//                 }, 2000);
            }
        });
        }
    }
    
    function checkBox() 
    {

	var alerts = new Array();
	var counts = 0;
	for (var i = 1; i < 101; i++) {
		if($("#alert_" + i).is(":checked")) {
			alerts[counts] =  $("#alert_" + i).val();
			counts++;
		}
	};

	if(counts == 0) 
        {
             $('#addPlugin').modal('hide');
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Error");
            $('#msg_conf').html(" You should select at least one alert !");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
               
		return false;
	} else {
            $('#addPlugin').modal('show');
		return alerts;
                
	}
}

function checkBox1() 
    {

	var alerts = new Array();
	var counts = 0;
	for (var i = 1; i < 101; i++) {
		if($("#alert_" + i).is(":checked")) {
			alerts[counts] =  $("#alert_" + i).val();
			counts++;
		}
	};

	if(counts == 0) 
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Error");
            $('#msg_conf').html(" You should select atleast one alert !");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
                $('#updatetkt').modal('hide');
		return false;
	} else {
            $('#updatetkt').modal('show');
		return alerts;
	}
}


    
    function lettersOnly(evt) 
    {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
                ((evt.which) ? evt.which : 0));
        if (charCode > 31 && (charCode < 65 || charCode > 90) &&
                (charCode < 97 || charCode > 122)) {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Error");
            $('#msg_conf').html(" Please Enter Letters Only !");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
            return false;
        }
        return true;
    }
    
 
 
 
 $(document).ready(function() {
   $("#updateTicket").click(function ()
    {    
        $("#update_body").empty();
        for (var i = 0; i < alerts.length; i++)
        {
            $.ajax({
                url: "../Tickets/Tickets_data",
                async: true,
                dataType: 'json',
                method: "post",
                data: {alerts_id: alerts[i]},
                success: function (data, status, xhr) {
                    drawupdateTd(data);
                },
                error: function (data) {
                    //console.log("----check requested url---");
                    //console.log("blah-"+data[0]);
                }
            });
     }
 });
  }); 
      
    function drawupdateTd(data)
    {
        for (var i = 0; i < data.length; i++) {
            var td = '<tr>';
            for (var j = 0; j < data[0].length; j++) {
                td = td + '<td>' + data[i][j] + '</td>';
            }
            ;
            td = td + '<tr>';
        }
        ;
        $("#update_body").append(td);
    }
    
 
  $(document).ready(function () {
        $('#alert_tbl').DataTable();
        
       $("input:checkbox[name=alerted]:checked").each(function () {
        var val = $(this).val();
        alert(val);
    });
    });
    
    
    
    
jQuery(document).ready(function($) {
     $(".events").click(function() {
         var eid = $(this).data('id');
        $(".modal-body #eventid").val(eid);
        var id= $('#eventid').val();
        $("#event_body").empty();
        $.ajax({
            url: "../Index/getEventsOfAlert",
            async: true,
            dataType: 'json',
            method: "post",
            data: {alertID:id},
            success: function (data, status, xhr) {
                
               if(data.update === false)
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Information");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                     $('#event').modal('hide');
                }
                else{
               drawEventTd(data);
                } 
               
           },
            error: function (data) {
             }
        });
     });
     });
     
     
     function drawEventTd(data)
    {
        var td = '<tr>';
        for (var i = 0; i < data.length; i++) 
        {
            for (var j = 0; j < data[0].length; j++) {
                td = td + '<td>' + data[i][j] + '</td>';
            }
            ;
            td = td + '<tr>';
        }
        ;
        $("#event_body").append(td);
    }
 
    
       
     $(document).ready(function() {
      $("#createTicket").click(function ()
    {
        
        $("#bodyy").empty();
           //alert(alerts[0]);
       for (var i = 0; i < alerts.length; i++)
        {        
             $.ajax({
                url: "../Tickets/Tickets_data",
                async: true,
                dataType: 'json',
                method: "post", 
                data: {alerts_id: alerts[i]},
                success: function (data, status, xhr) {
                    drawTd(data);
                    //alert(data);
                },
                error: function (data) {
                     //alert('something wrong');
                      //drawTd(data);
                }
            });
        }
        
 });
 }); 
    function drawTd(data)
    {
        for (var i = 0; i < data.length; i++) {
            var td = '<tr>';
            for (var j = 0; j < data[0].length; j++) {
                td = td + '<td>' + data[i][j] + '</td>';
            }
            ;
            td = td + '<tr>';
        }
        ;
        $("#bodyy").append(td);
    }
    
 
 
 
 

 

 

   
 
 
 
        

   
   

    
   