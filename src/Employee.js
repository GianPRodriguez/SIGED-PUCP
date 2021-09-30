import React,{Component} from 'react';

export class Employee extends Component{
    constructor (props){
        super ();
    
        this.state = {
          people: []
        }
    
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick (){
        if (this.nameTextInput !== null) {
          this.setState({
            people: this.state.people.concat(this.nameTextInput.value)
    
          });
        }
      }

      render (){
        let names = this.state.people.map(name => {
          return <li>{name}</li>;
        });
        return (      
          <div className="row">
              <div className="col-md-4 col-md-offset-2">
                <br />
                <input type="text" placeholder="Enter a new name" ref={(ref) => this.nameTextInput = ref} className="form-control" />
              </div>
              <div className="col-md-4">
                <br />
                <button type="button" className="btn btn-success" onClick={this.handleClick}>Add</button>
              </div>
              <br />
    
              <div className="row">
                <div className="col-md-4 col-md-offset-2">
                  <ol>
                    {names}
                  </ol>
                </div>
              </div>
              <br />
          </div>
        );
      }
}