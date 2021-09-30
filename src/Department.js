import logo from './logo.jpg';
import hcbgImage from "./imagen.jpg";
import './Department.css';
import React,{Component,useState} from 'react';
import {variables} from './Variables.js';
import {Link, withRouter} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {Employee} from './Employee';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';



export class Department extends Component{
    
    constructor(props){

        super(props);
        
        this.state={
            departments:[],
            aux:"",
            condition:""
        }
     this.handleClick = this.handleClick.bind(this);
    }
    
       refreshList(){
        fetch(variables.API_URL+'department')
        .then(response=>response.json())
        .then(data=>{
            this.setState({departments:data,departmentsWithoutFilter:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    
    handleClick(){
        var find = 0;
        if (this.nameTextInput !== null) {
            
            this.setState({
              aux:this.nameTextInput.value});

          for(var i=0;i<this.state.departments.length;i++){
           
            if(this.nameTextInput.value==this.state.departments[i].DepartmentName){
                this.setState({
                    condition:"Si se pudo iniciar sesion"});
                    find = 1;
                    window.location.href="/employee";
                    break;
              }
          }
          if(find==0){
            this.setState({
                condition:"El usuario ingresado es incorrecto"});
          }
        }
       }
   

    render(){
        let x = this.state.aux;
        let condicion=this.state.condition;
        const {
            departments,
            modalTitle,
            DepartmentId,
            DepartmentName,fname, setFname
        }=this.state;
        
        return(
    <body>
         {/*Aqui irian los headers, si supiera usarlos!!*/}
     <div className="fondo">
       <img src={logo} className="App-logo" alt="logo" />
            <h3>Bienvenido a SIGED-PUCP</h3>
      <div className="txtUsuario" style={{backgroundColor: 'transparent'}}>
      <input type="text" placeholder="Ingrese su usuario" ref={(ref) => this.nameTextInput = ref} className="form-control" />
      </div>
      <div className="btnIniciar" style={{backgroundColor: 'transparent'}}>
      <br></br>
      <button type="button" className="btn btn-success" onClick={this.handleClick}>Iniciar Sesion</button>
      </div>
      <br></br>
      <h5>{condicion}</h5>
    <br></br>
      </div>

    </body>
        )
    }

}
