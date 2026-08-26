let box = document.getElementById('cont');

setInterval(() => {
    let time = new Date();
    let date = time.toLocaleTimeString();
    box.textContent = date;
});