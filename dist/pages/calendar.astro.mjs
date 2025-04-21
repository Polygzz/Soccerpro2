/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_COPUfQDN.mjs';
import { $ as $$Navigation } from '../chunks/Navigation_BZ7xgjHj.mjs';
export { renderers } from '../renderers.mjs';

const $$Calendar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8">Training Calendar</h1> <div class="flex justify-between items-center mb-6"> <button id="prevMonth" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Previous Month
</button> <h2 id="currentMonth" class="text-xl font-semibold">January 2024</h2> <button id="nextMonth" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Next Month
</button> </div> <div id="calendar" class="bg-white p-6 rounded-lg shadow-md mb-8"> <div class="grid grid-cols-7 gap-2 mb-4"> <div class="text-center font-bold">Sun</div> <div class="text-center font-bold">Mon</div> <div class="text-center font-bold">Tue</div> <div class="text-center font-bold">Wed</div> <div class="text-center font-bold">Thu</div> <div class="text-center font-bold">Fri</div> <div class="text-center font-bold">Sat</div> </div> <div id="calendar-days" class="grid grid-cols-7 gap-2"> <!-- Calendar days will be populated by JavaScript --> </div> </div> <!-- Add Workout Modal --> <div id="addWorkoutModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"> <div class="bg-white p-6 rounded-lg w-full max-w-lg"> <h3 id="modalTitle" class="text-xl font-bold mb-4">Add Workout to Calendar</h3> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2">Date</label> <input type="date" id="workoutDate" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readonly> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2">Workout Type</label> <select id="workoutType" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> <option value="gym">Gym Workout</option> <option value="soccer">Soccer Training</option> </select> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2">Select Workout</label> <select id="workoutSelect" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></select> </div> <input type="hidden" id="editWorkoutIndex" value="-1"> <div class="flex justify-end space-x-2"> <button id="cancelButton" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button> <button id="saveButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button> <button id="deleteButton" class="hidden bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delete</button> </div> </div> </div> </main> ` })} ${renderScript($$result, "/home/project/src/pages/calendar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/pages/calendar.astro", void 0);

const $$file = "/home/project/src/pages/calendar.astro";
const $$url = "/calendar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calendar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
