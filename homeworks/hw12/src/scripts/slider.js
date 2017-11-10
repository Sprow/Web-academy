function slider(selector, CHANGE_SLIDE_INTERVAL) {
    const mainContainer = document.querySelector(selector);
    const slider = mainContainer.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    const previousBtn = mainContainer.querySelector('.previous_btn');
    const nextBtn = mainContainer.querySelector('.next_btn');
    let slideIndex = 1;
    let intervalId = 0;

    previousBtn.addEventListener('click', previousSlide);
    // nextBtn.addEventListener('click', nextSlide);



    function previousSlide() {
        if (slideIndex === 0) {
            console.log('weeeeeeeeeeee');
            slideIndex = slides.length-1;
            slider.setAttribute("style", "transition: transform none; transform: translateX(-" +
                slideIndex *100 + "%);");
        }
        slideIndex--;
        slider.setAttribute("style", "transition: transform 500ms; transform: translateX(-" + slideIndex *100 + "%);");
    }



    // function nextSlide() {
    //     if (slideIndex)
    //     slideIndex++;
    //     slider.setAttribute("style", "transition: transform 500ms; transform: translateX(-" + slideIndex *100 + "%);");
    // }






    function startInterval() {
        if (slideIndex===slides.length) {
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
            slider.setAttribute("style", "transition: transform none; transform: translateX(-" +
                (slideIndex) *100 + "%);");
            slideIndex++;
        } else if (slideIndex < slides.length) {
            startInterval();
            slider.setAttribute("style", "transition: transform 500ms; transform: translateX(-" +
                slideIndex *100 + "%);");
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

export default slider;
