import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class RootComponent extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            lastName:"",
            firstName: "",
            birthdate: ""
        };
        this.handleChangeLastName =this.handleChangeLastName.bind(this);
        this.handleChangeFirstName =this.handleChangeFirstName.bind(this);
    }

    render(){
        return(<div>
            <form>
                <InputLastName defaultValue={this.state.lastName} handler={this.handleChangeLastName}/>
                <br/>
                <InputFirstName defaultValue={this.state.firstName} handler={this.handleChangeFirstName}/>
                <br/>
                <InputBirthdate/>
                <label>{this.state.firstName + this.state.lastName}</label>
            </form></div>)
    }

    handleChangeLastName (value) {
        this.setState({
            lastName: value
        });
    }

    handleChangeFirstName (value) {
        this.setState({
            firstName: value
        });
    }

}


const InputLastName  = (props) => {

    const localHandler = (e) => {
        props.handler(e.target.value);
    }
    return (<label>
        Nom :
        <input type="text" name="lastname" defaultValue={props.defaultValue} onChange={localHandler}/>
    </label>
    );
}

const InputFirstName  = (props) => {
    const localHandler = (e) => {
        props.handler(e.target.value);
    }
    return(
        <label>
            Prénom :
            <input type="text" name="firstname" defaultValue={props.defaultValue} onChange={localHandler}/>
        </label>
    );
}
const InputBirthdate  = () =>
    (
        <label>
            Date de naissance :
            <input type="text" name="birthdate" />
        </label>
    )


ReactDOM.render(<RootComponent/>, document.getElementById("root"));


