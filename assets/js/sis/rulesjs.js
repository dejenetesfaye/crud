 
 jQuery(document).ready(function ($) {
             $("#rangebtn").click(function () {
                $("#sip").show();
                $("#eip").show();
        });
    });
function change_category(id_name , box_name)
        {
            var type = document.getElementById(id_name).value;
            var ip_count_name       = ["IP Count Rules from Source", "IP Count Rules from Destination"];
            var ip_count_value      = ["ipcnt_rules_src", "ipcnt_rules_dst"];
            var signature_name      = ["Single", "SingleWithThreshold", "SingleWithTwoThreshold", "SingleWithScript", "SingleWithSuppress", "Suppress","Pair"];
            var signature_value     = ["Single", "SingleWithThreshold", "SingleWith2Threshold", "SingleWithScript", "SingleWithSuppress", "Suppress","Pair"];
            var mixed_name          = ["mixed Source Rules", "mixed Destination Rules"];
            var mixed_value         = ["mix_src_rules","mix_dst_rules"]; 
        //console.log(box_name);
        if (type === "IP Count")
            {   
                $('#'+box_name).empty();
                $('#'+box_name).append('<option value="">' + 'Select Type ' + '</option>');
                for (var i = 0; i < ip_count_value.length; i++)
                {    
                    $('#'+box_name).append('<option value="' + ip_count_value[i] + '">' + ip_count_name[i] + '</option>');
                }
            } else if (type === "Signature")
            {
                
                $('#'+box_name).empty();
                $('#'+box_name).append('<option value="">' + 'Select Type ' + '</option>');
                for (var i = 0; i < signature_value.length; i++)
                {
                    $('#'+box_name).append('<option value="' + signature_value[i] + '">' + signature_name[i] + '</option>');
                }
            } 
            else if (type === "Mixed")
            {
                
                $('#'+box_name).empty();
                $('#'+box_name).append('<option value="">' + 'Select Type ' + '</option>');
                for (var i = 0; i < mixed_value.length; i++)
                {
                    $('#'+box_name).append('<option value="' + mixed_value[i] + '">' + mixed_name[i] + '</option>');
                }
            } 
            else
            {
                $('#'+box_name).append('<option value="">' + "Select Type "+ '</option>');
                $('#'+box_name).empty();
            }
        }
        
        
        
