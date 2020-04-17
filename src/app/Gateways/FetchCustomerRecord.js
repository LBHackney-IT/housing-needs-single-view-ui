export default async id => {
  const response = await fetch(
    `${process.env.REACT_APP_HN_API_URL}/customers/${id}/record`,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  return response.json();
};
