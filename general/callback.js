let getUserById = (id, callback) => {
    let user = {
        name: "Max",
        id: id,
    };

    if(id === 20){
        callback('Error! User not exists...');
    } else {
        callback(null, user);
    }
}

getUserById(10, (err, user) => {
    if(err){
        console.log(err);
    } else {
        console.log('User', user);
    }
    
});