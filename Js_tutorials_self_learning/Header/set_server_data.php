<?php
header('x-api-token:1245');
header('bearer-token:6547');
header('cache:cache data');

# set api response by default take json form so
header('Content-Type:application/json;charset=UTF-8');

# for download pdf we set in server or we tells to the server using header function
// header('Content-Type:application/pdf');
// header('Content-Disposition:attachment;filename="document.pdf"');

# Remove cache using header()
// header("cache-control:no-cache,must-revalidated, max-age=0");
# header("Expires: Sun, 25 Jun 1999 04:00:00 GMT");

//print_r(headers_list());
// $t1 = 'https://cdn.educba.com/test/image.png';
// echo"<pre>";
// print_r(apache_request_headers());
// return folder stracture


#====================== $_SERVER["HTTP_AUTHORIZATION"] ======================#

# Geting Post Mam AUTHIENTICATION TOKEN USING THIS WAY
# $_SERVER["HTTP_AUTHORIZATION"]



#=========================== PHP_SELF ===================================#

// 'PHP_SELF': 

// print_r($_SERVER['PHP_SELF']);  // Gives server path
// print_r(__FILE__); // Gives storage path

// The filename of the currently executing script, relative to the document root. For instance,
// $_SERVER['PHP_SELF'] in a script at the address 
// http://example.com/foo/bar.php would be /foo/bar.php. The __FILE__ constant contains the full path
// and filename of the current (i.e. included) file. If PHP is running as a command-line processor this
// variable contains the script name.


#======================= 'SERVER_NAME' =================================#
//  'SERVER_NAME'

// print_r($_SERVER['SERVER_NAME']);
// It returns the
// localhost

// The name of the server host under which the current script is executing. If the script is running on
// a virtual host, this will be the value defined for that virtual host.


#======================= 'SERVER_SOFTWARE' =================================#
// print_r($_SERVER['SERVER_SOFTWARE']);
// o/p =  Apache/2.4.43 (Win64) OpenSSL/1.1.1g PHP/7.4.7
// Return which software is running on your server


#======================= 'SERVER_PROTOCOL' =================================#
# SERVER_PROTOCOL   It return the protocal Generally we use HTTP Protocal
# print_r($_SERVER['SERVER_PROTOCOL']);
# HTTP/1.1

# ======================== REQUEST_METHOD ===================================#
# REQUEST_METHOD
# print_r($_SERVER['REQUEST_METHOD']);
# it return the current http request method GET POST PUT PETCH HEAD


# ======================== REMOTE_PORT ===================================#
# REMOTE_PORT
# print_r($_SERVER['REMOTE_PORT']);
# return port no 52802

?>