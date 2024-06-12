import * as moviesService from "./movies/index.js";
import yargs from "yargs";
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
    case "deleteById":
      const deleteMovie = await moviesService.deleteById(id);
      return console.log(deleteMovie);
  }
};
// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "2" });
// invokeAction({ action: "add", title: "New film", director: "Panda" });
// invokeAction({
//   action: "updateById",
//   id: "3",
//   title: "New film",
// });

invokeAction({
  action: "deleteById",
  id: "3",
});
// node app --action list
// console.log(process.argv);

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }
// const { argv } = yargs(process.argv.slice(2));
// invokeAction(argv);

import { program } from "commander";
program
  .option("-a,--action <type>")
  .option("-i,--id <type>")
  .option("--title <type>")
  .option("--director <type>");
program.parse();

const option = program.opts();
invokeAction(option);
