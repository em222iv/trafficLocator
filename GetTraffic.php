<?php
include('Requests/library/Requests.php');
/**
 * Created by PhpStorm.
 * User: erikmagnusson
 * Date: 02/12/14
 * Time: 14:44
 */
include('Request/library/Requests.php');

new GetTraffic();

class GetTraffic {
    public function __construct() {


// Next, make sure Requests can load internal classes
        Requests::register_autoloader();

// Now let's make a request!
        $request = Requests::get('http://api.sr.se/api/v2/traffic/messages?format=json&size=100&sort=createddate+desc');

//write content to jsonfile
        $fp = fopen('jSON/trafficinfo.json', 'w');
        fwrite($fp, $request->body);
        fclose($fp);

        echo file_get_contents('jSON/trafficinfo.json');
    }
} 