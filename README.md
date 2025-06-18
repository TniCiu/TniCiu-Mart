# 🥦 TniCiu-Mart - Clean Food E-Commerce Website

**TniCiu-Mart** is a clean and modern e-commerce platform for purchasing safe, healthy, and traceable food products. It supports a full set of features for both customers and administrators.

---

## 🚀 Features

* Browse and filter products by category (fruits, vegetables, meat, etc.)
* Shopping cart and checkout process
* Apply vouchers and promotional discounts
* Order & invoice management with status tracking
* News/blog section about food, health, and promotions
* AI chatbot for customer support and product recommendations
* User registration, login, and profile management
* Role-based access control for admin and users

---

## 📁 Project Structure

```
TniCiu-Mart/
🔺🔺 TniCiu-Mart-Server/     # Backend (Node.js, Express, MySQL)
🔺🔺 TniCiu-Mart/     # Frontend (React.js, MUI, Material UI)
🔺🔺 README.md
```

---

## 📦 System Requirements

* Node.js v16 or higher
* MySQL 8.x
* Yarn (preferred) or npm

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/TniCiu-Mart.git
cd TniCiu-Mart
```

---

### 2. Setup Backend

```bash
cd TniCiu-Mart-Server
yarn install       # Install dependencies
yarn dev           # Start the development server
```

> 📌 Make sure to configure your `.env` file with the correct environment variables:
>
> * `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`
> * `JWT_SECRET`, `CLOUDINARY_API_KEY`, etc.

---

### 3. Setup Frontend

```bash
cd ../TniCiu-Mart-Client
yarn install       # Install frontend dependencies
yarn dev         # Run the React application
```

---

## 🛠️ Tech Stack

### Backend

* **Node.js**, **Express.js**
* **MySQL**, **Sequelize ORM**
* **JWT** for authentication
* **Cloudinary** for image uploads
* **RESTful API** structure

### Frontend

* **React.js**
* **Material-UI**, **TailwindCSS**
* **Axios** for API calls
* **React Router**
* **Recoil** for state management

---

## ✨ Key Highlights

* Full admin dashboard for managing products, categories, vouchers, reviews, and news
* Integrated **VNPay** payment gateway
* Mobile-friendly responsive UI
* Auto-expiration for vouchers and promotions
* Detailed and user-friendly product pages
* Review system with ratings and comments
* AI chatbot for smart product suggestions

---

## 🌐 Demo & Test Accounts

🔗 Live Demo (if available): [https://tniciu-mart.vercel.app](https://tniciu-mart.vercel.app)
🧲 Test Accounts:

```
Admin
Email: admin@example.com
Password: admin123

Customer
Email: user@example.com
Password: user123
```

---

## 🤝 Contributing

We welcome all contributions! Follow these steps:

```bash
1. Fork this repository
2. Create your branch (git checkout -b feature/YourFeature)
3. Commit your changes (git commit -m "Add YourFeature")
4. Push to your branch (git push origin feature/YourFeature)
5. Create a Pull Request
```

---

## 📬 Contact

* 📧 Email: [tincui012l@gmail.com](mailto:your.email@example.com)
* 🌐 Website: [tniciu-mart.vercel.app](https://tniciu-mart.vercel.app)
* 🛋️ Facebook/Zalo: TniCiu

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
