# SIDHANTHI GURU YOGA ACADEMY — Complete Site Build Guide

> This is the single source of truth for building the website. It merges the **design direction** (inspired by `pilatestemplate.framer.ai`) with the **actual content** for Sidhanthi Guru Yoga Academy. **No booking/appointment system is included** — all "Book Now" CTAs are replaced with inquiry-oriented actions ("Contact Us", "Learn More").

---

## 1. DESIGN SYSTEM

### 1.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#16802b` | Buttons, icons, active states, links |
| `--color-primary-hover` | `#126e24` | Button/link hover state |
| `--color-text` | `#192119` | All body text, headings |
| `--color-bg` | `#ffffff` | Page background |
| `--color-surface` | `#f5f5f5` | Card backgrounds, alternating sections |
| `--color-border` | `#e0e0e0` | Subtle dividers |
| `--color-text-muted` | `#5a6b5a` | Subtitles, secondary text |
| `--color-white` | `#ffffff` | Text on dark/green backgrounds |

### 1.2 Typography

| Role | Font | Weights | Usage |
|---|---|---|---|
| Primary | `Manrope` (Google Fonts) | 400, 500, 600, 700 | Body text, subheadings, nav, buttons |
| Accent | `Playfair Display` (Google Fonts) | 400 italic, 700 | Hero emphasis words, section taglines |

**Font Sizes (Desktop → Mobile):**
- Hero H1: `clamp(2.5rem, 5vw, 4.5rem)`
- Section H2: `clamp(1.75rem, 3vw, 2.75rem)`
- H3 / Card Title: `1.25rem`
- Body: `1rem` (16px)
- Small/Caption: `0.875rem`
- Line-height body: `1.7` | Headings: `1.2`

### 1.3 Spacing & Layout

| Token | Value |
|---|---|
| `--radius-sm` | `12px` |
| `--radius-md` | `24px` |
| `--radius-lg` | `32px` |
| `--max-width` | `1200px` |
| `--section-padding` | `80px 0` (desktop), `48px 0` (mobile) |
| `--gap-cards` | `24px` |

### 1.4 Animation Language

| Animation | Technique | Details |
|---|---|---|
| **Scroll Reveal** | `IntersectionObserver` + CSS | Fade-in + `translateY(30px → 0)` on viewport entry, `0.6s` ease-out |
| **Button Hover** | CSS transition | `scale(1.03)`, `opacity 0.9`, `0.2s` ease |
| **Card Hover** | CSS transition | `translateY(-6px)`, `box-shadow` increase, `0.3s` ease |
| **FAQ Accordion** | JS + CSS | `max-height` transition, rotating `+` → `−` icon, `0.35s` ease |
| **Nav Scroll** | CSS | Glassmorphic `backdrop-filter: blur(12px)` on scroll |

### 1.5 Image Style

- All content images: `border-radius: var(--radius-lg)` (32px)
- Aspect ratios: Hero `16:9`, Cards `4:3`, Team portraits `1:1`
- Generate placeholder images for: hero, yoga poses, founder, team, studio interior

---

## 2. SITE MAP & NAVIGATION

### 2.1 Pages

```
Home  ─  About  ─  Services  ─  Blog  ─  Contact
```

**5 pages**, each as a separate HTML file or SPA route.

### 2.2 Navigation Bar

- **Layout**: Sticky top, horizontal. Logo left, links right.
- **Links**: `Home` | `About` | `Services` | `Blog` | `Contact`
- **CTA Button**: `"Contact Us"` (green, links to Contact page) — **NO "Book Now"**
- **Mobile**: Hamburger menu with slide-in drawer
- **Scroll behavior**: Glassmorphic background on scroll (`backdrop-filter: blur`)

### 2.3 Footer (All Pages)

| Column 1 | Column 2 | Column 3 |
|---|---|---|
| **Sidhanthi Guru Yoga Academy** | **Quick Links** | **Connect** |
| Est. 2008 · Reg. No. 1597 | Home | Email: sidhanthiguru@gmail.com |
| Chennai, Tamil Nadu | About | Phone: +91 9445184522 |
| | Services | Social: FB · IG · LinkedIn · YT |
| | Blog | |
| | Contact | |

