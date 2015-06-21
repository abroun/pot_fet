<?php 

// Get data from Flickr
$data = file_get_contents('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&nojsoncallback=1');

// For some reason Flickr escapes ' characters which is apparently invalid JSON. Replace
// escaped ' characters so that JSON parsers don't break.
$data = str_replace("\\'","'",$data);

// Enable CORS if running in dev mode
if( strpos(file_get_contents('config.json'),'"ENV": "development"') !== false) {
  header("Access-Control-Allow-Origin: *");
}

// Return the JSON data
header('Content-Type: application/json');
echo $data; 

?>