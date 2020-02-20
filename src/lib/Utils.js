const moment = require('moment');

let Utils = {
  formatCurrency(amount) {
    if (typeof amount === 'number') {
      if (amount >= 0) {
        return `£${amount.toFixed(2)}`;
      } else {
        return `-£${Math.abs(amount).toFixed(2)}`;
      }
    } else {
      return '£---';
    }
  },

  nameCase(input) {
    input = Utils.checkString(input);
    if (!input) return null;
    return input
      .split(' ')
      .map(i => {
        return i.charAt(0).toUpperCase() + i.toLowerCase().slice(1);
      })
      .join(' ');
  },

  checkString(input) {
    if (typeof input === 'string') input = input.trim();
    if (input === '') return null;
    return input;
  },

  formatDisplayDate(input) {
    return moment(input).format('DD/MM/YYYY');
  }
};

module.exports = Utils;
