# Setting Up Path Aliases in TypeScript

To simplify imports and avoid long relative paths, we can configure TypeScript to use path aliases.
This guide explains how to set up an alias (`@/`) that points to the `src/` directory in the TypeScript project.

## Modify `tsconfig.json`

* Open `tsconfig.json` file.
* Add the `paths` configuration to the `compilerOptions` section. This will map the `@/*` alias to your `src/*` directory.

Example:

```bash
"compilerOptions": {
  "baseUrl": "./",                  // Base directory for resolving modules
  "paths": {
    "@/*": ["src/*"]                // Alias `@` to point to the `src/` directory
  }
}
```

## Using the `@` Alias in the Code

After configuring the `tsconfig.json` file, we can now use the `@` alias to import modules from the `src/` directory.
This makes the imports cleaner and easier to manage.

Example:

```typescript
import { MyComponent } from '@/components/my-component';
```

> `@/components/MyComponent` is equivalent to `src/components/MyComponent`.

## (Optional) Configure Vite for Production

If `Vite` is used as build tool, it needs to be configured to recognize the alias in production builds. Add the following
configuration to `vite.config.ts`:

```typescript
import type { UserConfig } from 'vite'
import path from 'path'
import { one } from 'one/vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Aliases `@` to `src/`
    },
  },
} satisfies UserConfig
```
