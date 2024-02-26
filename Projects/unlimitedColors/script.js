const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalID;
const startbgcolor = function () {
    function bgcolor(){
        document.body.style.backgroundColor = randomColor();
    } 
    if(!intervalID)
        intervalID = setInterval(bgcolor,1000);
}
const stopbgcolor = function () {
    clearInterval(intervalID);
    intervalID = null;
}

document.querySelector('#start').addEventListener('click', startbgcolor);
document.querySelector('#stop').addEventListener('click', stopbgcolor);

