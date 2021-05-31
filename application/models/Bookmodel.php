

<?php
	class bookmodel extends CI_model{

		public function getPosts(){
			
		$query = $this->db->get('info');
		if($query->num_rows() > 0){
			return $query->result();
		}
			
	    }
		public function addPost($data)
		{
			return $this->db->insert('info', $data);
		}
		public function getSinglePosts($id){
			$query = $this->db->get_where('info', array('id' => $id));
			if($query->num_rows() > 0)
			{
				return $query->row();
			}
		}

		public function updatePost($data, $id){
		   return $this->db->where('id', $id)
			            ->update('info', $data);
				
		}

		public function deletePosts($id)
		{
			return $this->db->delete('info', ['id' => $id]);
		}
		public function getTitle(){
		$this->db->query('SELECT title FROM info');
		}


	function booktable($search){

        $query = $this
                ->db
                ->select('*')
                ->from('book')
                ->like('TITLE',$search)
                ->or_like('AUTHOR',$search)
                ->get();
     
        if($query->num_rows()>0)
        {
            return $query->result(); 
        }
        else
        {
            return null;
        }
		
}
	
	
	}

?>