/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_COPUfQDN.mjs';
import { $ as $$Navigation } from '../chunks/Navigation_BZ7xgjHj.mjs';
export { renderers } from '../renderers.mjs';

const $$Motivation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8">Motivation</h1> <form id="addQuote" class="bg-white p-6 rounded-lg shadow-md mb-8"> <h2 class="text-xl font-bold mb-4">Add New Quote</h2> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="quote">
Quote
</label> <textarea id="quote" name="quote" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="3" required></textarea> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="author">
Author
</label> <input type="text" id="author" name="author" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> </div> <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
Add Quote
</button> </form> <form id="addImage" class="bg-white p-6 rounded-lg shadow-md mb-8"> <h2 class="text-xl font-bold mb-4">Add New Image</h2> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="imageUrl">
Image URL
</label> <input type="url" id="imageUrl" name="imageUrl" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="https://example.com/image.jpg" required> </div> <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
Add Image
</button> </form> <div id="quotesList" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"> <!-- Quotes will be populated by JavaScript --> </div> <h2 class="text-2xl font-bold mb-4">Motivational Images</h2> <div id="imagesList" class="grid grid-cols-1 md:grid-cols-3 gap-6"> <!-- Images will be populated by JavaScript --> </div> </main> ` })} ${renderScript($$result, "/home/project/src/pages/motivation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/pages/motivation.astro", void 0);

const $$file = "/home/project/src/pages/motivation.astro";
const $$url = "/motivation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Motivation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
