<?php include_once('header.php'); ?>
<div class="container">
	
		<?Php echo form_open("welcome/change/{$post->id}",['class'=>'form-horizontal']);?>
		 
<fieldset>
<div class="view" style="background-image: url('/crud/pic3.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
<div class="container">
  <div class="row">
     <div class="col-md-6">
	 <div class="col-md-12">
  	<legend>Update Post</legend>
    <div class="form-group">
      <label for="exampleInputEmail1">name</label>
      <?php echo form_input(['name'=>'name','placeholder'=>'name','class'=>'form-control', 'value'=>set_value('name', $post->name)]);?>
      <?php echo form_error('name','<div class="text-danger">', '</div>');?>
     </div>

    <div class="form-group">
      <label for="exampleTextarea">age</label>
     <?php echo form_input(['name'=>'age','placeholder'=>'age','class'=>'form-control', 'value'=>set_value('age', $post->age)]);?>
    	<?php echo form_error('age','<div class="text-danger">', '</div>');?>
    </div>
	<div class="form-group">
      <label for="exampleTextarea">sex</label>
     <?php echo form_input(['name'=>'sex','placeholder'=>'sex','class'=>'form-control', 'value'=>set_value('sex', $post->sex)]);?>
    	<?php echo form_error('sex','<div class="text-danger">', '</div>');?>
		
		<div class="form-group">
											<label class="form-check form-check-inline">
											  <input class="form-check-input" type="radio" required name="sex" value="<?php echo $post->sex;?>">
											  <span class="form-check-label"> Male </span>
											</label>
											<label class="form-check form-check-inline">
											  <input class="form-check-input" type="radio" required name="sex" value="<?php echo $post->sex;?>">
											  <span class="form-check-label"> Female</span>
											</label>
										</div>

		
		
		
    </div>
	<div class="form-group">
      <label for="exampleTextarea">grade</label>
     <?php echo form_input(['name'=>'grade','placeholder'=>'grade','class'=>'form-control', 'value'=>set_value('grade', $post->grade)]);?>
    	<?php echo form_error('grade','<div class="text-danger">', '</div>');?>
    </div>
	<div class="form-group">
      <label for="exampleTextarea">phone</label>
     <?php echo form_input(['name'=>'phone','placeholder'=>'phone','class'=>'form-control', 'value'=>set_value('phone', $post->phone)]);?>
    	<?php echo form_error('phone','<div class="text-danger">', '</div>');?>
    </div>
	<div class="form-group">
      <label for="exampleTextarea">family phone</label>
     <?php echo form_input(['name'=>'family_phone','placeholder'=>'family_phone','class'=>'form-control', 'value'=>set_value('family_phone', $post->family_phone)]);?>
    	<?php echo form_error('family_phone','<div class="text-danger">', '</div>');?>
    </div> </div> </div>
	  <div class="col-md-6">
	  <div class="container">
											<div class="col-md-6">
												<div class="form-group">
													<label>Upload Image</label>
													<div class="input-group">
														<span class="input-group-btn">
															<span class="btn btn-default btn-file">
																Browse… <input type="file" id="imgInp">
															</span>
														</span>
													</div>
													<img id='img-upload'/>
												</div>
											</div>
											
											</div>
											
											<script>
									$(document).ready( function() {
										$(document).on('change', '.btn-file :file', function() {
										var input = $(this),
											label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
										input.trigger('fileselect', [label]);
										});

										$('.btn-file :file').on('fileselect', function(event, label) {
											
											var input = $(this).parents('.input-group').find(':text'),
												log = label;
											
											if( input.length ) {
												input.val(log);
											} else {
												//if( log ) alert(log);
											}
										
										});
										function readURL(input) {
											if (input.files && input.files[0]) {
												var reader = new FileReader();
												
												reader.onload = function (e) {
													$('#img-upload').attr('src', e.target.result);
												}
												
												reader.readAsDataURL(input.files[0]);
											}
										}

										$("#imgInp").change(function(){
											readURL(this);
										}); 	
									});
									</script>	 
	 </div>
	
     
 </div> 
 </div>
 <a href="http://[::1]/crud" class="btn btn-secondary">Back</a> 
                               <button class="btn btn-primary" type="submit">update</button>
 </div>

 </div>
 
  </fieldset>
 
