import User from './User';
import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from './Exercise4';
function App() {
    const myuser = {     
      firstname: 'Bob',
      lastname: 'Dylan',
      favanimals : ['Horse','Turtle','Elephant','Monkey']
     }


     // what gets to the web page
  return (
    // <>
    //       <User firstname={myuser.firstname} lastname={myuser.lastname}/>
    //       <UserFavoriteColors favanimals={myuser.favanimals}/>
    
          <Exercise4 />

          // </>
    );
}
export default App;