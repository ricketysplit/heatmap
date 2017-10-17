import React from "react";
import { getColor } from "../../util";

class HeatZone extends React.Component {
  render() {
    let color;
    if (isNaN(this.props.average)) {
      console.error("Average must be a number");
      color = "purple";
    } else {
      color = getColor(this.props.average);
    }
    const style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 100,
      width: 100,
      backgroundColor: color,
      color: "white",
      fontSize: 24
    };
    return (
      <div style={style}>{this.props.show ? "." + this.props.average : ""}</div>
    );
  }
}

export default HeatZone;
