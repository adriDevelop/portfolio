/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_NmhEZf1_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './comienzos_jT2ZY6pF.mjs';

const $$Astro = createAstro("https://adridevelop.github.io");
const $$Contactame = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contactame;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bienvenida" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4"> <p class="mt-10 text-4xl text-gray-300">Contactame</p> <div class="w-full h-max bg-gradient-to-r from-pink-500 to-violet-500 ... p-1 flex flex-col gap-1 rounded-2xl mt-10"> <div class="w-full h-full bg-gray-700 rounded-xl"> <div class="lg:col-span-2"> <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 mx-4 mt-4"> <div class="md:col-span-5"> <label for="full_name" class="mt-10 text-2xl text-gray-300">Nombre completo:</label> <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Su nombre"> </div> <div class="md:col-span-5"> <label for="email" class="mt-10 text-2xl text-gray-300">Correo electrónico:</label> <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com"> </div> <div class="md:col-span-5"> <label for="message" class="mt-10 text-2xl text-gray-300">Escriba su mensaje:</label> <textarea id="mensaje" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" id="mensaje" rows="5" placeholder="El mensaje" required></textarea> </div> <div class="md:col-span-5 justify-center"> <button id="enviarBtn" class="group relative h-12 w-full overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 text-lg shadow mb-4"> <div class="absolute inset-0 w-12 bg-pink-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-white group-hover:text-white">Enviar</span> </button>  </div> </div> </div> </div> </div> </div>` })}`;
}, "/Users/adrianvelascocarrasco/Documents/portfolioAstro/portfolioAstro/src/pages/contactame.astro", void 0);

const $$file = "/Users/adrianvelascocarrasco/Documents/portfolioAstro/portfolioAstro/src/pages/contactame.astro";
const $$url = "/portfolio/contactame";

export { $$Contactame as default, $$file as file, $$url as url };
