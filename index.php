<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/foundation.css">
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
</head>
<body>
    <select id="myselect">
        <option class="option" value="0">Vägtrafik</option>
        <option class="option" value="1">Kollektivtrafik</option>
        <option class="option" value="2">Planerad störning</option>
        <option class="option" value="3">Övrigt</option>
        <option class="option" value="4">Visa Alla</option>
    </select>
    <div id="messages"></div>
    <div id="map-canvas"></div>
<script type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLDuTsdr0DxY8uqPw6MlmEkru59bwo1gc">
</script>
<script src="js/googleMap.js"></script>
<script src="js/jquery.min.js"></script>
<script src="js/handleRequestData.js"></script>
<script src="js/listMessages.js"></script>


<script src="js/foundation.js"></script>
<script src="js/foundation.offcanvas.js"></script>
<script src="js/getClickedElement.js"></script>

</body>
</html>
