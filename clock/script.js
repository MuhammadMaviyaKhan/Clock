const secHand = document.querySelector('.sec-hand');
        const minHand = document.querySelector('.min-hand');
        const hourHand = document.querySelector('.hour-hand');
        const clockDate = document.querySelector(".date");

        function setDate() {
            let instance = new Date();
            let sec = instance.getSeconds();
            let min = instance.getMinutes();
            let hrs = instance.getHours();
            let day = instance.getDay();

            let secAngle = (sec / 60) * 360;
            secHand.style.transform = `rotate(${secAngle}deg)`;

            let minAngle = (min / 60) * 360;
            minHand.style.transform = `rotate(${minAngle}deg)`;

            let hrsAngle = (hrs / 60) * 360;
            hourHand.style.transform = `rotate(${hrsAngle}deg)`;

            let days = { 1: 'MON', 2: 'TUE', 3: 'WED', 4: 'THU', 5: 'FRI', 6: 'SAT', 7: 'SUN'};
            clockDate.innerHTML = `${days[day]} ${instance.getDate()}`;

        }

        setInterval(setDate, 1000);