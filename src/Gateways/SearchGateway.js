function SearchGateway(query, cb){
    fetch('http://localhost:3010/customers?systems=SingleView,UHTDummy,JigsawDummy,UHWDummy,AcademyDummy')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            cb(myJson);
        });
}

export default SearchGateway