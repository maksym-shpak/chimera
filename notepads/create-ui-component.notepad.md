# Create UI Component

This notepad is used to scaffold a new UI component package under `packages/ui`.

## Inputs

- Component name: `Card`
- Package name: `@chimera/ui.card`
- Folder: `packages/ui/card`

---

## Checklist

- [ ] Create folder `packages/ui/card`
- [ ] Generate `package.json`
- [ ] Create `tsconfig.json` extending root config
- [ ] Add `src/index.ts` and `src/Card.tsx`
- [ ] Add test: `src/Card.test.tsx`
- [ ] Add Storybook: `apps/storybook/stories/Card.stories.tsx`
- [ ] Add `changeset`
- [ ] Run `pnpm install` to update lockfile

---

## Prompts

### 📦 package.json

```
Generate a minimal package.json for @chimera/ui.card:
- version: 0.1.0
- private: false
- publishConfig pointing to Cloudsmith
- dependencies: react, react-dom
```

### 🛠 tsconfig

```
Create a tsconfig.json that extends ../../../tsconfig.json and sets baseUrl to ./src
```

### 🧱 Component

```
Create Card.tsx. It should be a React component that accepts children, className and other div props. Styled with Tailwind. Use forwardRef.
```

### 📖 Storybook

```
Create a story for Card in apps/storybook/stories/Card.stories.tsx. Show default usage with some text.
```

---

## Notes

- Use `const` + arrow functions
- No JSDoc, no comments
- Respect `.cursorrules`
- Use Tailwind + shadcn style