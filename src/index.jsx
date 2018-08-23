import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class RootComponent extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            lastName : "Salas",
            firstName : "Victor"
        };
    }

    render(){
        return(<div>
            <form>
                <InputLastName defaultLastName={this.state.lastName} toto={1}/>
                <br/>
                <InputFirstName defaultFirstName={this.state.firstName}/>
                <br/>
            </form></div>)
    }
}


const InputLastName  = ({defaultLastName}) =>
    (
        <label>
            Nom :
            <input type="text" name="lastname" defaultValue={defaultLastName}/>
        </label>
    )

const InputFirstName  = ({defaultFirstName}) =>
    (
        <label>
            Prénom :
            <input type="text" name="firstname" defaultValue={defaultFirstName}/>
        </label>
    )



ReactDOM.render(<RootComponent/>, document.getElementById("root"));
