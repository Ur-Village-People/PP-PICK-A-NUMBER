export function initGame() {
    const inputEl = document.querySelector("#form-input");
    const restartEl = document.querySelector("#restart-el");
    const pastGuesses = document.querySelector("#past-guesses");
    const correctHistory = document.querySelector("#game-history");
    const formEl = document.querySelector(".form");
    const titleEl = document.querySelector(".header__title");
    const pastGuessesContainer = document.querySelector(".card__history__past-guesses");
    const historyContainer = document.querySelector(".card__history__correct-games");
    if (!formEl || !inputEl || !titleEl || !pastGuesses || !correctHistory) return;
    const MAX_ATTEMPTS = 10; 
    let targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const toggleSections = () => {
        if (pastGuessesContainer) {
            pastGuessesContainer.style.display = pastGuesses.children.length > 0 ? "block" : "none";
        }
        if (historyContainer) {
            historyContainer.style.display = correctHistory.children.length > 0 ? "block" : "none";
        }
    };
    toggleSections();
    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        const userGuess = parseInt(inputEl.value, 10);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Please enter a valid number between 1 and 100");
            return;
        }
        attempts++;
        const remaining = MAX_ATTEMPTS - attempts;
        if (userGuess === targetNumber) {
            titleEl.textContent = "Magnificent! You nailed it!";
            pastGuesses.insertAdjacentHTML('beforeend', `
                <li class="card__history__past-guesses__correct">
                    ${userGuess} - You Got It!
                </li>
            `);
            correctHistory.insertAdjacentHTML('afterbegin', `
                <li class="card__history__correct-games--history">
                    The number <span class="card__history__correct-games--history--highlight">${userGuess}</span> was found after ${attempts} attempts
                </li>
            `);
            inputEl.disabled = true;
        } 
        else if (attempts >= MAX_ATTEMPTS) {
            titleEl.textContent = `Game Over! The number was ${targetNumber}`;
            inputEl.disabled = true;
            pastGuesses.insertAdjacentHTML('beforeend', `
                <li class="card__history__past-guesses__incorrect">
                    ${userGuess} - <span class="card__history__past-guesses__incorrect--low">Out of tries!</span>
                </li>
            `);
        } 
        else {
            const diff = Math.abs(userGuess - targetNumber);
            const isHigh = userGuess > targetNumber;
            const statusClass = isHigh ? "high" : "low";
            const feedback = diff <= 20 
                ? (isHigh ? "Slightly High" : "Slightly Low")
                : (isHigh ? "Way Too High" : "Way Too Low");
            titleEl.textContent = isHigh 
                ? `Lower! Try a smaller number. (${remaining} left)` 
                : `Higher! Aim a bit further up. (${remaining} left)`;
            pastGuesses.insertAdjacentHTML('beforeend', `
                <li class="card__history__past-guesses__incorrect">
                    ${userGuess} - <span class="card__history__past-guesses__incorrect--${statusClass}">${feedback}</span>
                </li>
            `);
        }
        toggleSections();
        inputEl.value = '';
    });
    restartEl?.addEventListener('click', () => {
        targetNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        titleEl.textContent = "Pick a Number";
        pastGuesses.innerHTML = '';
        inputEl.value = '';
        inputEl.disabled = false;
        toggleSections();
    });
}