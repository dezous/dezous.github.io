$(function () {
    //timer
    let note = $('#note'),
        ts = new Date(2012, 0, 1)
      

    if ((new Date()) > ts) {
      
        ts = (new Date()).getTime() + 3 * 20 * 60 * 60 * 1000;
    }

    $('#countdown').countdown({
        timestamp: ts
    });
})