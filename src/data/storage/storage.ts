export default class Storage {
  get(key: string): Promise<string | null> {
    return new Promise((resolve, _) => {
      resolve(localStorage.getItem(key));
    });
  }

  set(key: string, value: string): Promise<string | null> {
    return new Promise((resolve, _) => {
      localStorage.setItem(key, value);
      resolve("Saved.");
    });
  }

  delete(key: string): Promise<string | null> {
    return new Promise((resolve, _) => {
      localStorage.removeItem(key);
      resolve("Removed.");
    });
  }
}
