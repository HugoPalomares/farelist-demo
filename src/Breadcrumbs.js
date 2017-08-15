import React, { Component } from 'react';
import './Breadcrumbs.css';
import Crumb from './Crumb';

class Breadcrumbs extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      crumbs: []
    };
    this.updateStates = this.updateStates.bind(this);
  }  

  updateStates(json) {
    this.setState({
      crumbs: json.data.breadcrumbs
    });
  }

  componentWillMount(props) {
    this.updateStates(this.props.TrfxJson);
  }
  
  render() {
    return (
      <div className="row">
        {/*<Fare listOfFares={this.state.fares} callToAction={this.props.callToAction} />*/}
        <nav>
          <div className="nav-wrapper">
            <div className="col s12">
              {/*<a href="#!" className="breadcrumb">First</a>*/}
              <Crumb listOfBreadcrumbs={this.state.crumbs} originalUrl={this.props.originalUrl} />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Breadcrumbs;