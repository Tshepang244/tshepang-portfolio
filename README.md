# Tshepang Oageng — Portfolio (V2)

A premium, dark-mode developer portfolio for an IT Service Desk Operator
transitioning into AI Engineering and Software Development. Built with
plain HTML5, CSS3, and vanilla JavaScript — no frameworks.

## Tech Stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox, glassmorphism)
- Vanilla JavaScript (IntersectionObserver for scroll-spy & reveals)
- Bootstrap Icons
- Devicon

## Project Structure

```
Portfolio_V2/
├── index.html
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/
│   │   ├── main.css            # reset, variables, typography, layout, utilities
│   │   ├── sidebar.css         # fixed sidebar navigation
│   │   ├── hero.css            # hero section
│   │   ├── about.css           # about section
│   │   ├── skills.css          # skills grid
│   │   ├── projects.css        # featured project cards
│   │   ├── experience.css      # timeline
│   │   ├── certifications.css  # certification cards
│   │   ├── contact.css         # contact section + form
│   │   ├── footer.css          # footer + back-to-top
│   │   └── responsive.css      # breakpoints
│   ├── js/
│   │   └── main.js
│   ├── img/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── background/
│   │   └── logos/
│   └── files/
│       └── Tshepang_Oageng_CV.pdf
```

## Sections

Home · About · Skills · Featured Projects · Experience · Certifications · Contact

## Setup

1. Drop your images into the matching `assets/img/` subfolders (see filenames
   referenced in `index.html`).
2. Add your CV as `assets/files/Tshepang_Oageng_CV.pdf`.
3. Open `index.html` in a browser — no build step required.

## Notes

- Fully responsive: desktop, laptop, tablet, mobile.
- Accessible: semantic landmarks, skip link, visible focus states,
  `prefers-reduced-motion` respected.
- Update social links, project repo/demo URLs, and contact form `action`
  attribute before deploying.
