import React, { Component } from 'react';
import Navbar from './Navbar';
import './dashboard.css'

import UserAPI from '../../api/API-User';

export class Dashboard extends Component {
    logout = () => {
        UserAPI.logOut().then(((response)=>{
          console.log(response.data)
          if (response.data.success) {
              this.props.history.push('/login')
          }
        }))
      }

    render() {
        return (
            <div>
              <Navbar logout={this.logout}/>
            </div>
        )
    }
}

export default Dashboard
