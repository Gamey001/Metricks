
export const CountDownDateComponent = ({title, value})=> {
    const countDownDay = { width: "7.5rem", height: "8.375rem" }
    const dayHeaderStyle = { marginTop: "1.375rem", fontSize: "2.9375rem" }

    return(
        <div
              style={countDownDay}
              className="border rounded mx-1 count-down-component"
            >
              <h4 style={dayHeaderStyle}>
                {value}
              </h4>
              <p style={{ fontSize: "1.0625rem" }}>{title}</p>
            </div>
    )
}