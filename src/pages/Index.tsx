
import HeroSection from '../components/HeroSection';
import CoursesSection from '../components/CoursesSection';
import ModulesSection from '../components/ModulesSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hello from '@/components/Hello';
import TestTestimonial from './TestimonialData';
import HomeAchievements from '@/components/HomeAchievements';
import WhatsappPlugin from '@/components/WhatsappPlugin';

/**
 * @file /src/pages/Index.tsx
 * @summary Landing / Home page that composes the top-level sections of the site.
 *
 * @description
 * This file exports the Index page component which composes the primary layout for the
 * site's home/landing page. The page is a thin composition of focused presentational
 * components and site-level integrations:
 *
 * - Header: site navigation, brand/logo, user actions (login/signup).
 * - HeroSection: main marketing banner with primary call-to-action(s).
 * - Hello: short personalized greeting / introduction block.
 * - CoursesSection: overview and entry points for available courses (cards, filters).
 * - ModulesSection: detailed modules or syllabus overview for a selected course.
 * - TestTestimonial: testimonials or reviews carousel / grid with social proof.
 * - HomeAchievements: achievements / statistics counters (e.g. students, courses).
 * - Footer: site links, legal, contact, and micro-navigation.
 * - WhatsappPlugin: floating WhatsApp contact widget for live support.
 *
 * The Index page focuses on composition only — behaviour, state and data-loading
 * responsibilities live inside the child components, hooks, and services.
 *
 * @features
 * - Component composition: small, focused presentational components composed into a page.
 * - Responsive layout: components built to adapt from mobile to desktop (utility-first CSS / responsive classes).
 * - Accessibility basics: semantic HTML landmarks, accessible buttons/links, ARIA where appropriate.
 * - TypeScript typed components and props for safer maintenance.
 * - Lazy loading / code-splitting: route-level or component-level code-splitting recommended for heavy sections.
 * - Integrations: WhatsApp floating plugin for direct messaging and optional analytics.
 * - Reusable UI patterns: card lists, carousels, statistic counters, CTA banners.
 * - SEO-friendly structure: semantic headings and crawlable content; supports meta management at route level.
 * - Testing support: components structured for unit and integration tests (Jest/React Testing Library).
 * - Theming: CSS variables or theme provider for light/dark mode support.
 * - Internationalization (i18n) ready: text can be externalized to locale files.
 *
 * @usage
 * Import and use the Index page as the route's element in your routing configuration:
 *   import Index from 'src/pages/Index';
 *   <Route path="/" element={<Index/>} />
 *
 * @remarks
 * - Keep the Index component purely presentational. Fetching of courses, testimonials,
 *   achievements should be done in their respective components or via hooks (e.g. useCourses).
 * - Prefer memoization (React.memo / useMemo) for heavy lists to avoid unnecessary re-renders.
 * - Ensure third-party widgets (WhatsApp plugin) load asynchronously and are cleaned up on unmount.
 *
 * @components
 * - Header (src/components/Header)
 *   - Responsibilities: navigation, brand, top-level actions.
 *   - Props: (optional) currentUser, onSignIn, onSignOut, navItems.
 *
 * - HeroSection (src/components/HeroSection)
 *   - Responsibilities: headline, subheadline, primary CTA, hero image or background.
 *   - Features: animated entrance, responsive imagery.
 *
 * - Hello (src/components/Hello)
 *   - Responsibilities: personalized greeting or short intro blurb.
 *
 * - CoursesSection (src/components/CoursesSection)
 *   - Responsibilities: list/filter/sort course cards, links to course pages.
 *   - Features: pagination / infinite scroll, category filters, course card component.
 *
 * - ModulesSection (src/components/ModulesSection)
 *   - Responsibilities: list of modules or syllabus entries, module progress UI.
 *
 * - TestTestimonial (src/components/TestTestimonial)
 *   - Responsibilities: testimonials carousel or grid with author, rating, and quote.
 *
 * - HomeAchievements (src/components/HomeAchievements)
 *   - Responsibilities: animated counters and badges for site achievements/statistics.
 *
 * - Footer (src/components/Footer)
 *   - Responsibilities: footer navigation, legal links, contact info, social links.
 *
 * - WhatsappPlugin (src/components/WhatsappPlugin)
 *   - Responsibilities: floating chat widget that opens WhatsApp chat or deep-links to mobile.
 *   - Security: sanitize any injected content and lazily load vendor script.
 *
 * @project-file-structure
 * Root: /D:/VSH7 internship/SharmaJEE-Part2
 *
 * src/
 * ├─ assets/                     # images, svgs, fonts, icons
 * │  ├─ images/
 * │  └─ icons/
 * │
 * ├─ components/                 # reusable presentational components
 * │  ├─ Header/
 * │  │  ├─ Header.tsx
 * │  │  ├─ Header.module.css | .scss | .tsx (styles)
 * │  │  └─ index.ts
 * │  ├─ HeroSection/
 * │  │  ├─ HeroSection.tsx
 * │  │  └─ index.ts
 * │  ├─ Hello/
 * │  │  └─ Hello.tsx
 * │  ├─ CoursesSection/
 * │  │  ├─ CoursesSection.tsx
 * │  │  ├─ CourseCard.tsx
 * │  │  └─ index.ts
 * │  ├─ ModulesSection/
 * │  ├─ TestTestimonial/
 * │  ├─ HomeAchievements/
 * │  ├─ Footer/
 * │  └─ WhatsappPlugin/
 * │
 * ├─ pages/                      # route-level pages
 * │  ├─ Index.tsx                 <- this file (page composition)
 * │  ├─ Courses/
 * │  │  └─ [courseId].tsx
 * │  └─ NotFound.tsx
 * │
 * ├─ layouts/
 * │  └─ MainLayout.tsx
 * │
 * ├─ hooks/                      # custom hooks (data fetching, ui helpers)
 * │  ├─ useCourses.ts
 * │  ├─ useTestimonials.ts
 * │  └─ useWindowSize.ts
 * │
 * ├─ services/                   # API clients, integrations
 * │  ├─ apiClient.ts
 * │  ├─ coursesService.ts
 * │  └─ whatsappService.ts
 * │
 * ├─ store/                      # optional global state (context, redux, zustand)
 * │  └─ index.ts
 * │
 * ├─ utils/                      # pure utility functions
 * │  └─ formatters.ts
 * │
 * ├─ types/                      # shared TypeScript types and interfaces
 * │  └─ index.d.ts
 * │
 * ├─ styles/                     # global CSS / tailwind / theme
 * │  └─ globals.css
 * │
 * └─ tests/                      # unit / integration tests colocated or here
 *    ├─ components/
 *    └─ pages/
 *
 * public/
 * ├─ index.html
 * └─ favicon.ico
 *
 * scripts/
 * └─ build-scripts/
 *
 * .eslintrc.js
 * .prettierrc
 * package.json
 * tsconfig.json
 * jest.config.js
 *
 * @testing
 * - Unit tests for each presentational component using Jest + React Testing Library.
 * - Snapshot tests for stable UI regions like Header and Footer.
 * - Integration tests for composition pages and routing.
 *
 * @ci-cd
 * - Recommended: GitHub Actions workflow for lint/test/build and preview deployments.
 *
 * @notes
 * - Keep Index.tsx minimal: avoid data fetching or heavy logic inside the page file.
 * - Prefer colocated styles and tests for each component for maintainability.
 * - Document public component props with TSDoc in their own files for discoverability.
 *
 * @see src/pages/Index.tsx
 *
 * @author
 * Project contributors
 */
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Hello/>
      <CoursesSection />
      <ModulesSection />
      <TestTestimonial/>
      <HomeAchievements/>
      <Footer />
      <WhatsappPlugin/>
    </div>
  );
};

export default Index;
