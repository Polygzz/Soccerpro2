/* empty css                                    */
import { c as createComponent, b as renderTemplate } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { s as supabaseClient } from '../chunks/supabaseClient_CTTLYvhi.mjs';
export { renderers } from '../renderers.mjs';

const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  try {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    }
    throw redirect("/", 302);
  } catch (error) {
    console.error("Error during sign-out:", error);
    throw redirect("/error", 302);
  }
  return renderTemplate``;
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
