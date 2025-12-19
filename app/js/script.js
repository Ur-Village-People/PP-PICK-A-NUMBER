import { initGame } from "./modules/game";
import { initTheme } from "./modules/theme";
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.onkeydown = function(e) {
    if (e.key === "F12") return false;
    if (e.ctrlKey && e.shiftKey && e.key == 'I'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.key == 'J'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.key == 'U'.charCodeAt(0)) return false;
}; 
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initGame();
});