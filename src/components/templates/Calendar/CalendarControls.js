import React from "react";
import { connect } from "react-redux";
import {
  reset as onReset,
  nextDay as onNextDay,
  prevDay as onPrevDay,
} from "#/redux/actions/calendarControls";

import Button from "#/components/atoms/Button";

const mapDispatchToProps = {
  onReset,
  onNextDay,
  onPrevDay,
};

export default connect(
  null,
  mapDispatchToProps
)(({ onReset, onNextDay, onPrevDay }) => (
  <div className="controls">
    <Button
      className="calendarNavigation arrow"
      type="sm secondary"
      title="<"
      onClick={onPrevDay}
    />
    <Button
      className="calendarNavigation"
      type="sm secondary"
      title="Today"
      onClick={onReset}
    />
    <Button
      className="calendarNavigation arrow"
      type="sm secondary"
      title=">"
      onClick={onNextDay}
    />
  </div>
));
