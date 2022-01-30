import {script} from './script.js';
import html from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/html.png';
import css from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/css.png';
import php from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/php.png';
import js from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/js.png';
import sql from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/sql.png';
import python from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/python.png';
import c from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/c.png';
import me from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/canard.jpeg';
import template from 'C:/Users/alexi/OneDrive/Documents/portfolio/src/img/template.jpg';

var ProgressBar = require('progressbar.js');
var LocomotiveScroll = require('../node_modules/locomotive-scroll');

const progress_bars = function (bars) {
    bars.forEach(function (bar) {
        if (document.getElementById('progress')) {
            console.log('ça marche')
        }
    }
)}

var line_html = new ProgressBar.Line('#progress_html', {
    strokeWidth: 4.7,
    easing: 'easeInOut',
    duration: 2200,
    trailWidth: 2,
    color: '#007D59',
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    },
    text: {
        className: 'progressbar_text',
    },
    from: {color: '#007D59'},
    to: {color: '#ED6A5A'},
})

var line_css = new ProgressBar.Line('#progress_css', {
    strokeWidth: 4.7,
    easing: 'easeInOut',
    duration: 2200,
    color: '#007D59',
    trailWidth: 2,
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    },
    text: {
        className: 'progressbar_text',
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
})

var line_php = new ProgressBar.Line('#progress_php', {
    strokeWidth: 4.7,
    easing: 'easeInOut',
    duration: 2200,
    color: '#007D59',
    trailWidth: 2,
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    },
    text: {
        className: 'progressbar_text',
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
})

var line_js = new ProgressBar.Line('#progress_js', {
    strokeWidth: 4.7,
    easing: 'easeInOut',
    duration: 2200,
    trailWidth: 2,
    color: '#007D59',
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    },
    text: {
        className: 'progressbar_text',
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
})

var line_sql = new ProgressBar.Line('#progress_sql', {
    strokeWidth: 4.7,
    easing: 'easeInOut',
    color: '#007D59',
    duration: 2200,
    trailWidth: 2,
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    },
    text: {
        className: 'progressbar_text',
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
})

var line_python = new ProgressBar.Line('#progress_python', {
    strokeWidth: 4.7,
    easing: 'easeInOut',
    duration: 2200,
    color: '#007D59',
    trailWidth: 2,
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    },
    text: {
        className: 'progressbar_text',
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
})

var line_c = new ProgressBar.Line('#progress_c', {
    strokeWidth: 4.7,
    easing: 'easeInOut',
    color: '#007D59',
    duration: 2200,
    trailWidth: 2,
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    },
    text: {
        className: 'progressbar_text',
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
})
  
line_html.animate(0.9)  // Number from 0.0 to 1.0
line_css.animate(0.85)
line_php.animate(0.50)
line_js.animate(0.28)
line_sql.animate(0.94)
line_python.animate(0.21)
line_c.animate(0.34)

//const target = document.querySelector('#html');

/*const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});*/