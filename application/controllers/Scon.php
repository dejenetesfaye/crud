<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Scon extends CI_Controller {
	
	public function index()
	{	
		$posts = $this->bookmodel->getPosts();
		$this->load->view('sview', ['posts'=>$posts]);
	}

	public function update($id){
		$this->load->model('bookmodel');
		$post = $this->bookmodel->getSinglePosts($id);
		$this->load->view('sview', ['posts'=>$posts]);
	}

	
	public function view($id){
	//	$this->load->model('bookmodel');
		$post = $this->bookmodel->getSinglePosts($id);
		$this->load->view('sview', ['posts'=>$posts]);
	}
	
		public function delete($id)
		{
		//$this->load->model('bookmodel');
		if ($this->bookmodel->deletePosts($id)){
				$this->session->set_flashdata('msg', 'Post Deleted Successfully');
		}
		else{
			$this->session->set_flashdata('msg', 'Failed To delete');
		}
		   return redirect('welcome');
		}

		
public function ajaxsearch()
    {
      
       if(is_null($this->input->get('id')))
        {

        $this->load->view('sview');    
		
        
        }
        else
        {
        $this->load->model('Bookmodel'); 
        
        $data['booktable']=$this->Bookmodel->booktable($this->input->get('id')); 
        
        $this->load->view('sview',$data);
        
        }
        
       
    }
		
       
    }
		
  