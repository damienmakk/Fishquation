# Fishquation

**Fishquation** is an educational math game that combines fast-paced runner mechanics with arithmetic challenges. Navigate through ocean lanes as a shark, collect math operations, and reach your target number while avoiding obstacles and the rising whale!

**Live Demo:** [https://damienmakk.github.io/Fishquation/](https://damienmakk.github.io/Fishquation/)

---

## Design Process

Fishquation is designed for students and math learners who want to improve their arithmetic skills in a fun, engaging way. The game transforms traditional math practice into an exciting underwater adventure.

### Target Audience
- Elementary and middle school students (ages 8-14)
- Parents looking for educational games for their children
- Teachers seeking interactive math practice tools
- Anyone who wants to improve mental math skills

### User Stories

**As a student**, I want to practice math in a fun game format, so that learning feels less like work and more like play.

**As a parent**, I want my child to have an engaging educational game, so that they can improve their math skills while having fun.

**As a teacher**, I want to assign math practice through gameplay, so that my students stay motivated to complete their assignments.

**As a casual player**, I want to track my progress and earn rewards, so that I feel accomplished and motivated to keep playing.

**As a competitive player**, I want to achieve high scores and unlock achievements, so that I can challenge myself and show my skills.

### Wireframes & Design

This is our high fidelity mobile version of Fishquation on Figma
[https://www.figma.com/design/e2ccgoRjy4QVDxgM370L7t/Fishquation-High-Fidelity?node-id=0-1&t=kYiwKcWp5OUwM5NL-1](https://www.figma.com/design/e2ccgoRjy4QVDxgM370L7t/Fishquation-High-Fidelity?node-id=0-1&t=kYiwKcWp5OUwM5NL-1)

---

## Features

### Existing Features

**Authentication System**
- User registration with username, email, and password
- Secure login with RestDB backend
- LocalStorage session management

**Onboarding Flow**
- Course selection (Math)
- Experience level selection (Beginner/Advanced Math)
- Personalized user profile creation

**Game Modes**
1. **Main Progression** - Story mode with 8 levels, time limits, and whale chase mechanic
2. **Practice Mode** - No penalties, no time limit, perfect for learning
3. **Daily Challenges** - Special missions with bonus rewards

**Gameplay Mechanics**
- 3-lane movement system (left/right arrow keys or A/D)
- Math operation collection (+5, -3, ×2, ÷2, etc.)
- Target number goals
- Obstacle avoidance (red spiky mines)
- Time-based whale chase mechanic
- Dynamic difficulty scaling per level

**Progression System**
- XP earning and leveling
- 8 unlockable levels with star ratings
- Achievement system (5 unlockable achievements)
- Daily streak tracking
- Fish Flakes currency system

**Cosmetics Store**
- 4 shark skins (Classic, Dolphin, Winter, Venom)
- Rarity system (Common, Rare, Epic, Legendary)
- Interactive 3D model preview using Sketchfab
- Purchase system with Fish Flakes
- Equip functionality with profile integration

**Profile System**
- User stats display (XP, streak, level)
- Equipped cosmetic preview
- Achievement progress tracking
- Account management

**Responsive Design**
- Desktop navigation with sidebar
- Mobile bottom navigation bar
- Adaptive layouts for tablet and phone screens

### Features Left to Implement

**Gameplay Enhancements**
- Multiplayer race mode
- Power-ups (shields, magnets, time freeze)
- Boss levels with special mechanics

**Progression Features**
- Weekly challenges
- Seasonal events
- Achievement badges display
- Profile customization (banners, titles)

**Cosmetics Expansion**
- Trail effects system
- Badges collection
- Custom number skins
- Animated shark skins

**Social Features**
- Friend system
- Challenge friends to levels
- Share achievements on social media
- In-game chat

---

## Technologies Used

**Frontend**
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) - Markup structure
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling and animations
- [JavaScript (ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Game logic and interactivity
- [Bootstrap 5.3.2](https://getbootstrap.com/) - Responsive grid system and utilities

**Backend & Database**
- [RestDB.io](https://restdb.io/) - Cloud database for user data storage and authentication

**3D Models & Animations**
- [Sketchfab](https://sketchfab.com/) - 3D model embedding for shark and whale previews
- [Lottie](https://lottiefiles.com/) - Animated ocean background

**Development Tools**
- [Git](https://git-scm.com/) - Version control
- [GitHub Pages](https://pages.github.com/) - Hosting and deployment

---

## Assistive AI

**ChatGPT** was used extensively throughout the development process to help implement features and solve technical challenges.

### 1. Game Errors
ChatGPT helped with figuring out an issue that occured while coding
the game page

### 2. Cosmetics Store System
ChatGPT assisted in building the store
- Sketchfab iframe integration for 3D previews
- Purchase logic with Fish Flakes deduction

### 3. Code Finalisation
ChatGPT helped with checking all my codes if there was
any errors or stuff we missed

**Screenshot of generated store code:**



---

## Testing

### Manual Testing Scenarios

#### 1. User Registration
1. Navigate to signup.html
2. Leave all fields empty and click "SIGN UP" → Error: Form validation prevents submission
3. Enter username, invalid email format, password → Error: Email validation message appears
4. Enter valid credentials with existing email → Error: "An account with this email already exists"
5. Enter all valid, unique credentials → Success: User redirected to onboarding

#### 2. User Login
1. Navigate to login.html
2. Enter incorrect email/password combination → Error: "Invalid email or password"
3. Enter correct credentials for user without completed onboarding → Success: Redirect to onboarding
4. Enter correct credentials for user with completed onboarding → Success: Redirect to dashboard

#### 3. Onboarding Flow
1. Select course option → Button highlights, Continue button enables
2. Click Continue without selection → Continue button remains disabled
3. Complete course selection, proceed to experience level → Experience selection page loads
4. Select experience level and continue → User data saved to database, redirect to dashboard

#### 4. Game Mechanics
1. Start a level from dashboard
2. Press left arrow key → Shark moves to left lane
3. Press right arrow key → Shark moves to right lane
4. Collect a +5 operation → Current number increases by 5
5. Hit a red obstacle → Game ends immediately with failure screen
6. Let timer run to 0 → Whale appears and game ends
7. Match target number → Victory screen appears with stars

#### 5. Store Functionality
1. Navigate to store with 0 Fish Flakes
2. Click "Buy" on 500 Fish Flakes skin → Error: "Not enough Fish Flakes! You need 500 more."
3. Manually set fishFlakes to 1000 in localStorage
4. Refresh and buy 500 Fish Flakes skin → Success: Skin purchased, Fish Flakes reduced to 500
5. Click "Equip" on owned skin → Success: Skin equipped, profile updates
6. Click skin card preview → 3D model loads in preview box

#### 6. Profile Display
1. Navigate to profile page
2. Verify username displays correctly
3. Verify XP and streak match localStorage values
4. Verify equipped skin image displays
5. Click "Log Out" → Confirmation dialog appears
6. Confirm logout → Redirect to index.html, localStorage cleared

### Browser Compatibility

Tested on:
- ✅ Google Chrome (Version 120+)
- ✅ Mozilla Firefox (Version 121+)
- ✅ Microsoft Edge (Version 120+)
- ✅ Safari (iOS 17+)

### Responsive Design Testing

**Desktop (1920×1080)**
- ✅ Sidebar navigation displays correctly
- ✅ Game canvas centered properly
- ✅ All cards and grids display in optimal columns

**Tablet (768×1024)**
- ✅ Sidebar collapses, bottom nav appears
- ✅ Game modes display in 2 columns
- ✅ Touch controls work properly

**Mobile (375×667)**
- ✅ Bottom navigation bar sticky at bottom
- ✅ Forms are thumb-friendly
- ✅ Game canvas scales appropriately
- ✅ All text remains readable

### Known Issues

**Sketchfab Model Loading**
- Issue: On first modal open, Sketchfab iframe may take 2-3 seconds to load
- Workaround: Preload iframe on page load (not yet implemented)

**LocalStorage Limitations**
- Issue: User data only persists on same browser/device
- Future Fix: Sync localStorage with RestDB on each page load

**Mobile Game Performance**
- Issue: Canvas animations can stutter on older mobile devices
- Future Fix: Implement requestAnimationFrame throttling

---

## Credits

### Content
- Game concept and design: Damien & Hong Wei
- Math operations and level design: Original content
- Achievement descriptions: Original content

### Media

**Images**
- Shark logo (logobgremove.png): Pinterest
- Shark character (jeffimage.png, jeffdefaultskin.png): Pinterest
- Shark skins (dolphinshark.png, wintershark.png, venomshark.png): Pinterest

**3D Models**
- [Classic Shark (JEFF)](https://sketchfab.com/3d-models/jeff-2d9f4dc6f5304ce5bc495891f641fbee) by hongwei on Sketchfab
- [Whale for Fishquation](https://sketchfab.com/3d-models/whale-for-fishquation-42617cdd2625435aafe55ca127980209) by fishermien on Sketchfab

**Animations**
- [Ocean Wave Background](https://lottie.host/891c4524-90e8-48a0-b7d1-b77284a6647a/ktQbfpqH7I.lottie) from LottieFiles

**Icons**
- Bootstrap Icons - [https://icons.getbootstrap.com/](https://icons.getbootstrap.com/)
- Emojis for UI elements (🦈, 🐋, ⚡, 🔥, etc.)

### Code Resources
- Canvas game mechanics inspired by Subway Surfers gameplay
- Responsive design patterns from Bootstrap

### Acknowledgements

**Inspiration**
- Subway Surfers - For endless runner game mechanics
- Duolingo - For progression system and daily streak mechanics

**Development Support**
- ChatGPT - Coding assistance throughout development
- RestDB.io - Backend database and API support
- Sketchfab - 3D model hosting and embedding

**Special Thanks**
- Hong Wei - Project partner and co-developer

---

## License

This project is for educational purposes as part of an Interactive Development assignment.

---

**Developed by Damien & Hong Wei | 2026**
