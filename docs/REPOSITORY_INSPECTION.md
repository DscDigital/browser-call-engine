# Repository Inspection Baseline

## Purpose
This document records the current repository state discovered during the initial architecture inspection. It should be updated when future work changes the MVP foundation in a meaningful way.

## Current Repository Shape
- `frontend/`: Next.js 16, TypeScript, Tailwind CSS application for the browser softphone UI.
- `backend/`: reserved for future NestJS APIs and business logic.
- `telephony/`: reserved for future SIP, WebRTC, and Asterisk integration.
- `docker/`: reserved for future deployment assets.
- `docs/`: source of truth for product scope, routes, state machines, frontend architecture, and wireframes.

## Active Frontend Baseline
- The frontend already contains the planned MVP route folders for `/`, `/login`, `/dashboard`, `/dialpad`, `/call`, `/history`, and `/settings`.
- Shared frontend layers already exist for UI components, layout components, telephony components, providers, hooks, services, stores, constants, types, utilities, and library adapters.
- `frontend/src/app/layout.tsx` mounts `AuthProvider`, `TelephonyProvider`, `CallStateProvider`, and `AppLayout`.
- The current providers are placeholder client contexts with no-op actions and static default state.
- `frontend/src/layouts/AppLayout.tsx` renders the global header, sidebar, page container, bottom navigation, and mini call bar.

## Important Constraints
- `frontend/AGENTS.md` warns that this project uses a Next.js version with breaking changes and requires checking relevant local Next.js documentation before writing Next.js-specific code.
- `frontend/CLAUDE.md` delegates to `AGENTS.md`.
- The current documented development phase is MVP foundation: establish architecture and basic UI only.
- Telephony, SIP server integration, backend authentication, database persistence, Docker deployment, and production call handling remain future work unless the MVP scope is explicitly updated.

## Documentation Gaps
- `docs/API_SPECIFICATION.md`, `docs/DATABASE_SCHEMA.md`, `docs/DEVELOPMENT_GUIDE.md`, `docs/PRODUCT_REQUIREMENTS.md`, `docs/SYSTEM_ARCHITECTURE.md`, and `docs/CHANGELOG.md` are currently empty or placeholder files.
- Future implementation tasks should update the relevant docs before or alongside code changes.
