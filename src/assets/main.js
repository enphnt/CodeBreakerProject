let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    setHiddenFields();
}

//implement new functions here

function setHiddenFields() {
    attempt.value = 0;
    answer.value = Math.floor(Math.random() * 10000).toString();

    while (answer.value.length < 4) {
        answer.value = "0" + "answer.value";
    }
}

guess();