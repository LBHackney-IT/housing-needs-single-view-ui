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
  },

  goBack() {
    if (window.location.href.includes('#/')) window.history.go(-2);
    else window.history.go(-1);
  },

  cleanTenureType(tenureType) {
    if (tenureType.includes('ASY')) return 'Asylum seeker';

    if (tenureType.includes('COM')) return 'Commercial let';

    if (tenureType.includes('DEC')) return 'Temporay decant';

    if (tenureType.includes('FRE')) return 'Freehold';

    if (tenureType.includes('FRS')) return 'Freehold (service charge)';

    if (tenureType.includes('HPH')) return 'HPH (SLA)';

    if (tenureType.includes('INT')) return 'IntroductoryB';

    if (tenureType.includes('LEA')) return 'Leasehold RTB';

    if (tenureType.includes('LHS')) return 'Leasehold 100% staircased';

    if (tenureType.includes('LTA')) return 'License temporay accommodation';

    if (tenureType.includes('MPA')) return 'Mesne profit account';

    if (tenureType.includes('NON')) return 'Non-secure';

    if (tenureType.includes('PVG')) return 'Private garage';

    if (tenureType.includes('RSL')) return 'Landlord';

    if (tenureType.includes('RTM')) return 'Rent to mortgage';

    if (tenureType.includes('SEC')) return 'Secure';

    if (tenureType.includes('SHO')) return 'Shared ownership';

    if (tenureType.includes('SLL')) return 'Short life lease';

    if (tenureType.includes('SPS')) return 'Private sale leasehold';

    if (tenureType.includes('SPT')) return 'Sheltered accommodation';

    if (tenureType.includes('SSE')) return 'Share equity';

    if (tenureType.includes('TAF')) return 'Tenants association flat';

    if (tenureType.includes('TBB')) return 'Temporary B&B';

    if (tenureType.includes('TGA')) return 'Tenant garage';

    if (tenureType.includes('THA'))
      return 'Temporary housing association lease';

    if (tenureType.includes('THL')) return 'Temporary hostel lease';

    if (tenureType.includes('THO')) return 'Temporary hostel';

    if (tenureType.includes('TLA')) return 'Temporary annex';

    if (tenureType.includes('TPL')) return 'Temporary private let';

    return tenureType;
  }
};

module.exports = Utils;
