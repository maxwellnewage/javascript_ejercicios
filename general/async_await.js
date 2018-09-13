let getName = async(id) => {
    if(id === 1){
        return "Max";
    } else {
        throw new Error('Name not exists')
    }
};

let hello = async(id) => {
    let name = await getName(id);

    return 'Hi ' + name;
};

hello(1)
    .then(res => console.log(res))
    .catch(err => console.log(err));