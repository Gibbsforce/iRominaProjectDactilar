<?php
    class Contact {
        
        private $host = "localhost";
        private $user = "dactpe_elalbaro";
        private $pass = "PXY8siiSb1nz";
        private $db = "dactpe_contact";
        public $mysqli;
        
        public function __construct () {
            
            return $this->mysqli = new mysqli($this->host, $this->user, $this->pass, $this->db);
            
        }
        
        public function contact ($data) {
            
            $first_name = $this->mysqli->real_escape_string($data['firstname']);
            $last_name = $this->mysqli->real_escape_string($data['lastname']);
            $email = $this->mysqli->real_escape_string($data['email']);
            $subject = $this->mysqli->real_escape_string($data['subject']);
            $message = $this->mysqli->real_escape_string($data['message']);
            
            $first_name = ucfirst(strtolower(str_replace(" ", "", $first_name)));
            $last_name = ucfirst(strtolower(str_replace(" ", "", $last_name)));
            $email = str_replace(" ", "", $email);
            $subject = ucfirst(strtolower($subject));
            
            $this->mysqli->set_charset("utf8");

            $q = "insert into contact set first_name='$first_name', last_name='$last_name', email='$email', subject='$subject', message='$message'";
            
            return $this->mysqli->query($q);
            
        }
    }
?>