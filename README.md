
# 🎵 TUNEIFY

A modern and sleek music streaming web application for discovering, playing, and managing your favorite tracks — with built-in chat to connect with others and see what they're listening to in real time.


[Tuneify Banner](./frontend/public/banner.png) 

---

## 🚀 Features

- 🎧 Stream your favorite tracks instantly
- 🤳 See what Your friends are listening
- 📁 Create and manage playlists
- 📱 Responsive UI for mobile, tablet, and desktop
- 🔒 User authentication and personalized experience

---

## 🛠️ Tech Stack

| Frontend          | Backend        | Database     | Others              |
|-------------------|----------------|--------------|---------------------|
|React + TypeScript | Node.js        | MongoDB      | Tailwind CSS        |
| React Router DOM  | Express.js     | Mongoose     | Clerk Auth          |
| Axios             | Socket.IO      |              | Vite                |
| Zustand           |                |              |                     |

---


## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/iamprakhar27/Tuneify.git
cd Tuneify
```

### 2. Install dependencies

#### For client:

```bash
cd client
npm install
```

#### For server:

```bash
cd ../server
npm install
```

### 3. Environment Variables

Create a \`.env\` file in the \`server\` directory and add:

```env
PORT=your port number

MONGO_URI=your_mongodb_connection_string

CLERK_SECRET_KEY= 
CLERK_PUBLISHABLE_KEY=

ADMIN_EMAIL=

CLOUDINARY_CLOUD_NAME= 
CLOUDINARY_API_KEY= 
CLOUDINARY_API_SECRET=
```

### 4. Run the project

#### Start backend:

```bash
npm run dev
```

#### Start frontend:

```bash
cd ../client
npm run dev
```

---

## 🙌 Contributing

We welcome contributions!  

---

## 🤝 Connect with Me

- [Email](prakharofficial17@gmail.com)
- [Portfolio](https://prakhar-portfolio-coral.vercel.app/)

---

⭐ If you like this project, leave a star!  
📝 Feel free to fork and contribute to make Tuneify even better!
