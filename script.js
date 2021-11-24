const button = document.getElementById('button');
let swap = false;

button.addEventListener('click', function () {


    if (swap) {

        button.innerText = 'Light mode';
        document.body.style.backgroundImage = "url('img/bg1.png')";
        document.body.style.color = "#300020";
        swap = false;

    }

    else {
        button.innerText = 'Dark mode';
        document.body.style.backgroundImage = "url('img/bg2.jpg')";
        document.body.style.color = "white";
        swap = true;

    }

});