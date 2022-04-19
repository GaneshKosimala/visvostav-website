import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import jsPDF from "jspdf";
import festlogo from '../images/VisvotsavLogo.png';
import axios from 'axios';


var events = [
  {
    value:'select event',
    label:'select event'
  },
  {
    value:'Technical  Quiz',
    label:'Technical Quiz'
  },
  {
    value:'Project Expo',
    label:'Project Expo'
  },
  {
    value:'Coding',
    label:'Coding'
  },
  {
    value:'Poster Presentation',
    label:'Poster Presentation'
  },
  {
    value:'Paper Presentation',
    label:'Paper Presentation'
  },
  {
    value:'Circuitrix',
    label:'Circuitrix'
  }
]

var branches = [
    {
      value:'select branch',
      label:'select branch'
    },
    {
      value:'CSE',
      label:'CSE'
    },
    {
      value:'ECE',
      label:'ECE'
    },
    {
      value:'MECH',
      label:'MECH'
    },
    {
      value:'EEE',
      label:'EEE'
    },
    {
      value:'CIVIL',
      label:'CIVIL'
    }
]



class Register extends Component {
  constructor() {
    super()
    this.state = {
      collegename: '',
      member: '',
      names: [],
      programs:'',
      noofmembers:'',
      branch:'',
      rollno:'',
      rollnumbers:[],
      email:'',
      participants:'',
      strollnos:'',
      refno:'',
      idnumber:'',
      value:false,
      rvalue:false,
      flag:false,
      refnoerr:'',
      emailerr:'',
      noofmemerr:'',
      clgnameerr:'',
      eventerr:'',
      brancherr:''
    }
    this.changecollegename = this.changecollegename.bind(this);
    this.changenoofmem = this.changenoofmem.bind(this);
    this.saveInput = this.saveInput.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.pdfGenerate = this.pdfGenerate.bind(this);
    this.handleBranch = this.handleBranch.bind(this);
    this.saverollno = this.saverollno.bind(this);
    this.addNewrollno = this.addNewrollno.bind(this);
    this.changerefno = this.changerefno.bind(this);
    this.showgroup = this.showgroup.bind(this);
    this.showgrouprollno=this.showgrouprollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  changecollegename(event) {
    this.setState({
      collegename: event.target.value
    })
  }

  handleChange(e){
    this.setState({programs:e.target.value});
    // console.log(e.target.value);
  }

  handleBranch(e){
    this.setState({branch:e.target.value});
    // console.log(e.target.value);
  }

  saveInput = (e) => {
    this.setState({ member: e.target.value });
  }

  addNewItem = (e) => {
    e.preventDefault()
    let { names, member } = this.state;
    this.state.names.push(member);
    this.setState({
      value:true
    })
  }

    
  saverollno = (e) => {
    this.setState({ rollno: e.target.value });
  }

  addNewrollno= (e) => {
    e.preventDefault()
    let { rollnumbers, rollno } = this.state;
    this.state.rollnumbers.push(rollno);
    this.setState({
      rvalue:true
    })
   
  }

  changenoofmem(event) {
    this.setState({
     noofmembers: event.target.value
    })
    // console.log(this.state.noofmembers)
  }
  changeemail(event) {
    this.setState({
      email: event.target.value
    })
  }
  changerefno(event){
    this.setState({
      refno : event.target.value
    })
  }
  showgroup(event){
    event.preventDefault()
    this.setState({
      value:false
    })
  }
  showgrouprollno(event){
    event.preventDefault()
    this.setState({
      rvalue:false
    })
  }
  validate(){
    let refnoerr='';
    let emailerr='';
    let noofmemerr='';
    let eventerr='';
    let brancherr='';
    let clgnameerr='';
    if(!this.state.collegename){
        clgnameerr = "College Name is Required"
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!this.state.email || reg.test(this.state.email) === false){
      emailerr  = "Email Field is Invalid";
    }
    if(!this.state.programs){
      eventerr = "Event is not selected"
    }
    if(!this.state.branch){
      brancherr = "Branch is not selected"
    }
    const regex = /[0-9]/
    if(!this.state.noofmembers || regex.test(this.state.noofmembers) === false){
      noofmemerr = "Members filed is Invalid"
    }
    const regextransaction = /^\d{7}$/
    if(!this.state.noofmembers || regextransaction.test(this.state.refno) === false){
      refnoerr = "DUI number filed is Invalid"
    }
    if(clgnameerr || brancherr || eventerr || refnoerr || noofmemerr ||emailerr){
      this.setState({clgnameerr,brancherr,eventerr,refnoerr,noofmemerr,emailerr})
      return false;
    }
    return true;
  }
  onSubmit(event) {
    event.preventDefault()
    if(this.validate()){
    let x = Math.floor((Math.random() * 90000)+10000);
    const part = this.state.names.join(',').toString()
    const rnos = this.state.rollnumbers.join(',').toString()
    this.setState({
      participants:part,
      strollnos:rnos,
      idnumber:x
    })
    const registered = {
      selectedevent:this.state.programs,
      collegename : this.state.collegename,
      branch:this.state.branch,
      noofmembers:this.state.noofmembers,
      names:part,
      rollnos :rnos,
      email : this.state.email,
      refno:this.state.refno
    }
    axios.post('http://localhost:4000/app/signup',registered)
    .then(
      response =>{
        // console.log(response)
        this.setState({
          flag:true
        })
        // console.log(response.status)
      })
      .catch(
        err => {
          alert(`${err} : Please try again`)
        }
      )
    }
  }

  payment(event){
    event.preventDefault()
    window.open("https://www.onlinesbi.com/sbicollect");
  }
  pdfGenerate = ()  => {
    var doc = new jsPDF('p','pt','a4');
    this.setState({
      flag:false
    })
    doc.html(document.querySelector("#receipt"),{
      callback:function(pdf){
        pdf.save('receipt.pdf');
      }
    })
  }

  render() {
    return (
      <div>
    <div className='reg'>
    {!this.state.flag &&
     <form onSubmit={this.onSubmit}>
        <div className='register-body'>
          <div className='register-section shadow p-3 mb-5 bg-body rounded'>
            <div className='fields'>
              <h1 className='display-1'>Register</h1>
              <hr />
              <div>
              <button type="button" class="btn btn-warning my-2 mx-2" onClick={this.payment}>Complete your Payment here!</button>
              <Link to='/paymentrules'target="_blank" style={{ textDecoration: 'none' }}><button type="button" class="btn btn-secondary my-1 mx-2">Payment procedure</button></Link>
              <br />
              <label htmlFor="exampleFormControlInput1" class="form-label my-1 mx-2 text">Select Event</label>
            <select value={this.state.programs} onChange={this.handleChange}>
              {events.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <div className='text-danger'>{this.state.eventerr}</div>
            {this.state.programs.length !== 0 && (<h3 className='my-2'>You selected : {this.state.programs}</h3>)}
          </div>
          <div className="row mb-3">
            <div className="col-sm-10">
            <label htmlFor="exampleFormControlInput1" class="form-label my-1 mx-2 text">College Name</label>
              <input type="text" className="form-control my-2" id="inputEmail3" placeholder='College Name' onChange={this.changecollegename} value={this.state.collegename} />
            </div>
          </div>
          <div className='text-danger'>{this.state.clgnameerr}</div>
                <div>
           <label htmlFor="exampleFormControlInput1" class="form-label my-1 mx-2 text">Select Branch</label>
            <select value={this.state.branch} onChange={this.handleBranch}>
              {branches.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            {this.state.branch.length != 0 && (<h3 className='my-2'>You selected : {this.state.branch}</h3>)}
            </div>
            <div className='text-danger'>{this.state.brancherr}</div>
          <div class="mb-3">
            <label  class="form-label my-1 text">No of Members in group</label>
            <input type="text" class="form-control my-1"  placeholder="0" onChange={this.changenoofmem} />
          </div>
          <div className='text-danger'>{this.state.noofmemerr}</div>
          <div>
          
            <label htmlFor='exampleFormControlInput1' className='form-label my-2 text'>Name</label>
            <input type='text'  class="form-control my-1 mx-2"  onChange={this.saveInput} placeholder='enter student name' />
           
            <button className='btn btn-success my-2' onClick={this.addNewItem}>Add Name</button>
            {this.state.value && <div className='mx-2 text-success'>user added successfully continue adding all the members of group</div>}
            {this.state.value && <div><button className='btn btn-info' onClick={this.showgroup}>Group info</button>
            <ol>
              {this.state.names.map((subitems, sindex) => {
                return <li key={sindex}>{subitems}</li>
              })}
            </ol>
            </div>}
          </div>
            <div>
            <label htmlFor='exampleFormControlInput1' className='form-label my-2 text'>Roll No</label>
            <input type='text' class="form-control my-1 mx-2" onChange={this.saverollno} placeholder='enter full roll number'/>
            <button className='btn btn-success my-2' onClick={this.addNewrollno}>Add Roll No</button>
            {this.state.rvalue && <div className='mx-2 text-success'>roll no added successfully continue adding all the roll numbers of group</div>}
            {this.state.rvalue && <div><button className='btn btn-info' onClick={this.showgrouprollno}>Roll No info</button>
            <ol>
              {this.state.rollnumbers.map((subitems, sindex) => {
                return <li key={sindex}>{subitems}</li>
              })}
            </ol>
            </div>}
            
          </div>
        
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label my-2 text">Email</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your mail"  onChange={this.changeemail} value={this.state.email}/>
        </div>
        <div className='text-danger'>{this.state.emailerr}</div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label my-2 text">Transaction Reference Number</label>
            <div className='refbtn'>
                        <a href="#" className="btn btn-warning" style={{ marginRight: '5%' }}>DUI</a>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your reference number last 7 digits" onChange={this.changerefno} />
            </div>
        </div>
        <div className='text-danger'>{this.state.refnoerr}</div>
        </div>
        <div className='registerend'>
     <input type="submit" class="btn btn-info mx-4 my-4" value="Register" />
     <Link to='/' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-danger my-4">Back to Home</button></Link>
    </div>  
        </div>
      </div>
      </form>}
      </div>
     {this.state.flag && <div id='receipt' className='receipt'><br/>
     <div className="container-fluid topcontainer2 text-center">
        <div><img src={festlogo} className='festlogo' /></div>
         <div><h1 className='display-3'>VISVOSTAVAM</h1></div>
      </div>
      <div>
      <h4 className='pdfdetails'>Id number : {this.state.idnumber}</h4>
        <h4 className='pdfdetails'> Selected Event : {this.state.programs}</h4>
        <h4 className='pdfdetails'>College Name : {this.state.collegename}</h4>
        <h4 className='pdfdetails'>Branch : {this.state.branch}</h4>
        <h4 className='pdfdetails'>No of Members : {this.state.noofmembers}</h4>
        <h4 className='pdfdetails'>Group Members : {this.state.participants}</h4>
        <h4 className='pdfdetails'>Roll Numbers : {this.state.strollnos}</h4>
        <h4 className='pdfdetails'>Email : {this.state.email}</h4>
        <h4 className='pdfdetails'>Transaction Reference Number : DUI{this.state.refno}</h4>
      </div>
      
      
            </div>}
            {this.state.flag && <div className='text-center'> <button className='btn btn-secondary text-center' onClick={this.pdfGenerate} >Download Pdf</button>
            <Link to='/' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-dark my-1 mx-2">Back to Home</button></Link>
            <div className='text-danger text-center'>* If any details are incorrect fill out register form again</div>
            </div>}
      </div>
    )
  }
}


export default Register;