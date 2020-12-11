import React from 'react';
import Smurf from "./Smurf"
import {connect} from "react-redux"
import { fetchSmurfs } from "../actions"

export class SmurfDisplay extends React.Component {
    componentDidMount() {
        this.props.fetchSmurfs()
    }    

    render() {
        console.log(this.props)
        return(<div>
            <h1>Smurf Village Residents</h1>
            {this.props.isLoading ? <h2>The Smurfs are coming!</h2> : ""}
            {this.props.error ? (<h2>Gargamel is up to no good... {this.props.error}</h2>) : ""}
            {!this.props.isLoading ? this.props.smurfs.map(item => {
                return <Smurf smurf={item} key={item.id} />
            }) : ""}
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.