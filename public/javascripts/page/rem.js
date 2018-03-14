(function() {
    'use strict';
    window.onresize = function() {
        changeFontSize();

    }

    function changeFontSize() {
        var W = document.documentElement.clientWidth;
        var docEl = document.documentElement;

        if (W > 750) {
            W = 750;
            docEl.style.fontSize = '100px';
        }
        document.getElementsByTagName('html')[0].style.fontSize = W / 7.5 + 'px';
    }
    changeFontSize();

})();