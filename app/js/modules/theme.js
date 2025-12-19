// export function initTheme() {
//     const html = document.documentElement;
//     function applyTheme(theme) {
//         html.setAttribute('data-theme', theme);
//         const inputToSelect = document.getElementById(theme);
//          if (inputToSelect) {
//             inputToSelect.checked = true;
//         }
//     }
//     function setTheme(theme) {
//         applyTheme(theme);
//         localStorage.setItem('theme', theme);
//     }
//     function getSystemTheme() {
//         if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//             return 'dark';
//         }
//         return 'light';
//     }
//     function initializeTheme() {
//         const storedTheme = localStorage.getItem('theme');
//         if (storedTheme) {
//             applyTheme(storedTheme);
//         } else {
//             const systemTheme = getSystemTheme();
//             applyTheme(systemTheme);
//         }
//     }
//     if (window.matchMedia) {
//         window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
//             if (!localStorage.getItem('theme')) {
//                 const newTheme = e.matches ? 'dark' : 'light';
//                 applyTheme(newTheme);
//             }
//         });
//     }
//     initializeTheme();
//     document.addEventListener('DOMContentLoaded', function() {
//         const fieldset = document.querySelector('.toggle');
//         if (fieldset) {
//             fieldset.addEventListener('change', function(event) {
//                 if (event.target.type === 'radio' && event.target.name === 'theme-changer') {
//                     const selectedTheme = event.target.value;
//                     setTheme(selectedTheme);
//                 }
//             });
//         }
//         const storedTheme = localStorage.getItem('theme');
//         const currentTheme = storedTheme || getSystemTheme();
//         applyTheme(currentTheme);
//     });
// };
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

    // 1. Setup the Event Listener immediately
    const fieldset = document.querySelector('.toggle');
    if (fieldset) {
        fieldset.addEventListener('change', function(event) {
            if (event.target.type === 'radio' && event.target.name === 'theme-changer') {
                setTheme(event.target.value);
            }
        });
    }

    // 2. Handle system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    // 3. Apply the initial theme immediately
    const storedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(storedTheme || systemTheme);
}
