class Storage {
  constructor() {
    this.items = {};
  }

  setItem(key, value) {
    this.items[key] = value;
  }

  getItem(key) {
    return this.items[key];
  }

  removeItem(key) {
    if (Object.keys(this.items).includes(key)) {
      const value = this.items[key];
      delete this.items[key];
      return value;
    }

    return null;
  }

  clear() {
    this.items = {};
    return true;
  }

  key(n) {
    return Object.keys(this.items)[n];
  }
}

export default Storage;
