function FetchCustomerNotes(id, cb){
    fetch(`http://localhost:3010/customers/${id}/notes`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            cb(null, myJson);
        });
}

export default FetchCustomerNotes