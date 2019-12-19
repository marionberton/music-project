import React from "react";
import "./cardItem.css";

export class Item extends React.Component {
  render() {
    return (
      
        <div className="eddisplaycontainer">
          <div>
            <object type="image/svg+xml" data={this.props.picture}></object>
          </div>
          <div className="textcontainer">
            <h2 className="title">{this.props.title}</h2>
            <p className="date">{this.props.date}</p>
            <p className="jobtitle">{this.props.jobTitle}</p>
            <p>{this.props.paragraph}</p>
          </div>
        </div>
       
    );
  }
}

