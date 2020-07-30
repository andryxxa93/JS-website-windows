const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, checkLengthOfState) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        function openModal() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }
        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }

        trigger.forEach(elem => {
            elem.addEventListener('mouseover', () => {
                let sizeOfState = Object.keys(state).length; 
                if (checkLengthOfState && sizeOfState < checkLengthOfState) {
                    let msg = document.createElement('div');
                    msg.textContent = 'Выберите все параметры!'
                    elem.parentNode.appendChild(msg);
                    elem.addEventListener('mouseout', () => {
                        msg.remove();
                    });
                } else {
                    elem.addEventListener('click', (e) => {
                        if(e.target) {
                            e.preventDefault();
                        }
        
                        windows.forEach(elem => {
                            elem.style.display = 'none';
                        });
                            openModal();
                        
                    });
                }
            });
        });
        
        close.addEventListener('click', () => {
            windows.forEach(elem => {
                elem.style.display = 'none';
            });
            closeModal();
        });
        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeClickOverlay) {
                windows.forEach(elem => {
                    elem.style.display = 'none';
                });
                closeModal();
            }
        });
    }

    function openModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    };

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, 3);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, 4);
    openModalByTime('.popup', 5000);
};

export default modals;