// ============================================
// WHITEWATER SIGHTING ARCHIVE
// ============================================
// 
// DIRECTOR QUICK-EDIT GUIDE:
// The archive content is currently embedded in index.html for fast edits between takes.
// 
// To modify sighting dates/locations:
//   1. Open index.html
//   2. Find the "RECENT SIGHTINGS" section (around line 50)
//   3. Edit the <li> items directly
// 
// To modify lore text:
//   1. Find the "THE LEGEND" section (around line 100)
//   2. Edit the <p> tags with your new text
//
// To modify timeline events:
//   1. Find the "TIMELINE OF INCIDENTS" section
//   2. Edit the <div class="timeline-item"> blocks
//
// ============================================

// Optional: Uncomment below to load dynamic sightings from movies.yaml
// This is not currently active, but here for future expansion.

// async function loadSightings() {
//   const sightingList = document.getElementById("sighting-list");
//   try {
//     const response = await fetch("movies.yaml", { cache: "no-store" });
//     if (!response.ok) throw new Error(`Could not load movies.yaml (${response.status})`);
//     
//     const yamlText = await response.text();
//     const parsed = jsyaml.load(yamlText);
//     const sightings = Array.isArray(parsed?.sightings) ? parsed.sightings : [];
//     
//     sightingList.innerHTML = sightings
//       .map(sighting => `
//         <li class="sighting-item">
//           <span class="sighting-date">${sighting.date}</span>
//           <span class="sighting-text">${sighting.location}</span>
//         </li>
//       `)
//       .join("");
//   } catch (error) {
//     console.warn("Could not load sightings:", error.message);
//   }
// }
// 
// Uncomment the line below to enable dynamic loading:
// loadSightings();
