import Countdown from "react-countdown";
import { CountDownDateComponent } from "./CountDownDateComponent";

export const CountDownWrapper = () => {
  const countDownWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "2.25rem",
    marginBottom: "3.8175rem",
  }

  return (
    <Countdown
      date={Date.now() + 934067000}
      renderer={({ days, hours, minutes, seconds }) => {
        const dateComponents = [
          {value: days, title: "Days"},
          {value: hours, title: "Hours"},
          {value: minutes, title: "Minutes"},
          {value: seconds, title: "Seconds"}
        ]
        return (
          <div
            style={countDownWrapperStyle}
            className="col-12 text-center"
          >
            {dateComponents.map(({value, title}) => <CountDownDateComponent key={title} value={value} title={title} />)}
            
          </div>
        );
      }}
    />
  );
};
