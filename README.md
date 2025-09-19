# Blog Application (Django + DRF backend + React + Tailwind frontend)

This repository contains a full-stack blog application scaffold:

- Backend (Django + Django REST Framework)
  - Token authentication (DRF TokenAuthentication)
  - Posts and Comments models
  - ViewSets for CRUD operations
  - Owner-only edit/delete permission
  - Pagination, throttling, and URL versioning

- Frontend (React + Vite + Tailwind)
  - List posts with pagination
  - Post detail with comments
  - Login and create post forms (token-based auth)
  - Colorful, responsive UI via Tailwind

## Quick start (local)
1. Backend:
   - `cd backend`
   - `python -m venv venv && source venv/bin/activate` (Windows: `venv\Scripts\activate`)
   - `pip install -r requirements.txt`
   - `python manage.py migrate`
   - `python manage.py createsuperuser`
   - `python manage.py runserver`

2. Frontend:
   - `cd frontend`
   - `npm install`
   - `npm run dev`

## Notes for the instructor / student
- This scaffold provides essential features requested (auth, viewsets, permissions, throttling, pagination, versioning).
- You can extend by adding user registration endpoints, richer UI, and tests.
