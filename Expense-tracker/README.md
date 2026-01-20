
# 🏡 Farmhouse Finance Dashboard

A web-based **Expense & Income Tracker** built using **Angular (Standalone Components)** and **JSON Server** to manage and analyze finances for multiple farmhouses.

This application allows users to:
- Select a farmhouse
- Track **Income** and **Expenses** separately
- View **live totals** (Income, Expense, Profit/Loss)
- Perform **CRUD operations**
- See updates instantly without page reload

---

## 🚀 Features

- ✅ Farmhouse-wise financial tracking
- ✅ Separate Income & Expense ledgers
- ✅ Live total calculation (auto-updated)
- ✅ Add & delete transactions
- ✅ Clean, user-friendly dashboard UI
- ✅ Modular Angular architecture
- ✅ JSON Server as mock backend
- ✅ No page reloads (fully reactive)

---

## 🛠 Tech Stack

- **Frontend:** Angular (Standalone Components, Angular 16+)
- **Backend:** JSON Server
- **Styling:** Component-level CSS
- **State Handling:** RxJS + EventEmitter
- **Data Format:** REST APIs with `db.json`

---

## 📂 Project Structure

```

src/
└── app/
├── components/
│   ├── dashboard/
│   ├── transaction-form/
│   └── transaction-list/
├── services/
│   ├── property.service.ts
│   └── transaction.service.ts
├── app.component.ts
├── app.routes.ts
└── app.config.ts

````

---

## 🧾 Data Model (`db.json`)

```json
{
  "properties": [
    { "id": 1, "name": "Earthy Escape" },
    { "id": 2, "name": "Millennium Farm House" }
  ],
  "transactions": [
    {
      "id": 1,
      "propertyId": 1,
      "type": "income",
      "category": "Booking",
      "amount": 15000,
      "date": "2026-01-10"
    }
  ]
}
````

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd expense-tracker
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start JSON Server

```bash
json-server --watch db.json --port 3000
```

### 4️⃣ Run Angular App

```bash
ng serve
```

Open 👉 **[http://localhost:4200](http://localhost:4200)**

---

## 🖥 How the App Works

1. Select a farmhouse from the dropdown
2. Dashboard becomes active
3. View:

   * Total Income (green)
   * Total Expense (red)
   * Net Profit/Loss
4. Add Income or Expense from the right-side panel
5. Tables and totals update **instantly**

---

## 📊 Dashboard Highlights

* **Right Panel:** Add transactions
* **Left Panel:** Financial data & tables
* **Auto Refresh:** No manual reload required
* **User-friendly UX:** Clear selection-based flow

---

## 📌 Best Practices Followed

* Standalone Angular components
* Separation of concerns
* No business logic in templates
* Reactive UI updates
* Clean and scalable structure

---

## 🚧 Future Enhancements

* 📅 Monthly / Yearly filters
* 📊 Charts (Income vs Expense)
* ✏️ Edit transactions
* 📤 Export reports (Excel / PDF)
* 🔐 Authentication & roles

---

## 👩‍💻 Author

**Anusha Kucharlapati**
B.Tech CSE (3rd Year)
Focused on Angular, Web Development & Full Stack Projects

---

## 📜 License

This project is for **learning and academic purposes**.

```

