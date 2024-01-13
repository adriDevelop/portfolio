/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_NmhEZf1_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './comienzos_jT2ZY6pF.mjs';

const $$Astro = createAstro("https://adridevelop.github.io");
const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proyectos;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bienvenida" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4"> <p class="mt-10 text-4xl text-gray-300">Proyectos</p> <div class="container md:flex"> <main class="px-4 mb-6" flex-grow> <p class="mb-4 text-gray-300 mt-10">Actualmente no dispongo de ningún proyecto.</p> </main> </div> </div> ` })}`;
}, "/Users/adrianvelascocarrasco/Documents/portfolioAstro/portfolioAstro/src/pages/proyectos.astro", void 0);

const $$file = "/Users/adrianvelascocarrasco/Documents/portfolioAstro/portfolioAstro/src/pages/proyectos.astro";
const $$url = "/portfolio/proyectos";

export { $$Proyectos as default, $$file as file, $$url as url };
