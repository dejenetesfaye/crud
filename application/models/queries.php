<?php
	class queries extends CI_model{

		public function getPosts(){
			
		$query = $this->db->get('student');
		if($query->num_rows() > 0){
			return $query->result();
		}
			
	    }

		public function addPost($data)
		{
			return $this->db->insert('student', $data);
		}
		public function getSinglePosts($id){
			$query = $this->db->get_where('student', array('id' => $id));
			if($query->num_rows() > 0)
			{
				return $query->row();
			}
		}

		public function updatePost($data, $id){
		   return $this->db->where('id', $id)
			            ->update('student', $data);
				
		}

		public function deletePosts($id)
		{
			return $this->db->delete('student', ['id' => $id]);
		}
		
	function search_blog($title){
        $this->db->like('title', $title , 'both');
        $this->db->order_by('title', 'ASC');
        $this->db->limit(10);
        return $this->db->get('student')->result();
    }
	
	}

?>