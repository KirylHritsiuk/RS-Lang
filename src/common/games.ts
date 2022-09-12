export interface IGames {
    name: string,
    nameEn: string,
    href: string,
    img: string,
}

export const gamesData: IGames[] = [
  {
    name: 'спринт',
    nameEn: 'sprint',
    href: '#minigames/sprint',
    img: './assets/png/sprint.png',
  },
  {
    name: 'аудиовызов',
    nameEn: 'audio-challenge',
    href: '#minigames/audio-challenge',
    img: './assets/png/audio-challenge.png',
  },
];
