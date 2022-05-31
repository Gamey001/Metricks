import { CountDownWrapper } from "./CountDownWrapper";
import { Footer } from "../Generics/Footer";
import { NameFieldWrapper } from "./NameFieldWrapper";

const nameInputs = [
  { field: "fname", placeholder: "First Name.." },
  { field: "lname", placeholder: "Last Name.." },
];
export const Home = () => {
  /**Homepage unique styles */
  const footerWrapperInner = {
    position: "absolute",
    top: "7.5rem",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "10",
    color: "white",
  };
  const footerWrapper = {
    height: "120em",
    width: "120em",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  };
  const formWrapper = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2.5rem",
  };
  const submitInput = {
    marginLeft: "-14.9rem",
    borderRadius: "2rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    background: "#271ac1",
    color: "#ffffff",
  };
  const emailInput = {
    borderRadius: "2rem",
    width: "41.5rem",
    height: "4.1875rem",
    paddingLeft: "2.875rem",
  };

  /**render */
  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <header className="m-auto" style={{ maxWidth: "49.375rem" }}>
              <h1 className="something-awesome">
                <b>Something Awesome is coming soon</b>
              </h1>
              <h2 className="pt-1">
                <span className="all-in-one__text-light">
                  {" "}
                  Your all-in-one affiliate marketing tracking software{" "}
                </span>{" "}
                Track, automate and optimise{" "}
                <span className="all-in-one__text-light">
                  your campaigns.
                </span>{" "}
              </h2>
            </header>
          </div>
          <CountDownWrapper />
          <div className="col-12 m-auto">
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={formWrapper}>
                {nameInputs.map(({ field, placeholder }) => (
                  <NameFieldWrapper key={field} field={field} placeholder={placeholder} />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "8.25rem",
                }}
              >
                <input
                  style={emailInput}
                  className="border-0"
                  type="email"
                  name="lname"
                  placeholder="Enter you email address.."
                />
                <input
                  style={submitInput}
                  className="btn"
                  type="submit"
                  value="JOIN OUR WAITING LIST"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer
        style={{
          height: "19rem",
          overflow: "hidden",
        }}
      >
        <div
          className="border footer-circle m-auto rounded rounded-circle"
          style={footerWrapper}
        >
          <div style={footerWrapperInner}>
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
};
