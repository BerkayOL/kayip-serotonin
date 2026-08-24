Kayıp Serotonin — Architecture

1. Architecture Goal

Create a frontend architecture that is:

clean

modular

understandable

scalable

performant

easy to refactor

Do not confuse clean architecture with excessive abstraction.

The project is a web application, not an enterprise backend.

2. Stack

Primary stack:

Next.js

React

TypeScript

Tailwind CSS

Motion where required

ESLint

Prettier

Use the App Router.

3. Directory Structure

Suggested structure:

src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── music/
│   ├── releases/
│   │   └── [slug]/
│   ├── story/
│   └── social-impact/
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── music/
│   ├── releases/
│   ├── story/
│   ├── social-impact/
│   ├── footer/
│   └── ui/
│
├── data/
├── lib/
└── types/

This structure may evolve.

Do not create folders with no real purpose.

4. App Layer

src/app owns:

routing

page composition

layouts

metadata

route-level concerns

Pages should compose components.

Avoid putting complex reusable UI directly into route files.

5. Component Layer

Components should have focused responsibilities.

Example:

Hero
FeaturedRelease
PlatformLinks
ProjectStatement
ImpactSection
SiteFooter

Avoid components such as:

EverythingSection
HomePageContent
MegaComponent
UniversalCard

unless their responsibility is genuinely clear.

6. UI Primitives

Reusable primitives belong under:

components/ui

Examples:

Button

Link

Container

Section

IconButton

Do not create abstractions before repetition exists.

7. Data Layer

Factual content should live outside presentation components.

Example:

src/data/artist.ts
src/data/releases.ts
src/data/social-impact.ts

Components consume typed data.

Do not duplicate release metadata in multiple components.

8. Types

Domain types should be centralized when they are reused.

Example:

type Release = {
  slug: string;
  title: string;
  type: "single" | "ep" | "album";
  releaseDate: string;
  artwork: string;
  description?: string;
  links: ReleaseLinks;
};

Use domain-specific names.

Avoid generic types like:

type Data = ...
type Item = ...
type Object = ...

when a meaningful domain name exists.

9. Server vs Client Components

Default:

Server Component

Use Client Components only when required.

Client Component reasons include:

local interactive state

browser API

event listeners

client-only animation

client-only library

Avoid:

"use client"

at the top of large route trees unless truly required.

10. State Management

Do not introduce global state until a real need exists.

Prefer:

server-rendered data

URL state

local component state

context for narrowly scoped concerns

global state only when justified

A simple music website does not need a state-management library by default.

11. Styling

Use Tailwind for most component styling.

Use CSS variables for design tokens.

Global CSS should primarily handle:

tokens

typography foundations

base styles

accessibility defaults

global utility behavior

Do not create enormous global CSS files.

12. Naming

Use descriptive names.

Components:

FeaturedRelease.tsx
ReleaseArtwork.tsx
PlatformLinks.tsx

Avoid:

Box.tsx
Thing.tsx
Content2.tsx
NewCard.tsx

Use consistent casing.

13. Utilities

src/lib is for actual shared utilities and infrastructure.

Do not dump unrelated helper functions into a giant utils.ts.

Split utilities when responsibilities become distinct.

14. Metadata / SEO

Metadata belongs at route/layout level.

Use shared helpers when repetition is real.

Every meaningful page should have:

title

description

canonical URL where applicable

Open Graph

appropriate social preview

Release pages should have release-specific metadata.

15. Images

Use Next.js image optimization where appropriate.

For local assets:

public/
├── artwork/
├── images/
└── icons/

Do not load huge source files when a smaller optimized asset is sufficient.

Define dimensions/aspect ratios to reduce layout shift.

16. External Services

External services must be isolated.

Do not spread API-specific implementation across UI components.

If an external service is introduced:

src/lib/

or a dedicated integration layer should contain the boundary.

Validate external data.

Never trust remote data blindly.

17. Environment Variables

Secrets belong in:

.env.local

Never commit secrets.

Public configuration should use the appropriate NEXT_PUBLIC_ prefix only when it genuinely needs browser exposure.

Maintain:

.env.example

without real credentials.

18. Error Handling

Do not hide errors.

Use Next.js route-level error handling where appropriate.

User-facing errors should be:

understandable

non-technical

recoverable where possible

Developer errors should remain diagnosable.

19. Loading

Loading states should preserve layout where possible.

Avoid:

layout jumps

full-screen spinners for tiny interactions

fake loading delays

Use skeletons only when they improve perceived continuity.

20. Performance Architecture

Prefer:

static rendering when possible

server rendering where appropriate

minimal hydration

optimized images

limited third-party scripts

Measure before introducing performance-heavy solutions.

21. Testing

Testing should be proportional to the application.

At minimum:

TypeScript checks

lint

production build

For important interactive components, add appropriate tests when complexity justifies them.

Do not create a huge testing framework for trivial static components.

22. Refactoring

Refactor when:

responsibilities diverge

duplication becomes meaningful

files become difficult to understand

dependencies become tangled

a pattern repeats

Do not refactor merely for stylistic preference.

23. Architectural Decision Rule

When choosing between two valid solutions, prefer the one that is:

simpler

more maintainable

more performant

easier for future contributors/AI agents to understand

Do not optimize for cleverness.