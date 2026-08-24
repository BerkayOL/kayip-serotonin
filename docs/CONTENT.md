Kayıp Serotonin — Content Source of Truth

Purpose

This document defines factual information that may be used by the website.

AI agents must not invent facts.

If information is not confirmed here or supplied explicitly during development, treat it as unknown.

1. Artist

Name

Kayıp Serotonin

Project Type

Independent music project.

Current Positioning

The project explores contemporary music through an independent, digitally native approach.

The project may use AI-assisted production/vocals.

Do not make exaggerated claims about technology.

2. Current Release

Title

Sınırları Aştın

Type

Single.

Release Year



Exact Release Date

Use the confirmed distributor/platform metadata before publishing an exact date.

Do not infer or fabricate the date.

3. Streaming Platforms

The following URLs are confirmed and in production:

Spotify
https://open.spotify.com/intl-tr/track/6dbjnpu3QlEgg1WIWj059L?si=a3cc5c169ed84ef9

YouTube
https://www.youtube.com/watch?v=9SgmFspXhbM

YouTube Music
https://music.youtube.com/watch?v=9SgmFspXhbM&si=lFzbKMpwUdkVUak1

Apple Music
https://music.apple.com/tr/song/sınırları-aştın/6803368744

TIDAL
https://tidal.com/track/554229616/u

Deezer: Not available — excluded from platform list.

4. Social Platforms

The following social links are confirmed and active:

Instagram: https://www.instagram.com/kayipserotonin.music/
TikTok: https://www.tiktok.com/@kayipserotonin.music
YouTube: https://www.youtube.com/watch?v=9SgmFspXhbM
X: [CONFIRM: X/Twitter handle]

5. Current Statistics

Statistics are time-sensitive.

Do not hardcode a number as a permanent fact unless it is timestamped.

Known development context includes YouTube Music performance milestones.

Before publishing a statistic, verify:

platform

exact metric

number

date/time

source

Example:

YouTube Music
Metric: plays
Value: [confirmed value]
Checked: [YYYY-MM-DD]
Source: [official analytics/platform]

6. Social Impact / Donation Commitment

The project has discussed a commitment to donate:

50% of net artist revenue

for a defined campaign period.

The campaign period discussed is:

20 August 2026 – 20 February 2027

Important:

This must be represented accurately.

The exact beneficiary institution must be confirmed before publication.

Do not call it an official partnership unless there is a formal partnership.

Do not imply endorsement by the beneficiary.

Do not claim funds were donated before donation/reporting has actually occurred.

The calculation basis must be described accurately.

Any public copy should be reviewed before production.

7. Artist Story

STATUS: CONFIRMED

Members:
- Berkay Ay
- Halim Parlak

Biography (confirmed):
Kayıp Serotonin, Berkay Ay ve Halim Parlak tarafından kurulan bağımsız bir müzik projesidir.
Teknoloji ve duygu arasındaki çizgide müzik üretiyoruz — insanların aşk acılarını eserlere
dökmeye çalışan iki bireyiz. Duygusal bir iş ortaya koymak için çalışıyoruz.

Never fabricate:

origin stories

member biographies

childhood history

awards

press coverage

artistic influences

industry relationships

8. Credits

Credits should be displayed only when confirmed.

Potential fields:

vocals
production
composition
lyrics
mix
master
artwork

Do not infer credits from tools used during production.

9. Copywriting Rules

Kayıp Serotonin copy should be:

concise

emotionally intelligent

modern

confident

slightly mysterious where appropriate

never corporate

Avoid:

empty marketing language

exaggerated claims

fake urgency

generic startup language

fabricated social proof

Avoid phrases like:

revolutionary
world-class
industry-leading
game-changing
next-generation

unless they are genuinely justified.

10. Content Data Model

Release content should eventually be represented in typed data.

Example:

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

11. Verification Rule

Before publishing any factual claim, ask:

Is it confirmed?

Is it current?

Is there a source?

Could the wording imply something stronger than the evidence?

If uncertain, do not publish the claim.

12. Content Lifecycle

Content may move through:

Draft
↓
Confirmed
↓
Production
↓
Published
↓
Reviewed

Time-sensitive data should be reviewed periodically.

13. Placeholder Convention

Use obvious development placeholders.

Good:

[CONFIRM SPOTIFY URL]
[CONFIRM RELEASE DATE]
[CONFIRM BENEFICIARY]

Bad:

https://spotify.com/...

with a guessed value.

Never allow fake content to accidentally reach production.