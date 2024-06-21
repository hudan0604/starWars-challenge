export interface MovieI {
  icon: string;
  poster: string;
  title: string;
  description: string;
  date: number;
  isAnimated: boolean;
}

export class MovieModel implements MovieI {
  constructor(
    public icon: string,
    public poster: string,
    public title: string,
    public description: string,
    public date: number,
    public isAnimated: boolean
  ) {}
}
