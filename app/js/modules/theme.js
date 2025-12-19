export function initTheme() {
    const html = document.documentElement;
    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        const inputToSelect = document.getElementById(theme);
        if (inputToSelect) {
            inputToSelect.checked = true;
        }
    }
    function setTheme(theme) {
        applyTheme(theme);
        localStorage.setItem('theme', theme);
    }
    const fieldset = document.querySelector('.toggle');
    if (fieldset) {
        fieldset.addEventListener('change', function(event) {
            if (event.target.type === 'radio' && event.target.name === 'theme-changer') {
                setTheme(event.target.value);
            }
        });
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
    const storedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(storedTheme || systemTheme);
}
