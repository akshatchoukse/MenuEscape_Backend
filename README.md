**MenuEscape Backend** is the server-side part of the MenuEscape system. It handles the API requests from both the **Admin Panel** and the **Customer Frontend**. Built with **Express.js** and **MongoDB**, it facilitates order management, menu management, and user data storage.

---

## 🌟 Features

- **Order Management**: Handles incoming customer orders, updates their status (completed or canceled), and provides necessary order details to the admin.
- **Menu Management**: Manages restaurant menu items. Admins can add, update, and delete menu items.
- **Database**: Stores data about orders, customers, and menu items using **MongoDB**.
- **API Endpoints**: Exposes RESTful API endpoints to the frontend and admin panel for CRUD operations.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine. Also, ensure that you have **MongoDB** running (either locally or through a cloud service like MongoDB Atlas).

1. Install **Node.js** and **npm**:
   - Check if installed with:

     ```bash
     node -v
     npm -v
     ```

2. Install **MongoDB**:
   - You can install MongoDB locally, or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a managed database.

---

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/menuescape-backend.git
