# 🔢 Number Guessing Game

A clean and interactive web-based game where players try to guess a secret number between 1 and 100.

## 🚀 Features
* **Dynamic Feedback:** Tells you if your guess is "Way Too High," "Slightly Low," etc.
* **Attempt Limit:** You have 10 tries to find the number before the game ends.
* **Live History:** Tracks your current guesses and your overall win history.
* **Responsive UI:** Sections hide and show automatically to keep the interface clean.

## 🛠️ How it Works
1.  **State Management:** The game generates a random `targetNumber` using `Math.random()` and tracks `attempts` in the background.
2.  **Input Validation:** Ensures the user enters a number between 1-100 to prevent errors.
3.  **Proximity Logic:** Uses `Math.abs()` to calculate how close a guess is to the target.
4.  **DOM Manipulation:** Uses `insertAdjacentHTML` to inject results directly into the page without refreshing.

## 🎮 How to Play
1.  Enter a number between 1 and 100 in the input field.
2.  Click **Submit** to see if you are close.
3.  Watch the "Tries Left" counter in the title.
4.  If you win or run out of tries, click **Restart** to play a new round!

## 📜 Technical Highlights
* Written in **Vanilla JavaScript** (ES6+).
* Uses **Optional Chaining** (`?.`) for safer event listening.
* Uses **Template Literals** for readable HTML injection.

* Live Site URL: [- https://pp-pick-a-number.vercel.app/](- https://pp-pick-a-number.vercel.app/)