import { useCallback,useEffect } from "react";
import TimeAgo from "react-timeago";

export const Repo = ({ repo }) => {
  const {
    name,
    description,
    stargazers_count,
    open_issues_count,
    created_at,
    avatar_url,
    url,
    id
  } = repo;

  const countsInThousands = useCallback(
    (counts) => {
      if (counts >= 1000) {
        let formatted = counts / 1000;
        formatted += "K";
        return formatted;
      }
      return counts;
    },
    [stargazers_count, open_issues_count]
  );
//use userId from API as key
useEffect(()=>{
  fetch("https://avatars.githubusercontent.com/u/62311769?v=4")
  .then((res)=>console.log(res))
})
  return (
    <div className="container-fluid card px-2 py-5 m-2 rounded font-weight-bold">
      <div className="row">
        <div className="col-sm-3 text-center">
          <img
            style={{ width: "5rem", height: "5rem", margin: "auto" }}
            src={`https://avatars.githubusercontent.com/${name}.png?size=460`}
            alt="profile picture"
          />
        </div>
        <div className="col-sm-9">
          <div>
            <h2>{name}</h2>
            <ul style={{ paddingLeft: "0", listStyle: "none" }}>
              <li style={{ marginRight: ".2rem", padding: "1rem 0" }}>
                {description}
              </li>
              <li
                className="display-inline-block"
                style={{ marginRight: ".5rem", padding: "2rem 0" }}
              >
                {" "}
                <span className="border rounded p-2">
                  Stars: {countsInThousands(stargazers_count)}
                </span>
              </li>
              <li
                className="display-inline-block"
                style={{ marginRight: ".5rem" }}
              >
                {" "}
                <span className="border badge-secondary rounded p-2 mt-2">
                  Issues: {countsInThousands(open_issues_count)}
                </span>
              </li>
              <li
                className="display-inline-block"
                style={{ marginRight: ".5rem" }}
              >
                Submitted <TimeAgo date={Date.parse(created_at)} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
