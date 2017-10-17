import React from "react";
import HeatZone from "./HeatZone";
import Toggle from "material-ui/Toggle";
import { Row } from "../layout";

class HeatMap extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      showAverages: props.showAverages,
      showToggle: props.showAveragesToggle
    };
  }
  toggleAverages = (event, checked) => {
    this.setState({
      showAverages: checked
    });
  };
  render() {
    const toggleThumbStyle = {
      backgroundColor: "rgb(255, 255, 255)"
    };
    const toggleSwitchedStyle = {
      backgroundColor: "rgb(0, 0, 0)"
    };
    const trackSwitchedStyle = {
      backgroundColor: "rgb(189, 189, 189)"
    };
    return (
      <div>
        <Row>
          <HeatZone
            average={this.props.data[0]}
            show={this.state.showAverages}
          />
          <HeatZone
            average={this.props.data[1]}
            show={this.state.showAverages}
          />
          <HeatZone
            average={this.props.data[2]}
            show={this.state.showAverages}
          />
        </Row>
        <Row>
          <HeatZone
            average={this.props.data[3]}
            show={this.state.showAverages}
          />
          <HeatZone
            average={this.props.data[4]}
            show={this.state.showAverages}
          />
          <HeatZone
            average={this.props.data[5]}
            show={this.state.showAverages}
          />
        </Row>
        <Row>
          <HeatZone
            average={this.props.data[6]}
            show={this.state.showAverages}
          />
          <HeatZone
            average={this.props.data[7]}
            show={this.state.showAverages}
          />
          <HeatZone
            average={this.props.data[8]}
            show={this.state.showAverages}
          />
        </Row>
        {this.state.showToggle ? (
          <Toggle
            defaultToggled={this.props.showAverages}
            label="Show averages"
            thumbStyle={toggleThumbStyle}
            thumbSwitchedStyle={toggleSwitchedStyle}
            trackSwitchedStyle={trackSwitchedStyle}
            onToggle={this.toggleAverages}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

module.exports = HeatMap;
