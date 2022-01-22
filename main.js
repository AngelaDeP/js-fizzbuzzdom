let containerElement = document.getElementById('container');

for (let i = 0; i <= 100; i++) {
    console.log(i);

    containerElement.innerHTML = containerElement.innerHTML + "<div class='basic-box'>" + i + "</div>";
    
}