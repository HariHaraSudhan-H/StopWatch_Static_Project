let interval;
let lapseArray;
let lapseCount = 0;
let startButton = document.getElementById('start');
let lapseButton = document.getElementById('lapse');
let resetButton = document.getElementById('reset');
let display = document.getElementById('display');
let lapse = document.getElementById('lapseTable');
let milliseconds = document.getElementById('milliseconds');
let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let hours = document.getElementById('hours');
let darkToggle = document.getElementById('darkToggle');

// eventListeners
startButton.addEventListener('click', counter);
resetButton.addEventListener('click', resetPage);
lapseButton.addEventListener('click', lapseTime);
darkToggle.addEventListener('click', toggle);

// Main function to start counter
function counter() {
    console.log('inside counter')
    let text = startButton.getAttribute('data-mode');
    lapseButton.style.display = 'block';
    resetButton.style.display = 'block';
    if (text == 'Start') {
        startButton.setAttribute('data-mode', 'Pause');
        startButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
        resetButton.disabled = true;
        lapseButton.disabled = false;
        interval = setInterval(function () {
            let change = check();
            if (!change) {
                increaseCount();
            }

        }, 10)
    } else {
        clearInterval(interval);
        startButton.setAttribute('data-mode', 'Start');
        startButton.innerHTML = '<i class="fa-solid fa-play fa-beat"></i>';
        resetButton.disabled = false;
        lapseButton.disabled = true;
    }
}

// Resets the timer
function resetPage() {
    resetFunction(hours);
    resetFunction(minutes);
    resetFunction(seconds);
    resetFunction(milliseconds);
    lapse.innerHTML = `<tr id="headingTable">
    <th>Lap</th>
    <th>Lapse Time</th>
</tr>`;
    lapseCount = 0;
    document.getElementById("lapseContent").style.display = ''
}

// resets the Seconds/minutes/Hours if it moves against higher limit
function resetFunction(count) {
    count.innerHTML = '00';
}

// Controls the Lapsing Time Function
function lapseTime() {
    // lapseArray.push(display.innerHTML);
    console.log(display.innerText);
    lapse.innerHTML += `<tr>
    <td>${++lapseCount}</td>
    <td>${display.innerText}</td>
</tr>`
    document.get
    ElementById("lapseContent").style.display = 'flex'
}

// Increases the Millisecond count
function increaseCount() {
    let result = Number(milliseconds.innerHTML) + 1;
    if (result <= 9) {
        milliseconds.innerHTML = '0' + result;
    } else {
        milliseconds.innerHTML = result;
    }
}

// Check for higher limit
function check() {
    function twoDigiter(time) {
        let result = Number(time.innerHTML) + 1;
        if (result <= 9) {
            time.innerHTML = '0' + result;
        } else {
            time.innerHTML = result;
        }
    }
    if (milliseconds.innerHTML >= 99) {
        twoDigiter(seconds);
        resetFunction(milliseconds);
        return true;
    }
    if (seconds.innerHTML >= 60) {
        twoDigiter(minutes);
        resetFunction(seconds);
        return true;
    }
    if (minutes.innerHTML >= 60) {
        twoDigiter(hours);
        resetFunction(minutes);
        return true;
    }
    if (hours.innerHTML >= 24) {
        resetFunction(hours);
        resetFunction(minutes);
        resetFunction(seconds);
        resetFunction(milliseconds);
        return true;
    }
}

// Contols the dark-light mode toggle
function toggle() {
    if (darkToggle.getAttribute('data-mode') == 'light') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'aliceblue'
        darkToggle.setAttribute('data-mode', 'dark');
        darkToggle.style.backgroundColor = 'White';
        darkToggle.style.color ='black'
        darkToggle.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
        display.style.color = 'orange'
        display.style.boxShadow = '0px 0px 8px 8px #333533'
        document.getElementById('heading').style.color = '#adb5bd'
    } else {
        document.body.style.color = ''
        document.body.style.backgroundColor = ''
        darkToggle.innerHTML = '<i class="fa-sharp fa-solid fa-moon"></i>';
        darkToggle.setAttribute('data-mode', 'light');
        display.style.boxShadow = ''
        display.style.color = ''
        darkToggle.style.backgroundColor = 'black';
        darkToggle.style.color = '';
        document.getElementById('heading').style.color = ''
    }

}
