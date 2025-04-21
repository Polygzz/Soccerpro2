/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_COPUfQDN.mjs';
import { $ as $$Navigation } from '../chunks/Navigation_BZ7xgjHj.mjs';
export { renderers } from '../renderers.mjs';

const $$Notes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8">Training Notes</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <form id="addNote" class="bg-white p-6 rounded-lg shadow-md"> <h2 class="text-xl font-bold mb-4">Add Note</h2> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
Title
</label> <input type="text" id="title" name="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="content">
Content
</label> <textarea id="content" name="content" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" required></textarea> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
Image URL
</label> <input type="url" id="image" name="image" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="https://example.com/image.jpg"> </div> <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
Save Note
</button> </form> <div id="notesList" class="space-y-4"> <!-- Notes will be populated by JavaScript --> </div> </div> </main> ` })} ${renderScript($$result, "/home/project/src/pages/notes.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/pages/notes.astro", void 0);

const $$file = "/home/project/src/pages/notes.astro";
const $$url = "/notes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Notes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
