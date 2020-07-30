const images = () => {

    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImg = document.createElement('img');     


    imgPopup.appendChild(bigImg);


    workSection.addEventListener('click', (e) => {

        e.preventDefault();
        let target = e.target;

        if(target && target.classList.contains('preview')) {
            imgPopup.classList.add('popup');
            workSection.appendChild(imgPopup);
            imgPopup.style.justifyContent = 'center';
            imgPopup.style.alignItems = 'center';
            imgPopup.style.display = 'none'; 
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
            bigImg.style.width = document.body.clientWidth / 100 * 35 + 'px';
            bigImg.style.height = 'auto';
        }

        if(target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            workSection.removeChild(imgPopup);
        }

    });

};

export default images;