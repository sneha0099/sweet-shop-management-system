# Sweet Shop Management System

A simple, test-driven Sweet Shop Management System that allows you to perform CRUD operations on sweets, manage inventory, search and sort sweets, and interact with a modern frontend UI.

---

## 🧪 Test-Driven Development (TDD)

This project is built using **TDD principles**:

- Red: Write a failing test before writing any production code.

- Green: Write the minimum code necessary to make the test pass.

- Refactor: Clean and optimize the code while keeping all tests passing.

- Repeat this Red → Green → Refactor cycle to build reliable and maintainable code.

### 🧪 Testing Environment

- To ensure consistency and prevent accidental modifications to production data, we use a separate MongoDB test database during testing.
- The test database is **configured to use a separate MongoDB URI, which is different from the production database URI**.
- The test database is not included in the Git repository, and **it is created and dropped automatically during testing**.

## ✨ Features

### Core Functionalities

- **Add Sweets:** Add new sweets with name, category, price, and quantity.
- **Delete Sweets:** Remove sweets from the inventory.
- **View All Sweets:** View all available sweets.
- **Search Sweets:** Search sweets by:
  - Name
  - Category
  - Price range
- **Sort Sweets:** Sort sweets by:
  -price
  -quantity
- **oreder data by:** asc or desc based on the selected sort option.
- **Purchase Sweets:** Purchase sweets by ID (with stock quantity checks).
- **Restock Sweets:** Increase the quantity of sweets in inventory.
- **view cart:** view purchased sweets in the cart with total amount, quantity and price.
- **clear cart:** clear the cart.

### 💻 Frontend UI

- Fully responsive UI built with React, TailwindCSS, and ShadCN.
- Add, delete, view, purchase, and restock sweets from the browser.

---

## 🔧 Tech Stack

### Backend

- **Language:** Node.js, TypeScript
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Testing:** Jest, Supertest
- **Architecture:** MVC with service-layer abstraction
- **Tools:** Postman for API testing, Dotenv for environment management

### Frontend

- **Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS, ShadCN UI
- **State Management:** React Context API
- **API Integration:** Fetch API

---

## 🗃️ Folder Structure

```bash

sweet-shop/                          # Root folder
│
├── client/                          # React frontend
│   ├── src/                         # Source folder for React app
│   │   ├── components/              # Reusable UI components
│   │   ├── context/                 # React context (e.g., for state management)
│   │   ├── pages/                   # Page components (e.g., Home, Inventory)
│   │   ├── services/                # API call utilities (e.g., sweetService.ts)
│   │   ├── App.tsx                  # Root React component
│   │   ├── main.tsx                 # Entry point of the React app
│   │   ├── index.css                # Global styles
│   │   └── App.css                  # App-specific styles
│   ├── package.json                 # Client dependencies and scripts
│   ├── package-lock.json            # Lock file for client dependencies
│   └── tsconfig.json                # TypeScript configuration for client
│
├── server/                          # Node.js + Express backend
│   ├── src/
│   │   ├── config/                  # DB config, middleware, etc.
│   │   ├── controllers/             # Express route handlers
│   │   ├── models/                  # Mongoose schemas/models
│   │   ├── routes/                  # API route definitions
│   │   ├── services/                # Business logic layer
│   │   ├── tests/                   # Jest/Supertest test files
│   │   ├── utils/                   # Utility functions
│   │   ├── app.ts                   # Express app setup
│   │   └── server.ts                # Server start file
│   ├── package.json                 # Server dependencies and scripts
│   ├── package-lock.json            # Lock file for server dependencies
│   ├── tsconfig.json                # TypeScript config for server
│   └── .env                         # Environment variables for backend
│
└── README.md                        # Project documentation
```

---


## 📸 Screenshots

### ✅ tests

<table>
  <tr>
  <tr>
    <td>
      <img src="./client/src/assets/test1.png" alt="Screenshot 3" width="350"/>
    </td>
    <td>
      <img src="./client/src/assets/test2.png" alt="Screenshot 2" width="350"/>
    </td>
  </tr>
  </table>
  <table>
        <td>
      <img src="./client/src/assets/test3.png" alt="Screenshot 1" width="350"/>
    </td> 
    </td>
        <td>
      <img src="./client/src/assets/test4.png" alt="Screenshot 5" width="350"/>
  </tr>
  </table>
  <table>
  <tr>
    <td>
      <img src="./client/src/assets/test5.png" alt="Screenshot 5" width="350"/>
    </td>
        <td>
      <img src="./client/src/assets/test6.png" alt="Screenshot 4" width="350"/>
    </td>
  </tr>
</table>


### ✅ Postman API Response Samples

<table>
  <tr>
  <tr>
    <td>
      <img src="./client/src/assets/FilterByPriceAndCategory.png" alt="Screenshot 3" width="350"/>
    </td>
    <td>
      <img src="./client/src/assets/FilterByName.png" alt="Screenshot 2" width="350"/>
    </td>
  </tr>
  </table>
  <table>
        <td>
      <img src="./client/src/assets/AddSweets.png" alt="Screenshot 1" width="350"/>
    </td> 
    </td>
        <td>
      <img src="./client/src/assets/PurchaseSweet.png" alt="Screenshot 5" width="350"/>
  </tr>
  </table>
  <table>
  <tr>
    <td>
      <img src="./client/src/assets/ReStockSweet.png" alt="Screenshot 5" width="350"/>
    </td>
        <td>
      <img src="./client/src/assets/DeleteSweeet.png" alt="Screenshot 4" width="350"/>
    </td>
  </tr>
</table>

---

### 🖼️ Frontend UI Screens

### Homepage

![UI Homepage](./client/src/assets/Homepage.png)

### HomepageFooter

![UI HomepageFooter](./client/src/assets/HomepageFooter.png)

#### 🧁 All Sweets View

![UI All Sweets](./client/src/assets//AllSweets.png)

#### 🧁 Filter by Name and category View

![UI filter Sweets](./client/src/assets/FilterByNameandCategory.png)

#### ➕ Add Sweet

![UI Add Sweet](./client/src/assets/AddSweet.png)

#### 🛒 Cart Drawer

![UI Cart Drawer](./client/src/assets/CartItems.png)

---

## 🚀 Project Setup Instructions

### 📦 Clone the Repository

```bash
git clone https://github.com/sneha0099/sweet-shop-management-system.git
cd sweet-shop-management-system
```

```bash
cd server
```

### 🔧 Install Dependencies

```bash
npm install
```

### 🛠️ Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

- `MONGO_URI`: Your MongoDB URI.
- `PORT`: The port number to run the server on.

Create a `.env.test` file in the root directory and add the following variables:

- `MONGO_TEST_URI`: Your MongoDB URI.

### 🚀 Run the Project

```bash
npm run dev
```

### 🧪 Test the Project

```bash
npx jest testname.test.ts
```

### for client

```bash
npm install
```

```bash
npm run dev
```
