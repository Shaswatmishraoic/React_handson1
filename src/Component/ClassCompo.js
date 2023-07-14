import React, { Component } from "react";
import  './class.css';
class ClassCompo extends Component{
    render(){
        return(
            <div class="go">
                <div class='h'>This is my First-Class based compo</div>
                <div class='line'>
                <p>This is done using external css</p>
                <p style={{color:'blue'}}>This is done using external css</p>
                </div>
            </div>
        )
    }
}
export default ClassCompo;
