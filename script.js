const button = document.getElementById('button');
let swap = false;

button.addEventListener('click', function () {


    if (swap) {

        button.innerText = 'Light mode';
        document.body.style.backgroundImage = "url('img/geez.png')";
        document.body.style.color = "#300020";
        swap = false;

    }

    else {
        button.innerText = 'Dark mode';
        document.body.style.backgroundImage = "url('img/geez1.png')";
        document.body.style.color = "white";
        swap = true;

    }

});