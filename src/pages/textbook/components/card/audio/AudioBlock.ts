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

  constructor(protected wordData: IWord) {
    super();
    this.container.className = AudioBlock.textObject.containerClass;
    this.container.dataset.status = AudioBlock.textObject.stopStatus;
    this.container.innerHTML = `${svg.play}`;
    this.audio = new Audio(`${baseUrl}${wordData.audio}`);
    this.audioMeaning = new Audio(`${baseUrl}${wordData.audioMeaning}`);
    this.audioExample = new Audio(`${baseUrl}${wordData.audioExample}`);
    this.container.addEventListener('click', async (e) => {
      const button = <HTMLElement>e.currentTarget;
      switch (button.dataset.status) {
        case AudioBlock.textObject.stopStatus:
          this.container.dataset.status = AudioBlock.textObject.playStatus;
          this.container.innerHTML = svg.stop;
          await this.play(this.audio);
          await this.play(this.audioMeaning);
          await this.play(this.audioExample);
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
        default:
          console.log('default');
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
