# Core Data Models

## User
- id
- email
- displayName
- role (guest/free/premium)
- level
- xp

## AnatomySystem
- id
- name
- description
- type
- progress

## Structure
- id
- name
- description
- function
- origin
- insertion
- systemType
- unityNodeId

## QuizQuestion
- id
- systemId
- type (identifyIn3d/multipleChoice/functionBased)
- prompt
- options[]
- correctAnswer
- structureId

## QuizResult
- id
- userId
- systemId
- score
- accuracy
- timeSeconds
- xpGained
- correctAnswers
- totalQuestions

## SubscriptionPlan
- id
- name
- billingCycle (monthly/yearly/lifetime)
- price
- currency
- highlighted
- features[]
