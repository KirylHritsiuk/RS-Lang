export abstract class LocalStorage<T> {
  constructor(protected key: string) {
    this.key = key;
  }

  addUserLocalStorage(data: T) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  getUserLocalStorage(): T | null {
    const result: string | null = localStorage.getItem(this.key);
    if (result) return JSON.parse(result);
    return null;
  }

  clearUserLocalStorage(): void {
    localStorage.removeItem(this.key);
  }
}
