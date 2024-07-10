$(document).ready(function(){
  console.log("ready!");

  // Initialize an array of additional Star Wars movies
  let additionalMovies = [
    "The Empire Strikes Back",
    "The Force Awakens",
    "The Last Jedi",
    "The Rise of Skywalker",
    "Solo: A Star Wars Story"
  ];

  // Shuffle the array
  for (let i = additionalMovies.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [additionalMovies[i], additionalMovies[j]] = [additionalMovies[j], additionalMovies[i]];
  }

  // Create a click event for the button
  $("#addMovie").on("click", function() {
    // Check if there are any movies left to add
    if (additionalMovies.length > 0) {
      // Get the first movie from the array
      const movie = additionalMovies[0];

      // Add the movie to the DOM
      $("#movieList").append(`<li class="list-group-item">${movie}</li>`);

      // Remove the first movie from the array
      additionalMovies.shift();

      // If we've reached the end of the array, disable the button
      if (additionalMovies.length === 0) {
        $(this).prop("disabled", true).text("No More Movies");
      }
    }
  });
});
