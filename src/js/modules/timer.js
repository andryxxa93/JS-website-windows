const timer = (id, deadline) => {
    
    // Получаем разницу между deadline и текущим временем с помощью методов объекта Date
   const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date),
        // создаём переменные и получаем каждое временное значение
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000 * 60 * 60)) % 24),
            days = Math.floor((t/(1000 * 60 * 60 * 24)));
        // возвращаем в виде объекта
        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

    const setClock = (selector, end) => {
        // Получаем DOM-элементы с временными значениями
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
        updateClock();
        // Распределяем значения времени по переменным и передаём на страницу
        function updateClock() {
            const t = getTimeRemaining(end);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if(t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        }
    };

    const addZero = (num) => {
        if(num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };
    // Вызываем SetСlock которая берёт значения у самой главной родительской функции которую мы вызовем в main.js
    setClock(id, deadline);
};

export default timer;