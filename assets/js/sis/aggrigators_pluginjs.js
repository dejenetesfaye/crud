 function addplugin()
    {
        var plugname = $('#plug_name').val();
        var proname = $('#pro_name').val();
       // var parente = $('#parent').val();
       // var pmatch = $('#p_match').val();
        var stt = $('#stat').val();
       // var preoffset = $('#pre_offset').val();
       // var regoffset= $('#reg_offset').val();
        var regx = $('#rgx').val();
        if (!plugname)
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Information");
                    $('#msg_conf').html("Please Fill Plugin Name!");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                }
        else if (plugname.length < 3 || plugname.length > 20  )
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Information");
                    $('#msg_conf').html("Plugin Name should  between 3 and 20 characters!");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                } 
        else if (!regx)
        {
              $('#confirm_modal').modal('show');
              $('#confirm_title').html("Information");
              $('#msg_conf').html("Please Fill Regex Field !");
              $('#msg_conf').removeClass("alert-info");
              $('#msg_conf').addClass("alert-danger");  
        }
         else if (proname.length < 3 || proname.length > 20  )
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Information");
                    $('#msg_conf').html("Program Name should  between 3 and 20 characters!");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                }
        else
        {
            $.ajax({
            url: "../Aggregators/Add_plugin",
            method: 'POST',
            dataType: 'json',
            data: {program_name: proname, name: plugname, status: stt, regex: regx},
            success: function (data, status, xhr) {
                
                 if (data.found === "Found")
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Please Insert Again");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                   // window.setTimeout(function(){location.reload(true)},5000);
                } 
                else if (data.found === "NotFound") 
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Success");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-danger");
                    $('#msg_conf').addClass("alert-info");
                   // window.setTimeout(function(){location.reload(true)},5000);
                } 
                else if (data.success === false) 
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                   // window.setTimeout(function(){location.reload(true)},5000);
                } else {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                   // window.setTimeout(function(){location.reload(true)},5000);
                }
                      $('#addPlugin').modal('hide');
            },
            error: function () 
            {
                $('#addPlugin').modal('hide');
                $('#confirm_modal').modal('show');
                $('#confirm_title').html("Error");
                $('#msg_conf').html(" CHECK REQIUSTED URL");
                $('#msg_conf').removeClass("alert-info");
                $('#msg_conf').addClass("alert-danger");
              //window.setTimeout(function(){location.reload(true)},5000);
            }
        });
    }
    }


    function deletePlugin()
    {
        var delid = $('#delid').val();

        console.log(delid);
        $.ajax({
            url: "../Aggregators/Delete_plugin",
            method: 'POST',
            dataType: 'json',
            data: {signame: delid},
            success: function (data, status, xhr) {
                if (data.delete === true)
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Success");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').addClass("alert-info");
                    $('#msg_conf').removeClass("alert-danger");
                    //window.setTimeout(function(){location.reload(true)},5000);
               } 
               else 
               {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Information");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    //window.setTimeout(function(){location.reload(true)},5000);
                }
                $('#deletePlugin').modal('hide');
            },
            error: function () 
            {
                 $('#confirm_modal').modal('show');
                $('#confirm_title').html("Error");
                $('#msg_conf').html(" CHECK REQIUSTED URL");
                $('#msg_conf').removeClass("alert-info");
                $('#msg_conf').addClass("alert-danger");
                //window.setTimeout(function(){location.reload(true)},5000);
            }
        });

    }
    function editPlugin()
    {
        var edplugname = $('#edname').val();
        var edproname = $('#edproname').val();
        var edparente = $('#edparent').val();
        var edpmatch = $('#edprematch').val();
        var edstt = $('#edstatus').val();
        var edpreoffset = $('#edprematchoff').val();
        var edregoffset= $('#edregoffset').val();
        var edregx = $('#edregex').val();
        
       if (!edregx)
        {
              $('#confirm_modal').modal('show');
              $('#confirm_title').html("Information");
              $('#msg_conf').html("Please Fill Regex Field!");
              $('#msg_conf').removeClass("alert-info");
              $('#msg_conf').addClass("alert-danger");  
        }
         else if (edproname.length < 3 || edproname.length > 20  )
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Information");
                    $('#msg_conf').html("Program Name should  between 3 and 20 characters!");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                }
        else if (edparente.length < 3 || edparente.length > 20  )
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Parent should  between 3 and 20 characters!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } 
        else if (edpmatch.length < 3 || edpmatch.length > 20  )
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Prematch should  between 3 and 20 characters!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        }
        else if (edpreoffset.length < 3 || edpreoffset.length > 20  )
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Prematch Offset should  between 3 and 20 characters!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        }
        else if (edregoffset.length < 3 || edregoffset.length > 20  )
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Regex Offset should  between 3 and 20 characters!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        }
        else
        {
        $.ajax({
            url: "../Aggregators/Update_plugin",
            method: 'POST',
            dataType: 'json',
            data: {program_name: edproname, name: edplugname, parent: edparente, prematch: edpmatch, reg_offset: edregoffset, status: edstt, regex: edregx, prematch_offset:edpreoffset},
            success: function (data, status, xhr) {
                if (data.update === true)
                {
                    $('#confirm_modal').modal('show');
                     $('#confirm_title').html("Success");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-danger");
                    $('#msg_conf').addClass("alert-info");
                    //window.setTimeout(function(){location.reload(true)},5000);
                } 
                else 
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Please Inset Again");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                   // window.setTimeout(function(){location.reload(true)},5000);
                }
                         $('#editPlugin').modal('hide');
            },
            error: function () 
            {
                $('#confirm_modal').modal('show');
                $('#confirm_title').html("Error");
                $('#msg_conf').html(" CHECK REQIUSTED URL");
                $('#msg_conf').removeClass("alert-info");
                $('#msg_conf').addClass("alert-danger");
               // window.setTimeout(function(){location.reload(true)},5000);
            }
        });
    }
 }
 
 function lettersOnly(evt) {
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
     
     
    $(document).on("click", ".deletePlugins", function () {
        var id = $(this).data('id');
        var name = $(this).data('name');
        var alert = "are you sure you want to delete < " + name + " > Plugin ?";
        $(".modal-body #deleteAlert").html(alert);
        $(".modal-body #delid").val(id);

    });

    $(document).on("click", ".editPlugins", function () {
        var id = $(this).data('eid');
        var name = $(this).data('ename');
        var parent = $(this).data('parent');
        var pro_name = $(this).data('prog_name');
        var prematch = $(this).data('prematch');
        var pre_off = $(this).data('pre_off');
        var regex = $(this).data('regex');
        var reg_off = $(this).data('reg_off');
        var status = $(this).data('status');
        //var alert ="are you sure you want to delete "+name +" Plugin ?";
        //$(".modal-body #deleteAlert").html(alert);
        $(".modal-body #edit_id").val(id);
        $(".modal-body #edname").val(name);
        $(".modal-body #edparent").val(parent);
        $(".modal-body #edproname").val(pro_name);
        $(".modal-body #edprematch").val(prematch);
        $(".modal-body #edprematchoff").val(pre_off);
        $(".modal-body #edregex").val(regex);
        $(".modal-body #edregoffset").val(reg_off);
        $(".modal-body #edstatus").val(status);
    });
   
      $(document).ready(function () {
        $('#agg_tbl').DataTable();
    });
    