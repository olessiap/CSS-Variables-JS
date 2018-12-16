const controls = document.querySelectorAll('.controls input');

function handleChange() {
    const suffix = this.dataset.sizing || ''; //extracts px
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

controls.forEach(control => {control.addEventListener("click", handleChange)});
controls.forEach(control => {control.addEventListener("mouseover", handleChange)});
