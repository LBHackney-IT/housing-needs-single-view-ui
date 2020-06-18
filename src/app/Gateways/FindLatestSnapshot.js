import findSnapshots from './FindSnapshots';

export default async ({ customerId }) => {
  const { success, data } = await findSnapshots({ customerId });

  if (success) {
    return {
      success,
      data: data.length > 0 ? data[0] : null,
    };
  }

  return { data: null, success: false };
};
