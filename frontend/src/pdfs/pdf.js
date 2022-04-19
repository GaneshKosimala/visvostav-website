import { Component } from 'react';
import pdf from './rulesforfest.pdf';
import { Link } from 'react-router-dom';
import '../App.css';
class Download extends Component{
    render(){
        return(
           
            <div class="container rules">
            <h1>Rules for the Fest</h1>
            <button type="button" class="btn btn-outline-dark mx-2"><a href={pdf} target = "_blank">Download pdf</a></button>
            <Link to='/' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-warning my-4">Back to Home</button></Link>
            </div>
        

        )
    }
}

export default Download;


// import React, { Component } from 'react';
// import '../App.css';


// class Item extends Component {
//   constructor() {
//     super()
//     this.state = {
//       collegename: '',
//       member:'',
//      names: []
//     }
//     this.changecollegename = this.changecollegename.bind(this);
//     this.saveInput = this.saveInput.bind(this);
//     this.addNewItem = this.addNewItem.bind(this);
   
//   }
//   changecollegename(event) {
//     this.setState({
//       collegename: event.target.value
//     })
//   }
//   saveInput = (e) => {
//     this.setState({member : e.target.value});
//   }

//   addNewItem = (e) => {
//     e.preventDefault()
//     let { names, member } = this.state;
//     this.state.names.push(member);
//     console.log(this.state.names)
//     console.log(this.state.collegename)
//   }

//   render(){
//     return(
//       <form onSubmit={this.onSubmit}>
//       <div className='register-body'>
//         <div className='register-section shadow p-3 mb-5 bg-body rounded'>
//           <div className='fields'>
//             <h1 className='display-1'>Register</h1>
//             <hr />
//             <div className="row mb-3">
//               <div className="col-sm-10">
//                 <input type="text" className="form-control" id="inputEmail3" placeholder='College Name' onChange={this.changecollegename} value={this.state.collegename} />
//               </div>
//             </div>
 

              
// <div>
//   <label htmlFor='exampleFormControlInput1' className='form-label my-2 text'>Name</label>
//   <input type='text' onChange={this.saveInput} />
//   <button onClick={this.addNewItem}>Add Item</button>
//   <ol>
//     {this.state.names.map((subitems,sindex) => {
//       return <li key={sindex}>{subitems}</li>
//     })}
//   </ol>
//   {this.state.names}
//   {this.state.member !==0 && <h3>collegename : {this.state.member}</h3>}
// </div>
//           </div>
//         </div>
//       </div>
//       </form>
//     )
//   }
// }


// export default Item;