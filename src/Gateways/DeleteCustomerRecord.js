import { AuthHeader } from '.';

async function DeleteCustomerRecord(id) {
  const req = {
    ...{
      method: 'DELETE'
    },
    ...AuthHeader
  };

  return await fetch(
    `${process.env.REACT_APP_HN_API_URL}/customers/${id}`,
    req
  );
}

export default DeleteCustomerRecord;