**Copyright**: `© 2025 Sidhanthi Guru Yoga Academy. All rights reserved.`

---

## 3. PAGE-BY-PAGE BLUEPRINT

---

### PAGE 1: HOME

#### Section 1.1 — Hero

| Element | Content |
|---|---|
| **H1** | `Transform Your Life Through the Ancient` **`Wisdom of Yoga`** (last 3 words in Playfair Display italic) |
| **Subtitle** | `Unlock Your True Potential — 17 Years of Dedicated Yoga Excellence in Chennai` |
| **Body** | Welcome to Sidhanthi Guru Yoga Academy, where ancient yogic wisdom meets modern wellness practices. Since 2008, we have been guiding individuals toward holistic transformation through authentic yoga practice. Our mission is simple yet powerful: **World Transformation through Self Transformation**. |
| **Image grid** | 3-column grid of yoga images below the text (same layout as Pilates reference) |
| **Stat badge** | `17+ Years · 1000+ Students · Reg. No. 1597` |
| **Primary CTA** | `"Explore Our Programs"` → links to Services page |
| **Secondary CTA** | `"Contact Us"` → links to Contact page |

**Design**: Full-width, centered text. Large heading. Images in a 3-column rounded grid below. Green CTA button.

---

#### Section 1.2 — Service Highlights

**Section Heading**: `Discover Our Transformative Yoga Programs`
**Section Subtext**: `Discover the transformative power of yoga through our comprehensive programs designed for every level of practitioner.`

**4-Card Grid** (2×2 on tablet, 4-column on desktop, stacked on mobile):

| Card | Title | Description | CTA |
|---|---|---|---|
| 1 | Hatha Yoga Classes | Traditional foundational yoga focusing on physical postures, breathing techniques, and meditation. Perfect for beginners. | "Learn More" → Services |
| 2 | Vinyasa Flow Classes | Dynamic, flowing sequences linking breath with movement. Ideal for building strength and endurance. | "Learn More" → Services |
| 3 | Meditation & Mindfulness | Specialized sessions focused on meditation, pranayama, and mindfulness practices. | "Learn More" → Services |
| 4 | Corporate Yoga & Wellness | Customized yoga sessions for corporate teams and organizations. Boost employee wellness. | "Learn More" → Services |

**Card Design**: Rounded image top, title, short description, key benefits (4 bullet points), green "Learn More" link/button. Card hover lift effect.

---

#### Section 1.3 — Trust Building / Why Choose Us

**Section Heading**: `Why Choose Sidhanthi Guru Yoga Academy?`

**4-Column Stats Row** (icon + number + label):

| Stat | Value |
|---|---|
| 🎯 Years of Excellence | **17+** · Established in 2008 |
| 📜 Government Registered | **Reg. No. 1597** · Official credentials |
| 👩‍⚕️ Experienced Leadership | **Dr. D. Uma Maheswari** · Founder & Visionary |
| 🧘 Holistic Approach | **Physical, Mental & Spiritual** · Complete wellness |

**Design**: Clean 4-column grid with subtle icons. `#f5f5f5` background section. Numbers animated on scroll (count-up optional).

---

#### Section 1.4 — Testimonials (Optional)

**Section Heading**: `What Our Students Say`

**Design**: Horizontal scrolling marquee (same as reference site reviews section). Cards with quote, name, and star rating.

> *Placeholder*: Content to be provided by client. Include 3-5 quotes.

---

### PAGE 2: ABOUT

#### Section 2.1 — Page Header

| Element | Content |
|---|---|
| **H1** | `About Sidhanthi Guru Yoga Academy` |
| **Subtitle** | `17 Years of Authentic Yoga Education and Transformation` |

---

#### Section 2.2 — Who We Are

**Section Heading**: `Who We Are`

**Body Copy** (2-column layout: text left, image right):

