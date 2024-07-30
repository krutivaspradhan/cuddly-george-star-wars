$(document).ready(function() {
    console.log("ready!");

    // Load movie data from data.js
    const movies = moviesData;
    let additionalMovies = [...movies];

    // Function to display movie details
    function displayMovieDetails(movie) {
        return `
            <div>
                <h4>${movie.title}</h4>
                <p>Release Date: ${movie.releaseDate}</p>
                <p>Director: ${movie.director}</p>
                <p>Rating: ${movie.rating}</p>
                <p>Description: ${movie.description}</p>
                <div class="comments">
                    <h5>Comments</h5>
                    <ul class="comments-list"></ul>
                    <textarea class="comment-input" placeholder="Add a comment"></textarea>
                    <button class="btn btn-primary add-comment">Add Comment</button>
                </div>
            </div>
        `;
    }

    // Add movies to the list on page load
    additionalMovies.forEach((movie, index) => {
        $("#movieList").append(`
            <li class="list-group-item" data-title="${movie.title}">
                ${movie.title} 
                <button class="btn btn-link show-details">More Info</button>
                <div class="movie-details" style="display: none;">
                    ${displayMovieDetails(movie)}
                </div>
            </li>
        `);
    });

    // Show details when clicking on "More Info"
    $(document).on("click", ".show-details", function() {
        $(this).siblings(".movie-details").toggle();
    });

    // Show all details
    $("#showAll").on("click", function() {
        $(".movie-details").show();
    });

    // Hide all details
    $("#hideAll").on("click", function() {
        $(".movie-details").hide();
    });

    // Recommend a random movie
    $("#recommendMovie").on("click", function() {
        const randomIndex = Math.floor(Math.random() * additionalMovies.length);
        const randomMovie = additionalMovies[randomIndex];
        alert(`We recommend you to watch: ${randomMovie.title}`);
    });

    // Add comment functionality
    $(document).on("click", ".add-comment", function() {
        const commentInput = $(this).siblings(".comment-input");
        const commentText = commentInput.val().trim();
        
        if (commentText) {
            const commentList = $(this).siblings(".comments-list");
            commentList.append(`<li>${commentText}</li>`);
            commentInput.val(''); // Clear the input field
        }
    });
});
