# Kayıp Serotonin — Official Website

> A premium, editorial-first digital home for **Kayıp Serotonin**, an independent music project.
>
> This project is not intended to be a generic artist landing page. It should feel like a carefully art-directed digital experience: distinctive, modern, fast, accessible, technically clean, and unmistakably human.

---

## 1. Product Vision

Build the official website of **Kayıp Serotonin** as a long-term digital home for the project.

The website must:

- Establish a strong and memorable visual identity.
- Present the music with a premium, editorial feel.
- Make the project feel credible and professionally built.
- Work beautifully on mobile, tablet, and desktop.
- Provide a clear path from discovery → music → project story → social platforms.
- Support future releases without requiring architectural rewrites.
- Avoid the visual patterns commonly associated with generic AI-generated websites.

### Important

The website is **not** primarily a discovery engine.

TikTok, Instagram, YouTube, Spotify, etc. remain the discovery channels.

The website's job is to turn an interested visitor into someone who understands the project, listens to the music, remembers the identity, and can easily follow/support it.

---

# 2. Brand Context

## Artist

**Kayıp Serotonin**

## Current Release

**Sınırları Aştın**

The project is an independent music project using AI-assisted music production/vocals.

Do not present this in a defensive or gimmicky way.

The website should communicate:

- independence
- experimentation
- melancholy
- modernity
- emotional depth
- internet-native culture
- intentional art direction

Avoid cliché "AI music" aesthetics.

---

# 3. Core Design Principle

## Human-directed, not AI-generated-looking.

The website must NOT look like:

- a generic SaaS landing page
- a random Framer template
- an AI-generated portfolio
- a standard Spotify clone
- a cyberpunk neon website
- a glassmorphism showcase
- a dashboard
- an over-animated WebGL experiment
- a template with huge gradients and floating blobs

Avoid:

- excessive gradients
- unnecessary glass cards
- excessive rounded corners
- excessive shadows
- generic glowing buttons
- meaningless decorative particles
- stock imagery
- generic "Welcome to our world" copy
- excessive uppercase text
- animation for the sake of animation

Every visual decision must have a reason.

---

# 4. Design Direction

The design language should sit somewhere between:

- contemporary independent music editorial
- art direction / culture magazine
- premium digital publication
- modern record label website
- experimental typography
- restrained digital brutalism
- cinematic minimalism

The result should feel **2026**, but not "trendy for the sake of being trendy."

It should still look good in 2–3 years.

## Visual Character

Aim for:

- strong typography
- intentional whitespace
- asymmetrical layouts where appropriate
- editorial hierarchy
- controlled motion
- large visual moments
- subtle texture
- carefully chosen imagery
- unexpected but usable composition
- strong contrast
- excellent micro-interactions

---

# 5. Technical Stack

Use:

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Motion / Framer Motion** for animation where appropriate
- Modern semantic HTML
- CSS variables for design tokens
- ESLint
- Prettier
- Git

Prefer stable, well-supported packages.

Do not add dependencies just because they are popular.

Every dependency must solve a real problem.

---

# 6. Architecture Principles

Clean architecture and clean code are mandatory.

This does NOT mean building an unnecessarily complex enterprise architecture.

The architecture must be:

- modular
- readable
- predictable
- scalable
- easy to refactor
- easy for another developer/AI agent to understand

## Rules

### Components

Components must have one clear responsibility.

Bad:

```text
page.tsx
  └── contains the entire website
```

Good:

```text
page.tsx
  ├── Hero
  ├── FeaturedRelease
  ├── ProjectStatement
  ├── SocialProof
  └── Footer
```

Do not create enormous components.

As a general rule, if a component becomes difficult to reason about, split it.

Do not split components artificially just to make files small.

---

# 7. Suggested Project Structure

Use the following as a starting point, not a rigid law:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── music/
│   │   └── page.tsx
│   │
│   ├── releases/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── story/
│   │   └── page.tsx
│   │
│   └── social-impact/
│       └── page.tsx
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
│   ├── artist.ts
│   ├── releases.ts
│   └── social-impact.ts
│
├── lib/
│   ├── utils.ts
│   └── metadata.ts
│
├── types/
│   └── index.ts
│
└── public/
    ├── images/
    ├── artwork/
    └── icons/
```

Adjust the structure when the implementation demonstrates a better solution.

Do not create folders that have no meaningful purpose.

---

# 8. Routing Strategy

The first release should be intentionally small.

Potential routes:

```text
/
 /music
 /releases/[slug]
 /story
 /social-impact
