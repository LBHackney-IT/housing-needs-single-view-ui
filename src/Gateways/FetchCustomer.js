function FetchCustomer(id){
    return fetch(`${process.env.REACT_APP_HN_API_URL}/customers/${id}`)
        .then(function(response) {
            return response.json();
        })
}

export default FetchCustomer