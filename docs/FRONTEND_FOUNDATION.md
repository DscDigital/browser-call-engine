# Browser Call Engine Frontend Foundation

## Purpose
This document freezes the frontend project foundation for the Browser Call Engine MVP. It defines the folder structure, naming conventions, import patterns, state management approach, and shared architecture for the frontend codebase.

## src Folder Hierarchy

```
frontend/src/
  app/
    layout.tsx
    page.tsx
    login/
      page.tsx
      LoginPage.tsx
    dashboard/
      page.tsx
      DashboardPage.tsx
    dialpad/
      page.tsx
      DialpadPage.tsx
    call/
      page.tsx
      CallPage.tsx
    wrap/
      page.tsx
      WrapPage.tsx
    history/
      page.tsx
      HistoryPage.tsx
    settings/
      page.tsx
      SettingsPage.tsx
  components/
    layout/
      Header.tsx
      Sidebar.tsx
      PageContainer.tsx
      MiniCallBar.tsx
      BottomNav.tsx
    ui/
      Button.tsx
      Input.tsx
      Select.tsx
      Card.tsx
      Table.tsx
      Toggle.tsx
      Spinner.tsx
      Alert.tsx
      Modal.tsx
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
    useMediaDevices.ts
  services/
    authService.ts
    telephonyService.ts
    callService.ts
    historyService.ts
  stores/
    authStore.ts
    callStore.ts
    telephonyStore.ts
  types/
    auth.ts
    call.ts
    telephony.ts
    ui.ts
  constants/
    routes.ts
    ui.ts
    telephony.ts
  utils/
    formatters.ts
    validators.ts
    storage.ts
    helpers.ts
  lib/
    api.ts
    sipClient.ts
  styles/
    globals.css
    theme.css
```

## Component Folders
- `components/layout`: shell and global chrome
- `components/ui`: reusable UI primitives
- `components/telephony`: call-specific UI widgets

## Layout Folders
- `app`: Next.js route pages and route-specific containers
- `components/layout`: shared layout elements used by authenticated routes

## Provider Folders
- `providers`: React context and provider implementations
- Providers are global and mounted at the app root

## Hooks
- `hooks`: feature-specific and shared hooks
- Use `use*` naming for all custom hooks
- Keep hooks small and composable

## Store
- `stores`: local client-side state containers or state slices
- Use store modules for state that persists beyond route scope
- Store should be simple and abstract common operations

## Types
- `types`: typed domain models and shared interfaces
- Avoid scatter. Keep all type definitions under `types/`
- Use `XxxProps` for component props when needed

## Constants
- `constants`: static values, route names, and UI presets
- Keep string literals centralized for route paths and status values

## Services
- `services`: API and business logic layers separate from components
- Services should return data and never render UI
- Example services: authService, telephonyService, callService

## Utilities
- `utils`: helper functions that are generic and pure
- Use `formatters`, `validators`, `storage`, and `helpers`

## Naming Conventions
- Component files: `PascalCase.tsx`
- Hook files: `useCamelCase.ts`
- Provider files: `CamelCaseProvider.tsx`
- Service files: `camelCaseService.ts`
- Store files: `camelCaseStore.ts`
- Type files: `snake_case.ts` or domain-based `auth.ts`
- Constant files: `camelCase.ts`
- Utility files: `camelCase.ts`

## Import Patterns
- Prefer absolute imports from `src/` using `@/` alias in Next.js
- Page imports via route folders only
- Shared UI imports from `components/*`
- Provider imports from `providers/*`
- Hook imports from `hooks/*`
- Service imports from `services/*`
- Type imports from `types/*`

Example:
```ts
import Button from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';
import { ROUTES } from '@/constants/routes';
```

## File Naming Standards
- `page.tsx` for route entry points
- `XxxPage.tsx` for page container components
- `XxxCard.tsx` for card blocks
- `XxxList.tsx` for lists
- `XxxModal.tsx` for overlays
- `XxxSection.tsx` for layout sections

## Barrel Files
- Use barrel files for shared module exports only when helpful
- Example barrels:
  - `components/ui/index.ts`
  - `providers/index.ts`
  - `hooks/index.ts`
  - `services/index.ts`
- Avoid deep barrel chains; keep imports explicit if it enhances clarity

## State Management Approach
- Use context providers for global root state: auth, telephony, current call
- Use hooks for page/local state and derived values
- Prefer provider-backed state for data needed by multiple pages or persistent UI
- Use store modules for structured state slices if complexity grows
- Keep business state in providers/services, UI state in components

## Future Scalability Considerations
- Keep provider APIs stable and publish only minimal state/methods
- Keep telephony integration isolated behind `TelephonyProvider`
- Keep route pages light and delegate UI to reusable components
- Separate concerns by feature folder when frontend grows beyond MVP
- Capture domain types once and reuse them across pages/services
- Add structured state management later if shared state complexity increases (e.g. Zustand, Redux Toolkit)
- Preserve responsive layout patterns by keeping layout components separate from business pages

## Implementation Notes
- `layout.tsx` should mount global providers and the `AppShell`
- `providers` should be decoupled from UI implementation details
- `services` should be pure and testable
- `components/ui` should contain only presentational primitives
- `components/layout` should not contain domain-specific logic
- Keep `hooks` and `utils` independent of page folder structure
