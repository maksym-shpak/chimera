# 🌟 Chimera

[![Visual Testing with Chromatic](https://img.shields.io/badge/Chromatic-tested-brightgreen?logo=storybook)](https://www.chromatic.com/library?appId=68049c61c290f0ca3eb5051c&branch=main)

Chimera is a real-life enterprise architecture powered by reusable components, a data layer, and real-time friendly UI. It brings together modern frontend practices, visual regression testing, and composable design systems in one delightful monorepo.

---

## 🧱 Modular Design

Chimera follows a component-driven architecture:

- **UI Components**: atomic, styled with Tailwind + shadcn
- **Widgets**: smart containers with local state and logic
- **Data Layer**: hardcoded hooks for POC, ready for live data
- **Layouts**: responsive templates that compose widgets

All elements are fully typed, testable in isolation, and published as separate npm packages.

---

## 📦 Packages Overview

```txt
packages/
├── ui/             # Atomic presentational components
│   ├── card
│   ├── stat-card
│   ├── avatar
│   ├── icon
│   └── chart-overview
├── widgets/        # Smart stateful widgets
│   ├── stat-overview
│   ├── chart-overview
│   └── sales
├── data/           # Data providers
│   ├── use-stat-overview
│   ├── use-chart-overview
│   └── use-sales
├── layout/         # Layouts and templates
│   └── dashboard
└── styles/         # Tailwind CSS base styles and config
```

---

## ⚙️ Tech Stack

- 🧩 **React 19** – modern hooks and server actions ready
- 🌈 **Tailwind CSS** – utility-first styling with theme support
- 🧪 **Storybook 8** – with Chromatic for visual regression
- 📦 **pnpm workspaces** – for local dev and releases
- 🚀 **Changesets + GitHub Actions** – automated npm publishing

---

## ✅ Visual Regression

Every component and widget has an isolated Storybook story. We use **Chromatic** to:

- Detect visual regressions in CI
- Preview design changes before merging
- Automate UI approvals

Run regression in less than one minute on every commit.

🔗 [Live Chromatic Library](https://www.chromatic.com/library?appId=68049c61c290f0ca3eb5051c&branch=main)  
🌍 [Public Storybook Preview](https://main--68049c61c290f0ca3eb5051c.chromatic.com/)

---

## 🛠 Usage Example

This architecture is ideal for:

- Whitelabel apps
- Fintech modular apps
- Analytics interfaces
- Live data visualizations

This is a demo of a real-life architecture for a white-label solution.

---

## 🧪 Try It Locally

```bash
pnpm install
pnpm run storybook
```

You’ll see a live preview of widgets, charts, and full layouts.

---

## 🤝 Credits

Built with ❤️ by a frontend architect obsessed with fast UI, clean architecture, and great developer UX. If you're building design systems or real-time dashboards — let's talk!

