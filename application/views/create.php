<?php include_once('header.php'); ?>

<link href="<?php echo base_url();?>css/datepicker.css" rel="stylesheet">

<div class="container">
<form action="http://[::1]/crud/index.php/welcome/save" class="form-horizontal" method="post" accept-charset="utf-8"> 
  <fieldset>
  	<legend>create Post</legend>
    <div class="col-md-5">
    <div class="form-group"> 
<label for="exampleInputEmail1">Title</label> 
<input type="text" required name="title" value="" placeholder="Title" class="form-control" />
 </div>

 <div class="form-group"> 
 <label for="exampleTextarea">Description</label>
 <textarea required name="descr" cols="40" rows="10" placeholder="Description" class="form-control" ></textarea>
 </div> 
 <div class="container">
 <input type="text" class="datepicker" data-date-format="dd/mm/yyyy" placeholder="Date">
 
<script src="<?php echo base_url();?>js/jquery.js"></script>
<script src="<?php echo base_url();?>js/bootstrap-datepicker.js"></script>
<script src="<?php echo base_url();?>js/bootstrap.js"></script>
<script>
$(document).ready(function(){
$('.datepicker').datepicker();
});
</script>
<br><br/>
   <input type="submit" name="submit" value="Submit" class="btn btn-default" />
    <a href="http://[::1]/crud/index.php/welcome" class="btn btn-default">Back</a> 
 </div>
 </div>
  </fieldset>

</div>

<?php include_once('footer.php'); ?>