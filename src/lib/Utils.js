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
  }
};

module.exports = Utils;
