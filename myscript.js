/* global document,window,localStorage */        // This makes document globle.

/* Code to change the image*/

/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Be Kind';
*/
var image = document.querySelector('img');
image.onclick = function () {
    'use strict';
    var myimage = image.getAttribute('src');
    if (myimage === 'images/a.jpg') {
        image.setAttribute('src', 'images/b.jpg');
    } else if (myimage === 'images/b.jpg') {
        image.setAttribute('src', 'images/c.jpg');
    } else if (myimage === 'images/c.jpg') {
        image.setAttribute('src', 'images/d.jpg');
    } else if (myimage === 'images/d.jpg') {
        image.setAttribute('src', 'images/e.jpg');
    } else {
        image.setAttribute('src', 'images/a.jpg');
    }
};
    
    // Personalised welcome message code
    
var nameButton = document.querySelector('.button');
var myHeading = document.querySelector('h1');
    
function setUserName() {
    'use strict';
    var myName = window.prompt('Please enter your name.');/*prompt is an object of 
	window so it is referenced this way. */
	
    localStorage.setItem('name', myName);
    
	myHeading.textContent = 'Have a nice day, ' + myName;/*here .textContent is used to upadte 
	the content of thet element.*/
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent  = 'Have a nice day, ' + storedName;
}
nameButton.onclick = function () {
    'use strict';
    setUserName();
};