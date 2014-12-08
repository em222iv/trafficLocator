chosenCategory="4";
array0 = [];
array1 = [];
array2 = [];
array3 = [];
array4 = [];
prev_infoWindow=false;
markers = [];
function init(){
    getCategoryArrays();
    chosenCategoryNumber();
    chosenMessageClicked();
}
function getCategoryArrays() {
    $.ajax({
        type: "get",
        url: "GetTraffic.php",
        success: function(data){
            data = JSON.parse(data);


            for (var i = 0; i < data["messages"].length; i++) {

                if(data["messages"][i].category == 0){
                    array0.push(data["messages"][i]);
                }
                if(data["messages"][i].category == 1){
                    array1.push(data["messages"][i]);
                }
                if(data["messages"][i].category == 2){
                    array2.push(data["messages"][i]);
                }
                if(data["messages"][i].category == 3){
                    array3.push(data["messages"][i]);
                }
                array4.push(data["messages"][i]);
            }
            getMarkersFromChosenCategoryArray();
        }
    });
}

function renderInfoWindow (description, title, date,subcategory){
    date = new Date(parseInt(date.replace("/Date(", "").replace(")/",""), 10));
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">'+title+'</h1>'+
        '<div id="bodyContent">'+
        '<p>'+description+'</p>'+
        '<p>'+subcategory+'</p>'+
        '<p>'+date+'</p>'+
        '</div>'+
        '</div>';

        infowindow = new google.maps.InfoWindow({
        content: contentString

    });
}

function chosenMessageClicked() {
    $('#messages').click(function(v){
        for (var i = 0; i < markers.length; i++) {
            if(markers[i].id == v.target.id){
                if(prev_infoWindow){
                    prev_infoWindow.close();
                }
                renderInfoWindow(markers[i].description,markers[i].title,markers[i].date,markers[i].subcategory);
                prev_infoWindow = infowindow;
                infowindow.open(map.map,markers[i]);
            }
        }
    });
}

function chosenCategoryNumber() {
    $('#myselect').change(function(v){
        chosenCategory = v.target.value;
        getMarkersFromChosenCategoryArray();
    });
}
function resetMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
    document.getElementById('messages').innerHTML = "";
}
function getMarkersFromChosenCategoryArray(){

   resetMarkers();
    for (var i = 0; i < array4.length; i++) {
        switch(chosenCategory) {
            case "0":
                var marker = new google.maps.Marker({
                    map:map.map,
                    position: new google.maps.LatLng(array0[i].latitude, array0[i].longitude),
                    title: array0[i].title,
                    description: array0[i].description,
                    date: array0[i].createddate,
                    id: array0[i].id,
                    subcategory: array0[i].subcategory
                });

                markers.push(marker);
                renderFullMessageList(markers[i].title,markers[i].id);
                console.log(markers[i]);
                break;
            case "1":
                var marker = new google.maps.Marker({
                    map:map.map,
                    position: new google.maps.LatLng(array1[i].latitude, array1[i].longitude),
                    title: array1[i].title,
                    description: array1[i].description,
                    date: array1[i].createddate,
                    id: array1[i].id,
                    subcategory: array1[i].subcategory
                });

                markers.push(marker);
                renderFullMessageList(markers[i].title,markers[i].id);
                break;
            case "2":
                var marker = new google.maps.Marker({
                    map:map.map,
                    position: new google.maps.LatLng(array2[i].latitude, array2[i].longitude),
                    title: array2[i].title,
                    description: array2[i].description,
                    date: array2[i].createddate,
                    id: array2[i].id,
                    subcategory: array2[i].subcategory
                });
                renderFullMessageList(markers[i]);
                markers.push(marker);
            case "3":
                var marker = new google.maps.Marker({
                    map:map.map,
                    position: new google.maps.LatLng(array3[i].latitude, array3[i].longitude),
                    title: array3[i].title,
                    description: array3[i].description,
                    date: array3[i].createddate,
                    id: array3[i].id,
                    subcategory: array3[i].subcategory
                });

                markers.push(marker);
                renderFullMessageList(markers[i].title,markers[i].id);
                break;
            case "4":
                var marker = new google.maps.Marker({
                    map:map.map,
                    position: new google.maps.LatLng(array4[i].latitude, array4[i].longitude),
                    title: array4[i].title,
                    description: array4[i].description,
                    date: array4[i].createddate,
                    id: array4[i].id,
                    subcategory: array4[i].subcategory
                });
                markers.push(marker);

                renderFullMessageList(markers[i].title,markers[i].id);
                break;
        }

        google.maps.event.addListener(marker, 'click', (function(marker) {
            var description = markers[i].description;
            var title = markers[i].title;
            var date = markers[i].date;
            var subcategory = markers[i].subcategory;
            return function(){
                if(prev_infoWindow){
                    prev_infoWindow.close();
                }
                renderInfoWindow(description, title, date,subcategory);
                prev_infoWindow = infowindow;
                infowindow.open(map.map,marker);
            }
        })(marker))
    }
}

window.onload=init;
