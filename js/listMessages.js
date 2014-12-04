function renderFullMessageList($messageTitle,id) {

    var x = document.getElementById('messages');
    var aTAG = document.createElement('a');
    aTAG.href='#'+id;
    var br = document.createElement('br');

    aTAG.innerText = $messageTitle;

    x.appendChild(aTAG);
    x.appendChild(br);
}