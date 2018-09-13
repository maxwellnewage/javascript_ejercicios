let getUserById = (id) => {
    let user = {
        name: "Max",
        id: id,
    };

    return new Promise( (success, error) => {
        if(this.id === 20){
            error('Error! User not exists...');
        } else {
            success(user);
        }
    });
}

getUserById(20).then(user => {
    console.log("The user is " + user.name);
}, (error) => {
    console.log(error);
});