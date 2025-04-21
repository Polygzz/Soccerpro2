/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_COPUfQDN.mjs';
import { $ as $$Navigation } from '../chunks/Navigation_BZ7xgjHj.mjs';
export { renderers } from '../renderers.mjs';

const $$Readiness = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8">Training Readiness</h1> <div class="mb-8"> <form id="addMetric" class="bg-white p-6 rounded-lg shadow-md"> <h2 class="text-xl font-bold mb-4">Add New Metric</h2> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="metricName">
Metric Name
</label> <input type="text" id="metricName" name="metricName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> </div> <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
Add Metric
</button> </form> </div> <form id="readinessCheck" class="bg-white p-6 rounded-lg shadow-md mb-6"> <h2 class="text-xl font-bold mb-6">Daily Readiness Check</h2> <div id="metricsContainer" class="space-y-6"> <!-- Metrics will be populated by JavaScript --> </div> <button type="submit" class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
Check Readiness
</button> </form> <div id="readinessResult" class="hidden bg-white p-6 rounded-lg shadow-md"> <h3 class="text-xl font-bold mb-4">Your Readiness Score</h3> <div class="text-4xl font-bold text-center mb-4"> <span id="readinessScore">0</span>/<span id="maxScore">0</span> </div> <p id="readinessMessage" class="text-center text-gray-700"></p> </div> </main> ` })} ${renderScript($$result, "/home/project/src/pages/readiness.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/pages/readiness.astro", void 0);

const $$file = "/home/project/src/pages/readiness.astro";
const $$url = "/readiness";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Readiness,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
