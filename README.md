# 🎮 Play & Laugh

An epic number guessing game with multiple difficulty levels, customizable roast modes, and a survival streak system. Try to match the computer's random number and survive the roasts! 😂

## ✨ Features

### 🎯 Multiple Difficulty Levels
- **Easy Mode (1-10)** - Perfect for beginners with a friendly button grid
- **Medium Mode (1-50)** - Moderate challenge with number input
- **Hard Mode (1-100)** - Extreme difficulty for the brave! Only 1% chance to win!

### 🔥 Custom Roast Categories
- **Friendly Mode** 😊 - Mild, encouraging teasing for sensitive souls
- **Savage Mode** 🔥 - Brutal, burn-level humor that hits hard
- **Meme Mode** 😂 - Internet meme references and viral humor

### 🏆 Leaderboard & Streaks
- **Survival Streak Tracking** - Count how many wrong guesses you survive without quitting
- **Best Streak Record** - Your personal best survival record
- **Top 10 Leaderboard** - Hall of fame for the most resilient players
- **Persistent Stats** - All stats saved to localStorage

### 🎨 Beautiful UI
- **Modern Design** - Built with React, TailwindCSS, and Lucide icons
- **Smooth Animations** - Shake effects, bouncing icons, hover transitions
- **Responsive Layout** - 3-column layout with stats, game, and settings
- **Real-time Stats** - Win rate calculator, wins/losses tracker
- **Color-coded Difficulties** - Visual indicators for each difficulty level

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd /Users/rishabhsharma/CascadeProjects/play-and-laugh
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## 🎯 How to Play

1. **Choose Your Settings** - Select difficulty (Easy/Medium/Hard) and roast mode (Friendly/Savage/Meme)
2. **Start the Game** - Click "Start Game" to begin
3. **Make Your Guess** - Pick a number or type it in (depending on difficulty)
4. **See the Results**:
   - If you match - You WIN! 🎉 Your streak resets
   - If you don't match - Get roasted! 😅 Your survival streak increases
5. **Build Your Streak** - See how many roasts you can survive without quitting
6. **Climb the Leaderboard** - Your best streaks are saved to the hall of fame
7. **Track Your Progress** - Monitor wins, losses, win rate, and streaks in real-time

## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

You can easily customize the game by editing `src/App.jsx`:
- **Roasting Messages** - Edit the `roastCategories` object to add your own roasts for each mode and difficulty
- **Win Messages** - Customize the `winMessages` object for different celebration messages
- **Difficulty Ranges** - Modify the `difficulties` object to change number ranges
- **Colors & Styling** - Update TailwindCSS classes for different themes

## 📝 License

This project is open source and available for anyone to use and modify.

## 🤝 Contributing

Feel free to fork this project and add your own features or roasting messages!

---

Made with 💜 for fun and laughs