> Sidhanthi Guru Yoga Academy is a registered yoga institution established in 2008 with a mission to transform lives through the authentic practice of yoga. Located in Chennai, we have spent the last 17 years creating a sanctuary where individuals from all walks of life can discover the profound benefits of yoga practice.
>
> Our Academy operates on the principle that yoga is far more than physical exercise—it is a comprehensive system for personal transformation. We offer a diverse range of programs designed to meet individuals at their current level and guide them toward holistic wellness. From traditional Hatha Yoga to dynamic Vinyasa Flow, from meditative practices to corporate wellness programs, our courses address the physical, mental, emotional, and spiritual dimensions of human well-being.
>
> Under the visionary guidance of our founder Dr. D. Uma Maheswari, our Academy has helped thousands of practitioners unlock their potential and live more fulfilling lives.

**Image**: Studio/class photo (right side, rounded corners).

---

#### Section 2.3 — Vision, Mission & Values

**Section Heading**: `Our Core Purpose`

**Vision Card**:
> Yoga as a tool for personal transformation, helping individuals unlock their potential and live more fulfilling lives. A core vision is to promote holistic health, encompassing physical, mental, and emotional well-being through the practice of yoga.

**Mission Card**:
> **World Transformation through Self Transformation**

**5 Core Values** (Icon card grid):

| Value | Short Description |
|---|---|
| **Authenticity** | We honor the traditional wisdom of yoga while making it accessible for modern practitioners. |
| **Inclusivity** | Yoga is for everyone. We welcome practitioners of all ages, abilities, and backgrounds. |
| **Excellence** | Highest standards in teaching, training, and student care. |
| **Compassion** | A supportive community where every individual's journey is valued. |
| **Holistic Wellness** | Complete well-being of body, mind, spirit, and emotions. |

**Design**: Alternating `#f5f5f5` background. Icon + title + description. Hover reveal animation.

---

#### Section 2.4 — Meet Our Founder

**Layout**: Large photo on left, bio on right.

**Name**: `Dr. D. Uma Maheswari`

**Bio**:
> Dr. D. Uma Maheswari is the visionary founder of Sidhanthi Guru Yoga Academy. With a deep commitment to promoting yoga as a vehicle for personal and social transformation, Dr. Uma Maheswari has dedicated 17 years to building an institution that combines ancient yogic wisdom with contemporary wellness practices.
>
> Her leadership has guided the Academy to become a trusted center for yoga education in Chennai, known for its authentic teachings, professional instruction, and student-centered approach.

**Instructor Team**: Placeholder section for additional instructor cards (content to be provided by client with names, qualifications, headshots).

---

#### Section 2.5 — Why Students Choose Us

**5-Point Differentiator List** (icon + heading + detail):

1. **Authentic Tradition with Modern Application** — Time-honored yogic wisdom with contemporary wellness understanding.
2. **Experienced, Qualified Instructors** — Certified with years of dedicated practice.
3. **Community-Focused Approach** — A supportive community where transformation is the goal.
4. **Comprehensive Programs** — From beginner to advanced, corporate to personal.
5. **17 Years of Success** — Longevity that speaks to commitment and real results.

---

### PAGE 3: SERVICES

#### Section 3.1 — Page Header

| Element | Content |
|---|---|
| **H1** | `Our Yoga Programs` |
| **Subtitle** | `Discover Your Path to Transformation` |
| **Body** | At Sidhanthi Guru Yoga Academy, we offer a diverse range of yoga programs tailored to meet you at your current level and guide you toward your wellness goals. |

---

#### Section 3.2 — Program Cards (4 Programs)

Each program gets a **full-width expandable section** (or anchor-linked card) with the following structure:

---

##### PROGRAM 1: Hatha Yoga for All Levels

