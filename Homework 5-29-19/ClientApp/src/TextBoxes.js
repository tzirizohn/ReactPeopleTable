import React from 'react';

export default class TextBoxes extends React.Component{


    render() {
        return (
            <div className='row'>
                <div className='col-md-4'>
                    <input value={this.props.First} onChange={this.props.FirstNameVAl} type='text' className='form-control' placeholder='First Name' />
                    <input value={this.props.Last} onChange={this.props.LastNameVAl} type='text' className='form-control' placeholder='Last Name' />
                    <input value={this.props.Age} onChange={this.props.AgeVal} type='text' className='form-control' placeholder='Age' />
                </div>
                <div className='col-md-1'>
                    <button onClick={this.props.AddPerson} className='btn btn-primary'>Add</button>
                    <button onClick={this.props.ClearTable} className='btn btn-success'>Clear</button>
                </div>   
          </div>
        );
    }
}