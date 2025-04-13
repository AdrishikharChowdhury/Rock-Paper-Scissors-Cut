# **📝TODO List: Rock Paper Scissors Game Improvements**  
---

## **1️⃣ UI/UX Enhancements 🎨**  
✅ **Add sound effects for win, lose, and draw.**  
- Store sound files in a `sounds/` folder or a CDN.  
- Play the respective sound when an event occurs.  

---

## **2️⃣ Game Modes 🎮**  
🔲 **Implement "Best of 3" and "Best of 5" game modes.**  
- Keep track of the number of rounds won.  
- Declare a match winner when the required wins are reached.  
- Provide an option to restart a match after it ends.  

---

## **3️⃣ Multiplayer Mode 👥**  
🔲 **Allow two players to take turns selecting their moves.**  
- Display whose turn it is.  
- Ensure the game flow properly switches between Player 1 and Player 2.  

🔲 **Implement a toggle to switch between single-player (AI) and multiplayer modes.**  

---

## **4️⃣ AI Difficulty Levels 🧠**  
🔲 **Implement Easy, Medium, and Hard AI difficulty settings.**  
- **Easy:** AI picks randomly.  
- **Medium:** AI sometimes counters the player’s previous move.  
- **Hard:** AI predicts the player’s move based on past choices.  

🔲 **Allow players to select AI difficulty before starting a game.**  

---

## **5️⃣ Leaderboard & Score History 🏆**  
🔲 **Store scores using Local Storage to persist between sessions.**  
- Keep a record of player wins and losses.  

🔲 **Display a leaderboard with past match results.**  
- Show timestamps and match outcomes.  

🔲 **Provide a button to clear leaderboard history.**  

---

## **6️⃣ Mobile & Touchscreen Optimization 📱**  
🔲 **Improve button sizes for easier touch interaction.**  
- Ensure buttons are large enough for touchscreen users.  

🔲 **Ensure smooth responsiveness across different screen sizes.**  
- Test on various devices (phones, tablets, desktops).  

🔲 **Use touch events (`touchstart`) for mobile interaction.**  

---

## **7️⃣ Deployment & Universal Compatibility 🌍**  
🔲 **Use a CDN to store sound files for universal access.**  
- Prevent issues with local file paths.  

🔲 **Optimize asset loading for faster performance.**  
- Compress images and audio files to improve load times.  

🔲 **Ensure game works well on GitHub Pages, Netlify, or another hosting service.**  
- Test deployment for any platform-specific issues.  
