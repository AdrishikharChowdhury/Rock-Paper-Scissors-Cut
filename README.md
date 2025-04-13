# Rock Paper Scissors Game 🎮

## Overview
This is a **Rock Paper Scissors** game available in two versions:

1. **Web Version** — built with **HTML, CSS, and JavaScript**  
2. **Terminal Version** — built with **Python**

Both versions allow you to play against the computer using classic rules.

---

## 🕸️ Web Version (HTML/CSS/JS)

### Features 🚀
- **Single-Player Mode**: Play against the computer
- **Dark Mode**: Toggle between light and dark themes
- **Sound Effects**: Win, lose, and draw events have unique sounds
- **Responsive Design**: Works on mobile and desktop
- **Scoreboard**: Tracks player and computer scores
- **Reset Button**: Clears game scores

### How to Play 🕹️
1. Click **Rock**, **Paper**, or **Scissors**
2. The computer picks randomly
3. Game declares win, lose, or draw and updates the scoreboard

### File Structure 📁
```
docs/
│── index.html          # Main game file
│── app.js              # Game logic
│── style.css           # Main styling
│── dark-mode.css       # Dark mode styles
│── mobile.css          # Mobile responsiveness
│── sounds/             # Sound effects
│   ├── win.mp3
│   ├── lose.mp3
│   ├── draw.mp3
│── images/             # Game icons
│   ├── rock.png
│   ├── paper.png
│   ├── scissors.png
```

### Running Web Version 🌐
1. Open `index.html` in any modern web browser
2. No installation required

---

## 💻 Terminal Version (Python)

### Features 🧠
- Text-based interactive gameplay
- Score tracking
- Replays and quit options
- Input validation
- Modular code structure (split across files)

### File Structure 📁
```
terminal/
│── main.py             # Entry point
│── logic.py            # Game loop and decision logic
│── choice.py           # Input and computer move handling
```

### Running Terminal Version 🖥️
1. Navigate to the `terminal/` folder
2. Run the game:
   ```bash
   python main.py
   ```

---

## Installation & Setup 🛠️

### Clone the Repository:
```bash
git clone https://github.com/your-username/rock-paper-scissors.git
cd rock-paper-scissors
```

### Run Web Version:
Open `/web/index.html` in your browser.

### Run Terminal Version:
```bash
cd terminal
python main.py
```

---

## Future Improvements 🏗️
- [ ] **Best of 3 / Best of 5 Mode**
- [ ] **Multiplayer Mode (Two Players)**
- [ ] **AI Difficulty Levels**
- [ ] **Leaderboard & Score Saving**
- [ ] **Flask Web App (Unified Web + Python Backend)**

---

## License 📜
This project is open-source under the **MIT License**.

---

## Credits 🙌
Made with ❤️ by Adrishikhar Chowdhury