```

Do not build every possible page immediately.

The homepage should be the strongest experience.

The architecture should make future releases easy to add.

---

# 9. Homepage Concept

The homepage should not feel like a list of sections.

It should feel like a continuous editorial experience.

Potential flow:

```text
OPENING
↓
Kayıp Serotonin identity
↓
Current release: Sınırları Aştın
↓
Listen / platform links
↓
A strong visual or typographic transition
↓
What is Kayıp Serotonin?
↓
The story / philosophy
↓
Selected release or content
↓
Social impact / transparency
↓
Social channels
↓
Minimal footer
```

This is only a structural direction.

The actual visual composition must be designed intentionally.

---

# 10. Hero

The hero is the most important visual moment.

It should immediately answer:

1. Who is this?
2. What is currently happening?
3. Why should I continue scrolling?

The hero should feature:

**Kayıp Serotonin**

and the current release:

**Sınırları Aştın**

The CTA should prioritize listening.

Avoid generic CTA language such as:

- Learn More
- Get Started
- Discover More

Use language that belongs to a music project.

---

# 11. Music Experience

Music must be treated as the primary product.

The current release should be visually prominent.

Potential information:

- artwork
- title
- release date
- short description
- streaming platforms
- credits where available
- lyrics/story where appropriate

Do not recreate Spotify's UI.

Do not create a fake music player unless there is a real technical reason.

If an embedded player is used, keep the surrounding experience custom.

---

# 12. Future Releases

The data model must support multiple releases.

Example conceptual model:

```ts
type Release = {
  slug: string;
  title: string;
  type: "single" | "ep" | "album";
  releaseDate: string;
  artwork: string;
  description?: string;
  links: {
    spotify?: string;
    appleMusic?: string;
    youtubeMusic?: string;
    deezer?: string;
    tidal?: string;
  };
};
```

Do not hardcode release information throughout UI components.

Content belongs in data/configuration.

---

# 13. Social Impact Section

The project has a public social-impact / donation commitment.

This section must be:

- transparent
- factual
- visually serious
- easy to understand
- never manipulative

Do not exaggerate.

Do not imply an official partnership unless one actually exists.

Do not use charity imagery merely for emotional manipulation.

The exact wording and institution details should be treated as content/configuration and confirmed before publishing.

---

# 14. Typography

Typography is one of the main design tools.

Do not default to:

- Inter everywhere
- Poppins everywhere
- Roboto everywhere

Explore a deliberate type pairing.

Possible direction:

- expressive display typeface for major moments
- highly readable grotesk/sans for UI and body text

Typography must have:

- strong hierarchy
- excellent line-height
- controlled measure
- responsive sizing
- intentional letter spacing

Use `clamp()` or responsive Tailwind typography where appropriate.

---

# 15. Color System

Do not choose colors randomly inside individual components.

Define a small design system.

Example conceptual tokens:

```text
--background
--foreground
--muted
--surface
--border
--accent
--accent-foreground
```

The final palette must emerge from the artist identity and artwork.

Avoid excessive neon.

Avoid default purple-blue AI gradients.

---

# 16. Spacing

Use a consistent spacing system.

Avoid random values throughout the codebase.

Major sections should have deliberate rhythm.

Whitespace is part of the design.

Do not fill empty space simply because it exists.

---

# 17. Motion Design

Motion should communicate hierarchy and interaction.

Use animation for:

- page entrance
- typography reveal
- image reveal
- navigation transitions
- hover states
- section transitions
- subtle scroll-linked moments

Do NOT animate every element.

## Performance

Animations must remain smooth on mid-range mobile devices.

Respect:

```css
prefers-reduced-motion
```

Users who prefer reduced motion must receive an accessible experience.

---

# 18. Responsive Design

Mobile is not an afterthought.

Design from the smallest practical viewport upward.

Test at least:

- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Do not simply stack the desktop layout on mobile.

Some compositions should intentionally change on smaller screens.

---

# 19. Accessibility

Accessibility is mandatory.

Use:

- semantic HTML
- correct heading hierarchy
- meaningful alt text
- keyboard navigation
- visible focus states
- sufficient contrast
- accessible buttons and links
- reduced-motion support
- screen-reader-friendly labels

Do not sacrifice accessibility for aesthetics.

---

# 20. Performance

The website should feel extremely fast.

Prioritize:

- optimized images
- responsive images
- modern image formats where appropriate
- minimal JavaScript
- server components by default
- client components only when interaction requires them
- lazy loading where appropriate
- avoiding unnecessary third-party scripts

Do not add heavy animation libraries or WebGL unless the visual concept genuinely requires them.

Target excellent Core Web Vitals.

---

# 21. SEO

Implement proper metadata from the beginning.

Include:

- title
- description
- canonical URL
- Open Graph metadata
- Twitter/X metadata
- favicon
- sitemap
- robots.txt
- structured data where appropriate

Artist/release pages should have meaningful metadata.

Social sharing must look intentional.

When someone shares a release, the preview should look like an official Kayıp Serotonin release card.

---

# 22. Content Strategy

Do not invent facts about the artist.

If information is unknown, use a clearly marked placeholder during development.

Never fabricate:

- streaming numbers
- awards
- press coverage
- partnerships
- artist biographies
- credits
- charity relationships
- testimonials

All factual claims must come from confirmed project information.

---

# 23. External Links

Streaming/social links should be centralized in data.

Example:

```ts
const socialLinks = {
  instagram: "...",
  tiktok: "...",
  youtube: "...",
};
```

Do not scatter raw URLs throughout components.

External links should clearly behave as external links where appropriate.

---

# 24. Code Quality Rules

Absolutely avoid:

- `any` unless genuinely unavoidable
- duplicated UI logic
- duplicated constants
- giant components
- giant utility files
- magic numbers everywhere
- inline styles without reason
- unnecessary `useEffect`
- unnecessary client components
- unnecessary state
- deeply nested conditionals
- dead code
- commented-out old implementations
- TODOs that are never tracked
- dependency bloat

Prefer:

- strong TypeScript types
- small focused components
- reusable primitives where repetition exists
- clear naming
- pure functions
- predictable data flow
- server components by default
- composition over inheritance

---

# 25. Refactoring Rule

Refactoring is part of implementation, not an optional final step.

After every meaningful feature:

1. Inspect the changed files.
2. Look for duplication.
3. Look for unnecessary complexity.
4. Check component responsibility.
5. Check naming.
6. Check responsive behavior.
7. Check accessibility.
8. Check performance.
9. Remove dead code.
10. Run lint/type checks.

Do not keep bad architecture merely because it already works.

---

# 26. AI Coding Agent Rules

This project will be developed using AI coding agents such as Antigravity, Gemini, and Claude.

AI agents must behave like a senior engineering/design team.

Before implementing a large feature:

1. Understand the existing architecture.
2. Inspect relevant files.
3. Explain the intended change internally through the implementation plan.
4. Make the smallest coherent change.
5. Preserve existing behavior unless the task explicitly changes it.
6. Verify the result.
7. Refactor if necessary.

Never blindly rewrite the project.

Never create a new architecture for every feature.

Never install a package without a reason.

---

# 27. Design Review Checklist

Before considering a page complete, ask:

### Visual

- Does this look custom?
- Does it feel like a real music project?
- Does it avoid AI-template aesthetics?
- Is the typography strong?
- Is whitespace intentional?
- Is the hierarchy immediately understandable?
- Does the page have a memorable visual moment?

### UX

- Can a visitor understand the project in seconds?
- Can they listen to the current release immediately?
- Are navigation paths obvious?
- Is mobile interaction comfortable?

### Engineering

- Is the component structure clean?
- Is TypeScript strict?
- Is data separated from presentation?
- Are client components necessary?
- Is there duplicated logic?
- Are there accessibility issues?
- Are images optimized?
- Are metadata/SEO implemented?

---

# 28. Definition of Done

A feature is not done when it "looks okay."

It is done when:

- visual design is polished
- responsive behavior is verified
- accessibility is considered
- TypeScript passes
- lint passes
- no obvious console errors exist
- no unnecessary dependencies were introduced
- components have sensible responsibilities
- content is factual
- performance is reasonable
- mobile and desktop both feel intentionally designed

---

# 29. Development Philosophy

Build less, but build it better.

Do not chase feature count.

Do not chase trends.

Do not make the website look impressive through complexity.

Make it impressive through:

**art direction + typography + composition + motion + performance + craftsmanship.**

The final website should make a visitor think:

> "This is an independent project, but these people clearly care about what they're building."

That is the goal.

---

# 30. First Milestone

Do NOT immediately build every page.

First milestone:

### Phase 1 — Foundation

- initialize Next.js
- configure TypeScript
- configure Tailwind
- establish design tokens
- establish typography
- establish global layout
- establish navigation
- establish responsive system
- establish metadata foundation
- establish component conventions

### Phase 2 — Homepage

Build only the homepage.

Focus heavily on:

- hero
- current release
- listening experience
- typography
- visual storytelling
- transitions
- mobile experience

### Phase 3 — Content

Add:

- music/release pages
- story
- social impact
- footer/social links

### Phase 4 — Polish

Perform a complete:

- UX review
- visual review
- responsive review
- accessibility review
- performance review
- code review
- refactoring pass

Only then consider the first production release.

---

# 31. Final Instruction to the AI Agent

You are not being asked to generate a generic artist website.

You are helping build a **real, long-term digital identity for Kayıp Serotonin**.

Prioritize:

1. Design quality
2. Brand identity
3. User experience
4. Performance
5. Accessibility
6. Clean architecture
7. Maintainability

When there is a conflict between adding more features and improving the existing experience, **improve the existing experience**.

When there is a choice between a flashy implementation and a simpler, more intentional one, prefer the intentional one.

When something looks like an AI-generated template, stop and redesign it.

The standard is not:

> "It works."

The standard is:

> **"It feels deliberately designed, technically excellent, and worthy of the Kayıp Serotonin name."**
