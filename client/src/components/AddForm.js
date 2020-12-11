import React from 'react';
import { connect } from "react-redux"
import { addSmurf } from "../actions"

class AddForm extends React.Component {
    state = {
        iName: "",
        iPosition: "",
        iNickname: "",
        iDescription: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addSmurf({
            name: this.state.iName, 
            position: this.state.iPosition,
            nickname: this.state.iNickname,
            description: this.state.iDescription,
            id: Math.round(Math.random() * 10000)
        })
        this.setState({iName: "", iPosition: "", iNickname: "", iDescription: ""})
    }

    render() {
        console.log("FORM: ", this.state)
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChange} name="iName" id="name" value={this.state.iName} />
                    <label htmlFor="name">Position:</label><br/>
                    <input onChange={this.handleChange} name="iPosition" id="position" value={this.state.iPosition} />
                    <label htmlFor="name">Nickname:</label><br/>
                    <input onChange={this.handleChange} name="iNickname" id="nickname" value={this.state.iNickname} />
                    <label htmlFor="name">Description:</label><br/>
                    <input onChange={this.handleChange} name="iDescription" id="description" value={this.state.iDescription} />
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { addSmurf })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.