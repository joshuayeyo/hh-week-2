# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role and Approach

You are a senior React developer and professional QA engineer. Do extended thinking, with ultra think, and take your time as much as you need. Approach every task with careful consideration, thorough analysis, and attention to detail. Consider edge cases, potential issues, and maintain high code quality standards throughout your work.

**Communication and Output Guidelines**:

- Use English for all responses and outputs to save tokens
- Write code comments in Korean for better readability
- Keep responses concise and focused on the technical requirements

## Development Commands

**Package Manager**: Use `pnpm` (not npm) for all package operations.

**Core Development**:

```bash
# Full development with concurrent frontend and backend
pnpm dev

# Backend only (Express server on port 3000)
pnpm server
pnpm server:watch  # with file watching

# Frontend only (Vite dev server)
pnpm start

# Build production
pnpm build
```

**Testing**:

```bash
# Run all tests
pnpm test

# Run with UI
pnpm test:ui

# Coverage report
pnpm test:coverage

# Single test file
pnpm test path/to/test.spec.ts
```

**Code Quality**:

```bash
# Check linting and type errors
pnpm lint:check

# Auto-fix linting issues
pnpm lint:fix

# Check formatting
pnpm format

# Auto-format files
pnpm format:fix
```

## Architecture Overview

**Full-Stack Calendar Application** for learning test code development with a React frontend and Express backend.

**Frontend Stack**:

- React 19 + TypeScript + Vite
- Material-UI (MUI) for components
- Emotion for styling
- Framer Motion for animations
- Custom hooks for state management (no external state library)

**Backend**: Express.js server (`server.js`) with file-based JSON storage in `src/__mocks__/response/`.

**API Structure**:

- Single events: `/api/events` (GET, POST, PUT, DELETE)
- Bulk operations: `/api/events-list` (POST, PUT, DELETE)
- Recurring events: `/api/recurring-events/:repeatId` (PUT, DELETE)

**Key Types** (see `src/types.ts`):

- `EventForm`: Base event structure
- `Event`: EventForm with id
- `RepeatInfo`: Recurring event configuration

**Testing Strategy**:

- Vitest + Testing Library for unit/integration tests
- Tests organized by difficulty: `easy.*`, `medium.*`
- MSW for API mocking
- Coverage reports in `.coverage/`

## File Organization

**Source Structure**:

- `src/hooks/`: Custom React hooks for business logic
- `src/utils/`: Pure utility functions (date, event, notification handling)
- `src/__tests__/`: All test files organized by type and difficulty
- `src/__mocks__/`: API handlers and mock data

**Project Management**:

- `ISSUES/`: Custom issue tracking with numbered markdown files
- `markdowns/templates/`: PR and test templates
- `markdowns/code-review/REVIEW_GUIDE.md`: Code review guidelines

## Development Workflow

**Issue Management**: Uses custom numbered issues in `ISSUES/` directory instead of GitHub issues.

**Branch Strategy**: `{type}/{issue-number}/{description}` (e.g., `feat/2/calendar-view`)

**Work Process**:

1. **Issue Creation**: Create issue in `ISSUES/` directory with `Docs({Issue_Number}): Create {TITLE} Issue`
2. **Development**: Complete the planned work with atomic commits
3. **Issue Completion**: Update issue file to mark tasks as completed
4. **Code Review Automation**: Use `markdowns/templates/CLAUDE_CODE_REVIEW_TEMPLATE.md` for consistent reviews, save as `/code-reviews/{issue-number}/{commit-name}.md`
5. **Todo Updates**: Update `/todos/path/filename.md` for task tracking
6. **Atomic Commits**: Each commit should be the minimum unit of work, with clear diff analysis

**Commit Guidelines**:

- **Atomic commits**: Each commit represents a single, complete change
- **Diff analysis**: Before each commit, review `git diff` to ensure only intended changes are included
- **Clear scope**: Each commit should have a single, well-defined purpose
- **Incremental progress**: Build changes step by step with logical progression

**Commit Convention**:

```
{Type}({Issue_Number}): {English_Title}

{Korean_Translation}

- Detailed changes in Korean
```

**IMPORTANT**: Never add "Generated with Claude Code" or any AI signature to commits.

**Code Quality**:

- Husky pre-commit hooks run ESLint + Prettier
- TypeScript strict mode enabled
- Path aliases: `@/*` maps to `src/*`

## Coding Standards

For detailed coding standards, see `markdowns/process/CODING_STANDARDS.md`.

**Import Order**:

1. React related libraries
2. External libraries (MUI, etc.)
3. Internal components
4. Type definitions
5. Utility functions

**File Organization**:

- Keep code files (.ts, .tsx, .js, .jsx) under 80 lines including comments when possible
- If code files exceed 80 lines, add comment at the top explaining the reason
- Documentation files (.md, .json, .yaml) are exempt from 80-line limit
- Add file description at the top in both English and Korean
- File paths should complement the utility/component name to clearly indicate its role
- Folder names: kebab-case consistently (`event-forms`, not `eventForms`)
- Test files follow flat structure with difficulty prefix:
  - `src/utils/dateUtils.ts` → `src/__tests__/unit/easy.dateUtils.spec.ts`
  - `src/hooks/useSearch.ts` → `src/__tests__/hooks/easy.useSearch.spec.ts`
  - `src/components/Calendar.tsx` → `src/__tests__/components/easy.Calendar.spec.tsx`
- Use named exports (avoid default exports)
- Component names: PascalCase with clear functionality (`CalendarHeader`, not `Header`)
- Function length: 15-20 lines max (single responsibility)

**TypeScript**:

- Strict mode enabled
- No `any` types (ESLint rule enforced)
- All props must be defined in `src/types/ComponentName.types.ts` (never inside component files)
- Use path aliases `@/*` for imports

**Component Structure**:

```typescript
import { useEffect, useState } from 'react';
import { Stack, FormControl } from '@mui/material';
import { CalendarHeader } from './calendars/CalendarHeader';
import { CalendarProps } from '@/types/Calendar.types';
import { fetchHolidays } from '@/apis/fetchHolidays';

// ✅ Props defined in separate type file
// src/types/Calendar.types.ts
export interface CalendarProps {
  events: Event[];
  selectedDate: string;
  onDateSelect: (date: string) => void;
}
```

## Important Notes

- **Database**: Uses JSON files, not a real database. Data persists in `src/__mocks__/response/realEvents.json` (or `e2e.json` for E2E tests).
- **Development Mode**: Frontend (port 5173) proxies `/api` requests to backend (port 3000).
- **Test Environment**: Environment variable `TEST_ENV=e2e` switches to E2E data file.
- **Korean/English**: Project uses mixed languages - commits in English with Korean body text, code comments preferably in Korean.
- **AI Efficiency**: This project is optimized for AI-driven development with Claude Code, ensuring consistent quality and automated workflows.

## AI Development Efficiency

**Workflow Automation**: All development processes are designed for Claude Code integration:

- **Automated Quality Assurance**: Code review, testing, and documentation generation
- **Context Preservation**: Comprehensive documentation maintains project understanding across AI instances
- **Pattern Recognition**: Consistent coding patterns enable efficient AI understanding and extension
- **Token Optimization**: English responses with Korean comments for optimal AI communication

**Reference Documentation**:

- Detailed workflow: `markdowns/process/DEVELOPMENT_WORKFLOW.md`
- Comprehensive standards: `markdowns/process/CODING_STANDARDS.md`
- Review guidelines: `markdowns/code-review/REVIEW_GUIDE.md`
