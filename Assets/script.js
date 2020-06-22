////////////////////////////////////////////////
//Variables//
var searchTxt = $("#searchTxt");
var searchBtn = $("#searchBtn");
var movieImg = $("#movieImg");
var bookImg = $("#bookImg");
var bookTitle= $("#bookTitle");
var movieTitle= $("#movieTitle");
var movieCard= $("#movieCard");
var bookCard =  $("#bookCard");
// var movieArr = (!savedMovies) ? [] : JSON.parse(savedMovies);
var movieAPI = "f9bb3ed8";
var bookAPI = "HlkvA90diPLiYVjDMkKAw";
var bookSecret = "whjSTLdm1vCndZwtplPVHsUQ0lvXKUefykpQWKdQyw"
var movieTitleTxt= "";
var bookTitleTxt= "";
var movieGenre= "";
var bookGenre= "";
/////////////////////////////////////////////
//Functions
var renderMovies = (movieData) => {
    movieTitle.text(movieData.Title)
    movieCard.empty();
    movieImg.attr("src", movieData.Poster);
    var actors = `<p><strong>Top Billed Cast: </strong>${movieData.Actors}</p>`;
    movieCard.append(actors);
    movieGenre = movieData.Genre;
    var movieGenreTxt = `<p><strong>Genre: </strong>${movieGenre}`;
    $(movieCard).append(movieGenreTxt);
    var movieYR = movieData.Year;
    var movieYrTxt = `<p><strong>Release Year: </strong>${movieYR}</p>`;
    movieCard.append(movieYrTxt);
    var moviePlot = movieData.Plot;
    var moviePlotTxt = `<p><strong>Plot: </strong>${moviePlot}</p>`
    movieCard.append(moviePlotTxt);
}

var renderBooks = (bookPickData, bookImageData) => {
    $(bookCard).empty();
    bookTitle.text(bookPickData.trackCensoredName);
    // bookImg.attr("src", bookPickData.artworkUrl100);
    var bookGenreTxt = `<p><strong>Book Genre: </strong>${bookPickData.genres[0]}</p>`;
    $(bookCard).append(bookGenreTxt);
    var bookAuthor = `<p><strong>Author: </strong>${bookPickData.artistName}</p>`;
    $(bookCard).append(bookAuthor);
    var bookYr = `<p><strong>Publication Year: </strong>${bookPickData.releaseDate.substring(0,4)}</p>`;
    $(bookCard).append(bookYr);
    var bookPlot = `<p><strong>Plot: </strong>${bookPickData.description}</p>`;
    $(bookCard).append(bookPlot);
}

var renderBookImg = (bookImageData) => {
    bookImg.attr("src", bookImageData.value[0].thumbnailUrl);
}

// Event listener for search button and anon function to run ajax function
$(searchBtn).on("click", function(movieData, bookData){
    $("body").attr("class", "background2");
    $(".grid-container").css("display", "block");
    getData(searchTxt.val());
    searchTxt.val("");
});
///////////////////////////////////////////////////