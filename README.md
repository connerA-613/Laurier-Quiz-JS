Laurier Off-Campus Housing Quiz 🏡
A React-based quiz application designed to help Wilfrid Laurier University students find the best off-campus neighborhood that fits their lifestyle. Through a series of tailored questions, students receive personalized housing suggestions based on their preferences.

🚀 Features
Dynamic Quiz Flow – Users are guided through multiple questions, with answers dynamically tracked in state.

Custom Result Generation – Recommendations are generated based on user input and mapped to neighborhood types.

Clean, Component-Based Architecture – Built with reusable React components for maintainability and scalability.

Responsive UI – Mobile-friendly layout with intuitive interactions.

🛠️ Tech Stack
React (Vite)

JavaScript (ES6+)

CSS Modules

Vite Dev Server

📁 Project Structure
php
Copy
Edit
Laurier-Quiz-JS/
│
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable quiz components
│   ├── data/                # Question and result data
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── vite.config.js           # Vite config
├── package.json             # Project metadata and scripts
└── README.md
🧠 How It Works
Questions are defined in a structured data file.

User responses are tracked through React state.

Results are calculated by scoring answers and displaying the most relevant neighborhood based on user preferences.

📦 Getting Started
Prerequisites
Node.js (v16 or higher recommended)

npm or yarn

Installation
bash
Copy
Edit
git clone https://github.com/connerA-613/Laurier-Quiz-JS.git
cd Laurier-Quiz-JS
npm install
Running the App
bash
Copy
Edit
npm run dev
Then open your browser at http://localhost:5173 (or the port Vite assigns).

🧑‍💻 Author
Conner Armour
GitHub · LinkedIn
