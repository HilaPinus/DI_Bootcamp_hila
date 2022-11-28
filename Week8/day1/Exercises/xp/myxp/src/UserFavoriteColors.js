// props is the return in tha App.js. I pass them like passing arguments to a function.

const UserFavoriteColors = (props) => {
    const {favanimals} = props; //this is the destructing to the object of 
return (
    <div>
       {props.favanimals.map((element) => {
        return (
            <li> {element} </li>
        )
       })}

    </div>
)

    }
export default UserFavoriteColors;