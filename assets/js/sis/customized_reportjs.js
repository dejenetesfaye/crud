 
 
  $(document).ready(function() {
     $("#group_by").empty();
    $('#alert_col').hide();
    $('#event_col').hide();
  });
 
 function change()
    {
        var type = document.getElementById("types").value;
        //var event_list_name = ["Host Name", "Source IP", "Destination IP", "Source Port", "Destination Port", "Protocol", "Action", "Status"];
        var event_list_name = ["Host Name", "Source IP", "Destination IP", "Source Port", "Destination Port", "Protocol", "Action", "STATE"];
		var alert_list_name = ["Priority", "Source IP", "Destination IP", "Alert Time", "Description", "Status"];
        //var event_list_value = ["HOSTNAME", "SRCIP", "DSTIP", "SRCPORT", "DSTPORT", "PROTOCOL", "ACTION", "STATUS"];		
		var event_list_value = ["HOSTNAME", "SRCIP", "DSTIP", "SRCPORT", "DSTPORT", "PROTOCOL", "ACTION", "STATE"];
        var alert_list_value = ["PRIORITY", "SRCIP", "DSTIP", "ALERT_TIME", "DESCRIPT", "STATUS"];
        if (type === "2")
        {
            $('#alert_col').hide();
            $('#event_col').show();
            $("#group_by").empty();

            for (var i = 0; i < event_list_name.length; i++)
            {

                $('#group_by').append('<option value="' + event_list_value[i] + '">' + event_list_name[i] + '</option>');
            }
        } else if (type === "3")
        {
            $('#event_col').hide();
            $('#alert_col').show();
            $("#group_by").empty();


            for (var i = 0; i < alert_list_value.length; i++)
            {
                $('#group_by').append('<option value="' + alert_list_value[i] + '">' + alert_list_name[i] + '</option>');
            }


        } else {
            $("#group_by").empty();
            $('#alert_col').hide();
            $('#event_col').hide();
        }

    }
    
    
    function getselectedcheckbox(frm)
    {
        var selchbox = [];
        var inpfields = frm.getElementsByTagName('input');
        var nr_inpfields = inpfields.length;
        for (var i = 0; i < nr_inpfields; i++)
        {
            if (inpfields[i].type === 'checkbox' && inpfields[i].checked === true)
                selchbox.push(inpfields[i].value);
        }
        return selchbox;
    }
    
    
    $(document).ready(function() {
    document.getElementById('generate').onclick = function ()
    {
        var selchb = getselectedcheckbox(this.form);
        //console.log(selchb,length);
        var start = $('#start_date').val();
        var end = $('#end_date').val();
        var title = $('#titles').val();
        var type = $('#types').val();
        var top = $('#tops').val();
        var group = $('#group_by').val();

					//var start = $('#start_date').val();
                //var end = $('#end_date').val();
		var startDay = new Date(start);
		var endDay = new Date(end);
		var millisecondsPerDay = 1000 * 60 * 60 * 24;
		var millisBetween = endDay.getTime() - startDay.getTime();
		var days = millisBetween / millisecondsPerDay;

		var today = new Date();
		
		var startDate_milliseconds=startDay.getTime()- today.getTime();  
		var start_Date_difference = startDate_milliseconds / millisecondsPerDay;
		
		var endDate_milliseconds=endDay.getTime() - today.getTime();        
		var end_Date_difference = endDate_milliseconds / millisecondsPerDay;
        if (!title) {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Infromation");
            $('#msg_conf').html("Please Enter Report Title!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } else if (selchb.length < 1) {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Infromation");
            $('#msg_conf').html("Select Report Type!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } else if (!start || !end)
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Infromation");
            $('#msg_conf').html("Please Enter Dates!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
            //alert(selchb);
        } else if (!group)
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Infromation");
            $('#msg_conf').html("Please Enter Group By!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
            //alert(selchb);
        } 
		
        else if (Math.floor(days) < 0)
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(" Please start date should less or equal to end date !");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    $('#end_date').val("");
                }
                
                else if (Math.floor(start_Date_difference) > 0  )
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(" Please Start Date should less or equal to the current date !");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    $('#start_date').val("");
                }
                else if (Math.floor( end_Date_difference) >= 0 )
                {
					alert(end_Date_difference);
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(" Please End Date should less or equal to the current date !");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    $('#end_date').val("");
                }else {
            var myurl = "../exportCustomized?jsonData=" + JSON.stringify(selchb) + "&sdate=" + start + "&edate=" + end + "&title=" + title + "&rtype=" + type + "&top=" + top + "&groupBycol=" + group; //post selected reports
            window.open(myurl, "_blank");

        }
    };
     }); 
     
     
     
    function lettersNumberOnly(evt)
    {
        evt = (evt) ? evt : event;
        var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
                ((evt.which) ? evt.which : 0));
        if (charCode > 31 && (charCode < 65 || charCode > 90) &&
                (charCode < 97 || charCode > 122) && charCode > 31 && (charCode < 48 || charCode > 57)) {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Error");
            $('#msg_conf').html(" Please Enter Letters and Number Only !");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
            return false;
        }
        return true;
    }
    
    
    
     /*$(document).ready(function () 
    {
        $('#start_date,#end_date').onclick(function () 
        {
            var start = $('#start_date').val();
                var end = $('#end_date').val();
                var startDay = new Date(start);
                var endDay = new Date(end);
                var millisecondsPerDay = 1000 * 60 * 60 * 24;
                var millisBetween = endDay.getTime() - startDay.getTime();
                var days = millisBetween / millisecondsPerDay;

                var today = new Date();
                
                var startDate_milliseconds=startDay.getTime()- today.getTime();  
                var start_Date_difference = startDate_milliseconds / millisecondsPerDay;
                
                var endDate_milliseconds=endDay.getTime() - today.getTime();        
                var end_Date_difference = endDate_milliseconds / millisecondsPerDay;
                if (Math.floor(days) < 0)
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(" Please start date should less or equal to end date !");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    $('#end_date').val("");
                }
                
                if (Math.floor(start_Date_difference) > 0  )
                {
				alert(start_Date_difference);
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(" Please Start Date should less or equal to the current date !");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    $('#start_date').val("");
                }
                if (Math.floor( end_Date_difference) > 0 )
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(" Please End Date should less or equal to the current date !");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    $('#end_date').val("");
                }
        }); //end change function
    }); //end ready
*/