<?php echo form_close();?>
</div>
<?php include_once('footer.php'); ?>
<!--
<div class="modal fade" id="scrollmodal_update" tabindex="-1" role="dialog" aria-labelledby="scrollmodalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            
                            <div class="modal-body">
										<div class="container">
										<form action="http://[::1]/crud/index.php/welcome/save" class="form-horizontal" method="post" accept-charset="utf-8"> 
										  <fieldset>
											<div class="container">
  <div class="row">
     <div class="col-md-6">
	 <div class="col-md-12">
											<div class="form-group">
      <label for="exampleInputEmail1">name</label>
      <?php echo form_input(['name'=>'name','placeholder'=>'name','class'=>'form-control', 'value'=>set_value('name', $post->name)]);?>
      <?php echo form_error('name','<div class="text-danger">', '</div>');?>
     </div>
										<div class="form-group">
      <label for="exampleInputEmail1">age</label>
      <?php echo form_input(['name'=>'age','placeholder'=>'age','class'=>'form-control', 'value'=>set_value('age', $post->age)]);?>
      <?php echo form_error('age','<div class="text-danger">', '</div>');?>
     </div>
										 <div class="form-group"> 
										<label for="exampleInputEmail1">Student sex</label> 
										<div class="form-group">
											<label class="form-check form-check-inline">
						<?php echo form_input(['name'=>'sex','placeholder'=>'sex','type'=>'radio','class'=>'form-control', 'value'=>set_value('sex', $post->sex)]);?>
											  <span class="form-check-label"> Male </span>
											</label>
											<label class="form-check form-check-inline">
						<?php echo form_input(['name'=>'sex','placeholder'=>'sex','type'=>'radio','class'=>'form-control', 'value'=>set_value('sex', $post->sex)]);?>
											  <span class="form-check-label"> Female</span>
											</label>
										</div>
										 </div>
										 <div class="form-group">
      <label for="exampleInputEmail1">grade</label>
      <?php echo form_input(['name'=>'grade','placeholder'=>'grade','class'=>'form-control', 'value'=>set_value('grade', $post->grade)]);?>
      <?php echo form_error('grade','<div class="text-danger">', '</div>');?>
     </div>
										<div class="form-group">
      <label for="exampleInputEmail1">phone</label>
      <?php echo form_input(['name'=>'phone','placeholder'=>'phone','class'=>'form-control', 'value'=>set_value('phone', $post->phone)]);?>
      <?php echo form_error('phone','<div class="text-danger">', '</div>');?>
     </div>
										<div class="form-group">
      <label for="exampleInputEmail1">family phone</label>
      <?php echo form_input(['name'=>'family_phone','placeholder'=>'family_phone','class'=>'form-control', 'value'=>set_value('family_phone', $post->family_phone)]);?>
      <?php echo form_error('family_phone','<div class="text-danger">', '</div>');?>
     </div>
									 </div>
	 </div>
     <div class="col-md-6">
	  <div class="container">
											<div class="col-md-6">
												<div class="form-group">
													<label>Upload Image</label>
													<div class="input-group">
														<span class="input-group-btn">
															<span class="btn btn-default btn-file">
																Browse… <input type="file" id="imgInp">
															</span>
														</span>
													</div>
													<img id='img-upload'/>
												</div>
											</div>
											</div>
	 </div>
  </div>
</div>
											
										
									<script>
									$(document).ready( function() {
										$(document).on('change', '.btn-file :file', function() {
										var input = $(this),
											label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
										input.trigger('fileselect', [label]);
										});

										$('.btn-file :file').on('fileselect', function(event, label) {
											
											var input = $(this).parents('.input-group').find(':text'),
												log = label;
											
											if( input.length ) {
												input.val(log);
											} else {
												//if( log ) alert(log);
											}
										
										});
										function readURL(input) {
											if (input.files && input.files[0]) {
												var reader = new FileReader();
												
												reader.onload = function (e) {
													$('#img-upload').attr('src', e.target.result);
												}
												
												reader.readAsDataURL(input.files[0]);
											}
										}

										$("#imgInp").change(function(){
											readURL(this);
										}); 	
									});
									</script>	 
										 
									 </fieldset>
										</div>
                            </div>
                            <div class="modal-footer">
                                <a href="http://[::1]/crud/index.php/welcome" class="btn btn-default">Back</a> 
                               <button class="btn btn-primary" type="submit">save</button>
                            </div>
                        </div>
                    </div>
                </div> -->