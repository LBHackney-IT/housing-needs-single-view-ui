function FetchCustomerDocuments(id){
  return fetch(`http://localhost:3010/customers/${id}/documents`)
      .then(function(response) {
          return response.json();
      });
}

export default FetchCustomerDocuments