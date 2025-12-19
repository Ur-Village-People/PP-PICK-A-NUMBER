import { initGame } from "./modules/game";
import { initTheme } from "./modules/theme"

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initGame();
});