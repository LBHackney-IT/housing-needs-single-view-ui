function FetchCustomerNotes(id){
    return fetch(`http://localhost:3010/customers/${id}/notes`)
        .then(function(response) {
            return response.json();
        })
}

export default FetchCustomerNotes