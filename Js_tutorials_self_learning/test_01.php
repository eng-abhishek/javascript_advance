<?php

$url = 'https://api.seon.io/SeonRestService/phone-api/v1/+917071310320';

$headers = array(
  "X-API-KEY:"
);

$curl = curl_init($url);

$ch = curl_init();
curl_setopt_array($ch,array(
  CURLOPT_URL => $url,
  CURLOPT_FOLLOWLOCATION => false,
  CURLOPT_HEADER => false,
  CURLOPT_HTTPHEADER => $headers,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPGET => true,
));

$result = curl_exec($ch);

$err = curl_error($ch);
if (curl_errno($ch) && $err) $res = "CURL ERROR [".curl_errno($ch)."]: ".curl_error($ch);
else $res = $result;

echo $res;

?>