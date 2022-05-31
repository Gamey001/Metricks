import { HeaderWithBarBulletStyle } from "./HeaderWithBarBulletStyle";

export const WhyUsAndGrowWithYouColWrapper = ({ children, sn, title }) => {
  const withYouColumn = { paddingTop: "4.0625rem" };
  const withYouColumnHeaderWrapper = {
    marginBottom: "3rem",
  };
  const withYouColumnHeaderSN = { top: "-2rem" };
  return (
    <div style={withYouColumn} className="col-sm-6 line-height__one">
      <div>
        <div className="position-relative" style={withYouColumnHeaderWrapper}>
          <span className="position-absolute" style={withYouColumnHeaderSN}>
            {sn}
          </span>
          <div style={{ paddingLeft: "4.59rem" }}>
            <HeaderWithBarBulletStyle title={title} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
