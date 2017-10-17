import React from "react";
import SelectableHeatZone from "../SelectableHeatMap/SelectableHeatZone";
import { Row } from "../layout";

class SelectableHeatMap extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <SelectableHeatZone />
          <SelectableHeatZone />
          <SelectableHeatZone />
        </Row>
        <Row>
          <SelectableHeatZone />
          <SelectableHeatZone />
          <SelectableHeatZone />
        </Row>
        <Row>
          <SelectableHeatZone />
          <SelectableHeatZone />
          <SelectableHeatZone />
        </Row>
      </div>
    );
  }
}

export default SelectableHeatMap;
