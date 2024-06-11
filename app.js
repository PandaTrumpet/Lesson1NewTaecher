import * as moviesService from "./movies/index.js";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const allMovies = await moviesService.getAllMovies();
      console.log(allMovies);
      break;
    case "getById":
      const oneMovie = await moviesService.getMovieById(id);
      return console.log(oneMovie);
    case "add":
      const newMovies = await moviesService.addMovie(data);
      return console.log(newMovies);
    case "updateById":
      const updateMov = await moviesService.updateById(id, data);
      return console.log(updateMov);
  }
};
// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "2" });
// invokeAction({ action: "add", title: "New film", director: "Panda" });
invokeAction({
  action: "updateById",
  id: "3",
  title: "New film",
});
