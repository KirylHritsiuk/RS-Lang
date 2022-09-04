import { svg } from '../../../../../common/svg';
import { IWord } from '../../../../../types/types';
import { baseUrl } from '../../../../../utils/api';
import { Block } from '../../blockTemplate';

export class AudioBlock extends Block {
  static textObject = {
    containerClass: 'word-audio',
    stopStatus: 'stop',
    playStatus: 'play',
  };

  protected audio: HTMLAudioElement;

  protected audioMeaning: HTMLAudioElement;

  protected audioExample: HTMLAudioElement;

  constructor(protected data: IWord) {
    super();
    this.container.className = AudioBlock.textObject.containerClass;
    this.container.dataset.status = AudioBlock.textObject.stopStatus;
    this.container.innerHTML = `${svg.play}`;
    this.audio = new Audio(`${baseUrl}${data.audio}`);
    this.audioMeaning = new Audio(`${baseUrl}${data.audioMeaning}`);
    this.audioExample = new Audio(`${baseUrl}${data.audioExample}`);
    this.container.addEventListener('click', async (e) => {
      const button = <HTMLElement>e.currentTarget;
      switch (button.dataset.status) {
        case AudioBlock.textObject.stopStatus:
          this.container.dataset.status = AudioBlock.textObject.playStatus;
          this.container.innerHTML = svg.stop;
          await this.play(this.audio);
          await this.play(this.audioExample);
          await this.play(this.audioMeaning);
          this.container.dataset.status = AudioBlock.textObject.stopStatus;
          this.container.innerHTML = svg.play;
          break;
        case AudioBlock.textObject.playStatus:
          [this.audio, this.audioMeaning, this.audioExample].forEach((el) => {
            el.pause();
            el.currentTime = 0;
          });
          this.container.dataset.status = AudioBlock.textObject.stopStatus;
          this.container.innerHTML = svg.play;
          break;
      }
    });
  }

  play(audio: HTMLAudioElement) {
    return new Promise((res) => {
      audio.play();
      audio.onended = res;
    });
  }
}
