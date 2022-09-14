export abstract class LocalStorage<T> {
  constructor(protected key: string) {
    this.key = key;
  }

  addItemLocalStorage(data: T) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  getItemLocalStorage(): T | null {
    const result: string | null = localStorage.getItem(this.key);
    if (result) return JSON.parse(result);
    return null;
  }

  clearItemLocalStorage(): void {
    localStorage.removeItem(this.key);
  }
}
