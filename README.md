# 🕌 Taqwa Track – A Spiritual Habit Tracker

Taqwa Track is a mobile app built using React Native that helps users strengthen their spiritual discipline by tracking daily habits such as Salah, Quran reading, and Dhikr. Powered by Firebase Realtime Database, it ensures data sync and accessibility with a minimal setup.

---

## 📱 Features

- ✅ Track daily spiritual habits (Salah)
- 🔁 Store and retrieve data using Firebase Realtime Database (base URL only)
- 📊 Simple UI to check completed tasks
- 🧠 Easy navigation with reusable components
- ☁️ Real-time updates to Firebase

---

## 🛠️ Tech Stack

- Frontend: React Native (Expo)
- Backend/Database: Firebase Realtime Database (URL-based access)
- State Management: React hooks + Context API
- Navigation: React Navigation (bottom tab navigator)

---

## 📁 Folder Structure

Taqwa-Track/
│
├── assets/
│   └── images/               # App icons and splash assets
├── components/               # Reusable components (e.g., InfoCard.js)
├── context/                  # Global state using Context API
├── Navigation/               # App navigation logic (e.g., StackNavigator.js)
├── screens/                  # Main app screens (e.g., HomeScreen.js, weeklyScreen.js)
├── styles/                   # Centralized stylesheets
├── utils/                    # Helper functions
│
├── .gitignore
├── App.js                    # Root component
├── app.json                  # Expo configuration
├── index.js                  # Entry point
├── package.json              # Project metadata & dependencies
├── package-lock.json
└── README.md                 # You're reading it now!


🚀 Getting Started
1. Clone the Repository
git clone https://github.com/dua-amir/taqwatrack.git

cd taqwatrack


2. Install Dependencies
npm install
# or
yarn install


3. Configure Firebase
Go to Firebase Console → Realtime Database

Click “Create Database” and copy the base URL

Inside context/api.js:
const baseUrl = "https://your-database-name.firebaseio.com/";


4. Run the App
npx expo start
Scan the QR code using Expo Go or run in an emulator.


🔐 Firebase Usage Note
We are not using Firebase Authentication, Firestore, or Storage — only Realtime Database via base URL. Data reads/writes happen using direct REST calls.


📌 To-Do / Future Features
 Add daily/weekly progress charts 📈
 Include user streaks and badges 🏆
 Enable local notifications 🔔


Developed by
Dua Amir & Samreen Bibi
BSCS - 6th semester 
Riphah International University, Islamabad


📜 License:
This project is licensed under the MIT License.

"Verily, in the remembrance of Allah do hearts find rest." – Qur'an 13:28
