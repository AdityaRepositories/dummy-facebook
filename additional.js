const t1 = new Date();

function time() {
    let t2 = new Date();
    let t3 = t2 - t1;
    let t7 = t3 / 1000, sec = Math.floor(t7);
    let t4 = t7 / 60, minutes = Math.floor(t4);
    let t5 = minutes / 60, hours = Math.floor(t5);
    let t6 = hours / 24, days = Math.floor(t6);

    let d1 = document.getElementById("days1");
    let h1 = document.getElementById("hours1");
    let m1 = document.getElementById("minutes1");
    let s1 = document.getElementById("sec1");

    let d2 = document.getElementById("days2");
    let h2 = document.getElementById("hours2");
    let m2 = document.getElementById("minutes2");
    let s2 = document.getElementById("sec2");

    let d3 = document.getElementById("days3");
    let h3 = document.getElementById("hours3");
    let m3 = document.getElementById("minutes3");
    let s3 = document.getElementById("sec3");

    let d4 = document.getElementById("days4");
    let h4 = document.getElementById("hours4");
    let m4 = document.getElementById("minutes4");
    let s4 = document.getElementById("sec4");

    let d5 = document.getElementById("days5");
    let h5 = document.getElementById("hours5");
    let m5 = document.getElementById("minutes5");
    let s5 = document.getElementById("sec5");



    if (days == 0) {
        d_1 = document.getElementById("d1");
        d_2 = document.getElementById("d2");
        d_3 = document.getElementById("d3");
        d_4 = document.getElementById("d4");
        d_5 = document.getElementById("d5");

        d_1.style.display = 'none';
        d_2.style.display = 'none';
        d_3.style.display = 'none';
        d_4.style.display = 'none';
        d_5.style.display = 'none';
    }
    else {
        d_1.style.display = 'inline-block'
        d_2.style.display = 'inline-block'
        d_3.style.display = 'inline-block'
        d_4.style.display = 'inline-block'
        d_5.style.display = 'inline-block'

        d1.innerHTML = days;
        d2.innerHTML = days;
        d3.innerHTML = days;
        d4.innerHTML = days;
        d5.innerHTML = days;
    }


    if (hours == 0) {
        h_1 = document.getElementById("h1");
        h_2 = document.getElementById("h2");
        h_3 = document.getElementById("h3");
        h_4 = document.getElementById("h4");
        h_5 = document.getElementById("h5");

        h_1.style.display = 'none';
        h_2.style.display = 'none';
        h_3.style.display = 'none';
        h_4.style.display = 'none';
        h_5.style.display = 'none';
    }
    else if (hours >= 24) {
        h_1.style.display = 'none';
        h_2.style.display = 'none';
        h_3.style.display = 'none';
        h_4.style.display = 'none';
        h_5.style.display = 'none';

        h1.style.display = 'none'
        h2.style.display = 'none'
        h3.style.display = 'none'
        h4.style.display = 'none'
        h5.style.display = 'none'
    }
    else {
        h_1.style.display = 'inline-block'
        h_2.style.display = 'inline-block'
        h_3.style.display = 'inline-block'
        h_4.style.display = 'inline-block'
        h_5.style.display = 'inline-block'

        h1.innerHTML = hours;
        h2.innerHTML = hours;
        h3.innerHTML = hours;
        h4.innerHTML = hours;
        h5.innerHTML = hours;
    }


    if (minutes == 0) {
        m_1 = document.getElementById("m1"); 
        m_2 = document.getElementById("m2"); 
        m_3 = document.getElementById("m3"); 
        m_4 = document.getElementById("m4"); 
        m_5 = document.getElementById("m5");

        m_1.style.display = 'none';
        m_2.style.display = 'none';
        m_3.style.display = 'none';
        m_4.style.display = 'none';
        m_5.style.display = 'none';
    }
    else if (minutes >= 60) {
        m_1.style.display = 'none';
        m_2.style.display = 'none';
        m_3.style.display = 'none';
        m_4.style.display = 'none';
        m_5.style.display = 'none';

        m1.style.display = 'none'
        m2.style.display = 'none'
        m3.style.display = 'none'
        m4.style.display = 'none'
        m5.style.display = 'none'
    }
    else {
        m_1.style.display = 'inline-block'
        m_2.style.display = 'inline-block'
        m_3.style.display = 'inline-block'
        m_4.style.display = 'inline-block'
        m_5.style.display = 'inline-block'

        m1.innerHTML = minutes;
        m2.innerHTML = minutes;
        m3.innerHTML = minutes;
        m4.innerHTML = minutes;
        m5.innerHTML = minutes;
    }


    if (sec == 0) {
        s_1 = document.getElementById("s1");
        s_2 = document.getElementById("s2");
        s_3 = document.getElementById("s3");
        s_4 = document.getElementById("s4");
        s_5 = document.getElementById("s5");

        s_1.style.display = 'none';
        s_2.style.display = 'none';
        s_3.style.display = 'none';
        s_4.style.display = 'none';
        s_5.style.display = 'none';
    }
    else if (sec >= 60) {
        s_1.style.display = 'none';
        s_2.style.display = 'none';
        s_3.style.display = 'none';
        s_4.style.display = 'none';
        s_5.style.display = 'none';

        s1.style.display = 'none'
        s2.style.display = 'none'
        s3.style.display = 'none'
        s4.style.display = 'none'
        s5.style.display = 'none'
    }
    else {
        s_1.style.display = 'inline-block'
        s_2.style.display = 'inline-block'
        s_3.style.display = 'inline-block'
        s_4.style.display = 'inline-block'
        s_5.style.display = 'inline-block'

        s1.innerHTML = sec;
        s2.innerHTML = sec;
        s3.innerHTML = sec;
        s4.innerHTML = sec;
        s5.innerHTML = sec;
    }

}

time();
setInterval(time, 1000);