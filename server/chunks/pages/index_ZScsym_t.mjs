/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_NmhEZf1_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './comienzos_jT2ZY6pF.mjs';
import $$Presentacion from './presentacion_X4ZBnCKX.mjs';
/* empty css                          */

const $$Astro$1 = createAstro("https://adridevelop.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-black-800"> <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> <div class="relative flex h-16 items-center justify-between"> <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"></div> <div class="flex flex-1 items-start justify-right sm:items-stretch sm:justify-start"> <a href="/" class="text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Adrian´s Portfolio</a> <div class="flex flex-1 sm:items-stretch sm:justify-end"> <a href="#1" class="text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Sobre mí</a> <a href="#2" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">¿Como comencé?</a> <a href="#3" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Proyectos</a> <a href="#4" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contáctame</a> </div> </div> </div> </div> </nav>`;
}, "/Users/adrianvelascocarrasco/Documents/portfolioAstro/portfolioAstro/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://adridevelop.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Adrian\xB4s Portfolio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Presentacion", $$Presentacion, { "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "/Users/adrianvelascocarrasco/Documents/portfolioAstro/portfolioAstro/src/pages/index.astro", void 0);

const $$file = "/Users/adrianvelascocarrasco/Documents/portfolioAstro/portfolioAstro/src/pages/index.astro";
const $$url = "/portfolio";

export { $$Index as default, $$file as file, $$url as url };
