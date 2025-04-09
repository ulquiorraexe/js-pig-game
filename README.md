# Pig Game (JavaScript Dice Game)

A simple two-player dice game built using HTML, CSS, and JavaScript. Each player takes turns rolling a dice and accumulating scores. The first player to reach 100 points wins.

## Features

- Two-player turn-based game
- Random dice rolling from 1 to 6
- Score and current score tracking
- "Hold" button to save current points
- Switches player when dice roll is 1
- Game reset functionality
- Visual indicator of active player

## How to Play

- Player 1 starts first by clicking the **Roll Dice** button
- If the dice roll is:
  - Not 1: The dice value is added to the player's current score
  - 1: The player loses their temporary points and turn passes to the other player
- Click **Hold** to save the current score to your total score and switch players
- First player to reach or exceed 100 points wins the game
- Click **New Game** to reset scores and start over

## Technologies Used

- HTML
- CSS
- JavaScript (DOM manipulation, event handling, game logic)

## Code Structure

- `rollDice()`: Generates a random number between 1–6
- `switchPlayer1()` / `switchPlayer2()`: Handles turn switching and UI updates
- Event listeners:
  - `Roll Dice`: Rolls the dice and updates temporary score
  - `Hold`: Saves current score to total and checks for win
  - `New Game`: Resets all scores and game state

## Notes

- If a player rolls 1, their turn ends and their temporary score is reset
- If a player presses **Hold**, their temporary score is added to their total score
- Game ends with an alert when one player reaches or exceeds 100 points

## Example

Player 1 rolls: 4 → score becomes 4

Player 1 rolls: 3 → score becomes 7

Player 1 holds → total score becomes 7

Player 2 rolls: 1 → turn ends, score resets

... Player 1 reaches 100 → "Player 1 wins!"

## License

This project does not use any license.
