import {
  IUserSchema,
  IStatisticSchema,
  ISettingSchema,
  IWord,
  IQueryParameters,
  IAggregatedWords,
  IGetUserToken,
  IUserWordSchema,
} from '../../types/types';

const baseUrl = 'https://new-learnword.herokuapp.com/';

export class Api {
  protected url: string;

  protected client: IUserSchema;

  constructor() {
    this.url = baseUrl;
    this.client = {
      name: '',
      email: '',
      password: '',
      complete: false,
    };
  }

  static generateQueryString(queryParameters: IQueryParameters[] = []): string {
    return queryParameters.length ? `${queryParameters.map((el) => `${el.key}=${el.value}`).join('&')}` : '';
  }

  getUrl(): string {
    return this.url;
  }

  async getWords(query: IQueryParameters[] = []): Promise<IWord[]> {
    const res = await fetch(`${this.url}words/?${Api.generateQueryString(query)}`);
    const words: IWord[] = await res.json();
    return words;
  }

  async getWordOnId(id: string): Promise<IWord> {
    const res = await fetch(`${this.url}words/${id}`);
    const word: IWord = await res.json();
    return word;
  }

  async createUser(user: IUserSchema): Promise<IUserSchema> {
    const res = await fetch(`${this.url}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (res.ok) {
      const newUser: IUserSchema = await res.json();
      this.client = { ...newUser };
      this.client.complete = true;
      return this.client;
    }
    this.client.complete = false;
    return this.client;
  }

  async getUser(id: string, token: string): Promise<IUserSchema> {
    const res = await fetch(`${this.url}users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user: IUserSchema = await res.json();
    return user;
  }

  async updateUser(id: string, user: IUserSchema): Promise<IUserSchema> {
    const res = await fetch(`${this.url}users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const updateUser: IUserSchema = await res.json();
    return updateUser;
  }

  async deleteUser(id: string): Promise<boolean> {
    const res = await fetch(`${this.url}users/${id}`, {
      method: 'DELETE',
    });
    return res.status === 204;
  }

  async getUserToken(id: string): Promise<IGetUserToken> {
    const res = await fetch(`${this.url}users/${id}`);
    const token: IGetUserToken = await res.json();
    return token;
  }

  async getUserWords(id: string): Promise<IUserWordSchema[]> {
    const res = await fetch(`${this.url}users/${id}/words`);
    const userWord: IUserWordSchema[] = await res.json();
    return userWord;
  }

  async createUserWord(
    userId: string,
    wordId: string,
    word: IUserWordSchema,
  ): Promise<IUserWordSchema> {
    const res = await fetch(`${this.url}users/${userId}/words/${wordId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(word),
    });
    const newUserWord: IUserWordSchema = await res.json();
    return newUserWord;
  }

  async getUserWordById(userId: string, wordId: string): Promise<IUserWordSchema> {
    const res = await fetch(`${this.url}users/${userId}/words/${wordId}`);
    const userWord: IUserWordSchema = await res.json();
    return userWord;
  }

  async updateUserWord(
    userId: string,
    wordId: string,
    word: IUserWordSchema,
  ): Promise<IUserWordSchema> {
    const res = await fetch(`${this.url}users/${userId}/words/${wordId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(word),
    });
    const updateWord: IUserWordSchema = await res.json();
    return updateWord;
  }

  async deleteUserWord(userId: string, wordId: string): Promise<boolean | void> {
    const res = await fetch(`${this.url}users/${userId}/words/${wordId}`, {
      method: 'DELETE',
    });
    // todo what response?
    return res.status === 204;
  }

  async getUserAgregatedWords(id: string, query: IQueryParameters[]): Promise<IWord> {
    const res = await fetch(`${this.url}users/${id}/aggregatedWords/${Api.generateQueryString(query)}`);
    const aggregatedWords: IWord = await res.json();
    return aggregatedWords;
  }

  async getUserAgregatedWordById(userId: string, wordId: string): Promise<IAggregatedWords[]> {
    const res = await fetch(`${this.url}users/${userId}/aggregatedWords/${wordId}`);
    const aggregatedWord: IAggregatedWords[] = await res.json();
    return aggregatedWord;
  }

  async getUserStatistics(id: string): Promise<IStatisticSchema> {
    const res = await fetch(`${this.url}users/${id}/statistics`);
    const statistics: IStatisticSchema = await res.json();
    return statistics;
  }

  async updateUserStatistics(id: string, statistic: IStatisticSchema): Promise<IStatisticSchema> {
    const res = await fetch(`${this.url}users/${id}/statistics`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(statistic),
    });
    const statistics: IStatisticSchema = await res.json();
    return statistics;
  }

  async getUserSetting(id: string): Promise<ISettingSchema> {
    const res = await fetch(`${this.url}users/${id}/settings`);
    const settings: ISettingSchema = await res.json();
    return settings;
  }

  async updateUserSetting(id: string, setting: ISettingSchema): Promise<ISettingSchema> {
    const res = await fetch(`${this.url}users/${id}/settings`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(setting),
    });
    const settings: ISettingSchema = await res.json();
    return settings;
  }

  async signin(user: IUserSchema): Promise<IGetUserToken> {
    const res = await fetch(`${this.url}signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (res.ok) {
      const tokenObject: IGetUserToken = await res.json();
      return tokenObject;
    }
    const err: IGetUserToken = {
      message: 'Incorrect e-mail or password',
      token: '',
      refreshToken: '',
      userId: '',
      name: '',
    };
    return err;
  }
}
