"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const pressed = [];
const secretCode = "kamil";
const body = document.body;
const paragraph = document.querySelector('.heisenberg');
const img = document.createElement('img');
img.src = '../assets/img/heisenberg.jpg'

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    console.log(`That's god damn right`);
    body.removeChild(paragraph);
    body.appendChild(img);
  }
})

