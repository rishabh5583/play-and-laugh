import { useState, useEffect } from 'react'
import { Laugh, Frown, RotateCcw, Sparkles, Trophy, Flame, Settings, Zap, Target, Skull } from 'lucide-react'
import AdSense from './AdSense'

// Roast categories with different intensity levels
const roastCategories = {
  friendly: {
    easy: [
      "Oops! Not quite, but nice try! 😊",
      "Almost! Keep going, you'll get it! 🌟",
      "Not this time, but don't give up! 💪",
      "Close one! Try again! 😄",
      "Aww, that's okay! Give it another shot! 🎯",
    ],
    medium: [
      "Hmm, not quite right! But you're learning! 📚",
      "Nope! But hey, practice makes perfect! 🎓",
      "Wrong number, but I believe in you! ✨",
      "Not today! But tomorrow's another chance! 🌅",
      "Missed it! But you're getting warmer! 🔥",
    ],
    hard: [
      "That's a tough miss! But you're brave for trying! 🦁",
      "Wrong, but wow, you're ambitious! 🚀",
      "Not it! But I respect the confidence! 💫",
      "Nope! But points for courage! 🎖️",
      "Incorrect! But you're a warrior for attempting this! ⚔️",
    ]
  },
  savage: {
    easy: [
      "Wrong! My goldfish has better odds! 🐠",
      "Nope! Did you even try? 😏",
      "Not even close! Were you guessing with your eyes closed? 👀",
      "Wrong! Time to question your life choices! 💭",
      "Bzzt! Even a broken clock is right twice a day! ⏰",
    ],
    medium: [
      "WRONG! Your psychic powers are non-existent! 🔮",
      "Not even in the ballpark! Did you consult a magic 8-ball? 🎱",
      "Terrible guess! My calculator is laughing at you! 🤖",
      "Nope! I've seen better guesses from a random number generator! 🎲",
      "Wrong! Maybe stick to easier games... like breathing! 😤",
      "Not it! Your luck is worse than a black cat under a ladder! 🐱",
      "Incorrect! Time to update your guessing algorithm! 💻",
    ],
    hard: [
      "ABSOLUTELY WRONG! Did you even understand the assignment?! 📝",
      "Not even remotely close! Are you trying to lose? 🤦",
      "Wrong! I've seen toddlers with better number sense! 👶",
      "Nope! Your odds were 1% and you still failed! 📉",
      "Incorrect! This is embarrassing even for you! 😬",
      "Wrong! Maybe numbers just aren't your thing? 🚫",
      "Not it! I'd say better luck next time, but... 🤷",
      "Missed by a mile! Were you even paying attention? 😴",
    ]
  },
  meme: {
    easy: [
      "Wrong! *Surprised Pikachu face* 😮",
      "Nope! This is fine. 🔥☕ (It's not fine)",
      "Not it! Task failed successfully! 📋✅❌",
      "Wrong! You had one job! 🎯",
      "Nope! Congratulations, you played yourself! 🎊",
    ],
    medium: [
      "Wrong! *Visible confusion* 🤔❓",
      "Nope! Outstanding move! (It wasn't) 🧠",
      "Not it! Why are you running?! 🏃💨",
      "Wrong! I see this as an absolute loss! 👀",
      "Nope! You weren't supposed to do that! 🎮",
      "Wrong! Suffering from success... wait, no success here! 😎❌",
      "Not it! They had us in the first half... actually no they didn't! 🏈",
    ],
    hard: [
      "WRONG! This is beyond science! 🔬🚫",
      "Nope! Reality can be whatever I want... except your guess! 💎",
      "Not it! You couldn't live with your failure... 🎭",
      "Wrong! I'm gonna pretend I didn't see that! 🙈",
      "Nope! What did it cost? Everything! (Including your dignity) 💰",
      "Wrong! You've become the very thing you swore to destroy! ⚔️",
      "Not it! This does put a frown on my face! 😔",
      "Wrong! You're about 100 numbers off! (Okay maybe not 100) 📊",
    ]
  }
}

