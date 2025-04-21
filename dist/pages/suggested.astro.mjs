/* empty css                                    */
import { c as createComponent, b as renderTemplate, a as renderScript, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cl7pzj9L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_COPUfQDN.mjs';
import { $ as $$Navigation } from '../chunks/Navigation_BZ7xgjHj.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Suggested = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script>
function editWorkout(index) {
  const workouts = JSON.parse(localStorage.getItem('suggestedWorkouts') || '[]');
  const workout = workouts[index];
  
  const form = document.createElement('form');
  form.innerHTML = \`
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="bg-white p-6 rounded-lg w-full max-w-lg">
        <h3 class="text-xl font-bold mb-4">Edit Workout</h3>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input type="text" value="\${workout.title}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="title">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Duration (minutes)</label>
          <input type="number" value="\${workout.duration}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="duration">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Difficulty</label>
          <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="difficulty">
            <option value="Beginner" \${workout.difficulty === 'Beginner' ? 'selected' : ''}>Beginner</option>
            <option value="Intermediate" \${workout.difficulty === 'Intermediate' ? 'selected' : ''}>Intermediate</option>
            <option value="Advanced" \${workout.difficulty === 'Advanced' ? 'selected' : ''}>Advanced</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Exercises (one per line)</label>
          <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="exercises" rows="5">\${workout.exercises.join('\\n')}</textarea>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
          <input type="url" value="\${workout.image || ''}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="image">
        </div>
        <div class="flex justify-end space-x-2">
          <button type="button" onclick="this.closest('form').remove()" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
        </div>
      </div>
    </div>
  \`;

  document.body.appendChild(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    workouts[index] = {
      title: formData.get('title'),
      duration: parseInt(formData.get('duration')),
      difficulty: formData.get('difficulty'),
      exercises: formData.get('exercises')?.toString().split('\\n').map(e => e.trim()).filter(e => e),
      image: formData.get('image')
    };

    localStorage.setItem('suggestedWorkouts', JSON.stringify(workouts));
    window.displayWorkouts();
    form.remove();
  });
}

function deleteWorkout(index) {
  if (confirm('Are you sure you want to delete this workout?')) {
    const workouts = JSON.parse(localStorage.getItem('suggestedWorkouts') || '[]');
    workouts.splice(index, 1);
    localStorage.setItem('suggestedWorkouts', JSON.stringify(workouts));
    window.displayWorkouts();
  }
}

function addToCustomWorkouts(index) {
  const workouts = JSON.parse(localStorage.getItem('suggestedWorkouts') || '[]');
  const workout = workouts[index];
  if (!workout) return;

  const customWorkouts = JSON.parse(localStorage.getItem('customWorkouts') || '[]');
  if (!customWorkouts.some(w => w.name === workout.title)) {
    customWorkouts.push({
      name: workout.title,
      duration: workout.duration,
      exercises: workout.exercises,
      image: workout.image
    });
    localStorage.setItem('customWorkouts', JSON.stringify(customWorkouts));
    alert('Workout added to your custom workouts!');
  } else {
    alert('This workout is already in your custom workouts!');
  }
}
<\/script> `, ""], ["", ` <script>
function editWorkout(index) {
  const workouts = JSON.parse(localStorage.getItem('suggestedWorkouts') || '[]');
  const workout = workouts[index];
  
  const form = document.createElement('form');
  form.innerHTML = \\\`
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="bg-white p-6 rounded-lg w-full max-w-lg">
        <h3 class="text-xl font-bold mb-4">Edit Workout</h3>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input type="text" value="\\\${workout.title}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="title">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Duration (minutes)</label>
          <input type="number" value="\\\${workout.duration}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="duration">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Difficulty</label>
          <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="difficulty">
            <option value="Beginner" \\\${workout.difficulty === 'Beginner' ? 'selected' : ''}>Beginner</option>
            <option value="Intermediate" \\\${workout.difficulty === 'Intermediate' ? 'selected' : ''}>Intermediate</option>
            <option value="Advanced" \\\${workout.difficulty === 'Advanced' ? 'selected' : ''}>Advanced</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Exercises (one per line)</label>
          <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="exercises" rows="5">\\\${workout.exercises.join('\\\\n')}</textarea>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
          <input type="url" value="\\\${workout.image || ''}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="image">
        </div>
        <div class="flex justify-end space-x-2">
          <button type="button" onclick="this.closest('form').remove()" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
        </div>
      </div>
    </div>
  \\\`;

  document.body.appendChild(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    workouts[index] = {
      title: formData.get('title'),
      duration: parseInt(formData.get('duration')),
      difficulty: formData.get('difficulty'),
      exercises: formData.get('exercises')?.toString().split('\\\\n').map(e => e.trim()).filter(e => e),
      image: formData.get('image')
    };

    localStorage.setItem('suggestedWorkouts', JSON.stringify(workouts));
    window.displayWorkouts();
    form.remove();
  });
}

function deleteWorkout(index) {
  if (confirm('Are you sure you want to delete this workout?')) {
    const workouts = JSON.parse(localStorage.getItem('suggestedWorkouts') || '[]');
    workouts.splice(index, 1);
    localStorage.setItem('suggestedWorkouts', JSON.stringify(workouts));
    window.displayWorkouts();
  }
}

function addToCustomWorkouts(index) {
  const workouts = JSON.parse(localStorage.getItem('suggestedWorkouts') || '[]');
  const workout = workouts[index];
  if (!workout) return;

  const customWorkouts = JSON.parse(localStorage.getItem('customWorkouts') || '[]');
  if (!customWorkouts.some(w => w.name === workout.title)) {
    customWorkouts.push({
      name: workout.title,
      duration: workout.duration,
      exercises: workout.exercises,
      image: workout.image
    });
    localStorage.setItem('customWorkouts', JSON.stringify(customWorkouts));
    alert('Workout added to your custom workouts!');
  } else {
    alert('This workout is already in your custom workouts!');
  }
}
<\/script> `, ""])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8">Suggested Workouts</h1> <form id="addWorkout" class="bg-white p-6 rounded-lg shadow-md mb-8"> <h2 class="text-xl font-bold mb-4">Add New Suggested Workout</h2> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
Workout Title
</label> <input type="text" id="title" name="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="duration">
Duration (minutes)
</label> <input type="number" id="duration" name="duration" min="1" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="difficulty">
Difficulty
</label> <select id="difficulty" name="difficulty" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required> <option value="Beginner">Beginner</option> <option value="Intermediate">Intermediate</option> <option value="Advanced">Advanced</option> </select> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="exercises">
Exercises (one per line)
</label> <textarea id="exercises" name="exercises" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5" required></textarea> </div> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
Workout Image URL
</label> <input type="url" id="image" name="image" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="https://example.com/image.jpg"> </div> <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
Add Workout
</button> </form> <div id="workoutsList" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <!-- Workouts will be populated by JavaScript --> </div> </main> ` }), renderScript($$result, "/home/project/src/pages/suggested.astro?astro&type=script&index=0&lang.ts"));
}, "/home/project/src/pages/suggested.astro", void 0);

const $$file = "/home/project/src/pages/suggested.astro";
const $$url = "/suggested";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Suggested,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
