var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    var x = document.getElementById("light");
    var y = document.getElementById("dark");
    if(this.checked) {
        trans()
        x.style.display = "none";
        y.style.display = "block";
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        x.style.display = "block";
        y.style.display = "none";
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}