# 🍽️ Smart Dine POS - Full Stack Restaurant Point of Sale System

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-4.x-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-darkgreen?logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-purple?logo=tailwind-css)

A modern, full-stack POS system tailored for restaurants, built with the MERN stack. Streamlines order handling, billing, and inventory — all in one platform.

---

## ✨ Features

### 🧾 Front-of-House (Waiter/Cashier)
- **Table-wise Order Management**
- **Live Order Status Tracking**
- **Multi-item Billing System**
- **Responsive UI** for tablet or desktop use
- **Customer Notes & Special Requests**

### 🔐 Admin Dashboard
- Menu & Category Management (CRUD)
- Staff Role Control & Access
- Inventory Tracking & Alerts
- Daily Sales Reports
- Secure Login with JWT

---

## 🛠️ Tech Stack

| Layer          | Technology               |
|----------------|--------------------------|
| **Frontend**   | React 18 + Tailwind CSS  |
| **Backend**    | Node.js + Express        |
| **Database**   | MongoDB                  |
| **Auth**       | JWT (JSON Web Tokens)    |
| **Deployment** | Vercel (Client), Render (API) |

---

## 📁 Project Structure

```bash
resto-pos-mern/
├── client/               # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/      # Auth / Cart Context
│       └── App.jsx
├── server/               # Node + Express Backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🚨 Key Challenges Solved

### ✅ Real-time Order Sync
Built using React Context and MongoDB updates to ensure table orders sync across devices.

### ✅ Role-based Access
Middleware enforces admin/waiter/cashier permissions for secure route protection.

### ✅ Inventory Auto-Decrement
Ingredient stock updates dynamically as dishes are sold.

---

## 🔐 Security Features

- Encrypted JWT tokens for session management
- Environment-based config with `.env`
- Express Rate Limiting on login endpoints
- Data validation with `express-validator`

---

## 🌟 Upcoming Features

- [ ] Kitchen Display System (KDS) UI
- [ ] Multi-branch restaurant support
- [ ] Printer integration (POS printers)
- [ ] Offline Mode with IndexedDB (PWA support)

---

## 💻 Local Setup

```bash
# Clone the repo
git clone https://github.com/Milinda55/smart-dine-pos.git
cd resto-pos-mern

# Backend Setup
cd server
npm install
npm run dev

# Frontend Setup
cd ../client
npm install
npm start
```

## 📃 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE.txt) file for details.


## 🙏 Acknowledgments

- Thanks to open-source contributors and online communities for libraries, icons, and resources.
- Inspired by the love for cooking and the desire to share amazing recipes with others.