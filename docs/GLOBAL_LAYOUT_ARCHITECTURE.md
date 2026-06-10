# Browser Call Engine Global Layout Architecture

## Purpose
This document freezes the global frontend layout architecture for the Browser Call Engine MVP. It defines the app shell, layout hierarchy, persistent components, provider hierarchy, and responsive behavior.

## Overall App Shell

The app shell is the root UI scaffold that wraps all authenticated pages. It contains global layout elements and persistent telephony state components.

### App Shell Diagram

```
AppShell
├─ AuthProvider
├─ TelephonyProvider
├─ CallStateProvider
├─ ToastProvider
├─ Layout
│  ├─ Header
│  ├─ Sidebar (desktop) / BottomNav (mobile)
│  ├─ PageContainer
│  │  ├─ RouteContent
│  │  │  ├─ LoginPage or AuthenticatedPage
│  │  │  └─ Other pages
│  │  └─ ModalLayer
│  └─ MiniCallBar
```

## Header Structure

### Header Responsibilities
- Branding and app title
- Current route title
- Agent presence summary
- Active call status badge
- User menu / logout
- Notifications icon 

### Header Component Tree

```
Header
├─ LogoBrand
├─ PageTitle
├─ StatusSummary
│  ├─ PresenceIndicator
│  └─ SipStatusPill
├─ NotificationsButton
└─ UserMenu
```

## Bottom Navigation

### Mobile Bottom Navigation
- Visible only on mobile layout
- Provides fast route switching when sidebar is hidden
- Includes icons for: Dashboard, Dialpad, History, Settings
- Optionally includes a call quick action button

### BottomNav Tree

```
BottomNav
├─ NavItem (Dashboard)
├─ NavItem (Dialpad)
├─ NavItem (History)
└─ NavItem (Settings)
```

## Mini Call Bar

### Purpose
The mini call bar persists across navigation during an active call. It provides quick access back to the active call screen and basic controls.

### MiniCallBar Tree

```
MiniCallBar
├─ CallSummary
│  ├─ CallerName
│  ├─ CallStatus
│  └─ Timer
├─ QuickControls
│  ├─ MuteButton
│  ├─ HoldButton
│  └─ HangupButton
└─ JumpToCallButton
```

### Persistent Behavior
- Renders globally within the app shell
- Survives route changes
- Visible on desktop and mobile when a call is active
- Collapses to a single line on mobile

## Provider Hierarchy

The provider hierarchy establishes global state boundaries and makes core state available across the app.

### Provider Diagram

```
Root
├─ AuthProvider
│  ├─ TelephonyProvider
│  │  ├─ CallStateProvider
│  │  │  └─ ToastProvider
│  │  │     └─ AppShell
```

### Provider Responsibilities
- `AuthProvider`
  - auth token, user profile, login/logout, route guard
- `TelephonyProvider`
  - SIP registration, incoming/outgoing call events, telephony status
- `CallStateProvider`
  - current call metadata, call history, wrap-up data
- `ToastProvider`
  - global notifications, error/success toasts

## Layout Hierarchy

### Layout Diagram

```
Layout
├─ Header
├─ Main
│  ├─ Sidebar (desktop)
│  ├─ ContentArea
│  │  ├─ CurrentPage
│  │  └─ ModalLayer
│  └─ BottomNav (mobile)
└─ MiniCallBar
```

### Routing and Route Wrappers
- `/login`: uses a simplified shell without sidebar or mini call bar
- authenticated routes: use full `AppShell` layout
- route wrappers ensure consistent layout across pages

### Route Wrapper Tree

```
AuthenticatedRoute
├─ AppShell
│  ├─ Header
│  ├─ Sidebar / BottomNav
│  ├─ PageContainer
│  ├─ ModalLayer
│  └─ MiniCallBar
```

## Persistent Components

Persistent components are mounted outside page-level route changes.

- `Header`
- `Sidebar` / `BottomNav`
- `MiniCallBar`
- `ToastProvider`
- `ModalLayer`
- `AuthProvider`
- `TelephonyProvider`
- `CallStateProvider`

## Modal Layer

### Purpose
Central modal layer manages overlay dialogs such as incoming calls, confirmations, and error dialogs.

### Modal Layer Tree

```
ModalLayer
├─ IncomingCallModal
├─ ConfirmHangupModal
├─ ErrorModal
└─ WrapReminderModal
```

### Behavior
- Renders above `PageContainer`
- Blocks background interaction when open
- Supports single modal at a time for MVP
- Keeps incoming call modal available regardless of current route

## Toast System

### Purpose
Global non-blocking feedback for success, error, and informational messages.

### Toast Tree

```
ToastProvider
├─ ToastContainer
│  ├─ ToastItem
│  └─ ToastItem
```

### Behavior
- mounted inside global app shell
- triggered by auth, telephony, history, and wrap-up actions
- automatically dismisses after a timeout

## Responsive Behavior

### Desktop Layout
- persistent left sidebar
- top header always visible
- main content uses wide container
- mini call bar fixed to bottom when active
- modals centered on screen

### Mobile Layout
- header remains at top with compact controls
- sidebar replaced by bottom navigation or hidden burger menu
- content stacks vertically
- mini call bar sticky at bottom
- incoming call modal full-screen

## Page Navigation and Survival

### Components that survive navigation
- `Header`
- `Sidebar` / `BottomNav`
- `MiniCallBar`
- `ToastContainer`
- `ModalLayer`
- Providers

### Components that are page-specific
- login and authenticated route pages
- dashboard content
- dialpad content
- call screen
- wrap-up form
- history list
- settings form

## State Ownership Boundaries
- `AuthProvider`: auth lifecycle, route gating
- `TelephonyProvider`: real-time call/connect state, SIP session
- `CallStateProvider`: current call data, history, wrap-up state
- `Layout`: rendering of persistent UI chrome and mini-call bar
- `Pages`: page-local UI state, forms, filters

## Summary
This document freezes the global frontend backbone so the implementation can proceed with a clear shell, provider hierarchy, persistent UI boundaries, and responsive layout rules.
