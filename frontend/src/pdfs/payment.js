import { Component } from 'react';
import pdf from './paymentrules.pdf';
import { Link } from 'react-router-dom';
import '../App.css';
class Payment extends Component{
    render(){
        return(
           
            <div class="container rules">
            <h1>Rules for the Fest</h1>
            <button type="button" class="btn btn-outline-dark mx-2"><a href={pdf} target = "_blank">Payment procedure</a></button>
            <Link to='/register' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-warning my-4">Back to Register</button></Link>
            </div>
        

        )
    }
}

export default Payment;