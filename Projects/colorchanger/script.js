const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target);

        let colour = event.target.id;
        switch (colour) {
            case "grey":
                body.style.backgroundColor = 'grey';
                break;

            case "white":
                body.style.backgroundColor = 'white';
                break;

            case "blue":
                body.style.backgroundColor = 'blue';
                break;

            case "yellow":
                body.style.backgroundColor = 'yellow';
                break;

            default:
                console.log("Tap on the colour");
                break;
        }
    })
})

