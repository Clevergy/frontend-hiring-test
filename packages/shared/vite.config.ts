import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log({ command, mode });

  return {
    test: {
      globals: true,
      setupFiles: './setupTests.ts',
      environment: 'jsdom',
      dangerouslyIgnoreUnhandledErrors: true,
      coverage: {
        reporter: ['text', 'lcov'],
      },
    },
  };
});
