# ✊🖐✌ Rock Paper Scissors – Terminal Edition

## 🎮 Overview

A simple and fun **Rock Paper Scissors** game playable in the terminal. Built with **modular Python**, the game allows the player to compete against the computer in an endless match loop until they decide to stop.

---

## 🚀 Features

- 👤 **Single-player mode**: Play against a computer opponent
- 🎯 **Score tracking**: See your score and the computer's after every round
- 🔁 **Replay option**: Keep playing until you choose to stop
- 🧠 **Modular structure**: Clean, organized code split across multiple files
- 📦 **Input validation**: Prevents crashes on bad input

---

## 📁 Project Structure

```
rock-paper-scissors/
├── main.py         # Entry point for the game
├── logic.py        # Game loop, win logic, scoring, replay logic
├── choice.py       # Input handling and computer move generation
```

---

## 🕹️ How to Play

1. Clone or download the project
2. Run the program using Python 3:
   ```bash
   python main.py
   ```
3. Enter your name
4. Choose Rock, Paper, or Scissors:
   ```
   1. Rock
   2. Paper
   3. Scissors
   ```
5. The computer will randomly choose its move
6. Scores are updated after each round
7. Choose to play again or exit

---

## 🧪 Example Gameplay

```
Enter your name player: Alice

Your Options:
1. Rock
2. Paper
3. Scissors
Your choice: 1
Computer chose paper
You lost the match Alice
Your score: 0
Computer Score: 1

Do you want to play another game?
1. Yes
2. No
Your choice: 2

Thank you for playing this game
```

---

## 🔧 Possible Improvements

- [ ] Add GUI using Tkinter or Pygame
- [ ] Add multiplayer mode (local or online)
- [ ] Track rounds won/lost/drawn separately
- [ ] Add sound effects or ASCII art for fun

---

## 📜 License

This project is open-source and free to use under the [MIT License](https://choosealicense.com/licenses/mit/)

---

## 🙌 Acknowledgments

Made with 💻 by [Adrishikhar Chowdhury] as a fun mini project to sharpen Python skills.