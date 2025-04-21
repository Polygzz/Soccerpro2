let r=0;function m(s,e=null){const t=document.createElement("div");t.className="mb-4 p-4 border rounded",t.innerHTML=`
      <div class="mb-2">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Exercise Name
        </label>
        <input
          type="text"
          name="exercise_${r}_name"
          value="${e?e.name:""}"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Sets
          </label>
          <input
            type="text"
            name="exercise_${r}_sets"
            value="${e?e.sets:""}"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Reps
          </label>
          <input
            type="text"
            name="exercise_${r}_reps"
            value="${e?e.reps:""}"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Rest (seconds)
          </label>
          <input
            type="number"
            name="exercise_${r}_rest"
            value="${e?e.rest:""}"
            min="0"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      </div>
      <button
        type="button"
        onclick="this.parentElement.remove()"
        class="mt-2 text-red-500 hover:text-red-700"
      >
        Remove Exercise
      </button>
    `,s?.appendChild(t),r++}document.getElementById("addExerciseButton")?.addEventListener("click",()=>{m(document.getElementById("exercisesContainer"))});const y=document.getElementById("addGymWorkout"),i=JSON.parse(localStorage.getItem("gymWorkouts")||"[]");function p(){const s=document.getElementById("gymWorkouts");s&&(s.innerHTML=i.map((e,t)=>`
        <div class="bg-white p-6 rounded-lg shadow-md">
          ${e.image?`
            <img src="${e.image}" alt="${e.name}" class="w-full h-48 object-cover rounded-lg mb-4"/>
          `:""}
          <h3 class="text-xl font-bold mb-2">${e.name}</h3>
          <p class="text-gray-600 mb-4">${e.type}</p>
          <div class="mb-4">
            <h4 class="font-bold mb-2">Exercises:</h4>
            ${e.exercises.map(a=>`
              <div class="mb-2 p-2 bg-gray-50 rounded">
                <p class="font-semibold">${a.name}</p>
                <p class="text-sm text-gray-600">
                  ${a.sets} sets × ${a.reps} reps
                  (${a.rest}s rest)
                </p>
              </div>
            `).join("")}
          </div>
          ${e.notes?`
            <div class="mb-4">
              <h4 class="font-bold mb-2">Notes:</h4>
              <p class="text-sm text-gray-600 whitespace-pre-line">${e.notes}</p>
            </div>
          `:""}
          <div class="flex space-x-2">
            <button
              onclick="editGymWorkout(${t})"
              class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button>
            <button
              onclick="deleteGymWorkout(${t})"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </div>
        </div>
      `).join(""))}function x(s){const e=i[s],t=document.createElement("form");t.innerHTML=`
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
        <div class="bg-white p-6 rounded-lg w-full max-w-lg">
          <h3 class="text-xl font-bold mb-4">Edit Workout</h3>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" value="${e.name}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Type</label>
            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="type">
              <option value="Strength" ${e.type==="Strength"?"selected":""}>Strength</option>
              <option value="Endurance" ${e.type==="Endurance"?"selected":""}>Endurance</option>
              <option value="Power" ${e.type==="Power"?"selected":""}>Power</option>
              <option value="Recovery" ${e.type==="Recovery"?"selected":""}>Recovery</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
            <input type="url" value="${e.image||""}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="image">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Notes</label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24" name="notes">${e.notes||""}</textarea>
          </div>
          <div id="editExercisesContainer">
            <h4 class="text-lg font-bold mb-4">Exercises</h4>
          </div>
          <button
            type="button"
            onclick="addExerciseField(this.parentElement.querySelector('#editExercisesContainer'))"
            class="mb-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Exercise
          </button>
          <div class="flex justify-end space-x-2">
            <button type="button" onclick="this.closest('form').remove()" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
          </div>
        </div>
      </div>
    `,document.body.appendChild(t);const a=t.querySelector("#editExercisesContainer");e.exercises.forEach(l=>{m(a,l)}),t.addEventListener("submit",l=>{l.preventDefault();const o=new FormData(l.target),d=[];for(let n=0;n<r;n++){const c=o.get(`exercise_${n}_name`),u=o.get(`exercise_${n}_sets`),b=o.get(`exercise_${n}_reps`),g=o.get(`exercise_${n}_rest`);c&&u&&b&&g&&d.push({name:c,sets:u,reps:b,rest:parseInt(g)})}i[s]={name:o.get("name"),type:o.get("type"),exercises:d,image:o.get("image"),notes:o.get("notes")},localStorage.setItem("gymWorkouts",JSON.stringify(i)),p(),t.remove()})}function f(s){confirm("Are you sure you want to delete this workout?")&&(i.splice(s,1),localStorage.setItem("gymWorkouts",JSON.stringify(i)),p())}y?.addEventListener("submit",s=>{s.preventDefault();const e=new FormData(s.target),t=[];for(let o=0;o<r;o++){const d=e.get(`exercise_${o}_name`),n=e.get(`exercise_${o}_sets`),c=e.get(`exercise_${o}_reps`),u=e.get(`exercise_${o}_rest`);d&&n&&c&&u&&t.push({name:d,sets:n,reps:c,rest:parseInt(u)})}const a={name:e.get("name"),type:e.get("type"),exercises:t,image:e.get("image"),notes:e.get("notes")};i.push(a),localStorage.setItem("gymWorkouts",JSON.stringify(i)),p(),y.reset();const l=document.getElementById("exercisesContainer");l&&(l.innerHTML='<h3 class="text-lg font-bold mb-4">Exercises</h3>'),r=0,m(l)});m(document.getElementById("exercisesContainer"));p();window.editGymWorkout=x;window.deleteGymWorkout=f;window.addExerciseField=m;
