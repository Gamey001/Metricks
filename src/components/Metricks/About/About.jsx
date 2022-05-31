import { Footer } from "../Generics/Footer";
import { HeaderWithBarBulletStyle } from "./HeaderWithBarBulletStyle";
import { WhyUsAndGrowWithYouColWrapper } from "./WhyUsAndGrowWithYouColWrapper";

export const About = () => {
  /**_About us_ unique styles */
  const builtForSass = { marginBottom: "10.625rem" };
  const builtForSassHeaderWrapper = {
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "50",
  };
  const builtForSassWrapperInner = {
    marginLeft: "4rem",
    marginTop: "13rem",
    maxWidth: "47.875rem",
    color: "#ffffff",
  };
  const builtForSassBody = {
    maxWidth: "33.25rem",
    marginTop: "34.4rem",
    lineHeight: "2.8125rem",
  };
  const gotAQuestionInner = {
    position: "relative",
    zIndex: "5",
    padding: "9.125rem",
  };
  const gotAQuestionBtn = {
    fontSize: "1.25rem",
    color: "#ff00f7",
    lineHeight: "2.25rem",
  };
  const footerContainer = { paddingTop: "6.0625rem", paddingBottom: "2.75rem" };

  /**render */
  return (
    <div className="container-fluid text-white">
       {/**About us section one*/}
      <div style={builtForSass} className="row">
        <div className="col-12 position-relative">
          <div className="position-absolute" style={builtForSassHeaderWrapper}>
            <div style={{ marginTop: "2rem" }}>
              <HeaderWithBarBulletStyle title="About us" />
            </div>
            <div className="built-for-saas centeralise-col-contents" style={builtForSassWrapperInner}>
              <h2 style={{ fontSize: "calc(2em + 3vw)" }}>
                Built for SaaS and E-commerce
              </h2>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #213F72 0%, #19073B 100%)",
                }}
                className="col-sm-7"
              ></div>
              <div className="col-sm-5 centeralise-col-contents">
                <p style={builtForSassBody}>
                  Our tools are easy to setup and use with a user <br />{" "}
                  friendly user dashboard that enables you to set up, <br />{" "}
                  launch, automate and manage multi-affiliate <br /> campaigns
                  in 5 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**About us section two*/}
      <div style={{ marginBottom: "10.625rem" }} className="row">
        <div className="col-12 centeralise-col-contents">
          <h2
            style={{
              maxWidth: "86.5rem",
              fontSize: "calc(1.7em + 1.7vw)",
              margin: "auto",
              lineHeight: "5.8125rem",
            }}
          >
            Metricks was developed because just like <br /> you, we needed a
            product that could give <br /> us <b>good value.</b>
          </h2>
        </div>
      </div>
      {/**About us section three */}
      <div
        style={{
          paddingTop: "4.0625rem",
          lineHeight: "2.8125rem",
          marginBottom: "17.6875rem",
        }}
        className="row"
      >
        <div className="col-sm-12">
          <div style={{ maxWidth: "85rem" }} className="container">
            <div className="row">
              <WhyUsAndGrowWithYouColWrapper sn="01" title="Why us?">
                  <p>
                    We pride ourselves in our ability to innovate and <br />{" "}
                    create world class tools that provide reliable and <br />{" "}
                    efficient touchpoints between advertisers and <br />{" "}
                    affiliates.
                  </p>
              </WhyUsAndGrowWithYouColWrapper>
              <WhyUsAndGrowWithYouColWrapper sn="02" title="Grow with us">
                    <p>
                      Leveraging the best rechnologies, we have develop an
                      all-in-
                      <br /> one affiliate marketing tracking software, a genius
                      tool to help <br />
                      you track, automate and optimise your influencer
                      campaigns, <br />
                      all from one dashboard.
                    </p>
                    <br />
                    <br />
                    <p>
                      Our team of experts are constantly brainstorming, testing
                      and <br />
                      developing new solutions with only one thing in mind- your{" "}
                      <br /> business growth. Your success is our success and by
                      giving you <br />
                      the tools you need to scale, we grow as well.
                    </p>
                    </WhyUsAndGrowWithYouColWrapper>
                  </div>
                </div>
              </div>
            </div>
          {/**About us section four */}
      <div
        style={{
          background: "linear-gradient(180deg, #213F72 0%, #19073B 100%)",
        }}
        className="row"
      >
        <div className="col-12 line-height__one">
          <div className="position-relative">
            <div style={gotAQuestionInner}>
              <h2>Got a Question?</h2>
              <p>
                See how Metricks can make your business grow with the best
                affiliate marketing tracking <br /> software.
              </p>
              <p>
                <a style={gotAQuestionBtn} href="#">
                  Contact Us &rarr;{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/**About us footer */}
      <div className="row">
        <div className="col-12">
          <footer style={footerContainer}>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};
