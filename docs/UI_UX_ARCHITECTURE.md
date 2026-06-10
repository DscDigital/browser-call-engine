# Browser Call Engine UI/UX Architecture

## Purpose
This document captures the MVP user interface architecture and the component layout philosophy for telecallers.

## Core UX Principles
- Keep task flow linear: login → ready → call → wrap → history
- Surface telephony state clearly and immediately
- Keep active call controls accessible across pages
- Use cards and lists for quick scanning
- Support desktop first with mobile-friendly responsive behavior

## Page Architecture

### Login
- Simple central card
- Fields: Email, Password
- Primary action: `Login`
- States: loading, error

### Dashboard
- Split layout on desktop: sidebar + main panel
- Cards: Agent status, Live calls, Quick dial, Recent calls
- Primary actions: change presence, start call, navigate
- Mobile: stacked cards with compact controls

### Dialpad
- Main focus: numeric keypad and number entry
- Secondary panel: speed dial / recent calls
- Primary action: `Call`
- Error feedback for invalid number or failed call

### Call Screen
- Prominent call header with caller and timer
- Controls: `Mute`, `Hold`, `Transfer`, `Speaker`, `Hang Up`
- Optional preview card for contact/context
- Persistent mini-call bar when navigating away

### Wrap-up
- Summary card with call details
- Form: disposition dropdown, notes textarea
- Actions: `Save`, `Skip`
- Clear save feedback and next-step guidance

### History
- Filter bar: direction, search, date range
- List/table of call records
- Details action to inspect specific call metadata
- Empty state if no call data

### Settings
- Audio device selectors
- SIP registration status card
- `Test Call` and `Logout`
- Mobile: single-column sections

## Component Hierarchy
- Layout: `Header`, `Sidebar`, `MainContent`, `Footer` / mini-call bar
- Page blocks: `Card`, `List`, `Table`, `Form`, `Modal`
- Controls: `Button`, `Toggle`, `Dropdown`, `Input`
- Telephony: `CallStatus`, `CallControls`, `IncomingCallModal`

## Header and Sidebar
### Header
- App logo/name
- Current page title
- Agent presence indicator
- Active call status badge
- User menu / logout

### Sidebar
- Navigation links: Dashboard, Dialpad, History, Settings
- Presence controls: Available, Busy, DND
- Quick actions: New Call, Recent Calls

## Responsive Behavior
- Desktop: persistent sidebar, broad content panels
- Mobile: top navigation or hamburger menu, vertical stacking
- Incoming calls use full-screen modal on mobile
- Mini-call bar stays sticky at bottom on mobile

## Persistent Call UX
- Active call remains accessible via a mini-call bar
- Incoming call uses overlay modal over existing screen
- Wrap-up screen appears immediately after hangup

## State Feedback
- Loading: skeleton cards, button spinners, page overlays
- Errors: inline alerts, toast notifications
- Empty: guidance cards with next step actions

## Accessibility Notes
- Use clear labels and visible focus states
- Keep controls large enough for click/tap
- Provide status text for call state and registration
