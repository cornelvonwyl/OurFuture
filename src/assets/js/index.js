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






// Start1
//Gsap Animation
const start1Gsap = gsap.to(".ourworld", {
    xPercent: 100
});

//ScrollMagic Animation
const controller30 = new ScrollMagic.Controller();
const scene30 = new ScrollMagic.Scene({
        triggerElement: '.start',
        duration: 2000,
        triggerHook: 0
    })
    .setTween(start1Gsap)
    .addTo(controller30);


// Start2
//Gsap Animation
const start2Gsap = gsap.to(".year", {
    xPercent: -100
});

//ScrollMagic Animation
const controller31 = new ScrollMagic.Controller();
const scene40 = new ScrollMagic.Scene({
        triggerElement: '.start',
        duration: 2000,
        triggerHook: 0
    })
    .setTween(start2Gsap)

    .addTo(controller31);





// Step1
//Parallax
const step1Para = document.getElementsByClassName('img1');

new simpleParallax(step1Para, {
    delay: .6,
    transition: 'ease-out',
    scale: 1.3
});

//Gsap Animation
const step1Gsap = gsap.to(".text1", {
    xPercent: 100,
    delay: 1
});

//ScrollMagic Animation
const controller1 = new ScrollMagic.Controller();
const scene1 = new ScrollMagic.Scene({
        triggerElement: '.step1',
        duration: 2000,
        triggerHook: 1
    })
    .setTween(step1Gsap)
    .addTo(controller1);


// Step2
//Parallax
const step2Para = document.getElementsByClassName('img2');

new simpleParallax(step2Para, {
    delay: .6,
    transition: 'ease-out',
    scale: 1.3,
    orientation: "right"
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

    .addTo(controller2);



// Step3
//Parallax
const step3Para = document.getElementsByClassName('img3');

new simpleParallax(step3Para, {
    delay: .6,
    transition: 'ease-out',
    scale: 1.3,
    orientation: "left"
});

//Gsap Animation
const step3Gsap = gsap.to(".text3", {
    xPercent: 100
});

//ScrollMagic Animation
const controller3 = new ScrollMagic.Controller();
const scene3 = new ScrollMagic.Scene({
        triggerElement: '.step3',
        duration: 2000,
        triggerHook: 1
    })
    .setTween(step3Gsap)

    .addTo(controller3);



// Step4
//Parallax
const step4Para = document.getElementsByClassName('img4');

new simpleParallax(step4Para, {
    delay: .6,
    transition: 'ease-out',
    scale: 1.3,
    orientation: "up right"
});

//Gsap Animation
const step4Gsap = gsap.to(".text4", {
    xPercent: -100
});

//ScrollMagic Animation
const controller4 = new ScrollMagic.Controller();
const scene4 = new ScrollMagic.Scene({
        triggerElement: '.step4',
        duration: 2000,
        triggerHook: 1
    })
    .setTween(step4Gsap)

    .addTo(controller4);



// Step5
//Parallax
const step5Para = document.getElementsByClassName('img5');

new simpleParallax(step5Para, {
    delay: .6,
    transition: 'ease-out',
    scale: 1.3,
    orientation: "down"
});

//Gsap Animation
const step5Gsap = gsap.to(".text5", {
    xPercent: 100
});

//ScrollMagic Animation
const controller5 = new ScrollMagic.Controller();
const scene5 = new ScrollMagic.Scene({
        triggerElement: '.step5',
        duration: 2000,
        triggerHook: 1
    })
    .setTween(step5Gsap)

    .addTo(controller5);



// Step6
//Parallax
const step6Para = document.getElementsByClassName('img6');

new simpleParallax(step6Para, {
    delay: .6,
    transition: 'ease-out',
    scale: 1.3,
    orientation: "right"
});

//Gsap Animation
const step6Gsap = gsap.to(".text6", {
    xPercent: -100
});

//ScrollMagic Animation
const controller6 = new ScrollMagic.Controller();
const scene6 = new ScrollMagic.Scene({
        triggerElement: '.step6',
        duration: 2000,
        triggerHook: 1
    })
    .setTween(step6Gsap)

    .addTo(controller6);




// Step8
//Parallax
const step8Para = document.getElementsByClassName('img8');

new simpleParallax(step8Para, {
    delay: .6,
    transition: 'ease-out',
    scale: 1.1,
    orientation: "down"
});

//Gsap Animation
const step8Gsap = gsap.to(".text8", {
    yPercent: -20
});

//ScrollMagic Animation
const controller8 = new ScrollMagic.Controller();
const scene8 = new ScrollMagic.Scene({
        triggerElement: '.step8',
        duration: 2000,
        triggerHook: 1
    })
    .setTween(step8Gsap)

    .addTo(controller8);


// Change Background
//Gsap Animation
const changeBackground = gsap.to("body", {
    backgroundColor: '#d2d8c5'
});

//ScrollMagic Animation
const controller9 = new ScrollMagic.Controller();
const scene9 = new ScrollMagic.Scene({
        triggerElement: '.changebackground',
        duration: 2000,
        triggerHook: 1
    })
    .setTween(changeBackground)

    .addTo(controller9);


// Change Loadingbar
//Gsap Animation
const changeloadingbar = gsap.to(".loadingbar", {
    backgroundColor: '#101010'
});

//ScrollMagic Animation
const controller10 = new ScrollMagic.Controller();
const scene10 = new ScrollMagic.Scene({
        triggerElement: '.changebackground',
        duration: 2000,
        triggerHook: 1
    })
    .setTween(changeloadingbar)

    .addTo(controller10);



// Step 9
//Gsap Animation
const step11Gsap = gsap.to(".text9", {
    opacity: 1
});

//ScrollMagic Animation
const controller11 = new ScrollMagic.Controller();
const scene11 = new ScrollMagic.Scene({
        triggerElement: '.step9',
        duration: 2000,
        triggerHook: 0
    })
    .setTween(step11Gsap)
    .setPin(".step9")
    .addTo(controller11);



const testest = gsap.timeline()
testest.to(
    ".explain-text1", {
        scale: 0.8,
        opacity: 1,
        duration: 2
    })

testest.to(
    ".explain-text1", {
        scale: 0,
        opacity: 1,
        duration: 2
    })
testest.to(".explain-text2", {
    scale: 0.8,
    opacity: 1,
    duration: 2
})


const controller12 = new ScrollMagic.Controller();
const scene12 = new ScrollMagic.Scene({
        triggerElement: '.step7',
        duration: 2000,
        triggerHook: 0
    })
    .setTween(testest)
    .setPin(".step7")
    .addTo(controller12);












const getLoadingbar1 = document.querySelector(".loadingbar1");
const getLoadingbar2 = document.querySelector(".loadingbar2");
const getLoadingbar3 = document.querySelector(".loadingbar3");
const getLoadingbar4 = document.querySelector(".loadingbar4");



const body = document.body,
    html = document.documentElement;

const height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);


window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;



    let umrechnerScrolled = scrollTop / (height - window.innerHeight) * 100;
    let fensterHeight = window.innerHeight / 100;
    let fensterWidth = window.innerWidth / 100;
    let lineHeight = umrechnerScrolled * fensterHeight;
    let lineWidth = umrechnerScrolled * fensterWidth;


    getLoadingbar1.style.height = (lineHeight + "px");
    getLoadingbar2.style.width = (lineWidth + "px");
    getLoadingbar3.style.width = (lineWidth + "px");
    getLoadingbar4.style.height = (lineHeight + "px");

});

