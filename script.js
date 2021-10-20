'use strict';

let   toCopy = document.getElementById('to-copy'),
      btnCopy = document.getElementById('copy-btn'),
      paste = document.getElementById('cleared');


btnCopy.addEventListener('click', () => {
    toCopy.select();
    paste.value = '';

    if (document.execCommand( 'copy' )) {
        btnCopy.classList.add( 'copied');
        paste.focus();

        let temp = setInterval( () => {
            btnCopy.classList.remove( 'copied' );
            clearInterval(temp);
        }, 600);
    } else {
        console.info ('document.execCommand went wrong...')
    }

    return false;
})