var ProgressBar = require('progressbar.js');
var LocomotiveScroll = require('../node_modules/locomotive-scroll');



window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#progress', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 4,
        trailWidth: 0.8,
    });

    circle.animate(1);
};

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});