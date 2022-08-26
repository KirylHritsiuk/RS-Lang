export interface IUserSchema {
  name?: string,
  email: string,
  password: string
}

export interface IStatisticSchema {
  learnedWords: number | string,
  optional: IObject
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

export interface IQueryParameters {
  key: number | string,
  value: number | string,
}

export interface IGetUserToken {
  message: string,
  token: string,
  refreshToken: string,
  userId: string,
  name: string
}

export interface IObject {
  color: string
}

export interface IUserWordSchema {
  wordId?: string,
  userId?: string,
  difficulty: string,
  optional: IObject
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