# Browser Call Engine Component Architecture

## Purpose
This document freezes the MVP component architecture for the Browser Call Engine. It defines the UI component tree, state ownership, and suggested folder/file structure for the first implementation phase.

## Architecture Principles
- Keep components modular and reusable
- Separate layout, page, and domain concerns
- Use composition over inheritance
- Keep state ownership close to the component that needs it
- Use shared components for common UI patterns
- Avoid coupling telephony details to generic UI components

## Suggested Folder Structure

```
frontend/src/
  app/
    layout.tsx
    page.tsx
    login/
      page.tsx
      LoginPage.tsx
      LoginForm.tsx
    dashboard/
      page.tsx
      DashboardPage.tsx
      AgentStatusCard.tsx
      QuickDialCard.tsx
      RecentCallsCard.tsx
    dialpad/
      page.tsx
      DialpadPage.tsx
      NumberDisplay.tsx
      DialpadGrid.tsx
      RecentCallList.tsx
    call/
      page.tsx
      CallPage.tsx
      CallHeader.tsx
      CallControls.tsx
      CallInfoCard.tsx
      IncomingCallModal.tsx
    wrap/
      page.tsx
      WrapPage.tsx
      WrapForm.tsx
    history/
      page.tsx
      HistoryPage.tsx
      HistoryFilterBar.tsx
      HistoryTable.tsx
      HistoryRow.tsx
    settings/
      page.tsx
      SettingsPage.tsx
      AudioDeviceSelector.tsx
      SipStatusCard.tsx
  components/
    layout/
      Header.tsx
      Sidebar.tsx
      PageContainer.tsx
      MiniCallBar.tsx
    ui/
      Button.tsx
      Input.tsx
      Select.tsx
      Card.tsx
      Table.tsx
      Toggle.tsx
      Spinner.tsx
      Alert.tsx
    telephony/
      CallStatusPill.tsx
      PresenceToggle.tsx
      CallDirectionBadge.tsx
    providers/
      AuthProvider.tsx
      TelephonyProvider.tsx
      CallStateProvider.tsx
  hooks/
    useAuth.ts
    useCallState.ts
    useTelephony.ts
    useLocalStorage.ts
```

## Component Tree

### App Shell
- `AppLayout`
  - `Header`
  - `Sidebar`
  - `PageContainer`
  - `MiniCallBar`

### /login
- `LoginPage`
  - `LoginForm`
    - `TextInput` (email)
    - `PasswordInput` (password)
    - `Button` (login)
    - `Alert` (error)

### /dashboard
- `DashboardPage`
  - `AgentStatusCard`
    - `PresenceToggle`
  - `LiveCallCard`
    - `CallStatusPill`
  - `QuickDialCard`
    - `NumberInput`
    - `Button` (call)
  - `RecentCallsCard`
    - `HistoryRow` / `RecentCallRow`

### /dialpad
- `DialpadPage`
  - `NumberDisplay`
  - `DialpadGrid`
    - `DialKey`
  - `DialpadActions`
    - `Button` (call)
    - `Button` (clear)
    - `Button` (backspace)
  - `RecentCallList`
    - `HistoryRow`

### /call
- `CallPage`
  - `CallHeader`
    - `CallDirectionBadge`
    - `CallTimer`
    - `CallerInfo`
  - `CallControls`
    - `Button` (mute)
    - `Button` (hold)
    - `Button` (transfer)
    - `Button` (speaker)
    - `Button` (hang up)
  - `CallInfoCard`
  - `IncomingCallModal` (overlay when inbound)

### /wrap
- `WrapPage`
  - `WrapForm`
    - `Select` (disposition)
    - `Textarea` (notes)
    - `Button` (save)
    - `Button` (skip)

### /history
- `HistoryPage`
  - `HistoryFilterBar`
    - `TextInput` (search)
    - `Button` (filter)
    - `DateRangePicker`
  - `HistoryTable`
    - `HistoryRow`
  - `PaginationControls`

### /settings
- `SettingsPage`
  - `AudioDeviceSelector`
    - `Select` (microphone)
    - `Select` (speaker)
  - `SipStatusCard`
  - `Button` (test call)
  - `Button` (logout)

## Shared Components
- `Header`
- `Sidebar`
- `PageContainer`
- `MiniCallBar`
- `Button`
- `Input`
- `Select`
- `Card`
- `Table`
- `Toggle`
- `Spinner`
- `Alert`
- `Modal`
- `CallStatusPill`
- `PresenceToggle`
- `CallDirectionBadge`

## State Ownership

### Auth State
Owned by: `AuthProvider`
Shared with: `LoginPage`, `Header`, `Sidebar`, authenticated route guard
Includes: auth token, user profile, auth status, login errors

### Telephony State
Owned by: `TelephonyProvider`
Shared with: `CallPage`, `DashboardPage`, `MiniCallBar`, `SettingsPage`, `IncomingCallModal`
Includes: SIP registration status, active call session, incoming call events, telephony error state

### Call State
Owned by: `CallStateProvider`
Shared with: `DialpadPage`, `CallPage`, `WrapPage`, `HistoryPage`, `DashboardPage`
Includes: current call metadata, call history list, current disposition, call summary

### Local UI State
Owned by page/component
Examples: dialed number input, search query, filter selections, form inputs

## Context Providers
- `AuthProvider`
  - exposes: `user`, `token`, `login()`, `logout()`, `isAuthenticated`
- `TelephonyProvider`
  - exposes: `sipStatus`, `register()`, `makeCall()`, `hangup()`, `answer()`, `incomingCall`
- `CallStateProvider`
  - exposes: `currentCall`, `history`, `startWrap()`, `saveWrap()`, `loadHistory()`

## Component Responsibilities

### Layout Components
- `Header`: global navigation, status badges, user menu
- `Sidebar`: route links, quick actions, presence toggle
- `PageContainer`: page content wrapper and responsive spacing
- `MiniCallBar`: persistent active call summary and quick controls

### Page Components
- `LoginPage`: manage auth form and submission
- `DashboardPage`: present agent readiness and quick call actions
- `DialpadPage`: capture outgoing number entry and trigger call actions
- `CallPage`: surface active call controls and context
- `WrapPage`: collect disposition and notes after call
- `HistoryPage`: search, filter, and display call records
- `SettingsPage`: configure audio devices and SIP status

### UI Components
- `Button`: primary button behavior and states
- `Input`: text and number input styling
- `Select`: dropdown selection
- `Card`: reusable card container
- `Table`: tabular layouts for history
- `Toggle`: presence and binary switches
- `Spinner`: loading indicator
- `Alert`: feedback and error messages
- `Modal`: overlay dialogs

### Telephony Components
- `CallStatusPill`: current call state label
- `PresenceToggle`: available/busy/DND controls
- `CallDirectionBadge`: inbound/outbound indicator

## Routing and Component Boundaries
- Keep route pages as top-level containers.
- Avoid deeply nesting page logic inside shared layout components.
- Page components should compose shared UI building blocks.
- Providers should be mounted at the app root to make state available across routes.

## Notes for Implementation
- Use `frontend/src/components/*` for generic reusable pieces.
- Use `frontend/src/app/{route}` for route-specific pages and feature components.
- Keep `providers` and `hooks` separate from UI components.
- Ensure the active call bar is part of app layout, not a page-only component, for persistence across navigation.
- Keep telephony integration abstracted behind `TelephonyProvider` so pages remain UI-focused.
