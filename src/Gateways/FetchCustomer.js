function FetchCustomer(id, cb){
    fetch(`http://localhost:3010/customers/${id}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            cb(null, myJson);
        });
}

export default FetchCustomer