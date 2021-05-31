
 $(document).ready(function () {
        $('#initket_tbl').DataTable();
    });
    
        
    $(document).on("click", ".editInitTickets", function () {
        var id = $(this).data('id_auto');
        var name = $(this).data('name');
        var priority = $(this).data('priority');
        var status = $(this).data('status');
        var note1 = $(this).data('note');
        var note2 = $(this).data('note2');
        var user = $(this).data('user');
        $(".modal-body #tid").val(id);
        $(".modal-body #ttitle").val(name);
        $(".modal-body #tpriority").val(priority);
        $(".modal-body #tstatus").val(status);
        $(".modal-body #tnote1").val(note1);
        $(".modal-body #tnote2").val(note2);
        $(".modal-body #tuser").val(user);
    });

    function EditTicket()
    {
        //var ticketId =$('#tid').val();
        var ticketId = $('#ttitle').val();
        var Res_user_ = $('#tuser').val();
        var createBy_ = $('#tuser').val();
        var Note_2 = $('#tnote2').val();
        var status_ = $('#tstatus').val();
         var Note_ = $('#tnote1').val();
        var priority_ = $('#tpriority').val();
        
        var email = $('#temail').val();
        var subject = $('#tsubject').val();
        var body = $('#tbody').val();

        if (!ticketId)
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill Title Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } 
        else if (!Note_)
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill Note1 Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } 
         else if (priority_==="" )
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Select  priority!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } 
        else if (Res_user_==="" )
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Select User Type!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } 
        else if (!Note_2)
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Fill Note2 Field!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        } 
        else if (status_==="" )
        {
            $('#confirm_modal').modal('show');
            $('#confirm_title').html("Information");
            $('#msg_conf').html("Please Select Status!");
            $('#msg_conf').removeClass("alert-info");
            $('#msg_conf').addClass("alert-danger");
        }else if ((email && !isValidEmailAddress(email)) )
                {
                   
                        $('#confirm_modal').modal('show');
                        $('#confirm_title').html("Success");
                        $('#msg_conf').html("inValid Email Address");
                        $('#msg_conf').removeClass("alert-info");
                        $('#msg_conf').addClass("alert-danger");                  
                }  
               else  if (isValidEmailAddress(email) &&( !subject || !body) )
                {                  
                        $('#confirm_modal').modal('show');
                        $('#confirm_title').html("Success");
                        $('#msg_conf').html("Please Enter Subject and Body Field of  Email Address");
                        $('#msg_conf').removeClass("alert-info");
                        $('#msg_conf').addClass("alert-danger");  
                } 
        else
        {
        $.ajax({
            url: '../Tickets/Add_initial_response',
            method: 'POST',
            dataType: 'json',
            data: {title: ticketId, uname: Res_user_, note: Note_, note2: Note_2, priority: priority_, createBy: createBy_, status: status_, email: email, subject: subject, body: body},
            //jsonData: id,
            success: function (data, status, xhr)
            { 
                 if (data.success === true)
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Success");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-danger");
                    $('#msg_conf').addClass("alert-info");
                    //window.setTimeout(function () {
                     // location.reload(true)
                   // }, 4000);
                } 
                else 
                {
                    $('#confirm_modal').modal('show');
                    $('#confirm_title').html("Success");
                    $('#msg_conf').html(data.successMessage);
                    $('#msg_conf').removeClass("alert-info");
                    $('#msg_conf').addClass("alert-danger");
                   // window.setTimeout(function () {
                      //  location.reload(true)
                  // }, 4000);
                }
                $('#editInitTicket').modal('hide');
            },
            error: function ()
            {
                $('#confirm_modal').modal('show');
                $('#confirm_title').html("Error");
                $('#msg_conf').html(" CHECK REQIUSTED URL");
                $('#msg_conf').removeClass("alert-info");
                $('#msg_conf').addClass("alert-danger");
               // window.setTimeout(function () {
                 //  location.reload(true)
               // }, 4000);
            }
        });

        }
    }


function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}