# **Blog-Vlog 📝**  
A **simple blogging platform** built with **Node.js, Express, MongoDB (Mongoose), and EJS**. This application allows users to view blogs, search by category, and provides an **admin panel** to manage blog content.  

## **🚀 Features**  
### **For Users**  
✔️ View all blogs on the homepage.  
✔️ Search blogs by category.  
✔️ Read full blog posts with clean UI.  

### **For Admins**  
✔️ Admin login/logout.  
✔️ Add, edit, and delete blogs.  
✔️ Manage blog categories.  
✔️ Secure admin panel.  

## **🛠 Tech Stack**  
- **Frontend:** EJS (Embedded JavaScript Templates), Bootstrap  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JWT (JSON Web Token)  

## **📂 Project Structure**  
```
/blog-vlog
  ├── /config          # Database connection setup
  ├── /models         # Mongoose schemas
  ├── /routes         # Express routes
  ├── /controllers    # Handles business logic
  ├── /middleware     # Authentication middleware
  ├── /views          # EJS templates (UI)
  │   ├── /partials   # Reusable UI components
  ├── /public         # Static files (CSS, Images)
  ├── .env            # Environment variables
  ├── server.js       # Entry point of the app
  ├── package.json    # Project dependencies
```

## **🚀 How to Run Locally**  
1️⃣ Clone the repository:  
```bash
git clone https://github.com/your-username/blog-vlog.git
cd blog-vlog
```
2️⃣ Install dependencies:  
```bash
npm install
```
3️⃣ Setup environment variables:  
- Create a `.env` file and add:  
  ```env
  PORT=5000
  MONGO_URI=mongodb://localhost:27017/blog-vlog
  JWT_SECRET=your_secret_key
  ```
4️⃣ Start the server:  
```bash
npm start
```
5️⃣ Open in browser:  
```
http://localhost:5000
```
