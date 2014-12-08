<?php
include('Requests/library/Requests.php');
$cacheTime = 30;
$cacheFile = 'jSON/trafficinfo.json';
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

        if(file_exists('jSON/trafficinfo.json') && filemtime('jSON/trafficinfo.json') > (time() - 30)){
            // Now let's make a request!
            echo file_get_contents('jSON/trafficinfo.json');
        }else{
            //write content to jsonfile


            $request = Requests::get('http://api.sr.se/api/v2/traffic/messages?format=json&indent=true&size=100&sort=createddate');
            strip_tags($request);
             if($request == "" || $request == null){
                 echo file_get_contents('jSON/trafficinfo.json');
                 die();
             }
            file_put_contents('jSON/trafficinfo.json',$request->body);
            echo file_get_contents('jSON/trafficinfo.json');
        }
    }
} 