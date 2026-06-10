# Browser Call Engine Routes

## Purpose
This document defines the MVP route structure, page responsibilities, and navigation flow.

## Route Map

- `/login`
  - Purpose: authenticate agent
  - Components: login form, error message, loading state

- `/dashboard`
  - Purpose: agent home screen
  - Components: agent status card, quick dial, recent calls, notifications

- `/dialpad`
  - Purpose: manual dialing and outbound call initiation
  - Components: number display, keypad, call button, speed dial/recent list

- `/call`
  - Purpose: active call controls and in-call status
  - Components: caller info, timer, mute/hold/hangup, contact preview

- `/wrap`
  - Purpose: post-call disposition
  - Components: disposition dropdown, notes textarea, save/skip actions

- `/history`
  - Purpose: call record review
  - Components: filter bar, search, call list table, pagination

- `/settings`
  - Purpose: telephony and audio configuration
  - Components: audio device selector, SIP registration status, test call, logout

## Navigation Principles
- `Login` is the entry point for unauthenticated users.
- The sidebar/nav menu connects dashboard, dialpad, history, and settings.
- Active calls remain accessible via a persistent mini-call bar.
- Incoming calls appear as an overlay modal without forcing a route change.
- After wrap-up, users return to dashboard or history.

## Route Behavior
- Guard `/dashboard`, `/dialpad`, `/call`, `/wrap`, `/history`, and `/settings` behind authentication.
- Keep `/call` as a functional page and allow a smaller persistent widget when users navigate away.
- Use query parameters or call IDs only when needed for history detail or returning to a specific active call.
