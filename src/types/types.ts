interface IObject {
  color: string
}

interface IObjectStatistic {
  wordsStudied: string | number,
  accuracy: string | number,
  maxInARow: string | number,
  date: string | number
}

interface ICount {
  count: string
}

interface IStatisticsWord {
  correct: string | number,
  incorrect: string | number
}

interface IWordUser {
  statistics: IStatisticsWord
}

export interface IUserSchema {
  name?: string,
  complete?: boolean,
  email: string,
  password: string
}

export interface IStatisticSchema {
  id: string,
  learnedWords: number | string,
  optional: {
    learnedWordsDays: {
      [ key: string ]: string | number
    },
    games: {
      [ key: string ]: IObjectStatistic
    }
  }
}

export interface ISettingSchema {
  wordsPerDay: number | string,
  optional: IObject
}

export interface IWord {
  id: string,
  group: number,
  page: number,
  word: string,
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
  textMeaning: string,
  textExample: string,
  transcription: string,
  wordTranslate: string,
  textMeaningTranslate: string,
  textExampleTranslate: string,
}

export interface IAggregatedWords {
  wordsResult: [
    IWord
  ],
  wordsTotal: [
    ICount
  ]
}

export interface IQueryParameters {
  key: number | string,
  value: number | string,
}

interface IStatistics {
  maxRow: number,
  correctly: number,
  wrong: number,
}

export interface IResultGames {
  statistics: IStatistics,
  mistakeWords: IWord[],
  correctWords: IWord[],
}

export interface IGetUserToken {
  message: string,
  token: string,
  refreshToken: string,
  userId: string,
  name: string
}

export interface IUserWordSchema {
  wordId?: string,
  userId?: string,
  difficulty: string,
  optional: IWordUser
}

export interface IError {
  message: string,
  optional?: string
}

export interface IArrAdvantages{
  svg: string,
  name: string,
  text: string
}

export interface ITeam {
  nickName:string,
  speciality: string,
  contribution: string,
  github: string,
  photo:string
}

export interface IStatisticGame {
  maxRow: number,
  wrong: number,
  correctly: number
}
