 
  function deletestickynotes( ) {
        var delid = $('#delid').val();
        $.ajax({
            url: "../Queries/Remove_note",
            method: 'POST',
            dataType: 'json',
            data: {autoid: delid},
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
                    }, 5000);
                } else
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Information");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                   // window.setTimeout(function () {
                     //   location.reload(true)
                   // }, 5000);
                }
                $('#deletestickynotes').modal('hide');
            },
            error: function ()
            {
                $('#confirm_modal').modal('show');
                $('#confirm_title').html("Error");
                $('#msg_conf').html(" CHECK REQIUSTED URL");
                $('#msg_conf').removeClass("alert-info");
                $('#msg_conf').addClass("alert-danger");
               // window.setTimeout(function () {
                // location.reload(true)
               // }, 5000);
            }
        });

    }
    jQuery(document).ready(function ($) {
     $(document).on("click", "#deletenote", function () {
        var id = $(this).data('id');
        var name = $(this).data('name');
        var alert = "are you sure you want to delete < " + name + " > Sticky notes ?";
          $(".modal-body #deleteAlert").html(alert);
           $(".modal-body #delid").val(id);
    });
     });
 
 function insertAsset()
    {
        var name = $('#assetname').val();
        var sys = $('#systype').val();
        var ipadd = $('#ipadd').val();
        var trapport = $('#trapport').val();
        var comport = $('#comport').val();
        var enable = $('#enable').val();
        var descript = $('#descript').val();
       if (!name || sys === "" || !ipadd || !trapport || !comport || enable === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill The Remaining Fields!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } else if (name.length < 3 || name.length > 20)
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Asset Name should  between 3 and 20 character");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } else
        {
            $.ajax({
                url: "../Assets/Add_assets",
                method: 'POST',
                dataType: 'json',
                data: {sys_type: sys, name: name, description: descript, ip: ipadd, cmd_port: comport, trap_port: trapport, enable: enable},
                success: function (data, status, xhr) {
                    if (data.update === false)
                    {
                        $('#confirm_modal').modal('show');
                        $('#confirm_title').html("Please Inset Again");
                        $('#msg_conf').html(data.successMessage);
                        $('#msg_conf').removeClass("alert-info");
                        $('#msg_conf').addClass("alert-danger");
                      //  window.setTimeout(function () {
                         //   location.reload(true)
                     // }, 5000);

                    } else
                    {
                        $('#confirm_modal').modal('show');
                        $('#confirm_title').html("Success");
                        $('#msg_conf').html(data.successMessage);
                        $('#msg_conf').removeClass("alert-danger");
                        $('#msg_conf').addClass("alert-info");
                        window.setTimeout(function () {
                        location.reload(true)
                        }, 5000);
                    }

                    $('#add_asset').modal('hide');
                },
                error: function ()
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(" CHECK REQIUSTED URL");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    //window.setTimeout(function () {
                      //  location.reload(true)
                 // }, 5000);
                }
            });
        }
    }

  function editAsset()
    {
        var edit_id = $('#edit_id').val();
        var edit_name = $('#edit_name').val();
        var edit_sys = $('#edit_system_type').val();
        var edit_ip = $('#edit_ip').val();
        var edit_trap_port = $('#edit_trap_port').val();
        var edit_Com_Port = $('#edit_Communication_Port').val();
        var edit_enable = $('#edit_enable').val();
        var edit_descript = $('#edit_description').val();
        if (!edit_name || edit_sys === "" || !edit_ip || !edit_trap_port || !edit_Com_Port || edit_enable === "")
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill The Remaining Fields!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } else if (edit_name.length < 3 || edit_name.length > 20)
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Asset Name should  between 3 and 20 character");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } else
        {
            $.ajax({
                url: "../Assets/Update_assets",
                method: 'POST',
                dataType: 'json',
                data: {eid: edit_id, sys_type: edit_sys, name: edit_name, description: edit_descript, ip: edit_ip, cmd_port: edit_Com_Port, trap_port: edit_trap_port, enable: edit_enable},
                success: function (data, status, xhr) {
                    if (data.update === true)
                    {
                        $('#confirm_modal').modal('show');
                        $('#confirm_title').html("Success");
                        $('#msg_conf').html(data.successMessage);
                        $('#msg_conf').removeClass("alert-danger");
                        $('#msg_conf').addClass("alert-info");
                     window.setTimeout(function () {
                            location.reload(true)
                        }, 5000);

                    } else
                    {
                        $('#confirm_modal').modal('show');
                        $('#confirm_title').html("Information");
                        $('#msg_conf').html(data.successMessage);
                        $('#msg_conf').removeClass("alert-info");
                        $('#msg_conf').addClass("alert-danger");
                        //window.setTimeout(function () {
                         //   location.reload(true)
                        //}, 5000);
                    }
                    $('#edit_asset').modal('hide');
                },
                error: function ()
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Error");
                    $('#msg_conf').html(" CHECK REQIUSTED URL");
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                    //window.setTimeout(function () {
                     //   location.reload(true)
                   // }, 5000);
                }
            });
        }
    }
    
    
    
     
    function deleteAsset( ) {
        var delid = $('#delid').val();
        $.ajax({
            url: "../Assets/Delete_assets",
            method: 'POST',
            dataType: 'json',
            data: {autoid: delid},
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
                    }, 5000);
                } else
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Information");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                   // window.setTimeout(function () {
                     //   location.reload(true)
                   // }, 5000);
                }
                $('#deleteAsset').modal('hide');
            },
            error: function ()
            {
                $('#confirm_modal').modal('show');
                $('#confirm_title').html("Error");
                $('#msg_conf').html(" CHECK REQIUSTED URL");
                $('#msg_conf').removeClass("alert-info");
                $('#msg_conf').addClass("alert-danger");
               // window.setTimeout(function () {
                // location.reload(true)
               // }, 5000);
            }
        });

    }
  
    $(document).on("click", ".editAssets", function () {

        var eid = $(this).data('id');
        var ename = $(this).data('name');
        var esys_type = $(this).data('sys_type');
        var edescription = $(this).data('description');
        var eip = $(this).data('ip');
        var ecmd_port = $(this).data('cmd_port');
        var etrap_port = $(this).data('trap_port');
        var eenable = $(this).data('enable');
        //console.log()
        //var alert ="are you sure you want to delete "+name +" Asset ?";
        //$(".modal-body #deleteAlert").html(alert);
        $(".modal-body #edit_id").val(eid);
        $(".modal-body #edit_name").val(ename);
        $(".modal-body #edit_system_type").val(esys_type);
        $(".modal-body #edit_description").val(edescription);
        $(".modal-body #edit_ip").val(eip);
        $(".modal-body #edit_Communication_Port").val(ecmd_port);
        $(".modal-body #edit_trap_port").val(etrap_port);
        $(".modal-body #edit_enable").val(eenable);
    });
    
    
       $(document).on("click", ".deleteAssets", function () {
        var id = $(this).data('id');
        var name = $(this).data('name');
        var alert = "are you sure you want to delete < " + name + " > Asset ?";
        $(".modal-body #deleteAlert").html(alert);
        $(".modal-body #delid").val(id);
    });


    function Number(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            $('#confirm_modal').modal('show');
                $('#confirm_title').html("Information");
                $('#msg_conf').html(" Please Enter Number Only !");
                $('#msg_conf').removeClass("alert-info");
                $('#msg_conf').addClass("alert-danger");
            return false;
        }
        return true;
    }
    
     
    function ip(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 46 || charCode > 57)) {
            return false;
        }
        return true;
    }
    
       function lettersOnly(evt) {
       evt = (evt) ? evt : event;
       var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
          ((evt.which) ? evt.which : 0));
       if (charCode > 31 && (charCode < 65 || charCode > 90) &&
          (charCode < 97 || charCode > 122)) {
                $('#confirm_modal').modal('show');
                $('#confirm_title').html("Information");
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
        //while (this1.val().indexOf("..") !== -1) {
            //this1.val(this1.val().replace('..', '.'));
        //}
        $('#ipadd,#edit_ip').val("");
        x = 46;
    } else {
        x = 0;
        var lastChar = this1.val().substr(this1.val().length - 1);
         while (this1.val().indexOf("..") !== -1) {
            this1.val(this1.val().replace('..', '.'));
        }
        if (lastChar == '.') {
            this1.val(this1.val().slice(0, -1));
        }
        var ip = this1.val().split('.');
        if (ip.length == 4) {
         }
    }
});

jQuery(function($){
   $("#ipadd").mask("999.999.999.999",{placeholder:"   .   .   .   "});
});

   $(document).ready(function () {
        $('#assets_tbl').DataTable();
    });