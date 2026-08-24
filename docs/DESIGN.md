Kayıp Serotonin — Design System & Art Direction

Status

Design system status: Foundation / evolving

This document is the source of truth for visual decisions.

The design should evolve deliberately. Do not introduce unrelated visual patterns without updating this document.

1. Brand Objective

The website should communicate:

emotional depth

independence

experimentation

contemporary music culture

melancholy without becoming visually depressing

confidence without corporate polish

internet-native identity

deliberate artistic direction

The project should feel independent but never amateur.

2. Core Principle

Human-directed, not AI-generated-looking.

The website must have recognizable art direction.

Do not assemble common "premium website" ingredients and assume that equals a premium design.

Premium quality comes from:

composition

typography

restraint

rhythm

image treatment

hierarchy

interaction quality

consistency

3. Visual References — Conceptual

The visual territory can borrow principles from:

independent record labels

contemporary editorial websites

music magazines

art books

modern cultural institutions

experimental typography

restrained digital brutalism

cinematic web experiences

Do not copy another website.

References are used for principles, not imitation.

4. Composition

Favor:

strong vertical rhythm

deliberate negative space

occasional asymmetry

large type

strong image-to-type relationships

editorial grids

full-bleed moments used sparingly

unexpected alignment when it improves identity

Avoid:

every section centered

every section inside a card

repeated 3-column grids

identical section structures

decorative shapes with no semantic purpose

5. Grid

Use a responsive grid.

Desktop direction:

wide page container

strong outer margins

12-column conceptual grid where useful

controlled content measure

Mobile:

simpler grid

generous side padding

no accidental horizontal scrolling

The grid should support composition, not constrain creativity.

6. Spacing

Use a consistent spacing scale.

Avoid arbitrary one-off values.

Large spacing should be used to establish sections and emotional pacing.

Do not compress sections simply to fit more content.

Whitespace is an intentional design element.

7. Typography

Typography is a primary brand instrument.

Use a deliberate pairing:

Display

An expressive contemporary display face for:

hero statements

release titles

major editorial moments

UI / Body

A highly readable grotesk or modern sans-serif for:

navigation

metadata

descriptions

buttons

utility information

Do not default to Inter/Poppins/Roboto without a design reason.

Typography should have:

responsive scale

controlled line length

intentional letter spacing

strong hierarchy

readable body text

Prefer fluid typography where appropriate:

clamp(...)

8. Color

The final palette should be derived from the artist identity and release artwork.

Do not lock the brand into generic "AI purple/blue."

Use semantic design tokens rather than component-specific colors.

Conceptual tokens:

--background
--foreground
--surface
--surface-elevated
--muted
--border
--accent
--accent-foreground

Color should establish hierarchy, not decorate every surface.

9. Shape Language

Favor:

restrained radius

strong edges where appropriate

typography-led components

intentional borders

Avoid:

every element being a rounded pill

excessive card containers

excessive soft shadows

UI that looks like a SaaS dashboard

Buttons may use stronger shape language when interaction requires it.

10. Imagery

Artwork is central.

Never distort artwork.

Use appropriate:

aspect ratios

object-fit behavior

responsive resolution

loading strategy

Artwork may be treated through:

crop

scale

framing

typography overlap

subtle motion

editorial placement

Do not add generic stock photography simply to fill space.

11. Hero Direction

The hero must establish the project immediately.

It should communicate:

Kayıp Serotonin

and:

Sınırları Aştın

The hero should contain a clear path to listening.

The visual should have a memorable composition rather than a generic centered headline + button layout.

Potential techniques:

oversized typography

artwork integration

asymmetric grid

editorial metadata

controlled entrance motion

Do not use all techniques at once.

12. Music UI

Music is the primary content.

The release experience should prioritize:

artwork

title

listening action

relevant release metadata

story/context where appropriate

Do not copy Spotify's UI.

The site should have its own visual language.

13. Navigation

Navigation should be:

obvious

lightweight

visually integrated

keyboard accessible

responsive

Avoid giant navigation systems.

Desktop and mobile navigation may use different compositions.

14. Motion System

Motion should be subtle and purposeful.

Entrance

Use:

opacity

translate

clip/reveal

stagger where justified

Hover

Use small:

position changes

opacity changes

scale changes

underline/indicator transitions

Scroll

Use sparingly.

Do not make scrolling difficult.

Reduced Motion

Always respect:

@media (prefers-reduced-motion: reduce)

15. Micro-interactions

Every interactive element should have a clear state:

default

hover

focus

active

disabled where applicable

Focus states must remain visible.

Do not rely only on color.

16. Responsive Art Direction

Mobile is its own composition.

On mobile:

typography may become more dominant

artwork may move above/below text

navigation may become a compact overlay/menu

decorative elements may disappear

spacing may compress intelligently

interactions must remain thumb-friendly

Do not simply shrink desktop values.

17. Accessibility

Design for:

keyboard users

screen readers

reduced motion

users with limited vision

touch users

Minimum expectations:

sufficient contrast

semantic headings

accessible labels

visible focus

meaningful alt text

touch-friendly targets

18. Anti-Patterns

Do not use these by default:

AI gradient background
floating blob
glassmorphism card
glowing border
random grain overlay
huge "SCROLL TO EXPLORE"
generic "Discover Our Story"
three identical cards
centered everything
infinite parallax
WebGL for decoration

These are not forbidden in every possible context, but they require a strong reason.

19. Design Review Questions

Before approving a visual implementation:

Does it feel like Kayıp Serotonin?

Could this exact page belong to 100 other artists?

Is the typography doing meaningful work?

Is whitespace intentional?

Is every decorative element justified?

Does mobile still feel designed?

Does the page feel memorable without being noisy?

Is motion helping or distracting?

Does the design age well?

Does it feel human-directed?

If the answer to #2 is yes, redesign.

20. Evolution

The design system should evolve with the music.

New releases may introduce:

different artwork

different accent treatment

new editorial modules

However, the underlying identity should remain recognizable.

The website should feel like one project, not a collection of unrelated microsites.