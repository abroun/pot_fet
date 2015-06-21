<?php 

// Get data from Flickr
$params = array(
  'tags'=>'potato',
  'tagmode'=>'all',
  'format'=>'json',
  'nojsoncallback'=>1 );
  
if (isset($_GET['tags'])) {
  $params['tags'] = $_GET['tags'];
}

$url = 'https://api.flickr.com/services/feeds/photos_public.gne?' . http_build_query($params);

$data = file_get_contents($url);

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