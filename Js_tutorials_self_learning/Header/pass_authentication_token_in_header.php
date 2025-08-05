<?php
# in js like that

// fetch('/api/users', {
//   headers: {
//     'Authorization': 'Bearer ' + token 
//   }
// });

# In PHP We can do it using CURL Or GuzzleHTTP
// url -H "Authorization: Bearer <token>" https://api.example.com


# curl https://reqbin.com/echo/get/json
#    -H "Accept: application/json"
#    -H "Authorization: Bearer {token}"

#==========================================

# CURL GET 
# curl https://reqbin.com/echo/get/json
#     -H "Authorization: Bearer {token}"

#===========================================

# CURL POST

# curl -X POST https://reqbin.com/echo/get/json
#     -H "Authorization: Bearer {token}"   // -H Represent that it is for header 
#     -d "[post data]"

?>