const theme_toggler = document.querySelector('#theme-toggler');


let checked = localStorage.getItem('theme') === 'dark';
theme_toggler.checked = checked;
document.body.querySelector('main').classList.toggle('dark-theme', checked);

theme_toggler.addEventListener('change', function () {

    console.log('Theme toggled:', this.checked);

    document.body.querySelector('main').classList.toggle('dark-theme', this.checked);
    localStorage.setItem('theme', this.checked ? 'dark' : 'light');
});