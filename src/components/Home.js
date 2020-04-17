import '../App.css';
import React from "react";


export default class HomePage extends React.Component {
    render() {
    return (
        <div id="MainPage">
            <link href='http://serve.fontsproject.com/css?family=Asakim:700'
  rel='stylesheet' type='text/css'></link>

          <div id="header">
                <h2 id="details-header">נתוני הקורונה</h2>
                
    <div id="containers">      
        <div class="option-group">
            <div class="option-container">
                <label class="option" for="option-1">
                <div id = "header-options">
                <sub>החלימו</sub>
                <img  id ="logo-option"src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Like-icon.png"/>
                </div>
                <p id="number-header">2,563</p>

                </label>

                <label class="option" for="option-2">
                <div id = "header-options">
                <sub>חולים</sub>
                <img  id ="logo-option"src="https://cdn1.iconfinder.com/data/icons/people-job/100/Job-plus-27-512.png"/>
                </div>
                <p id="number-header">12,501</p>
                </label>

            </div>
        </div>
        
    <div class="option-group">
            <div class="option-container">
            <label class="option" for="option-3">
            <div id = "header-options">
            <sub>מאושפזים במלונית</sub>
                <img  id ="logo-option"src="https://www.pinclipart.com/picdir/middle/181-1816754_icon-stethoscope-icon-transparent-background-clipart.png"/>
                </div>
                <p id="number-header">1,238</p>
            </label>
            </div>
        </div>
        </div>
        <h5 id="data-update">
            *הנתונים מעודכנים לתאריך 15/4/2020
        </h5>
          </div>
          
        </div>
      );
}
}