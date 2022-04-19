import React, { Component } from 'react';
import '../App.css';

class Basepart extends Component {

  render(){

      return (
        <div>
          <div className='querymail mx-2'>
          Lost your document! mail us with DUI number : <span className='text-danger'>visvotsavqueries@gmail.com</span>
          </div>
          <hr />
        <div className='base'>
       <div> <h1 className='card-text text-danger display-6'>Follow Us :</h1></div>
       <div>
           <a href='https://www.facebook.com/pbrvitsofficial/' className='socialmedia' target="_blank" rel='noreferrer noopener' style={{ textDecoration: 'none'}}>Facebook</a>
           </div>
           <div>
           <a href='https://www.instagram.com/p/CcW4QjbJPZC/?igshid=MDJmNzVkMjY=' className='socialmedia' target="_blank" rel='noreferrer noopener' style={{ textDecoration: 'none'}}>Instagram</a>
           </div>
        </div>
       
        <div>
                <p className="display-6 devdetails">
                Developed by © K GANESH , P AMULYA 
                </p>
            </div>
    </div>
      )
    }

}
export default Basepart;