| Field | Content |
|---|---|
| **Level** | Beginner to Intermediate |
| **Description** | Hatha Yoga is the foundation of all yoga practices. This program focuses on traditional yoga postures (asanas), breathing techniques (pranayama), and relaxation. Classes are structured to build strength, flexibility, and balance while preparing the body and mind for deeper practice. |
| **What You'll Learn** | Proper alignment · Breathing techniques · Meditation practices · Modifications · Mind-body connection |
| **Key Benefits** | Flexibility & strength · Improved posture · Mental clarity · Stress relief · Better sleep · Injury prevention |
| **Prerequisites** | None — open to all levels |
| **What to Bring** | Yoga mat (provided if needed), comfortable clothing, water bottle |
| **CTA** | `"Contact Us to Enroll"` → Contact page |

---

##### PROGRAM 2: Vinyasa Flow — Dynamic Practice

| Field | Content |
|---|---|
| **Level** | Intermediate to Advanced |
| **Description** | Vinyasa Flow is a dynamic, flowing style of yoga where movement is synchronized with breath. Postures are linked together in sequences that create rhythm, movement, and heat in the body. |
| **What You'll Learn** | Breath-synchronized movement · Flow choreography · Advanced postures · Internal heat building · Moving meditation |
| **Key Benefits** | Cardiovascular fitness · Calorie burning · Muscle tone · Stress reduction · Improved breathing · Enhanced balance |
| **Prerequisites** | Some yoga experience recommended |
| **What to Bring** | Yoga mat, comfortable clothing, water bottle |
| **CTA** | `"Contact Us to Enroll"` → Contact page |

---

##### PROGRAM 3: Meditation & Mindfulness

| Field | Content |
|---|---|
| **Level** | All Levels |
| **Description** | Specialized sessions designed to help you develop a regular meditation practice and deepen your mental resilience. Teaches various meditation techniques, pranayama (breathing practices), and mindfulness strategies. |
| **What You'll Learn** | Multiple meditation techniques · Pranayama · Mindfulness for daily life · Building personal practice · Stress management |
| **Key Benefits** | Reduced anxiety · Improved focus · Emotional balance · Self-awareness · Spiritual growth · Better sleep · Life satisfaction |
| **Prerequisites** | None — all levels welcome |
| **What to Bring** | Comfortable cushion or mat, journal (optional) |
| **CTA** | `"Contact Us to Join"` → Contact page |

---

##### PROGRAM 4: Corporate Yoga & Wellness

| Field | Content |
|---|---|
| **Level** | All Levels (Customized) |
| **Format** | On-Site, Online, or Hybrid |
| **Description** | Specialized programs designed to bring the benefits of yoga directly to your workplace. Customized wellness initiatives that reduce stress, improve employee health, enhance productivity, and build team cohesion. |
| **Program Options** | **On-Site** (at your office) · **Online** (for remote teams) · **Hybrid** (combination) |
| **Key Benefits** | Reduced workplace stress · Improved employee health · Increased productivity · Better team morale · Lower absenteeism · Better retention |
| **Customization** | Custom duration, frequency, focus areas, progress tracking, wellness reporting |
| **CTA** | `"Request a Consultation"` → Contact page |

---

#### Section 3.3 — FAQ Accordion

**Section Heading**: `Frequently Asked Questions`

**8 FAQ Items** (expand/collapse with `+`/`−` icon):

| # | Question | Answer (summarized) |
|---|---|---|
| 1 | I'm a complete beginner. Can I start? | Absolutely! Yoga is for everyone. Our Hatha classes are designed for beginners. |
| 2 | What should I wear and bring? | Comfortable, breathable clothing. Bring a yoga mat, small towel, and water bottle. |
| 3 | How often should I practice? | 2-3 classes per week yields significant benefits. Consistency over frequency. |
| 4 | Can I practice with injuries? | Yes, but inform your instructor. We provide modifications. Consult your doctor for serious conditions. |
| 5 | What makes your programs different? | 17 years experience, authentic tradition, qualified instructors, supportive community. |
| 6 | Do I need to be flexible? | No! Flexibility is a result of yoga, not a prerequisite. |
| 7 | What's the difference between Hatha and Vinyasa? | Hatha is slower, posture-focused. Vinyasa is dynamic, flowing, more vigorous. |
| 8 | What if I've never meditated? | Everyone starts as a beginner. We teach step-by-step from simple techniques. |

