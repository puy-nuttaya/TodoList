import React, { Component } from 'react';
import './App.css';

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            texts: 0,
            array: [
            ]
        };
    }

     onAdd = () => {
         this.setState({ texts: this.state.texts +1,array: 
             this.state.array.concat({id:this.state.texts,num:document.getElementById("message").value})});
     }

    

    onDelete = () => {
       this.setState({ texts: this.state.texts -1,array:
          this.state.array.splice(1)});
          
    }

    render() {

        console.log('render?');
        var list = this.state.array.map((value) => {
            
            return (
                <div >
                    <li 
                     key = {value.id}
                     >
                     {value.num}
                     <button onClick={this.onDelete} >Delete</button>
                    </li>
                </div>

            );
        });
        console.log('render?);')

        return (
            
            <div>
               
                    <h1>Todo List</h1>
                
                    <input type="text" name="message" id="message"></input>
                    <button onClick={this.onAdd}>Add</button>

                    <h2>Completed {this.state.texts}</h2>
                
                    {list}
            </div>
            
        );
    }
    
}

export default App;