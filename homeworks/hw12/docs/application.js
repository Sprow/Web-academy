webpackJsonp([0],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
module.exports = __webpack_require__(327);


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(328);

var _slider = __webpack_require__(329);

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _slider2.default)('.container', 1000);

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function slider(selector, CHANGE_SLIDE_INTERVAL) {
    var mainContainer = document.querySelector(selector);
    var slider = mainContainer.querySelector('.slider');
    var slides = slider.querySelectorAll('.slide');
    var previousBtn = mainContainer.querySelector('.previous_btn');
    var nextBtn = mainContainer.querySelector('.next_btn');
    var slideIndex = 1;
    var intervalId = 0;

    previousBtn.addEventListener('click', previousSlide);
    // nextBtn.addEventListener('click', nextSlide);


    function previousSlide() {
        if (slideIndex === 0) {
            console.log('weeeeeeeeeeee');
            slideIndex = slides.length - 1;
            slider.setAttribute("style", "transition: transform none; transform: translateX(-" + slideIndex * 100 + "%);");
        }
        slideIndex--;
        slider.setAttribute("style", "transition: transform 500ms; transform: translateX(-" + slideIndex * 100 + "%);");
    }

    // function nextSlide() {
    //     if (slideIndex)
    //     slideIndex++;
    //     slider.setAttribute("style", "transition: transform 500ms; transform: translateX(-" + slideIndex *100 + "%);");
    // }


    function startInterval() {
        if (slideIndex === slides.length) {
            clearInterval(intervalId);
            intervalId = setInterval(init, 0);
        } else {
            clearInterval(intervalId);
            intervalId = setInterval(init, CHANGE_SLIDE_INTERVAL);
        }
    }

    function init() {
        if (slideIndex === slides.length) {
            startInterval();
            slideIndex = 1;
            slider.setAttribute("style", "transition: transform none; transform: translateX(-" + slideIndex * 100 + "%);");
            slideIndex++;
        } else if (slideIndex < slides.length) {
            startInterval();
            slider.setAttribute("style", "transition: transform 500ms; transform: translateX(-" + slideIndex * 100 + "%);");
            slideIndex++;
        }
    }

    mainContainer.addEventListener('mouseenter', function () {
        clearInterval(intervalId);
    });
    mainContainer.addEventListener('mouseleave', function () {
        startInterval();
    });

    init();
}

exports.default = slider;

/***/ })

},[125]);