class Cache {
  constructor() {
    this.currentUser = null;
    this.requestStack = [];
    this.router = [];
  }
}

export default new Cache();
