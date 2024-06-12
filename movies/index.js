// метод resolve
const path1 = path.resolve("movies", "movies.json");
// console.log(path1);
import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";
const PATH = path.resolve("movies", "movies.json");
// console.log(PATH);
const updateMovoies = (movies) =>
  fs.writeFile(PATH, JSON.stringify(movies, null, 2));

export const getAllMovies = async () => {
  const data = await fs.readFile(PATH, "utf-8");
  return JSON.parse(data);
};

export const getMovieById = async (id) => {
  const movies = await getAllMovies();
  const result = movies.find((item) => item.id === id);

  return result || null;
};

export const addMovie = async (data) => {
  const movie = await getAllMovies();

  const newMovie = {
    id: nanoid(),
    ...data,
  };
  movie.push(newMovie);
  await updateMovoies(movie);
  return newMovie;
};

export const updateById = async (id, data) => {
  const movies = await getAllMovies();
  const index = movies.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  movies[index] = { ...movies[index], ...data };
  await updateMovoies(movies);
  return movies[index];
};

export const deleteById = async (id) => {
  const movies = await getAllMovies();
  const index = movies.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = movies.splice(index);
  await updateMovoies(movies);
  return result;
};
