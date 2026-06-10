# Browser Call Engine MVP Scope

## Purpose
This document freezes the current Browser Call Engine MVP scope. It defines the minimal product boundary for the first implementation phase and prevents premature feature expansion.

## MVP Vision
A browser-based calling experience for telecallers that demonstrates:

- secure login and agent presence
- outbound call initiation via browser
- inbound call reception
- active call controls
- post-call wrap-up
- call history viewing
- basic telephony state persistence across pages

## Target User
Telecallers and small call center agents who need a simple browser softphone integrated into a communication workflow.

## In Scope
- Login page and authentication flow
- Dashboard with agent status and quick call actions
- Dialpad for outbound call initiation
- Active call screen with mute, hold, hangup
- Incoming call modal overlay
- Post-call disposition and notes entry
- Call history list and detail viewing
- SIP credential provisioning via backend
- Browser calling via SIP/WebRTC integration

## Out of Scope
- Multi-tenant SaaS architecture
- CRM connectors
- Advanced call routing and queues
- Agent transfer, conference, or recording
- Full analytics and reporting
- Billing, subscription, or tenant onboarding
- Mobile native apps
- AI voice agents

## Architectural Boundaries
- Frontend: UI and experience for telecallers
- Backend: auth, SIP credentials, call metadata persistence
- Telephony: SIP server / WebRTC media layer only

## Success Criteria
- A telecaller can log in and register to SIP
- A telecaller can place and receive at least one browser call
- Call lifecycle is visible and manageable in the UI
- Call metadata is persisted in history
- UI remains usable on desktop and mobile viewport sizes
