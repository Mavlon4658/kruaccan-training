let checkbox = document.querySelectorAll('.checkbox');

if (checkbox.length) {
    checkbox.forEach(el => {
        let inp = el.querySelector('input[type="checkbox"]');
        
        el.onclick = () => {
            inp.click();
        }
    })
}