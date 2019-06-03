import React from 'react';

export default class TableDisplay extends React.Component {
     
    render() {
        const { People } = this.props;
        return ( 
            <div>         
                <table className='table table-bordered'> 
                    <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Age</td> 
                    </tr>
                    
                     {People.map((p, idx)=>
                     < tr key={idx} >
                        <td>{p.FirstName}</td>
                        <td>{p.LastName}</td>
                        <td>{p.Age}</td>
                    </tr>
                      )}    
                    </tbody>
               </table>
            </div>   
       );
    }
   
}