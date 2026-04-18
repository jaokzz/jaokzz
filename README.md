# ANATOMIX — SaaS-level Mobile Anatomy Platform

Production-ready blueprint and implementation scaffold for **Flutter + Unity integrated** mobile app with a **NestJS + PostgreSQL** backend.

## Why this stack

- **Flutter**: single codebase for Android/iOS, great rendering performance, mature ecosystem for auth, payments and offline storage.
- **Unity via Flutter bridge**: best option for complex and high-performance 3D anatomy interactions (rotation, isolation, part selection, shading, AR expansion).
- **NestJS + PostgreSQL**: scalable backend architecture with clean module boundaries.

## Repository structure

```text
mobile/                 # Flutter application (clean architecture, Riverpod)
backend/                # NestJS API + Prisma schema
docs/                   # API design, architecture decisions, deployment strategy
```

## Quick start

### Mobile (Flutter)

```bash
cd mobile
flutter pub get
flutter run
```

### Backend (NestJS)

```bash
cd backend
npm install
cp .env.example .env
npx prisma migrate dev
npm run start:dev
```

## Implemented modules

- Authentication (email/password + social placeholders + guest mode)
- Subscription domain with monthly/yearly/lifetime plans and entitlement checks
- Anatomy systems + structures model
- Quiz/exam flow contracts (timer/scoring/feedback-ready)
- Profile/progress contracts
- Unity bridge interface for 3D interactions

## Docs

- [Architecture](docs/architecture.md)
- [API design](docs/api-spec.md)
- [Deployment](docs/deployment.md)
- [Data model](docs/data-model.md)
