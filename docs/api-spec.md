# API Design (REST v1)

Base URL: `/v1`

## Auth

- `POST /auth/login`
- `POST /auth/guest`
- `POST /auth/google`
- `POST /auth/apple`
- `POST /auth/refresh`

## Subscription

- `GET /subscription/plans`
- `POST /subscription/checkout/stripe`
- `POST /subscription/validate` (store receipt)
- `POST /webhooks/stripe`
- `POST /webhooks/apple`
- `POST /webhooks/google`

## Anatomy

- `GET /anatomy/systems`
- `GET /anatomy/systems/:id/structures`
- `GET /anatomy/structures/:id`

## Study

- `GET /study/tracks`
- `GET /study/tracks/:id`
- `POST /study/progress`

## Quiz

- `POST /quiz/start`
- `POST /quiz/answer`
- `POST /quiz/submit`
- `GET /quiz/results`

## Profile

- `GET /users/me`
- `GET /users/me/stats`
- `GET /users/me/history`