jQuery(document).ready(function($) {
     $(".patterns").click(function() {
         var eid = $(this).data('id');
        $(".modal-body #patternid").val(eid);
        var id= $('#patternid').val();
        $("#pattern_body").empty();
        $.ajax({
            url: "../Rules/get_patterns",
            async: true,
            dataType: 'json',
            method: "post",
            data: {rule_id:id},
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
				if(j === 2) {
					td = td + '<td class="wrap"><p>' + data[i][j] + '</td>';
				} else {
					td = td + '<td>' + data[i][j] + '</td>';
				}
                
            }
            ;
            td = td + '<tr>';
        }
        ;
        $("#pattern_body").append(td);
    }

        jQuery(document).ready(function ($) {
               $("#rule_type").change(function () {
            if($(this).val() == "Single" || $(this).val()=="SingleWithThreshold" || $(this).val()=="SingleWithScript"  || $(this).val()=="SingleWithSuppress" || $(this).val()=="Suppress") {
                $("#threshold2").hide();
            }
            else {
                $("#threshold2").show();
            }
        });
    });
      jQuery(document).ready(function ($) {
               $("#rule_type").change(function () {
            if ($(this).val() == "Pair" ) {
                $("#pattern2").show();
            }
            else {
                $("#pattern2").hide();
            }
        });
    });
     jQuery(document).ready(function ($) {
               $("#rule_type").change(function () {
            if ($(this).val() == "SingleWithScript" ) {
                $("#script").show();
            }
            else {
                $("#script").hide();
            }
        });
    });
    jQuery(document).ready(function ($) {
               $("#rule_catagory").change(function () {
            if ($(this).val() == "IP Count" ) {
                $("#patter1").hide();
                 $("#patter2").hide();
                $("#windows1").hide();
                //$("#script").hide();
                $("#threshold2").hide();
                
            }
            else {
                $("#patter1").show();
                $("#windows1").show();
            }
        });
    });
    
     
    $(document).on("click", ".deleteRules", function () 
    {
        var ruleid = $(this).data('ruleid');
        var type = $(this).data('type');
        var alert = "are you sure you want to delete < " + type + " > Rule ?";
        $(".modal-body #deleteAlert").html(alert);
        $(".modal-body #delid").val(ruleid);

    });

    $(document).on("click", ".editAnnaRules", function () {
        var rruleid = $(this).data('rule_id');
        var rtype = $(this).data('etype');
        var rptype = $(this).data('ptype');
        var rscript = $(this).data('script');
        var rwindow = $(this).data('window');
        //var rwindow2 = $(this).data('window2');
        var rpriority = $(this).data('priority');
        var rcategory = $(this).data('category');
        var rdescription = $(this).data('description');
        var raction = $(this).data('action');
        var rthreshold1 = $(this).data('threshold');
        var rpattern = $(this).data('pattern');
        var rdirection = $(this).data('direction');
        var rstatus = $(this).data('status');
       
        $(".modal-body #edit_rule_id").val(rruleid);
        $(".modal-body #edit_rule_type").val(rtype);
        $(".modal-body #edit_rule_ptype").val(rptype);
        $(".modal-body #edit_rule_script").val(rscript);
        $(".modal-body #edit_rule_window1").val(rwindow);
        $(".modal-body #edit_rule_priority").val(rpriority);
        $(".modal-body #edit_rule_catagory").val(rcategory);
        $(".modal-body #edit_rule_description").val(rdescription);
        $(".modal-body #edit_rule_action").val(raction);
        $(".modal-body #edit_rule_threshold1").val(rthreshold1);
        $(".modal-body #edit_rule_threshold2").val(rthreshold1);////here threshold 2 will be coppied
        $(".modal-body #edit_rule_pattern").val(rpattern);
        $(".modal-body #edit_rule_direction").val(rdirection);
        $(".modal-body #edit_rule_status").val(rstatus);
                
        var type = document.getElementById("edit_rule_type").value;
            var ip_count_name = ["IP Count Rules from Source", "IP Count Rules from Destination"];
            var ip_count_value = ["ipcnt_rules_src", "ipcnt_rules_dst"];
            var signature_name = ["Single", "Single With Threshold", "Single With 2 Threshold", "Single With Script", "Single With Suppress", "Suppress","Pair"];
            var signature_value = ["Single", "SingleWithThreshold", "SingleWith2Threshold", "SingleWithScript", "SingleWithSuppress", "Suppress","Pair"];
            var mixed_name = ["mixed Source Rules", "mixed Destination Rules"];
            var mixed_value = ["mix_src_rules","mix_dst_rules"];
        if (type === "IP Count")
            {
                
                $("#edit_rule_catagory").empty();
                //$('#edit_rule_catagory').append('<option value="">' + "Select Category "+ '</option>');
            console.log(ip_count_value);    
            for (var i = 0; i < ip_count_value.length; i++)
                {
                    
                    if(rcategory == ip_count_value[i]) {
                        $('#edit_rule_catagory').append('<option value="' + ip_count_value[i] + '" selected>' + ip_count_name[i] + '</option>');
                    } else {
                        $('#edit_rule_catagory').append('<option value="' + ip_count_value[i] + '">' + ip_count_name[i] + '</option>'); 
                    }                                    
                }
            } 
            else if (type === "Signature")
            {
                
                $("#edit_rule_catagory").empty();
                //$('#edit_rule_catagory').append('<option value="">' + "Select Category "+ '</option>');
                for (var i = 0; i < signature_value.length; i++)
                {
                    if(rcategory == signature_value[i]) {
                        $('#edit_rule_catagory').append('<option value="' + signature_value[i] + '" selected>' + signature_name[i] + '</option>');
                    } else {
                        $('#edit_rule_catagory').append('<option value="' + signature_value[i] + '" >' + signature_name[i] + '</option>');
                    }   
                }
            } 
            else if (type === "Mixed")
            {
                
                $("#edit_rule_catagory").empty();
                //$('#edit_rule_catagory').append('<option value="">' + "Select Category "+ '</option>');
                for (var i = 0; i < mixed_value.length; i++)
                {
                     if(rcategory == mixed_value[i]) { 
                        $('#edit_rule_catagory').append('<option value="' + mixed_value[i] + '" selected>' + mixed_name[i] + '</option>');
                     } 
                     else 
                     {
                        $('#edit_rule_catagory').append('<option value="' + mixed_value[i] + '">' + mixed_name[i] + '</option>');
                     }
                }
            } 
            else
            {
                $('#edit_rule_catagory').append('<option value="">' + "Select Category "+ '</option>');
                $("#edit_rule_catagory").empty();               
            }       
    });

    jQuery(document).ready(function ($) {
        $(".editAnnaRules").click(function () {
            var rruleid = $(this).data('rule_id');
            $("#edit_rule_Exception").empty();
            $.ajax(
                    {
                url: "../Rules/Get_ip_exception",
                async: true,
                dataType: 'json',
                method: "post",
                data: {rule_id: $(this).data('rule_id')
                },
                success: function (data, status, xhr) 
                {
                    $(".modal-body #edit_rule_Exception").val(data);
                },
                error: function (data) {
                }
            });
        });
    });
    jQuery(document).ready(function ($) {
        $(".editAnnaRules").click(function () {
            var rruleid = $(this).data('rule_id');
                $(".modal-body #edit_rule_threshold1").empty();
                $(".modal-body #edit_rule_threshold2").empty();
            $.ajax(
                    {
                url: "../Rules/Get_threshold",
                async: true,
                dataType: 'json',
                method: "post",
                data: {rule_id: $(this).data('rule_id')
                },
                success: function (data, status, xhr) 
                {
                    $(".modal-body #edit_rule_threshold1").val(data[0]);
                $(".modal-body #edit_rule_threshold2").val(data[1]);
                },
                error: function (data) {
                }
            });
        });
    });

    function editAnnaRule()
    {
        var edit_id = $('#edit_rule_id').val();
        var edit_type = $('#type').val();
        var edit_ptype = $('#edit_rule_ptype').val();
        var edit_script = $('#edit_rule_script').val();
        var edit_window1 = $('#edit_rule_window1').val();
        var edit_priority = $('#edit_rule_priority').val();
        var edit_catagory=$('#catagory').val();
        var edit_action = $('#edit_rule_action').val();
        var edit_pattern = $('#edit_rule_pattern').val();
        var edit_description = $('#edit_rule_description').val();
        var edit_threshold1 = $('#edit_rule_threshold1').val();
        var edit_threshold2 = $('#edit_rule_threshold2').val();
        var edit_exception = $('#edit_rule_Exception').val();
        var edit_direction = $('#edit_rule_direction').val();
        var edit_status = $('#edit_rule_status').val();
         if (edit_type === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Select Type Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } else if (edit_window1 === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill Window-1 Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } else if (edit_priority === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Select priority Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } else if (edit_description === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill Description Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } else if (edit_threshold1 === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill Threshold Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } else
        {
            $.ajax({
                url: "../Rules/Edit_anual_rules",
                method: 'POST',
                dataType: 'json',
                data: {rule_id: edit_id, type: edit_type, ptype: edit_ptype, script: edit_script, window1: edit_window1,  priority: edit_priority, catagory: edit_catagory, action: edit_action, description: edit_description, pattern: edit_pattern, threshold1: edit_threshold1,threshold2: edit_threshold2, exception: edit_exception, direction: edit_direction, status: edit_status},
                success: function (data, status, xhr) {
                    if (data.found === "Found")
                    {
                        $('#confirm_modal').modal('show');
                        $('#confirm_title').html("Please Insert Again");
                        $('#msg_conf').html(data.successMessage);
                        $('#msg_conf').removeClass("alert-info");
                        $('#msg_conf').addClass("alert-danger");
                        window.setTimeout(function () {
                            location.reload(true)
                       }, 5000);

                    } else {
                        $('#confirm_modal').modal('show');
                        $('#confirm_title').html("Success");
                        $('#msg_conf').html(data.successMessage);
                        $('#msg_conf').removeClass("alert-danger");
                        $('#msg_conf').addClass("alert-info");
                         window.setTimeout(function () {
                         location.reload(true)
                         }, 2000);
                    }

                    $('#editAnnaRule').modal('hide');
                },
                error: function ()
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(" CHECK REQIUSTED URL");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    window.setTimeout(function () {
                       location.reload(true)
                    }, 2000);
                }
            });
        }
    }
    function deleteRule() {
        var del_id = $('#delid').val();
            $.ajax({
            url: "../Rules/Delete_anual_rules",
            method: 'POST',
            dataType: 'json',
            data: {autoid: del_id},
            success: function (data, status, xhr) {

                if (data.update === true)
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Success");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').addClass("alert-info");
                    $('#msg_conf').removeClass("alert-danger");
                    window.setTimeout(function () {
                        location.reload(true)
                   }, 2000);

                } else
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Information");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    window.setTimeout(function () {
                      location.reload(true)
                   }, 2000);
                }
                $('#deleteRule').modal('hide');
            },
            error: function ()
            {
                $('#confirm_modal').modal('show');
                $('#confirm_title').html("Error");
                $('#msg_conf').html(" CHECK REQIUSTED URL");
                $('#msg_conf').removeClass("alert-info");
                $('#msg_conf').addClass("alert-danger");
                window.setTimeout(function () {
                   location.reload(true)
               }, 2000);
            }
        });
    }
    function addAnnaRule()
    {
        var rtype = $('#rule_type').val();
        var rptype = $('#rule_ptype').val();
        //var rptype2 = $('#rule_ptype2').val();
        //var rcontinuee = $('#rule_contenuee').val();
        //var rcontext = $('#rule_context').val();
        //var rcontext2 = $('#rule_context2').val();
		var st_ip=$('#start_ip').val();
		var en_ip=$('#end_ip').val();
        var rscript = $('#rule_script').val();
        var rwindow1 = $('#rule_window1').val();
        //var rwindow2 = $('#rule_window2').val();
        var rpriority = $('#rule_priority').val();
        var rcatagory = $('#rule_catagory').val();
        var raction = $('#rule_action').val();
        var rpattern = $('#rule_pattern').val();
        var rpattern2 = $('#rule_pattern2').val();
        var rdescription = $('#rule_description').val();
        var rthreshold1 = $('#rule_threshold1').val();
        var rthreshold2 = $('#rule_threshold2').val();
        var rException = $('#rule_Exception').val();
        var rdirection = $('#rule_direction').val();
        var rstatus = $('#rule_status').val();

        if (rtype === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Select Type Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } /*else if (rwindow1 === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill Window-1 Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } */
		/*else if (rpattern === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill pathern Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        }*/
        else if (rthreshold1 === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill Threshold Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        }else if (rpriority === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Select priority Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } else if (rdescription === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill Description Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        }  else
		 {    
		 
		   if(rException==="")
		   {
		         $.ajax({
                url: "../Rules/Add_anlalizer_rule_with_out_exception",
                method: 'POST',
                dataType: 'json',
                data: {type: rtype, ptype: rptype, script: rscript, window1: rwindow1, priority: rpriority, catagory: rcatagory, action: raction, description: rdescription, pattern: rpattern, pattern2: rpattern2 ,threshold1: rthreshold1,threshold2: rthreshold2, Exception: rException, direction: rdirection, status: rstatus},
                success: function (data, status, xhr) {

                  /*  if (data.found === "Found")
                    {
                        $('#confirm_modal').modal('show');
                        $('#confirm_title').html("Please Inset Again");
                        $('#msg_conf').html(data.successMessage);
                        $('#msg_conf').removeClass("alert-info");
                        $('#msg_conf').addClass("alert-danger");
                         window.setTimeout(function () {
                         location.reload(true)
                         }, 2000);
                    } else
                    {*/
                        $('#confirm_modal').modal('show');
                        $('#confirm_title').html("Success");
                        $('#msg_conf').html(data.successMessage);
                        $('#msg_conf').removeClass("alert-danger");
                        $('#msg_conf').addClass("alert-info");
                        window.setTimeout(function () {
                         location.reload(true)
                         }, 2000);
                   // }
                    $('#addrule').modal('hide');
                },
                error: function ()
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(" SOME PROBLEM FOUND");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    //window.setTimeout(function () {
                       // location.reload(true)
                   // }, 2000);
                }
            });
		   }
		 
		   else
		   {
            $.ajax({
                url: "../Rules/Add_anlalizer_rule",
                method: 'POST',
                dataType: 'json',
                data: {type: rtype, ptype: rptype, script: rscript, window1: rwindow1, priority: rpriority, catagory: rcatagory, action: raction, description: rdescription, pattern: rpattern,pattern2: rpattern2, threshold1: rthreshold1,threshold2: rthreshold2, Exception: rException,start_range:st_ip,end_range:en_ip,direction: rdirection, status: rstatus},
                success: function (data, status, xhr) {

                  /*  if (data.found === "Found")
                    {
                        $('#confirm_modal').modal('show');
                        $('#confirm_title').html("Please Inset Again");
                        $('#msg_conf').html(data.successMessage);
                        $('#msg_conf').removeClass("alert-info");
                        $('#msg_conf').addClass("alert-danger");
                         window.setTimeout(function () {
                         location.reload(true)
                         }, 2000);
                    } else
                    {*/
                        $('#confirm_modal').modal('show');
                        $('#confirm_title').html("Success");
                        $('#msg_conf').html(data.successMessage);
                        $('#msg_conf').removeClass("alert-danger");
                        $('#msg_conf').addClass("alert-info");
                        window.setTimeout(function () {
                         location.reload(true)
                         }, 2000);
                   // }
                    $('#addrule').modal('hide');
                },
                error: function ()
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(" SOME PROBLEM FOUND");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    //window.setTimeout(function () {
                       // location.reload(true)
                   // }, 2000);
                }
            });
           }
        }
       
    }
    function isNumber(evt) 
    {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Error");
            $('#msg_conf').html(" Please Enter Number Only !");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
            return false;
        }
        return true;
    }
    function isip(evt) 
    {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {

            return false;
        }
        return true;
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
  var pattern = /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
        x = 46;
        $('#ipadd,#edit_ip').keypress(function (e) {
            if (e.which != 8 && e.which != 0 && e.which != x && (e.which < 48 || e.which > 57)) {
                console.log(e.which);
                return false;
            }
        }).focusout(function () {
            
            var this1 = $(this);
            if (!pattern.test(this1.val())) {
                        $('#confirm_modal').modal('show');
                        $('#confirm_title').html("Information");
                        $('#msg_conf').html(" Please Enter Valid IP Address!");
                        $('#msg_conf').removeClass("alert-info");
                        $('#msg_conf').addClass("alert-danger");
                while (this1.val().indexOf("..") !== -1) {
                    this1.val(this1.val().replace('..', '.'));
                }
                x = 46;
            } else {
                x = 0;
                var lastChar = this1.val().substr(this1.val().length - 1);
                if (lastChar == '.') {
                    this1.val(this1.val().slice(0, -1));
                }
                var ip = this1.val().split('.');
                if (ip.length == 4) {
                    //alert('Valid IP');
                }
            }
        });
    $(document).ready(function () 
    {
        $('#annarule_tbl').DataTable();
    });
