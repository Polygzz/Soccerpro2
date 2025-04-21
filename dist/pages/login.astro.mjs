/* empty css                                    */
import { c as createComponent, b as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_COPUfQDN.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", " <script type=\"module\">\n  import { supabaseClient } from '../utils/supabaseClient';\n\n  const form = document.getElementById('loginForm');\n  form?.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const email = document.getElementById('email').value;\n    const password = document.getElementById('password').value;\n\n    const { data, error } = await supabaseClient.auth.signInWithPassword({\n      email,\n      password,\n    });\n\n    if (error) {\n      alert(error.message);\n    } else {\n      const { access_token, refresh_token } = data.session;\n\n      // Set cookies from the client side\n      document.cookie = `sb-access-token=${access_token}; path=/; secure; samesite=lax`;\n      document.cookie = `sb-refresh-token=${refresh_token}; path=/; secure; samesite=lax`;\n\n      alert('Login successful!');\n      window.location.href = '/';\n    }\n  });\n<\/script>"], ["", " <script type=\"module\">\n  import { supabaseClient } from '../utils/supabaseClient';\n\n  const form = document.getElementById('loginForm');\n  form?.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const email = document.getElementById('email').value;\n    const password = document.getElementById('password').value;\n\n    const { data, error } = await supabaseClient.auth.signInWithPassword({\n      email,\n      password,\n    });\n\n    if (error) {\n      alert(error.message);\n    } else {\n      const { access_token, refresh_token } = data.session;\n\n      // Set cookies from the client side\n      document.cookie = \\`sb-access-token=\\${access_token}; path=/; secure; samesite=lax\\`;\n      document.cookie = \\`sb-refresh-token=\\${refresh_token}; path=/; secure; samesite=lax\\`;\n\n      alert('Login successful!');\n      window.location.href = '/';\n    }\n  });\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8 text-center">Login</h1> <form id="loginForm" class="max-w-md mx-auto bg-boxColor shadow-md rounded px-8 pt-6 pb-8 mb-4"> <div class="mb-4"> <label class="block text-textPrimary text-sm font-bold mb-2" for="email">
Email
</label> <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Email" required> </div> <div class="mb-6"> <label class="block text-textPrimary text-sm font-bold mb-2" for="password">
Password
</label> <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="Password" required> </div> <div class="flex items-center justify-between"> <button class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
Sign In
</button> <a class="inline-block align-baseline font-bold text-sm text-primary hover:text-secondary" href="/register">
Register
</a> </div> </form> </main> ` }));
}, "/home/project/src/pages/login.astro", void 0);

const $$file = "/home/project/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
