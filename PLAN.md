# Website Plan

## The Color Palette: "Nord Blue-Grey & Purple"

The Nord color scheme is famous for its cool, muted tones. You can use the "Dark" Nord palette as your base and inject your favorite purple as the primary accent.

    Background (Deep Dark): #2E3440 (The classic Nord background).
    Secondary Background (Card/Panel): #3B4252 (A slightly lighter shade for code blocks or sidebars).
    Text (Main): #D8DEE9 (Off-white, easy on the eyes).
    The "Purple Splash": #B48EAD (The Nord Purple).
        Use this for: Active links, hover states, code syntax highlighting for variables, and primary buttons.
    Secondary Accent (Tech Blue): #88C0D0 (Nord Blue) for technical diagrams or secondary actions.

## Typography Strategy

To get that "Clean Minimalist" feel while keeping the "Backend" vibe, mix two font families:

    Headings & UI Elements: Monospace (e.g., JetBrains Mono or Fira Code).
        Why: It screams "code editor" and reinforces the blueprint aesthetic.
    Body Text: Sans-Serif (e.g., Inter or Open Sans).
        Why: It improves readability for long-form technical explanations and keeps the design modern/minimalist.

## Visual Elements: The Blueprint Look

Since you want to emphasize clean lines, use geometric shapes and borders instead of standard box-shadows.

    The Grid Background: Add a very subtle CSS grid pattern behind the main content area. It shouldn't be distracting, but it should be there.
    Corner Brackets: Instead of standard square borders, use double-line corners (like ┌ ┐ └ ┘) for your code blocks or cards. It looks very architectural.
    Thin Lines: Use 1px borders with the Nord blue-grey color to separate sections.
    Technical Markers: Use icons like [x], [ ], or ::: (colons) for checklists or code blocks.

## Proposed Content Structure

Given the goal of building a short portfolio and a blog for occasional musings, here is an Astro-centric content structure:

### 1. 🏠 Home (`/`)
- A brief, punchy introduction (who you are, what you do).
- **Featured Projects**: A 2-3 item grid highlighting your best work.
- **Recent Musings**: A short list of the 2-3 latest blog posts.
- **Links**: Quick jumps to GitHub, LinkedIn, or contact info.

### 2. 👨‍💻 About (`/about`)
- A deeper dive into your background, tech stack, and experience.
- Your philosophy on building software.
- A quick link to your resume.

### 3. 🚀 Portfolio (`/projects`)
- Organized display of software projects.
- Powered by Astro Content Collections (e.g., `src/content/projects/`).
- Each entry includes: title, summary, tech stack tags, and links to the source code or live demo.

### 4. 📝 Blog ("Musings") (`/blog`)
- A minimalist reverse-chronological feed of articles.
- Powered by Astro Content Collections (`src/content/blog/`).
- Markdown/MDX based for low-friction writing.
- Optional tags to categorize posts (e.g., `#tech`, `#design`, `#life`).

### 5. Astro Technical Layout
- `src/pages/`: Core file-based routing (`index.astro`, `about.astro`, `projects/index.astro`, `blog/index.astro`).
- `src/content/`: Type-safe markdown collections holding the actual project and blog data.
- `src/components/`: Reusable UI pieces (Header, Footer, CodeBlock Layout, BaseCard).
- `src/layouts/`: Base wrappers ensuring the consistent Nord theming, grid backgrounds, and "blueprint" aesthetic across all pages.