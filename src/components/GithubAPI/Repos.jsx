import { Repo } from "./Repo";
import { useContext } from "react";
import { topReposContext } from "../../context/topReposContext";
import { Footer } from "../Metricks/Generics/Footer";

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
          <footer className="text-white bg-secondary rounded">
            <Footer />
          </footer>
        </div>
      ) : (
        <h2 className="text-info">Please wait...</h2>
      )}
    </>
  );
};
