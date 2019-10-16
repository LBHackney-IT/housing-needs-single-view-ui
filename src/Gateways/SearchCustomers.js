function SearchCustomers(query, cb){
    let systems = ['SINGLEVIEW', 'UHT-Contacts', 'UHT-HousingRegister', 'UHW', 'JIGSAW', 'ACADEMY'].join(',')

    let queryParams = {systems}
    for (let [k, v] of Object.entries(query)) {
        if(v !== ''){
            queryParams[k] = v;
        }
    }
    let queryString = Object.entries(queryParams).map(([k, v]) => {
        return `${k}=${v}`
    }).join('&')

    fetch(`http://localhost:3010/customers?${queryString}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            cb(myJson);
        });
}

export default SearchCustomers