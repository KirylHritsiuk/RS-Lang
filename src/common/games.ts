export interface IGames {
    name: string,
    href: string,
    img: string,
}

export const gamesData: IGames[] = [
  {
    name: 'спринт',
    href: '#minigames/sprint',
    img: './assets/png/sprint.png',
  },
  {
    name: 'аудиовызов',
    href: '#minigames/audio-challenge',
    img: './assets/png/audio-challenge.png',
  },
];
