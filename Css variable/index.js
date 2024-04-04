const btn = document.querySelectorAll('.controls input');

function changeVariable()
{
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

btn.forEach(input => input.addEventListener('change' , changeVariable));
btn.forEach(input => input.addEventListener('mousemove' , changeVariable));