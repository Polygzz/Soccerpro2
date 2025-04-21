/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_COPUfQDN.mjs';
import { $ as $$Navigation } from '../chunks/Navigation_BZ7xgjHj.mjs';
export { renderers } from '../renderers.mjs';

const $$Gym = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8">Gym Workouts</h1> <form id="addGymWorkout" class="bg-white p-6 rounded-lg shadow-md mb-8"> <h2 class="text-xl font-bold mb-4">Create Gym Workout</h2> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
Workout Name
</label> <input type="text" id="name" name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="type">
Workout Type
</label> <select id="type" name="type" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> <option value="Strength">Strength</option> <option value="Endurance">Endurance</option> <option value="Power">Power</option> <option value="Recovery">Recovery</option> </select> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
Workout Image URL
</label> <input type="url" id="image" name="image" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="https://example.com/image.jpg"> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="notes">
Workout Notes
</label> <textarea id="notes" name="notes" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24" placeholder="Add notes about this workout..."></textarea> </div> <div id="exercisesContainer"> <h3 class="text-lg font-bold mb-4">Exercises</h3> </div> <button type="button" id="addExerciseButton" class="mb-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
Add Exercise
</button> <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
Create Workout
</button> </form> <div id="gymWorkouts" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <!-- Gym workouts will be populated by JavaScript --> </div> </main> ` })} ${renderScript($$result, "/home/project/src/pages/gym.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/pages/gym.astro", void 0);

const $$file = "/home/project/src/pages/gym.astro";
const $$url = "/gym";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gym,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
