# 📚 Book Digest

Book Digest is a full-stack web application for **book reviews** and **event registration**, built with a modern stack that balances performance, SEO, and scalability.

👉 [GitHub Repository](https://github.com/bookmountain/book-digest)

---

## 🚀 Features

-   ✍️ Write and manage **book reviews**
-   📅 Register for and manage **events**
-   🔍 **SEO-friendly** frontend powered by Next.js
-   🖼️ Cloud-based **image storage** compatible with S3
-   🔒 Built-in CMS for admin management (via Django)

---

## 🛠️ Tech Stack

**Frontend**

-   [Next.js](https://nextjs.org/) – React framework optimized for SEO

**Backend**

-   [Django](https://www.djangoproject.com/) – Powerful backend with built-in CMS
-   [SQLAlchemy](https://www.sqlalchemy.org/) – ORM for flexible database queries

**Database & Storage**

-   [PostgreSQL](https://www.postgresql.org/) – Reliable relational database
-   [Supabase](https://supabase.com/) – Hosting for Postgres
-   [Cloudflare R2](https://developers.cloudflare.com/r2/) – Image storage (S3-compatible)

**Hosting**

-   Frontend: [Vercel](https://vercel.com/)
-   Backend: [Render](https://render.com/docs/free#free-web-services)
-   Database: Supabase

---

## 📂 Project Structure

```
book-digest/
├── frontend/        # Next.js (SEO-friendly client)
├── backend/         # Django (CMS + API)
├── database/        # Postgres with SQLAlchemy ORM models
└── storage/         # Cloudflare R2 setup
```

---

## ⚡ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/bookmountain/book-digest.git
cd book-digest
```

### 2. Setup Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

### 3. Setup Backend (Django)

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 4. Database (Postgres via Supabase)

-   Create a project in [Supabase](https://supabase.com/)
-   Update connection URL in `backend/.env`

### 5. Image Storage (Cloudflare R2)

-   Create a bucket
-   Add S3-compatible keys to `backend/.env`

---

## 🌐 Deployment

-   **Frontend** → Deploy to [Vercel](https://vercel.com/)
-   **Backend** → Deploy to [Render](https://render.com/)
-   **Database** → Hosted on Supabase
-   **Images** → Stored on Cloudflare R2

---

## 📌 Roadmap

TBD