**Design**: Same styling as Pilates reference — clean accordion with smooth height transition, rotating icon.

---

### PAGE 4: BLOG

#### Section 4.1 — Page Header

| Element | Content |
|---|---|
| **H1** | `Sidhanthi Guru Yoga Academy Blog` |
| **Subtitle** | `Deepen Your Knowledge, Transform Your Life` |
| **Body** | A resource for practitioners and those curious about starting their yoga journey. Insights about yoga practice, meditation techniques, wellness tips, and philosophical foundations of yoga. |

---

#### Section 4.2 — Blog Category Filter Bar

Horizontal tag/filter bar:

`All` | `Yoga Practice Tips` | `Meditation & Mindfulness` | `Wellness & Health` | `Yoga Philosophy` | `Student Stories` | `Academy News`

---

#### Section 4.3 — Blog Post Grid

**Layout**: 3-column card grid (2 on tablet, 1 on mobile).

**Card Structure**:
- Featured image (top, rounded)
- Category badge (colored tag)
- Post title (H3)
- Date + Author
- Excerpt (2-3 lines)
- `"Read More →"` link

**Sample Posts** (placeholders, content to be written by client):

| Post | Category | Title |
|---|---|---|
| 1 | Yoga Practice Tips | Getting Started With Yoga — A Beginner's Guide |
| 2 | Meditation & Mindfulness | The Science of Meditation — Transforming Your Mind |
| 3 | Wellness & Health | Yoga for Stress Relief — Finding Your Inner Peace |

Each post page template includes: title, date, author, category, featured image, content body with subheadings, related posts section.

---

### PAGE 5: CONTACT

#### Section 5.1 — Page Header

| Element | Content |
|---|---|
| **H1** | `Contact Us` |
| **Subtitle** | `We'd Love to Hear From You` |
| **Body** | Whether you have questions about our programs, want to learn more about our Academy, or simply wish to connect — please don't hesitate to reach out. |

---

#### Section 5.2 — Two-Column Layout

**Left Column: Contact Form**

| Field | Type | Required |
|---|---|---|
| Full Name | Text input | ✅ |
| Email Address | Email input (with validation) | ✅ |
| Phone Number | Phone input | ❌ |
| Subject | Dropdown (General Inquiry · Class Info · Pricing · Corporate · Events · Other) | ✅ |
| Message | Textarea (multi-line) | ❌ |
| **Submit** | `"Send Message"` button (green) | — |

**Form behavior**: Client-side validation, success toast on submission, error messages inline.

**Right Column: Business Information**

| Info | Content |
|---|---|
| **Email** | sidhanthiguru@gmail.com |
| **Phone** | +91 9445184522 |
| **Address** | No: 3-314, GEMINI MAGNOLIA, POLACHERY, CHENNAI, TAMIL NADU 600127, INDIA |
| **Hours** | *(to be provided)* |
| **Response Time** | We typically respond within 24 hours on business days. |

---

#### Section 5.3 — Map

**Embedded Google Maps** (or placeholder image) showing the academy location in POLACHERY, CHENNAI.

---

#### Section 5.4 — Social Media Links

Icons with links to:
- Facebook *(URL to be provided)*
- Instagram *(handle to be provided)*
- LinkedIn *(URL to be provided)*
- YouTube *(URL to be provided)*
- WhatsApp: +91 9445184522

---

## 4. TECHNICAL STACK

| Layer | Tool | Notes |
|---|---|---|
| **Build** | Vite | React template (`npm create vite@latest -- --template react`) |
| **Framework** | React 18+ | Functional components with hooks |
| **Routing** | React Router v6 | `<BrowserRouter>` with 5 page routes |
| **Styling** | Vanilla CSS + CSS Modules | CSS custom properties for design tokens, no Tailwind |
| **Animations** | CSS + `IntersectionObserver` | Custom `useScrollReveal` hook |
| **Fonts** | Google Fonts | `Manrope` + `Playfair Display` via `@import` in `index.css` |
| **Images** | Generated | `generate_image` tool for placeholders; client provides real photos later |

