import { c as createComponent, d as createAstro, e as addAttribute, a as renderScript, f as renderHead, g as renderSlot, b as renderTemplate } from './astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Soccer Training Tracker</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">${renderScript($$result, "/home/project/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="bg-neutral font-sans min-h-screen text-textPrimary"> <div class="flex justify-end p-4"> ${Astro2.cookies.get("sb-access-token") ? renderTemplate`<a href="/logout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
Logout
</a>` : renderTemplate`<a href="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
Login
</a>`} </div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/project/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
