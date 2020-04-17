export default async data => {
  const response = await fetch(
    `${process.env.REACT_APP_HN_API_URL}/customers`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ customers: data })
    }
  );
  return response.json();
};
