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
        //const navigate = useNavigate();
        if (this.nameTextInput !== null) {
            
            this.setState({
              aux:this.nameTextInput.value});
            /*  
              if(this.nameTextInput.value=="Daniel"){
                this.setState({
                    condition:"Si se pudo iniciar sesion"});
              }
          */
          for(var i=0;i<this.state.departments.length;i++){
           
           /* this.setState({
                condition:this.state.departments.length});
           */
            if(this.nameTextInput.value==this.state.departments[i].DepartmentName){
                this.setState({
                    condition:"Si se pudo iniciar sesion"});
                    find = 1;
                    //navigate('/employee');
                    // <Link to="/employee">Employee</Link>
                    <Route exact path="/">
                    <Employee/>
                  </Route>
                    //this.props.navigation.navigate('Employee')
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


        /*document.addEventListener('click', function(e){
            if(e.target && e.target.id== 'btnEnviar'){
                 var user = document.getElementById("txtUsuario").value;
                 var password = document.getElementById("txtPassword").value;
                 document.getElementById("lblNombre").value = user;
            }
        });
        
        <input type="text" id="txtUsuario" >    
        </input>
        <br></br>
        <input type="text" id="txtPassword"></input>
        <button type="button"
        id="btnEnviar" >submit</button>
        <br></br>
        <label id="lblNombre"></label>
        
        
        */


        return(
            <div>
              
                <h3>This is Department page</h3>
                <table className="table table-striped">
    <thead>
    <tr>
        <th>
            <div className="d-flex flex-row">

            </div>
            DepartmentId
        </th>
        <th>
        <div className="d-flex flex-row">
            </div>
            DepartmentName
      
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <body>
        {departments.map(dep=>
            <tr key={dep.DepartmentId}>
                <td>{dep.DepartmentId}</td>
                <td>{dep.DepartmentName}</td>
                <td>
                </td>
            </tr>
            )}
      <input type="text" placeholder="Enter a new name" ref={(ref) => this.nameTextInput = ref} className="form-control" />
      <button type="button" className="btn btn-success" onClick={this.handleClick}>Iniciar</button>
      <br></br>
      <h5>Usuario: {x}</h5>
      <h5>{condicion}</h5>
    <br></br>
      
    </body>
    </table>

 </div>

        )
    }

}