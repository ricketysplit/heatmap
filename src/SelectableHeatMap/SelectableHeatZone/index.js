import React from "react";

class SelectableHeatZone extends React.Component {
  render() {
    const style = {
      height: 100,
      width: 100,
      border: "1px solid red"
    };
    return <div style={style}>Zone</div>;
  }
}

export default SelectableHeatZone;
