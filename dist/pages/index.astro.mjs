/* empty css                                    */
import { c as createComponent, m as maybeRenderHead, a as renderScript, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_COPUfQDN.mjs';
import { $ as $$Navigation } from '../chunks/Navigation_BZ7xgjHj.mjs';
import 'clsx';
import { s as supabase } from '../chunks/supabaseClient_D-fVsEIv.mjs';
export { renderers } from '../renderers.mjs';

const $$AddSession = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="addSession" class="bg-boxColor p-6 rounded-lg shadow-md mb-6"> <h2 class="text-xl font-bold mb-4 text-textPrimary">Add Training Session</h2> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
Date
</label> <input type="date" id="date" name="date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="duration">
Duration (minutes)
</label> <input type="number" id="duration" name="duration" min="1" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="skills">
Skills (comma-separated)
</label> <input type="text" id="skills" name="skills" placeholder="e.g., Dribbling, Shooting, Passing" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="notes">
Notes
</label> <textarea id="notes" name="notes" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="3"></textarea> </div> <button type="submit" class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300">
Add Session
</button> </form> ${renderScript($$result, "/home/project/src/components/AddSession.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/components/AddSession.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: { user } } = await supabase.auth.getUser();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed top-4 right-4 z-50"> ${user ? renderTemplate`<form method="post" action="/logout" class="inline"> <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
Logout
</button> </form>` : renderTemplate`<a href="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
Login
</a>`} </div> ${renderComponent($$result2, "Navigation", $$Navigation, {})} <main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8 text-center text-textPrimary">Soccer Training Tracker</h1> <div class="weather-container mb-8 bg-boxColor p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"> <h2 class="text-xl font-bold mb-4 text-textPrimary">Local Weather</h2> <div id="weatherDisplay" class="flex items-center"> <p class="text-textSecondary">Loading weather information...</p> </div> <div id="weatherRecommendation" class="mt-4 p-4 bg-accent text-white rounded"> <h3 class="font-bold mb-2">Today's Training Recommendation:</h3> <p>Workout recommendations will appear here based on weather conditions.</p> </div> <div class="mt-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="zipcode">
Change Location (ZIP Code)
</label> <div class="flex"> <input type="text" id="zipcode" placeholder="Enter ZIP code" class="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> <button id="updateLocationBtn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline">
Update
</button> </div> </div> </div> <div class="bg-boxColor p-6 rounded-lg shadow-md mb-8 transition-shadow duration-300 hover:shadow-lg"> <h2 class="text-xl font-bold mb-4 text-textPrimary">Training Summary</h2> <div class="text-3xl font-bold text-primary" id="totalMinutes">0 minutes</div> <p class="text-textSecondary">Total training time</p> </div> ${renderComponent($$result2, "AddSession", $$AddSession, {})} <div id="sessions"></div> </main> ` })} <!-- Scripts --> ${renderScript($$result, "/home/project/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/pages/index.astro", void 0);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
