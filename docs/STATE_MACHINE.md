# Browser Call Engine State Machine

## Purpose
This document freezes the core state machines for the MVP, including authentication, agent presence, and call lifecycle states.

## Authentication State

- `unauthenticated`
- `authenticating`
- `authenticated`
- `auth-error`

Transitions:
- `unauthenticated` -> `authenticating` when login begins
- `authenticating` -> `authenticated` on success
- `authenticating` -> `auth-error` on failure
- `auth-error` -> `unauthenticated` after retry

## Agent Presence State

- `offline`
- `registering`
- `available`
- `busy`
- `do-not-disturb`
- `registration-failed`

Transitions:
- `offline` -> `registering` when agent selects available
- `registering` -> `available` on SIP registration success
- `registering` -> `registration-failed` on SIP failure
- `available` -> `busy` or `do-not-disturb` on status change
- any state -> `offline` on logout

## Call Lifecycle State

- `idle`
- `outbound-dialing`
- `outbound-ringing`
- `incoming-ringing`
- `connected`
- `held`
- `ended`
- `wrapping`

Transitions:
- `idle` -> `outbound-dialing` when agent places an outbound call
- `outbound-dialing` -> `outbound-ringing` when SIP invite sent
- `outbound-ringing` -> `connected` when remote answers
- `idle` -> `incoming-ringing` when call arrives
- `incoming-ringing` -> `connected` on answer
- `connected` -> `held` on hold
- `held` -> `connected` on resume
- `connected` -> `ended` on hangup
- `incoming-ringing` -> `ended` on reject
- `ended` -> `wrapping` when post-call wrap begins
- `wrapping` -> `idle` after disposition saved or skipped

## UI State Categories

### Loading States
- page load
- auth submit
- SIP registration
- call initiation
- wrap save
- history fetch

### Error States
- invalid login
- SIP registration failed
- call connect failed
- call ended unexpectedly
- history load failed
- wrap save failed

### Empty States
- no recent activity
- no call history
- no speed dial entries
- no audio device selected
