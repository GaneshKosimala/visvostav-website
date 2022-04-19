import React, { Component } from 'react';
import '../App.css';

class Basepart extends Component {
  constructor() {
    super()
    this.state={

    }
  }
  fb(event){
    event.preventDefault()
    window.location.href='https://www.facebook.com'
  }

  insta(event){
    event.preventDefault()
    window.location.href='https://www.instagram.com/p/CcW4QjbJPZC/?igshid=MDJmNzVkMjY='
  }
render(){

      return (
        <div>
        <div class="container my-4">
        <h1 className='card-text text-danger display-6 mx-4'>Follow Us On</h1><hr />
      </div>
        <div className='base'>
            <div>
            <button type="button" class="btn btn-primary my-2 mx-2" onClick={this.fb}>Facebook</button>
            </div>
           <div>
           <button type="button" class="btn btn-warning my-2 mx-2" onClick={this.insta}>Instagram</button>
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