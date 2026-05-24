# Trends Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the wallet Trends view that calls the proposed trends endpoint and displays comparison metrics, category movement, distribution, temporal pattern, and insights.

**Architecture:** Add a focused trends module under `src/modules/wallets/modules/trends`, mirroring the existing reports module. Keep API contracts in `src/modules/wallets/interfaces/trends`, expose `getTrendsReport` from the existing transaction service, and wire the sidebar route to `/wallets/[id]/trends` through the existing wallet layout.

**Tech Stack:** Next.js App Router, React 19, TanStack Query, Recharts, Tailwind CSS, lucide-react, existing shared wallet components.

---

### Task 1: Contracts And API Client

**Files:**
- Create: `src/modules/wallets/interfaces/trends/get-trends-report.interface.ts`
- Modify: `src/modules/wallets/services/transactions.service.ts`

- [ ] **Step 1: Add request and response interfaces**

Create the backend contract for `comparisonMode`, summary metrics, categories, temporal points, and insights.

- [ ] **Step 2: Add `getTrendsReport`**

Expose a typed GET client for `reports/trends?walletId=&from=&to=&comparisonMode=`.

### Task 2: Trends State And Formatters

**Files:**
- Create: `src/modules/wallets/modules/trends/const/trends-options.ts`
- Create: `src/modules/wallets/modules/trends/utils/trends-formatters.ts`
- Create: `src/modules/wallets/modules/trends/hooks/useTrends.ts`

- [ ] **Step 1: Add comparison labels**

Create labels for `previous_period`, `last_3_months`, and `last_6_months`.

- [ ] **Step 2: Add formatting helpers**

Create helpers for percentage text, contextual comparison copy, and safe defaults when `changePercent` is `null`.

- [ ] **Step 3: Add `useTrends`**

Use the current wallet id, default to the current month, store `comparisonMode`, call `getTrendsReport`, and return loading/error/data plus filter handlers.

### Task 3: Trends UI Components

**Files:**
- Create: `src/modules/wallets/modules/trends/components/TrendsComparisonFilter.tsx`
- Create: `src/modules/wallets/modules/trends/components/TrendsMetricCard.tsx`
- Create: `src/modules/wallets/modules/trends/components/TrendsCategoryList.tsx`
- Create: `src/modules/wallets/modules/trends/components/TrendsInsights.tsx`
- Create: `src/modules/wallets/modules/trends/components/TrendsView.tsx`

- [ ] **Step 1: Build filters**

Use existing `CalendarPicker` and `CustomSelect` patterns. The filter must send `from`, `to`, and `comparisonMode`.

- [ ] **Step 2: Build cards and lists**

Cards display current value, baseline, percent change, and contextual comparison copy. Lists display empty states when arrays are empty.

- [ ] **Step 3: Build the full view**

Use `WalletPageHeader`, `WalletPanel`, existing chart components, skeletons, and responsive grid layout.

### Task 4: Route And Navigation

**Files:**
- Create: `src/app/wallets/[id]/trends/page.tsx`
- Modify: `src/modules/shared/components/sidebar/sidebar.config.tsx`

- [ ] **Step 1: Add the route**

Create the route page that renders `TrendsView`.

- [ ] **Step 2: Update sidebar**

Change the Tendencias item from `/example3` to `/trends`.

### Task 5: Verification

**Files:**
- Verify changed TypeScript and route files.

- [ ] **Step 1: Run lint**

Run: `pnpm lint`

- [ ] **Step 2: Run build**

Run: `pnpm build`

- [ ] **Step 3: Fix reported issues**

Resolve lint/type/build failures only in files related to this feature.
