import './Exercise4.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };


const Exercise4 = (props) => {
    return(
        <div className="divstyle">
            <h1 style={style_header}> This is a Header </h1>
            <p className='para'> This is a Paragraph </p>
            <a href="#"> This is a link </a>
            <form><h1>This is a Form</h1>Enter your name  </form>
            <input type="text"></input>
            <button type="submit">Submit</button><br></br>
            <img src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReact_%2528JavaScript_library%2529&psig=AOvVaw1W6oSHGq6trMvq_UJEMaEh&ust=1669746663270000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMiolpfB0fsCFQAAAAAdAAAAABAE`} />
            <ul> <p>here's a list</p>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>

        </div>
    )
}

export default Exercise4
