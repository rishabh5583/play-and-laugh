# 🎮 Play & Laugh - Feature Overview

## 🎯 Difficulty Levels

### Easy Mode (1-10)
- **Range**: Numbers 1 to 10
- **Interface**: Click-based button grid (5x2 layout)
- **Win Probability**: 10%
- **Roast Intensity**: Mild to moderate
- **Best For**: Beginners and casual players

### Medium Mode (1-50)
- **Range**: Numbers 1 to 50
- **Interface**: Text input with validation
- **Win Probability**: 2%
- **Roast Intensity**: Moderate to spicy
- **Best For**: Intermediate players seeking a challenge

### Hard Mode (1-100)
- **Range**: Numbers 1 to 100
- **Interface**: Text input with validation
- **Win Probability**: 1%
- **Roast Intensity**: Maximum burn level
- **Best For**: Brave souls and masochists

## 🔥 Roast Categories

### Friendly Mode 😊
**Tone**: Encouraging and supportive
**Example Roasts**:
- Easy: "Oops! Not quite, but nice try! 😊"
- Medium: "Hmm, not quite right! But you're learning! 📚"
- Hard: "That's a tough miss! But you're brave for trying! 🦁"

### Savage Mode 🔥
**Tone**: Brutal and unforgiving
**Example Roasts**:
- Easy: "Wrong! My goldfish has better odds! 🐠"
- Medium: "WRONG! Your psychic powers are non-existent! 🔮"
- Hard: "ABSOLUTELY WRONG! Did you even understand the assignment?! 📝"

### Meme Mode 😂
**Tone**: Internet culture and viral references
**Example Roasts**:
- Easy: "Wrong! *Surprised Pikachu face* 😮"
- Medium: "Wrong! *Visible confusion* 🤔❓"
- Hard: "WRONG! This is beyond science! 🔬🚫"

## 🏆 Survival Streak System

### How It Works
1. **Start Playing**: Begin with 0 streak
2. **Wrong Guess**: Streak increases by 1
3. **Correct Guess**: Streak resets to 0
4. **Best Streak**: Automatically tracked and saved

### Leaderboard
- **Top 10 Entries**: Only the best survival streaks are saved
- **Persistent Storage**: Uses localStorage for data persistence
- **Entry Details**: Shows streak count, difficulty, roast mode, and date
- **Visual Hierarchy**: Gold/Silver/Bronze medals for top 3

### Rewards
- **Bragging Rights**: See your name in the hall of fame
- **Psychological Victory**: Prove you can handle the roasts
- **Motivation**: Challenge yourself to beat your record

## 📊 Statistics Tracking

### Real-Time Metrics
- **Total Wins**: Number of correct guesses
- **Total Losses**: Number of wrong guesses
- **Win Rate**: Calculated percentage (Wins / Total Games)
- **Current Streak**: Active survival streak counter
- **Best Streak**: Personal record for most roasts survived

### Data Persistence
All statistics are automatically saved to browser localStorage and persist across sessions.

### Reset Options
- **Reset All**: Clears all stats, streaks, and leaderboard
- **Continues Playing**: Stats reset but game continues

## 🎨 UI/UX Features

### Visual Feedback
- **Shake Animation**: Card shakes on wrong guesses
- **Color Coding**: Different colors for each difficulty
- **Icon System**: Unique icons for each difficulty level
  - Easy: Target 🎯
  - Medium: Zap ⚡
  - Hard: Skull 💀

### Responsive Design
- **3-Column Layout**: Stats | Game | Settings (on desktop)
- **Mobile Optimized**: Stacks vertically on smaller screens
- **Smooth Transitions**: Hover effects and animations throughout

### Game Flow
1. **Setup Screen**: Choose difficulty and roast mode
2. **Game Screen**: Make your guess
3. **Result Screen**: See outcome with roast/celebration
4. **Play Again**: Quick restart without losing settings

## 🔧 Technical Implementation

### State Management
- React hooks (useState, useEffect)
- LocalStorage integration
- Real-time stat calculations

### Styling
- TailwindCSS utility classes
- Custom animations (shake, bounce)
- Gradient backgrounds
- Backdrop blur effects

### Icons
- Lucide React icon library
- Consistent icon sizing
- Semantic icon usage

## 🎯 Game Mechanics

### Random Number Generation
```javascript
Math.floor(Math.random() * range) + 1
```

### Message Selection
- Random selection from category-specific arrays
- Context-aware based on difficulty and mode
- No message repetition in same session (randomized)

### Streak Logic
- Increments on loss
- Resets on win
- Saves to leaderboard when beating best streak
- Persistent across page refreshes

## 💡 Future Enhancement Ideas

- **Sound Effects**: Add audio for wins/losses
- **Achievements**: Unlock badges for milestones
- **Multiplayer**: Compete against friends
- **Custom Roasts**: User-generated roast messages
- **Themes**: Dark mode, color schemes
- **Animation Library**: More visual effects
- **Social Sharing**: Share your best streaks
- **AI-Generated Roasts**: Dynamic roast creation
