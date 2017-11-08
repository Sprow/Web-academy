function throwModalWindow(selector) {
    const WINDOW_DISAPPEARED_TIME = 4000;
    const mainForm = document.querySelector(selector);
    const formInputBtn = mainForm.querySelector('.form_btn');
    const formInputText = mainForm.querySelector('.form_input-text');
    const formInputDelay = mainForm.querySelector('.form_input-delay');


    function window(){
        const messegeWindow = mainForm.querySelector('.window');
        const messegeText = mainForm.querySelector('.notification-messege');
        setTimeout(function() {
            messegeText.textContent = formInputText.value;
            messegeWindow.classList.add('active');
            messegeText.classList.add('active');
        }, +formInputDelay.value*1000);
        setTimeout(function() {
            messegeWindow.classList.remove('active');
            messegeText.classList.remove('active');
        }, WINDOW_DISAPPEARED_TIME);
    }

    formInputBtn.addEventListener('click', window);
}

export default throwModalWindow;
