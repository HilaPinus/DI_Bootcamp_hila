const getUser = () => {
    fetch('http://localhost:3000')
    .then(res => res.json())
    .then(user => {
        getUser(user);
    })
    .catch(e => {
        console.log(e);
    })
}

getUser();