import CreateCustomer from './CreateCustomer';
import FetchCustomerNotes from './FetchCustomerNotes';
import FetchCustomerRecord from './FetchCustomerRecord';
import FetchCustomerDocuments from './FetchCustomerDocuments';
import SearchCustomers from './SearchCustomers';
import { hackneyToken } from '../lib/Cookie';

const AuthHeader = {
  headers: {
    Authorization: `Bearer ${hackneyToken()}`,
    'Content-Type': 'application/json'
  }
};

export {
  AuthHeader,
  CreateCustomer,
  FetchCustomerNotes,
  FetchCustomerRecord,
  FetchCustomerDocuments,
  SearchCustomers
};
