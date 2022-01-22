let containerElement = document.getElementById('container');

for (let i = 1; i <= 100; i++) {
    console.log(i);
    
    if (i % 3 == 0) {
        containerElement.innerHTML = containerElement.innerHTML +"<div class='fizz-box'> fizz </div>";
    } else if (i % 5 == 0) {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='buzz-box'> buzz </div>";
    } else {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='basic-box'>" + i + "</div>";
    }
}

