/* empty css                                    */
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_COPUfQDN.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Logout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<main class="container mx-auto px-4 py-8 text-center"> <h1 class="text-2xl font-semibold mb-4">Logging out...</h1> <p class="text-textSecondary">Please wait while we log you out.</p> </main> <script type="module">
    import { supabaseClient } from '../utils/supabaseClient';

    // Call logout on Supabase
    supabaseClient.auth.signOut().then(() => {
      // Clear the cookies
      document.cookie = "sb-access-token=; path=/; max-age=0";
      document.cookie = "sb-refresh-token=; path=/; max-age=0";

      // Redirect to login
      window.location.href = '/login';
    });
  <\/script> `])), maybeRenderHead()) })}`;
}, "/home/project/src/pages/logout.astro", void 0);

const $$file = "/home/project/src/pages/logout.astro";
const $$url = "/logout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Logout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
