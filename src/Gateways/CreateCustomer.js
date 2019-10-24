function CreateCustomer(data, cb){
    console.log(data)
    fetch('http://localhost:3010/customers', {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({customers: data})
    })
    .then(async function(response) {
        const json = await response.json();
        json.customer.id = response.url.split("/").pop();
        return json;
    })
    .then(function(myJson) { 
        cb(null, myJson);
    });
}

export default CreateCustomer