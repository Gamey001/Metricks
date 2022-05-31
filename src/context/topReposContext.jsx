import { useState, useCallback, createContext, useEffect } from "react";
import { githubAPICall } from "../APICalls/githubAPICall";

export const topReposContext = createContext([]);
export const TopReposProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  const updateTopReposContext = useCallback(() => {
    githubAPICall().then((res) => {
      if (res.error) return alert(res.error);
      setState(res.items);
    });
  }, [isChanged]);

  useEffect(() => {
    updateTopReposContext();
  }, [updateTopReposContext]);

  return (
    <topReposContext.Provider value={{ state }}>
      {children}
    </topReposContext.Provider>
  );
};
