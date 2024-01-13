/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot, m as maybeRenderHead } from '../astro_NmhEZf1_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://adridevelop.github.io");
const $$GoogleAnalytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GoogleAnalytics;
  return renderTemplate(_a || (_a = __template(["<!-- Google tag (gtag.js) --><script", ' async src="https://www.googletagmanager.com/gtag/js?id=G-DK1QY59BZ1"><\/script> <script', ">\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-DK1QY59BZ1');\n<\/script>"])), addAttribute(`text/partytown`, "type"), addAttribute(`text/partytown`, "type"));
}, "/Users/adrianvelascocarrasco/Documents/portfolioAstro/portfolioAstro/src/layouts/GoogleAnalytics.astro", void 0);

const $$Astro$1 = createAstro("https://adridevelop.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, {})}<meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title class="font-bold">${title}</title>${renderHead()}</head> <body> <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/adrianvelascocarrasco/Documents/portfolioAstro/portfolioAstro/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://adridevelop.github.io");
const $$Comienzos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Comienzos;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bienvenida" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4"> <div class="container md:flex items-center"> <main class="px-4 mb-6" flex-grow> <p class="mt-10 text-4xl text-gray-300">¿Cómo comencé?</p> <p class="mt-10 text-xl text-gray-300">Soy un apasionado de la tecnología desde muy pequeño.
        Teléfonos, ordenadores, consolas... todo me llamaba la atención, sobre todo el como estaban hechas las cosas y el como era posible que funcionasen. Era como magia. Asi que decidí integrarme a fondo en el mundo de la tecnología inciandome en un CFGM de Sistemas Microinformáticos y Redes.
        Una vez terminé de profundizar en el mundo de la tecnología, montaje y desarrollo, me dí cuenta que el desarrollo me encantó. Quería ser Desarrollador de Aplicaciones.
        Ahí fue donde emprendí mi futuro. Ahora, puedo decir que soy tanto Técnico en Sistemas Microinformáticos y Redes como Técnico en Desarrollo de Aplicaciones Multiplataforma y que he cumplido parte de mi sueño. Ahora, toca culminarlo.
</p> <p class="mt-10 text-xl text-gray-300">Te dejo a continuación toda mi carrera, lo puedes tomar como un pequeño curriculum aunque, si quieres ver mas información, te dejo la descarga de mi curriculum disponible.</p> </main> <aside class="px-4 md:128 sm:w-64 mt-20 mr-6"> <div class="w-96 h-max bg-gradient-to-r from-pink-500 to-violet-500 ... p-3 flex flex-col gap-1 rounded-2xl"> <div class="h-90 bg-gray-700 rounded-xl"> <img class="rounded-xl h-full w-full" src="src/img/adrimallorquin.jpg" alt="Imagen de Adri"> </div> </div> </aside> </div> <div class="w-full h-max bg-gradient-to-r from-pink-500 to-violet-500 ... p-1 flex flex-col gap-1 rounded-2xl mt-10"> <div class="h-max bg-gray-700 rounded-xl"> <p class="text-xl font-bold text-gray-300 mx-4 mt-4">IES Mario López, Bujalance, Córdoba (CFGM Sistemas Micronformáticos y Redes)</p> <p class="text-sm text-gray-300 mx-4 mt-4">Sept 2018 - Jun 2021</p> <p class="text-md text-gray-300 mx-4 mt-4">Fue donde por fin pude entender los conocimientos de la informática y donde descubrí que camino escoger en este mundillo.</p> <p class="text-md text-gray-300 mx-4 mt-2 mb-4">Aprendí a manejar bases de datos SQL, las bases de HTML y CSS, conocimientos sobre Linux, Windows, redes...</p> </div> </div> <div class="w-full h-max bg-gradient-to-r from-pink-500 to-violet-500 ... p-1 flex flex-col gap-1 rounded-2xl mt-10"> <div class="h-max bg-gray-700 rounded-xl"> <p class="text-xl font-bold text-gray-300 mx-4 mt-4">Microser, Córdoba</p> <p class="text-sm text-gray-300 mx-4 mt-4">Mar 2021 - Jun 2021</p> <p class="text-md text-gray-300 mx-4 mt-4">Fueron mis prácticas de empresa en el grado medio y fue una experiencia FANTASTICA.</p> <p class="text-md text-gray-300 mx-4 mt-2">Al ser la primera toma de contacto con un trabajo tuve que adaptarme y aprender cosas nuevas que no había visto en el grado, pero agradezco haberlas aprendido.</p> <p class="text-md text-gray-300 mx-4 mt-2 mb-4">Aprendí a hacer instalaciones de redes, a reparar equipos informáticos, moviles, tablets, periféricos...</p> </div> </div> <div class="w-full h-max bg-gradient-to-r from-pink-500 to-violet-500 ... p-1 flex flex-col gap-1 rounded-2xl mt-10"> <div class="h-max bg-gray-700 rounded-xl"> <p class="text-xl font-bold text-gray-300 mx-4 mt-4">IES Virgen del Carmen, Jaén (CFGS Desarrollo de Aplicaciones Multiplataforma)</p> <p class="text-sm text-gray-300 mx-4 mt-4">Sept 2021 - Jun 2023</p> <p class="text-md text-gray-300 mx-4 mt-4">Era el grado que decidí cursar tras el grado medio ya que lo que más me llamo la atención fueron las aplicaciones, páginas web, sistemas...</p> <p class="text-md text-gray-300 mx-4 mt-2 mb-4">Aprendí a hacer un mejor manejo de las bases de datos SQL y noSQL, he decidido focalizarme en el desarrollo de aplicaciones mobile(Android, Kotlin) aunque, como podréis comprobar en mi perfil de linkedin y en mi curriculum, también he realizado algún curso de Swit, SwiftUI y Xcode.</p> </div> </div> <div class="w-full h-max bg-gradient-to-r from-pink-500 to-violet-500 ... p-1 flex flex-col gap-1 rounded-2xl mt-10"> <div class="h-max bg-gray-700 rounded-xl"> <p class="text-xl font-bold text-gray-300 mx-4 mt-4">Esija, Jaén</p> <p class="text-sm text-gray-300 mx-4 mt-4">Mar 2023 - Jun 2023</p> <p class="text-md text-gray-300 mx-4 mt-4">Fueron mis prácticas de empresa en el grado superior donde también tuve una experiencia muy buena y adquirí nuevos conocimientos.</p> <p class="text-md text-gray-300 mx-4 mt-2 mb-4">Aprendí Flask, realización de API y también aprendi a usar CI-CD de Gitlab.</p> </div> </div> </div> ` })}`;
}, "/Users/adrianvelascocarrasco/Documents/portfolioAstro/portfolioAstro/src/pages/comienzos.astro", void 0);

const $$file = "/Users/adrianvelascocarrasco/Documents/portfolioAstro/portfolioAstro/src/pages/comienzos.astro";
const $$url = "/portfolio/comienzos";

const comienzos = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Comienzos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, $$Comienzos as a, comienzos as c };
