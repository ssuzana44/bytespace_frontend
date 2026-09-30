# ByteSpace

A frontend implementation of the [ByteSpace design](https://www.figma.com/design/UcMEH5VGdrGsse5YpP34Kl/ByteSpace-New-Check-website--Copy-?node-id=0-1&t=lHJLq79kY7sCpwz7-1) in Figma, built for the ByteSpace website build assessment.

## Pages

- `index.html` — landing page 
- `login.html` — sign in 
- `register.html` — create account 

## Stack

- HTML + Tailwind CSS (via CDN)
- No build step — static files, open directly or serve as-is

## Notes for reviewer

- Category tab filtering and the search bar are not wired up to real data/routing
- Sign In / Join Us / social buttons are visual only, no auth logic
- Built and checked against the Figma design at common desktop breakpoints (1440px, 1025–1439px, mobile <1024px)