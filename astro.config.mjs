import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), tailwind()],
  plugins: [
    // ... otras configuraciones de plugins ...
    '@astrojs/plugin-typescript', // Si estás usando TypeScript
  ],
});