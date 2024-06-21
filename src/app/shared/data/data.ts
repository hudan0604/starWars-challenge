import { MovieI, MovieModel } from '../models.ts/movie.models';

export const data: Array<MovieI> = [
  new MovieModel(
    '/assets/images/icons/resistance_icon.svg',
    '/assets/images/posters/new_hope.svg',
    'Un nouvel espoir',
    "C'est le premier opus de la saga Star Wars par sa date de sortie, mais le quatrième selon l'ordre chronologique de l'histoire.",
    1977,
    false
  ),
  new MovieModel(
    '/assets/images/icons/empire_icon.svg',
    '/assets/images/posters/empire_strike_back.svg',
    "L'empire contre attaque",
    "La guerre entre le maléfique Empire galactique et son antagoniste, l'Alliance rebelle, bat son plein.",
    1980,
    false
  ),
  new MovieModel(
    '/assets/images/icons/jedi_icon.svg',
    '/assets/images/posters/return_of_jedi.svg',
    'Le retour du Jedi',
    "Le malkéfique Empire galactique construit une nouvelle station spatiale l'Etoile de la mort pour anéantir définitivement l'Alliance rebelle.",
    1983,
    false
  ),
];