const winMessages = {
  easy: [
    "🎉 You got it! Nice work!",
    "🎊 Correct! You're on fire!",
    "✨ Yes! You nailed it!",
    "🏆 Winner! Great guess!",
  ],
  medium: [
    "🎉 WHOA! You actually got it! Impressive!",
    "🎊 No way! You beat the odds!",
    "✨ Amazing! Are you psychic?",
    "🏆 Incredible! You're a champion!",
    "🎯 Bulls-eye! That was clutch!",
  ],
  hard: [
    "🎉 UNBELIEVABLE! You're a LEGEND!",
    "🎊 WHAT?! That's a 1% chance! You're insane!",
    "✨ GODLIKE! Are you even human?!",
    "🏆 IMPOSSIBLE! You just made history!",
    "🎯 PERFECT! Buy a lottery ticket NOW!",
    "🔥 LEGENDARY! You're the chosen one!",
  ]
}

const difficulties = {
  easy: { range: 10, label: 'Easy', color: 'from-green-500 to-emerald-500', icon: Target },
  medium: { range: 50, label: 'Medium', color: 'from-yellow-500 to-orange-500', icon: Zap },
  hard: { range: 100, label: 'Hard', color: 'from-red-500 to-rose-500', icon: Skull }
}

function App() {
  const [userGuess, setUserGuess] = useState(null)
  const [computerNumber, setComputerNumber] = useState(null)
  const [message, setMessage] = useState('')
  const [gameState, setGameState] = useState('setup') // setup, idle, won, lost
  const [difficulty, setDifficulty] = useState('easy')
  const [roastMode, setRoastMode] = useState('friendly')
  const [stats, setStats] = useState({ wins: 0, losses: 0 })
  const [currentStreak, setCurrentStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [shake, setShake] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [leaderboard, setLeaderboard] = useState([])

  // Load stats from localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem('playAndLaughStats')
    if (savedStats) {
      const parsed = JSON.parse(savedStats)
      setStats(parsed.stats || { wins: 0, losses: 0 })
      setBestStreak(parsed.bestStreak || 0)
      setLeaderboard(parsed.leaderboard || [])
    }
  }, [])

  // Save stats to localStorage
  useEffect(() => {
    localStorage.setItem('playAndLaughStats', JSON.stringify({
      stats,
      bestStreak,
      leaderboard
    }))
  }, [stats, bestStreak, leaderboard])

  const getNumberRange = () => difficulties[difficulty].range

  const handleGuess = (number) => {
    const range = getNumberRange()
    const computerChoice = Math.floor(Math.random() * range) + 1
    setUserGuess(number)
    setComputerNumber(computerChoice)

    if (number === computerChoice) {
      const winMsg = winMessages[difficulty]
      setMessage(winMsg[Math.floor(Math.random() * winMsg.length)])
      setGameState('won')
      setStats(prev => ({ ...prev, wins: prev.wins + 1 }))
      
      // Reset streak on win
      if (currentStreak > bestStreak) {
        setBestStreak(currentStreak)
        addToLeaderboard(currentStreak)
      }
      setCurrentStreak(0)
    } else {
      const roastMsg = roastCategories[roastMode][difficulty]
      setMessage(roastMsg[Math.floor(Math.random() * roastMsg.length)])
      setGameState('lost')
      setStats(prev => ({ ...prev, losses: prev.losses + 1 }))
      setCurrentStreak(prev => prev + 1)
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  const addToLeaderboard = (streak) => {
    const newEntry = {
      streak,
      difficulty,
      roastMode,
      date: new Date().toLocaleDateString()
    }
    setLeaderboard(prev => {
      const updated = [...prev, newEntry].sort((a, b) => b.streak - a.streak).slice(0, 10)
      return updated
    })
  }

  const handleInputGuess = () => {
    const num = parseInt(inputValue)
    const range = getNumberRange()
    if (num >= 1 && num <= range) {
      handleGuess(num)
      setInputValue('')
    }
  }

  const resetGame = () => {
    setUserGuess(null)
    setComputerNumber(null)
    setMessage('')
    setGameState('idle')
    setInputValue('')
  }

  const resetStats = () => {
    setStats({ wins: 0, losses: 0 })
    setCurrentStreak(0)
    setBestStreak(0)
    setLeaderboard([])
    localStorage.removeItem('playAndLaughStats')
    resetGame()
  }

  const startGame = () => {
    setGameState('idle')
  }

  const range = getNumberRange()
  const DifficultyIcon = difficulties[difficulty].icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4 overflow-y-auto">
      <div className="max-w-6xl w-full py-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg flex items-center justify-center gap-3">
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 animate-bounce-slow" />
            Play & Laugh
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 animate-bounce-slow" />
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium">
            {gameState === 'setup' ? 'Choose your challenge!' : `Pick a number 1-${range}. Can you read my mind? 🤔`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats & Streaks */}
          <div className="space-y-4">
            {/* Stats Card */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                Statistics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Wins</span>
                  <span className="text-2xl font-bold text-green-300">{stats.wins}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Losses</span>
                  <span className="text-2xl font-bold text-red-300">{stats.losses}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Win Rate</span>
                  <span className="text-xl font-bold">
                    {stats.wins + stats.losses > 0 
                      ? `${Math.round((stats.wins / (stats.wins + stats.losses)) * 100)}%`
                      : '0%'}
                  </span>
                </div>
              </div>
              <button
                onClick={resetStats}
                className="mt-4 w-full bg-white/20 hover:bg-white/30 rounded-lg py-2 flex items-center justify-center gap-2 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Reset All
              </button>
            </div>

            {/* Streak Card */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Flame className="w-6 h-6 text-orange-300" />
                Survival Streak
              </h3>
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-300">{currentStreak}</div>
                  <div className="text-sm">Current Roasts Survived</div>
                </div>
                <div className="text-center pt-3 border-t border-white/20">
                  <div className="text-2xl font-bold">{bestStreak}</div>
                  <div className="text-sm">Best Streak</div>
                </div>
              </div>
            </div>

            {/* Settings Card */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6" />
                Settings
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold mb-2 block">Difficulty</label>
                  <div className="space-y-2">
                    {Object.entries(difficulties).map(([key, diff]) => {
                      const Icon = diff.icon
                      return (
                        <button
                          key={key}
                          onClick={() => {
                            setDifficulty(key)
                            if (gameState !== 'setup') setGameState('idle')
                          }}
                          className={`w-full py-2 px-4 rounded-lg flex items-center gap-2 transition-all ${
                            difficulty === key
                              ? `bg-gradient-to-r ${diff.color} text-white shadow-lg`
                              : 'bg-white/10 hover:bg-white/20'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-semibold">{diff.label}</span>
                          <span className="ml-auto text-sm">(1-{diff.range})</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Roast Mode</label>
                  <div className="space-y-2">
                    {[
                      { key: 'friendly', label: 'Friendly', emoji: '😊' },
                      { key: 'savage', label: 'Savage', emoji: '🔥' },
                      { key: 'meme', label: 'Meme Mode', emoji: '😂' }
                    ].map(mode => (
                      <button
                        key={mode.key}
                        onClick={() => setRoastMode(mode.key)}
                        className={`w-full py-2 px-4 rounded-lg flex items-center gap-2 transition-all ${
                          roastMode === mode.key
                            ? 'bg-white text-purple-600 shadow-lg font-bold'
                            : 'bg-white/10 hover:bg-white/20'
                        }`}
                      >
                        <span>{mode.emoji}</span>
                        <span>{mode.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ad in Sidebar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <AdSense />
            </div>
          </div>

          {/* Middle Column - Main Game */}
          <div className="lg:col-span-2 space-y-4">
            {/* Main Game Card */}
            <div className={`bg-white rounded-3xl shadow-2xl p-8 ${shake ? 'animate-shake' : ''}`}>
              {gameState === 'setup' ? (
                <div className="text-center">
                  <DifficultyIcon className="w-24 h-24 mx-auto mb-6 text-purple-600" />
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Ready to Play?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    You've selected <span className="font-bold text-purple-600">{difficulties[difficulty].label}</span> mode
                    with <span className="font-bold text-pink-600">{roastMode}</span> roasts!
                  </p>
                  <button
                    onClick={startGame}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
                  >
                    Start Game
                  </button>
                </div>
              ) : gameState === 'idle' ? (
                <div>
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <DifficultyIcon className="w-8 h-8 text-purple-600" />
                    <h2 className="text-2xl font-bold text-gray-800">
                      Choose Your Lucky Number!
                    </h2>
                  </div>
                  
                  {difficulty === 'easy' ? (
                    <div className="grid grid-cols-5 gap-3">
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                        <button
                          key={num}
                          onClick={() => handleGuess(num)}
                          className={`aspect-square bg-gradient-to-br ${difficulties[difficulty].color} hover:opacity-90 text-white text-2xl font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <input
                          type="number"
                          min="1"
                          max={range}
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleInputGuess()}
                          placeholder={`Enter 1-${range}`}
                          className="flex-1 px-6 py-4 text-2xl font-bold text-center border-4 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 transition-all"
                        />
                        <button
                          onClick={handleInputGuess}
                          disabled={!inputValue}
                          className={`px-8 bg-gradient-to-br ${difficulties[difficulty].color} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                          Guess!
                        </button>
                      </div>
                      <p className="text-center text-gray-500 text-sm">
                        Enter a number between 1 and {range}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  {gameState === 'won' ? (
                    <Laugh className="w-24 h-24 text-green-500 mx-auto mb-4 animate-bounce" />
                  ) : (
                    <Frown className="w-24 h-24 text-red-500 mx-auto mb-4" />
                  )}
                  
                  <div className="mb-6">
                    <div className="text-lg text-gray-600 mb-2">
                      You picked: <span className="font-bold text-purple-600 text-4xl">{userGuess}</span>
                    </div>
                    <div className="text-lg text-gray-600 mb-4">
                      I picked: <span className="font-bold text-pink-600 text-4xl">{computerNumber}</span>
                    </div>
                  </div>

                  <div className={`text-xl font-semibold mb-6 p-6 rounded-xl ${
                    gameState === 'won' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {message}
                  </div>

                  {gameState === 'lost' && (
                    <div className="mb-6 p-4 bg-orange-100 text-orange-800 rounded-lg">
                      <Flame className="w-6 h-6 inline mr-2" />
                      <span className="font-bold">Survival Streak: {currentStreak}</span>
                    </div>
                  )}

                  <button
                    onClick={resetGame}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95 flex items-center gap-2 mx-auto"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Play Again
                  </button>
                </div>
              )}
            </div>

            {/* Leaderboard */}
            {leaderboard.length > 0 && (
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Trophy className="w-7 h-7 text-yellow-300" />
                  Survival Leaderboard
                </h3>
                <div className="space-y-2">
                  {leaderboard.map((entry, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        index === 0 ? 'bg-yellow-500/30' : 
                        index === 1 ? 'bg-gray-400/30' :
                        index === 2 ? 'bg-orange-600/30' :
                        'bg-white/10'
                      }`}
                    >
                      <div className="text-2xl font-bold w-8">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg">{entry.streak} Roasts Survived</div>
                        <div className="text-sm opacity-80">
                          {difficulties[entry.difficulty].label} • {entry.roastMode} • {entry.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ad Section */}
        <div className="mt-6">
          <AdSense />
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-white/80 text-sm">
          <p>Made with 💜 for fun and laughs</p>
        </div>
      </div>
    </div>
  )
}

export default App
