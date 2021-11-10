import {useState} from "react"

function Show(props) {
    // const cheese = props.data.filter( element => element._id === props.match.params.id)

    const id = props.match.params.id
    const cheeses = props.data
    const cheese = cheeses.find((singleCheese) => {
        return singleCheese._id === id
    })

    const [editForm, setEditForm] = useState(cheese)

    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateCheese(editForm, cheese._id)
        props.history.push("/")
    }

    const removeCheese = () => {
        props.deleteCheese(cheese._id)
        props.history.push("/")
    }

    return <div>
        <h1>{cheese.name}</h1>
        <img className="cheeseimg" src={cheese.image} alt={cheese.name} />
        <h3>Country of Origin: {cheese.countryOfOrigin}</h3>
        <button onClick={removeCheese} id="delete">
            DELETE
        </button>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="image"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.countryOfOrigin}
            name="countryOfOrigin"
            placeholder="countryOfOrigin"
            onChange={handleChange}
          />
          <input type="submit" value="Update Cheese" />
        </form>
    </div>
}

export default Show