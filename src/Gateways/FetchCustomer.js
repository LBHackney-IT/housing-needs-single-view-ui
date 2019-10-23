function FetchCustomer(id){
    return fetch(`http://localhost:3010/customers/${id}`)
        .then(function(response) {
            return response.json();
        })
}

export default FetchCustomer