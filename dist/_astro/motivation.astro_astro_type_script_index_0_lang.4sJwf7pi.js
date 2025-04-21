const c=[{quote:"I am constantly being asked about individuals. The only way to win is as a team.",author:"Pelé"},{quote:"The more difficult the victory, the greater the happiness in winning.",author:"Pelé"},{quote:"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",author:"Pelé"},{quote:"There is no pressure when you are making a dream come true.",author:"Neymar"},{quote:"I don't have time for hobbies. At the end of the day, I treat my job as a hobby. It's something I love doing.",author:"David Beckham"},{quote:"The secret is to believe in your dreams; in your potential that you can be like your star, keep searching, keep believing and don't lose faith in yourself.",author:"Neymar"}],m=["https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800","https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800","https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800"];let a=JSON.parse(localStorage.getItem("motivationalQuotes")||JSON.stringify(c)),n=JSON.parse(localStorage.getItem("motivationalImages")||JSON.stringify(m));function s(){const e=document.getElementById("quotesList");e&&(e.innerHTML=a.map((o,t)=>`
        <div class="bg-white p-6 rounded-lg shadow-md">
          <blockquote class="text-xl italic mb-4">${o.quote}</blockquote>
          <p class="text-gray-600 font-semibold mb-4">- ${o.author}</p>
          <div class="flex space-x-2">
            <button
              onclick="editQuote(${t})"
              class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button>
            <button
              onclick="deleteQuote(${t})"
              class="bg-deleteButton hover:bg-gray-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </div>
        </div>
      `).join(""))}function i(){const e=document.getElementById("imagesList");e&&(e.innerHTML=n.map((o,t)=>`
        <div class="relative">
          <img src="${o}" alt="Soccer motivation" class="rounded-lg shadow-md w-full h-64 object-cover" />
          <button
            onclick="window.deleteImage(${t})"
            class="absolute top-2 right-2 bg-deleteButton hover:bg-gray-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </div>
      `).join(""))}function g(e){const o=a[e],t=document.createElement("form");t.innerHTML=`
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div class="bg-white p-6 rounded-lg w-full max-w-lg">
          <h3 class="text-xl font-bold mb-4">Edit Quote</h3>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Quote</label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="quote" rows="3">${o.quote}</textarea>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Author</label>
            <input type="text" value="${o.author}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="author">
          </div>
          <div class="flex justify-end space-x-2">
            <button type="button" onclick="this.closest('form').remove()" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
          </div>
        </div>
      </div>
    `,document.body.appendChild(t),t.addEventListener("submit",l=>{l.preventDefault();const u=new FormData(l.target);a[e]={quote:u.get("quote"),author:u.get("author")},localStorage.setItem("motivationalQuotes",JSON.stringify(a)),s(),t.remove()})}function h(e){confirm("Are you sure you want to delete this quote?")&&(a.splice(e,1),localStorage.setItem("motivationalQuotes",JSON.stringify(a)),s())}window.deleteImage=function(o){confirm("Are you sure you want to delete this image?")&&(n.splice(o,1),localStorage.setItem("motivationalImages",JSON.stringify(n)),i())};const r=document.getElementById("addQuote");r?.addEventListener("submit",e=>{e.preventDefault();const o=new FormData(e.target),t={quote:o.get("quote"),author:o.get("author")};a.push(t),localStorage.setItem("motivationalQuotes",JSON.stringify(a)),s(),r.reset()});const d=document.getElementById("addImage");d?.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(e.target).get("imageUrl")?.toString();t&&(n.push(t),localStorage.setItem("motivationalImages",JSON.stringify(n)),i(),d.reset())});window.editQuote=g;window.deleteQuote=h;s();i();
