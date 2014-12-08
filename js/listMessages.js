function renderFullMessageList($messageTitle,id) {
console.log();
    var x = document.getElementById('messages');
    var aTAG = document.createElement('a');
    aTAG.href='#';
    aTAG.id=id;

    var br = document.createElement('hr');

    aTAG.textContent = $messageTitle;


    x.insertBefore(aTAG, x.firstChild);
    x.insertBefore(br, x.firstChild);

}