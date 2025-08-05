
<!----  

Use of Self keyword it is use to call static function or 
static variable 

--->

<?php
class User{
  
  public static $email = "test@gmail.com";

  public static function getAge(){
  	 return 10;
  }

  public static function getName(){
  	return "User name And ang is ".self::getAge()." And Email is ".self::$email;
  }

}

class Post extends User{
	public static function allpost(){
		return 'User Name : '. parent::getName();
	}
}

$obj = new Post;
echo $obj->allpost();

?>