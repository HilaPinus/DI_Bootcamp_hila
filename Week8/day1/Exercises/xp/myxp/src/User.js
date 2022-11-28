
const User = (props) => {
    const {firstname,lastname} = props;
    return(
        <div>
        <h3> {firstname} </h3>
        <h3> {lastname} </h3>
        </div>
    )
}

export default User;

