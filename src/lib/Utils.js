let Utils = {
  formatCurrency(amount) {
    if (amount) {
      return `£${amount.toFixed(2)}`;
    } else {
      return '£---';
    }
  }
};

module.exports = Utils;
