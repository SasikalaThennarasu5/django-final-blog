# Django + DRF Backend for Blog Application

## Features
- Token-based authentication (DRF TokenAuthentication)
- Posts and Comments models
- DRF ViewSets for CRUD operations
- Permissions so only owners can edit/delete their content
- URL versioning (api/v1/)
- Throttling and pagination (configured in settings)

## Setup (quick)
1. Create virtualenv and install: `pip install -r requirements.txt`
2. Run migrations:
   ```
   python manage.py migrate
   python manage.py createsuperuser
   ```
3. Start server:
   ```
   python manage.py runserver
   ```
4. Obtain token:
   - Use `/api-token-auth/` with username and password to get token.
   - Use `Authorization: Token <token>` in requests.

API base: `http://localhost:8000/api/v1/`
