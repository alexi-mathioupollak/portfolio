import {script} from './script.js';
import html from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/html.png';
import css from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/css.png';
import php from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/php.png';
import js from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/js.png';
import sql from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/sql.png';
import python from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/python.png';
import c from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/c.png';

var ProgressBar = require('progressbar.js');
var LocomotiveScroll = require('../node_modules/locomotive-scroll');

var line = new ProgressBar.Line('#progress', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2200,
    trailWidth: 1,
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    },
    text: {
        style: {
            color: '#999',
            padding: '0',
            margin: '0',
            transform: null
        }
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
})
  
line.animate(0.85);  // Number from 0.0 to 1.0

//const target = document.querySelector('#html');

scroll.scrollTo(target);

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});