window.addEventListener('load', function () {
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;



    let umrechnerScrolled = scrollTop / (height - window.innerHeight) * 100;
    let fensterHeight = window.innerHeight / 100;
    let fensterWidth = window.innerWidth / 100;
    let lineHeight = umrechnerScrolled * fensterHeight;
    let lineWidth = umrechnerScrolled * fensterWidth;


    getLoadingbar1.style.height = (lineHeight + "px");
    getLoadingbar2.style.width = (lineWidth + "px");
    getLoadingbar3.style.width = (lineWidth + "px");
    getLoadingbar4.style.height = (lineHeight + "px");

});

//Delete Transition when loading
$(window).on('load', function () {
    $("body").removeClass("preload");
});








//Smooth Scroll

function init() {
    new SmoothScroll(document, 120, 12)
}

function SmoothScroll(target, speed, smooth) {
    if (target === document)
        target = (document.scrollingElement ||
            document.documentElement ||
            document.body.parentNode ||
            document.body) // cross browser support for document scrolling

    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body &&
        document.documentElement ?
        document.documentElement :
        target // safari is the new IE

    target.addEventListener('mousewheel', scrolled, {
        passive: false
    })
    target.addEventListener('DOMMouseScroll', scrolled, {
        passive: false
    })

    function scrolled(e) {
        e.preventDefault(); // disable default scrolling

        var delta = normalizeWheelDelta(e)

        pos += -delta * speed
        pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

        if (!moving) update()
    }

    function normalizeWheelDelta(e) {
        if (e.detail) {
            if (e.wheelDelta)
                return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
            else
                return -e.detail / 3 // Firefox
        } else
            return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
        moving = true

        var delta = (pos - target.scrollTop) / smooth

        target.scrollTop += delta

        if (Math.abs(delta) > 0.5)
            requestFrame(update)
        else
            moving = false
    }

    var requestFrame = function () { // requestAnimationFrame cross browser
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (func) {
                window.setTimeout(func, 1000 / 50);
            }
        );
    }()
}

init();