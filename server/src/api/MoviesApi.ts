import IResource from 'typings/IResource';

let movies: object[] = [{ title: 'The Matrix', rating: 4.9 }];

export default class MoviesApi implements IResource {
  create(data: object) {
    movies.push(data);
    return data;
  }

  findMany() {
    return movies;
  }
}
