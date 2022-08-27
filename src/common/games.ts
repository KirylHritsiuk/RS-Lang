export interface IGames {
    name: string,
    href: string,
    img: string,
}

export const gamesData: IGames[] = [
  {
    name: 'sprint',
    href: '#mimgames/sprint',
    img: './assets/png/sprint.png',
  },
  {
    name: 'audio-challenge',
    href: '#mimgames/audio-challenge',
    img: './assets/png/audio-challenge.png',
  },
];
