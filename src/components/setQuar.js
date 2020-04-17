import React from 'react';
import '../App.css';
import geocode from '../utils/geocode'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'


export default class Details extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePhone= this.onChangePhone.bind(this);
    this.onChangeAdress = this.onChangeAdress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      phone:'',
      adress:''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
  onChangeAdress(e) {
    this.setState({
      adress: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      phone: this.state.phone,
      adress:this.state.adress
    }

    console.log(user);

    axios.post('http://localhost:3000/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      phone:'',
      adress:''
    })
    alert("תודה! פרטיך למיפוי הארצי")
  }

  render() {
    return (
      
      <div id = "main">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>
    <link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css"/>
        <form onSubmit={this.onSubmit} id="detailsAdd">
          {/* <div id = "detailsAdd">  */}
            <label id= "detLabel">שם מלא: </label>
            <input  type="text"
                required
                value={this.state.username}
                onChange={this.onChangeUsername}
                /> 
             <label id= "detLabel">מספר טלפון: </label>

              <input  type="text"
                required
                value={this.state.phone}
                onChange={this.onChangePhone}
                /> 
                <label id= "detLabel">כתובת</label>

                <input  type="text"
                required
                value={this.state.adress}
                onChange={this.onChangeAdress}
                />
          {/* </div> */}
          <div className="form-group">
            <input id="createBtn" type="submit" value="הוסף"  />
          </div>
        </form>
        <footer class="footer-distributed">
 
		<div class="footer-left">
 
		<h3>Corona<span>Map</span></h3>
 
	<br/>
  <br/>
		<p class="footer-company-name">מידע עם חולי קורונה מאומתים  בהתבסס על נתוני משרד הבריאות</p>
		</div>
 
		<div class="footer-center">
 
		<div>
		<i class="fa fa-map-marker"></i>
		<p><span>הלל יפה 21</span> חדרה, מחוז חיפה</p>
		</div>
 
		<div>
		<i class="fa fa-phone"></i>
		<p>04-62408006</p>
		</div>
 
		<div>
		<i class="fa fa-envelope"></i>
		<p><a href="mailto:support@company.com">Rawan.younis@lbhaifa.health.gov.il</a></p>
		</div>
 
		</div>
 
		<div class="footer-right">
 
		<p class="footer-company-about">
		<span>לפרטים נוספים</span>
תוכלו למצוא אותנו גם ברשתות החברתיות
		</p>
 
		<div class="footer-icons">
 
		<a href="https://he-il.facebook.com/israelgov/"><i class="fa fa-facebook" ></i></a>
		<a href="https://twitter.com/israelmoh"><i class="fa fa-twitter"></i></a>
		<a href="https://www.instagram.com/health.gov.il/"><i class="fa fa-instagram"></i></a>
 
		</div>
 
		</div>
 
		</footer>
      </div>
    )
  }
}

  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }