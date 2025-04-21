const r=document.getElementById("sessions"),d=document.getElementById("totalMinutes"),s=JSON.parse(localStorage.getItem("trainingSessions")||"[]"),g=document.getElementById("updateLocationBtn"),a=document.getElementById("location"),y=s.reduce((e,t)=>e+parseInt(t.duration),0);d&&(d.textContent=`${y} minutes`);s.sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime());r&&(r.innerHTML=s.map(e=>`
      <div class="bg-white p-6 rounded-lg shadow-md mb-4">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold">${e.date}</h3>
          <span class="text-gray-600">${e.duration} minutes</span>
        </div>
        <div class="mb-3">
          <h4 class="font-medium mb-2">Skills Practiced:</h4>
          <div class="flex flex-wrap gap-2">
            ${e.skills.map(t=>`
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                ${t}
              </span>
            `).join("")}
          </div>
        </div>
        <p class="text-gray-700">${e.notes}</p>
      </div>
    `).join(""));const c="af770edc03304b4e8b6213518251604";async function l(){navigator.geolocation?navigator.geolocation.getCurrentPosition(async e=>{const t=e.coords.latitude,o=e.coords.longitude;try{const n=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${o}&units=metric&appid=${c}`)).json();p(n)}catch(i){console.error("Error fetching weather data:",i),document.getElementById("weatherDisplay").innerHTML="<p>Unable to fetch weather data. Please try again later.</p>"}},e=>{console.error("Error getting location:",e),document.getElementById("weatherDisplay").innerHTML="<p>Location access denied. Please enable location services to see weather information.</p>"}):document.getElementById("weatherDisplay").innerHTML="<p>Geolocation is not supported by this browser.</p>"}async function m(e){if(e)try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=${c}`);if(!t.ok)throw new Error("Location not found");const o=await t.json();p(o)}catch(t){console.error("Error:",t),document.getElementById("weatherDisplay").innerHTML="<p>Location not found. Please try again.</p>"}}function p(e){const t=Math.round(e.main.temp),o=e.weather[0].description,n=`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,u=e.wind.speed,h=e.main.humidity;document.getElementById("weatherDisplay").innerHTML=`
      <img src="${n}" alt="${o}" class="w-16 h-16">
      <div class="ml-4">
        <div class="text-2xl font-bold">${t}°C</div>
        <div class="capitalize">${o}</div>
        <div class="text-sm text-gray-600">Wind: ${u} m/s | Humidity: ${h}%</div>
      </div>
    `,f(e)}function f(e){const t=e.main.temp,o=e.weather[0].main,i=e.wind.speed;let n="";t>30?n="Extreme heat alert! Consider indoor training or schedule your workout early morning or late evening. Stay hydrated and take frequent breaks.":t>25?n="Hot conditions. Reduce intensity, stay hydrated, and consider shorter sessions. Technical drills might be better than high-intensity runs.":t<5?n="Cold conditions. Extend your warm-up period and wear layers. Focus on maintaining movement to stay warm.":t<0?n="Freezing conditions! Consider indoor training. If outdoors, proper warm-up is essential and watch for icy patches.":n="Ideal temperature for training. All workout types recommended.",o==="Rain"?n+=" Rainy conditions may affect ball control. Consider ball mastery drills under cover or focused technical work.":o==="Snow"?n+=" Snowy conditions - indoor training recommended. If outdoors, focus on balance and core stability work.":o==="Thunderstorm"?n+=" WARNING: Thunderstorms detected. Move indoors immediately for safety.":o==="Clear"&&t>20&&(n+=" Clear skies - perfect for all training activities. Consider sunscreen if training for extended periods."),i>10&&(n+=" High winds may affect ball flight. Good opportunity to practice adapting to challenging conditions."),document.getElementById("weatherRecommendation").innerHTML=`
      <h3 class="font-bold mb-2">Today's Training Recommendation:</h3>
      <p>${n}</p>
    `}g?.addEventListener("click",()=>{const e=a?.value;e&&m(e)});a?.addEventListener("keypress",e=>{if(e.key==="Enter"){const t=a.value;t&&m(t)}});l();setInterval(l,30*60*1e3);
