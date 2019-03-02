import React, { Component } from "react";
import PropTypes from "prop-types";

class ProgressBar extends Component {
  createTable = num => {
    let table = [];
    const numFloor = Math.floor(num);
    // Outer loop to create parent
    for (let i = 0; i < numFloor; i++) {
      let children = [];
      // //Inner loop to create children
      // for (let j = 0; j < num; j++) {
      //   table.push(<div class="tenth_separator fill" />);
      // }
      //Create the parent and add the children
      table.push(<div class="tenth_separator fill" />);
    }

    for (let i = 0; i < 10 - numFloor; i++) {
      table.push(<div class="tenth_separator" />);
    }
    return table;
  };
  render() {
    return (
      <div class="experiential-widget--rang">
        <div className="progress-bar-top">
          <div class="progress-bar--title">{this.props.title}</div>
          <div class="progress-bar--percentage">{this.props.percentage}%</div>
        </div>
        <div
          class="experiential-widget--range-gauge--fill"
          datatype={this.props.percentage / 10}
        >
          {this.createTable(this.props.percentage / 10)}
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  title: PropTypes.string,
  percentage: PropTypes.string
};
export default ProgressBar;
