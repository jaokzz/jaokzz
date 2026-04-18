# ANATOMIX Architecture (Flutter + Unity + NestJS)

## 1) High-level

- Mobile client in Flutter (single codebase for iOS/Android)
- Unity embedded as native view, controlled by Flutter MethodChannel
- Backend API in NestJS with PostgreSQL via Prisma
- Redis optional for leaderboards, hot quiz sets and rate-limiting counters

## 2) Clean Architecture in mobile

Feature-first modules:

- `features/auth`
- `features/anatomy`
- `features/quiz`
- `features/subscription`
- `features/study`
- `features/profile`

Layering:

- `presentation` (UI, controllers, state)
- `domain` (entities, use cases, repository contracts)
- `data` (DTOs, API clients, cache repositories)

State management: Riverpod (`StateNotifier` + `AsyncValue`).

## 3) Why Unity bridge instead of WebView + Three.js

Chosen approach: **Flutter + Unity integration**.

Reasons:

1. Better mobile-grade rendering/performance for complex anatomy meshes.
2. Mature interaction stack (raycast picking, clipping, isolate/hide layers).
3. Easier future expansion to AR and advanced shaders.
4. Better control over asset bundles and streamed LODs.

## 4) 3D performance strategy

- Split model assets by anatomy system and sub-region.
- Progressive loading: low poly first, high poly on zoom/selection.
- LRU cache for recently opened systems.
- Texture compression per platform (ASTC/ETC2).

## 5) Security

- Short-lived JWT access + refresh token rotation.
- Entitlement guard on premium endpoints.
- Signed receipt validation against Apple/Google + Stripe webhooks.
