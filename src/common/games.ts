export interface IGames {
    name: string,
    href: string,
    img: string,
}

export const gamesData: IGames[] = [
  {
    name: 'sprint',
    href: '#minigames/sprint',
    img: './assets/png/sprint.png',
  },
  {
    name: 'audio-challenge',
    href: '#minigames/audio-challenge',
    img: './assets/png/audio-challenge.png',
  },
];
