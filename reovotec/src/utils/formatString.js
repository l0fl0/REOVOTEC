/**
 * Capitalizes the first character in a string
 */
Object.defineProperty(String.prototype, 'capitalize', {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

/**
 * Combines string at whitespaces and adjust string to lowercase
 */
Object.defineProperty(String.prototype, 'combineLower', {
  value: function () {
    return this.toLowerCase().replace(/\s/g, "");
  },
  enumerable: false
})