export const storage = window.sessionStorage || {
  items: {},
  getItem: function(key) {
    return this.items[key];
  },
  setItem: function(key, value) {
    this.items[key] = value;
  },
  removeItem: function(key) {
    delete this.items[key];
  }
};
export { storage  as default };
