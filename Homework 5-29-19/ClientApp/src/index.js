import React from 'react';
import { render } from 'react-dom';
import TextBoxes from './TextBoxes';
import TableDisplay from './TableDisplay';

export default class App extends React.Component {
    state= {
        FirstName: '',
        LastName: '',
        Age: '',
        People: []
    }  

    FirstNameVAl = e => {
        this.setState({ FirstName: e.target.value });   
    }

    LastNameVAl = e => {
        this.setState({ LastName: e.target.value });
    }

    AgeVal = e => {
        this.setState({ Age: e.target.value }); 
    }

    clearTextBoxes = () => {
        this.setState({ FirstName: '', LastName: '', Age: '' });
    }

    Add = () => {
        const copy = [...this.state.People];
        const { FirstName, LastName, Age } = this.state;
        const person = { FirstName, LastName, Age };
        copy.push(person);
        this.setState({ People: copy }); 
        this.clearTextBoxes();            
    }

    ClearTable = () => {
        this.setState({ People: [] });
    }
       

    render() {
        return (
            <div>
                <TextBoxes FirstNameVAl={this.FirstNameVAl} LastNameVAl={this.LastNameVAl} AgeVal={this.AgeVal} AddPerson={this.Add} ClearTable={this.ClearTable}
                    First={this.state.FirstName} Last={this.state.LastName} Age={this.state.Age}/>
                <TableDisplay People={this.state.People} />
            </div>
        );
    }
}   


render(<App />, document.getElementById('root'));