---

## 5. FILE STRUCTURE

```
Yoga/
├── index.html                      # Vite entry HTML
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                    # React entry point (ReactDOM.createRoot)
    ├── App.jsx                     # Router setup (<BrowserRouter>)
    ├── index.css                   # Global styles + design system tokens
    │
    ├── components/
    │   ├── Navbar/
    │   │   ├── Navbar.jsx
    │   │   └── Navbar.css
    │   ├── Footer/
    │   │   ├── Footer.jsx
    │   │   └── Footer.css
    │   ├── Hero/
    │   │   ├── Hero.jsx
    │   │   └── Hero.css
    │   ├── ServiceCard/
    │   │   ├── ServiceCard.jsx
    │   │   └── ServiceCard.css
    │   ├── FaqAccordion/
    │   │   ├── FaqAccordion.jsx
    │   │   └── FaqAccordion.css
    │   ├── BlogCard/
    │   │   ├── BlogCard.jsx
    │   │   └── BlogCard.css
    │   ├── ContactForm/
    │   │   ├── ContactForm.jsx
    │   │   └── ContactForm.css
    │   ├── StatsRow/
    │   │   ├── StatsRow.jsx
    │   │   └── StatsRow.css
    │   ├── TestimonialMarquee/
    │   │   ├── TestimonialMarquee.jsx
    │   │   └── TestimonialMarquee.css
    │   └── ScrollReveal/
    │       └── ScrollReveal.jsx    # Wrapper using IntersectionObserver
    │
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── AboutPage.jsx
    │   ├── ServicesPage.jsx
    │   ├── BlogPage.jsx
    │   └── ContactPage.jsx
    │
    ├── hooks/
    │   └── useScrollReveal.js      # Custom hook for scroll animations
    │
    ├── data/
    │   ├── services.js              # Program data (titles, descriptions, benefits)
    │   ├── faq.js                   # FAQ question/answer pairs
    │   ├── values.js                # Core values data
    │   └── blog.js                  # Blog post metadata
    │
    └── assets/
        ├── images/
        │   ├── hero-1.webp
        │   ├── hero-2.webp
        │   ├── hero-3.webp
        │   ├── founder.webp
        │   ├── hatha.webp
        │   ├── vinyasa.webp
        │   ├── meditation.webp
        │   ├── corporate.webp
        │   ├── studio.webp
        │   └── blog-*.webp
        └── icons/
            └── (SVG icons for values, stats, social media)
```

---

## 6. RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Layout Changes |
|---|---|---|
| **Mobile** | `< 768px` | Single column. Hamburger nav. Stacked cards. Full-width form. |
| **Tablet** | `768px – 1024px` | 2-column grids. Side nav or compact links. |
| **Desktop** | `> 1024px` | Full layout. 3-4 column grids. Sticky nav. Max-width `1200px` centered. |

---

## 7. FEATURES EXPLICITLY EXCLUDED

> [!IMPORTANT]
> The following features are **NOT** included in this build:

- ❌ **Booking/appointment system** — No calendar, time-slot picker, or "Book Now" buttons
- ❌ **User authentication** — No login/signup
- ❌ **Payment processing** — No pricing checkout
- ❌ **Newsletter signup** — Can be added later
- ❌ **Blog CMS backend** — Blog posts are static HTML; CMS can be added later

All program CTAs link to the **Contact page** instead.

---

## 8. SEO CHECKLIST (Per Page)

- [ ] Unique `<title>` tag (50-60 chars)
- [ ] `<meta name="description">` (150-160 chars)
- [ ] Single `<h1>` per page
- [ ] Proper heading hierarchy (`h1 > h2 > h3`)
- [ ] All images have `alt` text
- [ ] Semantic HTML5 elements
- [ ] Open Graph meta tags for social sharing
- [ ] Fast page load (< 3s)
- [ ] Mobile-friendly responsive design

---

*Document Version: 1.0 · Created: March 12, 2026 · For: Sidhanthi Guru Yoga Academy Website Build*
