import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class RootComponent extends Component{
    render(){
        return(<div>
            <form>
                <InputLastName/>
                <br/>
                <InputFirstName/>
                <br/>
            </form></div>)
    }
}


const InputLastName  = () =>
    (
        <label>
            Nom :
            <input type={"text"} name={"lastname"}/>
        </label>
    )

const InputFirstName  = () =>
    (
        <label>
            Prénom :
            <input type={"text"} name={"firstname"}/>
        </label>
    )



ReactDOM.render(<RootComponent/>, document.getElementById("root"));
