# Business Manager App

A web-based business management application inspired by Manager.io, focused on accounting, invoicing, vendor bills, inventory, and reporting without HR/payroll.

## Stack

- Frontend: React + TypeScript + Vite + Tailwind CSS
- Backend: NestJS + TypeScript
- Database: PostgreSQL
- Infra: Docker + Docker Compose

## Features

- Dashboard overview
- Customer and supplier management
- Invoice and bill workflows
- Chart of accounts
- Inventory tracking
- Payment tracking
- Supplier invoice and payment reports
- Custom date-range reporting
- Export-ready report architecture

## Quick start

1. Copy `.env.example` to `.env`
2. Start PostgreSQL and Redis with Docker:
   ```bash
   docker compose up -d
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the backend and frontend:
   ```bash
   npm run dev
   ```
5. Open the app in the browser:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## Project structure

```text
apps/
  api/         NestJS backend
  web/         React frontend

docker-compose.yml
.env.example
```

## Notes

This starter is intentionally built for an MVP business finance platform and is ready for extension into a larger accounting ERP.
