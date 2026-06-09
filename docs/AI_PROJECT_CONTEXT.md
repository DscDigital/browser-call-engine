# Browser Call Engine - Project Context

## Project Vision

Browser Call Engine is an API-first communication platform that enables click-to-call functionality for CRM, ERP, SaaS products, Google Sheets, and other business systems.

The project is being built as a standalone B2B platform, similar in philosophy to Ameyo, Exotel, Knowlarity, and Freshcaller, but with an open architecture and self-hosting capabilities.

The goal is to create a reusable communication layer that can be integrated into any external system.

---

## Long-Term Objectives

The platform should provide:

* Browser-based calling
* Softphone UI
* Dialpad
* Click-to-call API
* Incoming and outgoing call management
* Call transfer
* Agent management
* Queue management
* Call history
* Recordings
* Webhooks
* REST APIs
* CRM integrations
* Google Sheets integration
* Multi-tenant architecture
* SaaS deployment
* Self-hosted deployment

---

## Current Development Phase

Current phase:

MVP foundation.

Only establish architecture and basic UI.

No telephony implementation yet.

No Asterisk integration yet.

No SIP server integration yet.

No Docker deployment yet.

No authentication yet.

---

## Target Users

* Telecallers
* Counselors
* Sales teams
* Call centers
* CRM vendors
* ERP vendors
* SaaS companies

---

## Technology Stack

Frontend:

* Next.js 16
* TypeScript
* Tailwind CSS
* App Router

Backend (future):

* NestJS
* TypeScript

Database (future):

* PostgreSQL

Cache (future):

* Redis

Telephony Layer (future):

* Asterisk
* FreeSWITCH
* SIP.js
* WebRTC

Deployment (future):

* Docker
* VPS
* Ubuntu

---

## Folder Structure

frontend/

Responsible for:

* Pages
* Components
* Layouts
* User Interface

backend/

Responsible for:

* APIs
* Business logic
* Authentication
* Webhooks

telephony/

Responsible for:

* SIP
* WebRTC
* Asterisk integration
* Call events

docs/

Responsible for:

* Documentation
* Architecture
* API specifications

docker/

Responsible for:

* Containers
* Deployment

---

## Desired Initial Pages

/
Root page

/login
Agent login page

/dashboard
Agent dashboard

/dialpad
Dialpad page

/call
Active call screen

/history
Call history

/settings
Settings page

---

## Coding Philosophy

* Keep code modular.
* Prefer reusable components.
* Use TypeScript everywhere.
* Follow clean architecture.
* Avoid tightly coupled code.
* Keep frontend and telephony layers independent.
* Design everything for multi-tenant SaaS in the future.
* Avoid shortcuts that prevent scalability.

---

## Development Approach

Build incrementally.

One feature at a time.

Maintain production-grade architecture from the beginning.

The project should evolve into a complete B2B communication platform.
