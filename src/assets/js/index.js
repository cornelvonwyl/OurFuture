import $ from 'jquery';
import '../css/style.scss'
import simpleParallax from 'simple-parallax-js';
import {
    gsap
} from "gsap";
import {
    CSSRulePlugin
} from "gsap/CSSRulePlugin";
import {
    Draggable
} from "gsap/Draggable";
import {
    EaselPlugin
} from "gsap/EaselPlugin";
import {
    MotionPathPlugin
} from "gsap/MotionPathPlugin";
import {
    PixiPlugin
} from "gsap/PixiPlugin";
import {
    TextPlugin
} from "gsap/TextPlugin";
import {
    ScrollToPlugin
} from "gsap/ScrollToPlugin";

gsap.registerPlugin(CSSRulePlugin, Draggable, EaselPlugin, MotionPathPlugin, PixiPlugin, TextPlugin, ScrollToPlugin);


// Step1
//Parallax
const step1Para = document.getElementsByClassName('img1');

new simpleParallax(step1Para, {
    scale: 2
});

//Gsap Animation
const step1Gsap = gsap.to(".text1", {
    xPercent: -100
});

//ScrollMagic Animation
const controller1 = new ScrollMagic.Controller();
const scene1 = new ScrollMagic.Scene({
        triggerElement: '.step1',
        duration: 2000,
        triggerHook: 1
    })
    .setTween(step1Gsap)
    .addIndicators()
    .addTo(controller1);


// Step2
//Parallax
const step2Para = document.getElementsByClassName('img2');

new simpleParallax(step2Para, {
    scale: 2
});

//Gsap Animation
const step2Gsap = gsap.to(".text2", {
    xPercent: -100
});

//ScrollMagic Animation
const controller2 = new ScrollMagic.Controller();
const scene2 = new ScrollMagic.Scene({
        triggerElement: '.step2',
        duration: 2000,
        triggerHook: 1
    })
    .setTween(step2Gsap)
    .addIndicators()
    .addTo(controller2);

































































































// const getScrollbar = document.querySelector(".loadingbar");

// var body = document.body,
//     html = document.documentElement;

// var height = Math.max(body.scrollHeight, body.offsetHeight,
//     html.clientHeight, html.scrollHeight, html.offsetHeight);




// console.log(height);

// window.addEventListener('scroll', function () {
//     var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;



//     var umrechner = height - scrollTop;

//     console.log(scrollTop);



//     getScrollbar.style.height = (scrollTop + 600 + "px");

// });