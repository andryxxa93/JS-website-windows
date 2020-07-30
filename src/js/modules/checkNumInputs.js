const checkNumInputs = (selector) => {

    const numINputs = document.querySelectorAll(selector);

    numINputs.forEach(elem => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/\D/, '');
        });
    });

}

export default checkNumInputs;