 <?php include_once('header.php') ?> 
 <?php include_once('navbar.php') ?>  
		
   <body id="page-top">
  <div id="wrapper">

      <!-- Sidebar -->
     
      <div id="content-wrapper">
	  <div class="container-fluid">
<div class="container">
        <div class="row">
            <h2>Autocomplete Codeigniter</h2>
        </div>
        <div class="row">
            <form>
                 <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Title" style="width:500px;">
                  </div>
            </form>
        </div>
    </div>
 
    <script src="<?php echo base_url().'assetss/js/jquery-3.3.1.js'?>" type="text/javascript"></script>
    <script src="<?php echo base_url().'assetss/js/bootstrap.js'?>" type="text/javascript"></script>
    <script src="<?php echo base_url().'assetss/js/jquery-ui.js'?>" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function(){
            $( "#title" ).autocomplete({
              source: "<?php echo site_url('welcome/get_autocomplete/?');?>"
            });
        });
    </script>
 
        

          <!-- Breadcrumbs-->
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Overview</li>
          </ol>

          <!-- Icon Cards-->
          <div class="row">
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="card text-white bg-primary o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class="fas fa-fw fa-comments"></i>
                  </div>
                  <div class="mr-5">26 New Messages!</div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                  <span class="float-left">View Details</span>
                  <span class="float-right">
                    <i class="fas fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
           
            
            
          </div>
		   <div class="card-body">
<button type="button" class="btn btn-primary mb-1" data-toggle="modal" data-target="#scrollmodal">add student</button>
 </div>
          <!-- DataTables Example -->
          <div class="card mb-3">
            
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                   <thead>
		    <tr>
			  <th scope="col">id</th>
		      <th scope="col">name</th>
		      <th scope="col">age</th>
		      <th scope="col">sex</th>
			  <th scope="col">grade</th>
			  <th scope="col">phone</th>
			  <th scope="col">family phone</th>
			  <th scope="col">photo</th>
			  <th scope="col">Action</th>
		    </tr>
		  </thead>
		  <tbody>
		  		<?php if(count($posts)):?>
		  			<?php foreach($posts as $post): ?>
		    <tr>
		      <td><?php echo $post->id;?></td>
		      <td><?php echo $post->name;?></td>
		      <td><?php echo $post->age;?></td>
		      <td><?php echo $post->sex;?></td>
			  <td><?php echo $post->grade;?></td>
		      <td><?php echo $post->phone;?></td>
			  <td><?php echo $post->family_phone;?></td>
		      <td><?php echo $post->photo;?></td>
		    <td>
				<?php echo anchor("welcome/view/{$post->id}", 'Detail', ['class'=>'btn btn-primary']);?>
		    	<?php echo anchor("welcome/update/{$post->id}", 'Update', ['class'=>'btn btn-success']);?>
		    	<?php echo anchor("welcome/delete/{$post->id}", 'Delete', ['class'=>'btn btn-danger']);?>
		    </td>
			</tr>
				<?php endforeach; ?>
		    <?php else: ?>
		    	<tr> 
		    		<td> no record</td>
		    		</tr>
		    <?php endif;?>
		  </tbody>
                </table>
              </div>
            </div>
          
 </div>

        </div>
        <!-- /.container-fluid -->

  <div class="modal fade" id="scrollmodal" tabindex="-1" role="dialog" aria-labelledby="scrollmodalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
						<div class="view" style="background-image: url('/crud/pic3.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
       
                            <div class="modal-header">
                                <h5 class="modal-title" id="scrollmodalLabel">Student registration</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
										<div class="container">
										<form action="http://[::1]/crud/index.php/welcome/save" class="form-horizontal" method="post" accept-charset="utf-8"> 
										  <fieldset>
	<div class="container">
  <div class="row">
     <div class="col-md-6">
	 <div class="col-md-12">
										<div class="form-group"> 
										<label for="exampleInputEmail1">Student name</label> 
										<input type="text" required name="name" value="" placeholder="Student name" class="form-control" />
										 </div>
										 <div class="form-group"> 
										<label for="exampleInputEmail1">Student Age</label> 
										<input type="text" required name="age" value="" placeholder="Student age" class="form-control" />
										 </div>
										 <div class="form-group"> 
										<label for="exampleInputEmail1">Student sex</label> 
										<div class="form-group">
											<label class="form-check form-check-inline">
											  <input class="form-check-input" type="radio" required name="sex" value="M">
											  <span class="form-check-label"> Male </span>
											</label>
											<label class="form-check form-check-inline">
											  <input class="form-check-input" type="radio" required name="sex" value="F">
											  <span class="form-check-label"> Female</span>
											</label>
										</div>
										 </div>
										 <div class="form-group"> 
										<label for="exampleInputEmail1">Student grade</label> 
										<input type="text" required name="grade" value="" placeholder="Student grade" class="form-control" />
										 </div>
										 <div class="form-group"> 
										<label for="exampleInputEmail1">Student phone</label> 
										<input type="text" required name="phone" value="" placeholder="Student phone" class="form-control" />
										 </div>
										<div class="form-group"> 
										<label for="exampleInputEmail1">Student's family phone</label> 
										<input type="text" required name="family phone" value="" placeholder="family phone" class="form-control" />
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
                                <a href="http://[::1]/crud" class="btn btn-secondary">Back</a> 
                               <button class="btn btn-primary" type="submit">save</button>
                            </div>
							</div>
                        </div>
                    </div>
                </div>


				
				
				
				
				
  <!-- Sticky Footer -->
       <?php include_once('footer.php') ?>

      </div>
      <!-- /.content-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div>

  </body>