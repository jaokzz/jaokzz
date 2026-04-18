# Deployment Strategy

## Mobile CI/CD

- GitHub Actions + Fastlane
- Android: internal track -> production rollout staged
- iOS: TestFlight -> App Store phased release
- Flavor strategy: dev / staging / production

## Backend Deployment

- Dockerized NestJS on AWS ECS/Fargate or GCP Cloud Run
- Managed PostgreSQL (RDS/Cloud SQL)
- Redis (ElastiCache/Memorystore)
- CDN for static anatomy metadata and signed model manifests

## Observability

- Sentry for mobile + backend exceptions
- OpenTelemetry traces from API
- Prometheus/Grafana for latency and p95/p99

## Security hardening

- Secrets in AWS/GCP secret manager
- WAF + rate limiting
- Signed webhook verification (Stripe/Apple/Google)
- Regular dependency scanning (Snyk/GitHub Dependabot)
