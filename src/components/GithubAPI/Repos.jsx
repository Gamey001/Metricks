import { Repo } from "./Repo";
import { useContext, useEffect } from "react";
import { topReposContext } from "../../context/topReposContext";

export const Repos = () => {
  const { state } = useContext(topReposContext);
  const isEmptyOrUndefined = !state || (state && !state.length);
  let counter = 0;

  return (
    <>
      {!isEmptyOrUndefined ? (
        <div className="pb-5" style={{ maxWidth: "40em", margin: "auto" }}>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            {state.map((item) => (
              <li key={++counter}>
                <Repo repo={item} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2 className="text-info">Please wait...</h2>
      )}
    </>
  );
};
