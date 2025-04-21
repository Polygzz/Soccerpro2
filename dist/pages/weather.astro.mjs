/* empty css                                    */
import { c as createComponent, a as renderScript, b as renderTemplate } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Weather = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/home/project/src/pages/weather.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/pages/weather.astro", void 0);

const $$file = "/home/project/src/pages/weather.astro";
const $$url = "/weather";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Weather,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
