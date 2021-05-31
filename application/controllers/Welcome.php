<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {
	
	public function index()
	{
		//$this->load->model('queries');
		$posts = $this->queries->getPosts();
		//$this->load->view('login');
		$this->load->view('welcome_message', ['posts'=>$posts]);
	}
	public function get_autocomplete(){
        if (isset($_GET['term'])) {
            $result = $this->queries->search_blog($_GET['term']);
            if (count($result) > 0) {
            foreach ($result as $row)
                $arr_result[] = $row->title;
                echo json_encode($arr_result);
            }
        }
	}
	public function create()
	{
		$this->load->view('create');
	}
	public function update($id){
		$this->load->model('queries');
		$post = $this->queries->getSinglePosts($id);
		$this->load->view('update', ['post'=>$post]);
	}


	public function save(){
		       /* $this->form_validation->set_rules('name', 'Student name', 'required');
                $this->form_validation->set_rules('age', 'Student Age', 'required');
				$this->form_validation->set_rules('sex', 'Student sex', 'required');
				$this->form_validation->set_rules('grade', 'Student grade', 'required');
				$this->form_validation->set_rules('phone', 'Student phone', 'required');
				$this->form_validation->set_rules('family phone', 'Student family phone', 'required');
*/
               // if ($this->form_validation->run())
               // {
                     $data = $this->input->post();
                     if ($this->queries->addPost($data)){
                     	$this->session->set_flashdata('msg', 'Post Saved Successfully');
                     }
                     else
                     {
                     	$this->session->set_flashdata('msg', 'Failed To Save');
                     }
                     return redirect('welcome');
                //}
               // else
               // {
                //        $this->load->view('create.php');
                //}
	}

	public function change($id)
	{
					$data = $this->input->post();
				/*$this->form_validation->set_rules('title', 'Title', 'required');
                $this->form_validation->set_rules('descr', 'Descreption', 'required');
                if ($this->form_validation->run())
                {
                       
                       $today = date('y-m-d');
                       $data['date'] = $today;
                       unset($data[submit]);*/
                    //   $this->load->model('queries');
                     if ($this->queries->updatePost($data, $id)){
                     	$this->session->set_flashdata('msg', 'Post Update Successfully');
                     }
                     else
                     {
                     	$this->session->set_flashdata('msg', 'Failed To Update');
                     }
                     return redirect('welcome');
               /* }
                else
                {
                        $this->load->view('create');
                }*/
	}
	public function view($id){
	//	$this->load->model('queries');
		$post = $this->queries->getSinglePosts($id);
		$this->load->view('view', ['post'=>$post]);
	}
	
		public function delete($id)
		{
		//$this->load->model('queries');
		if ($this->queries->deletePosts($id)){
				$this->session->set_flashdata('msg', 'Post Deleted Successfully');
		}
		else{
			$this->session->set_flashdata('msg', 'Failed To delete');
		}
		   return redirect('welcome');
		}

		 
    
		
		
		
		
		
		
		
		
		
		
		
		
		
}
  