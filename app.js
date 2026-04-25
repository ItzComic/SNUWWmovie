async function loadMovies() {
  const grid = document.getElementById("movie-grid");

  try {
    const response = await fetch("movies.yaml", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Could not load movies.yaml (${response.status})`);
    }

    const yamlText = await response.text();
    const parsed = jsyaml.load(yamlText);
    const movies = Array.isArray(parsed?.movies) ? parsed.movies : [];

    if (movies.length === 0) {
      grid.innerHTML = "<p>No movies found in movies.yaml.</p>";
      return;
    }

    grid.innerHTML = movies
      .map((movie, index) => {
        const title = movie.title ?? "Untitled";
        const year = movie.year ?? "-";
        const rating = movie.rating ?? "Unrated";
        const subgenre = movie.subgenre ?? "Unknown";
        const mood = movie.mood ?? "Unknown";
        const summary = movie.summary ?? "No summary provided.";

        return `
          <article class="movie-card" style="animation-delay:${index * 80}ms">
            <div class="movie-head">
              <h3 class="movie-title">${title}</h3>
              <span class="movie-year">${year}</span>
            </div>
            <p class="meta">${rating} | ${subgenre} | ${mood}</p>
            <p class="summary">${summary}</p>
          </article>
        `;
      })
      .join("");
  } catch (error) {
    grid.innerHTML = `<p>Failed to load YAML: ${error.message}</p>`;
  }
}

loadMovies();
