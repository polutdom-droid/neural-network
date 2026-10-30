// Gather all project source files via Vite raw glob in a dedicated module
// so that src/utils/slideExporter.ts is also included in the glob results.
export const PROJECT_RAW_FILES = import.meta.glob(
  [
    '/package.json',
    '/vercel.json',
    '/index.html',
    '/vite.config.ts',
    '/tsconfig.json',
    '/metadata.json',
    '/src/**/*.ts',
    '/src/**/*.tsx',
    '/src/**/*.css'
  ],
  { query: '?raw', import: 'default', eager: true }
) as Record<string, string>;
