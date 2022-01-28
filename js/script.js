let colors = ['rgb(201, 0, 0)', 'rgb(0, 24, 201)', 'rgb(24, 201, 0)', 'rgb(232, 214, 0)']


function colorChange() {
    let e = document.getElementById('e');
    let id = Math.floor(Math.random() * 4);

    e.style.transition = 'color 250ms ease';
    e.style.color = colors[id];
}



function nextInt(n) {
    if (Number(n) == 3) {
        return 0;
    } else {
        return Number(n)+1;
    }
}