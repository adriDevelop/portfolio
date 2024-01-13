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
  site: 'https://adridevelop.github.io',
  base: 'astro-landing-delete',
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});