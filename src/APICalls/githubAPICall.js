export const githubAPICall = async () => {
    return await fetch(`https://api.github.com/search/repositories?q=created:%3E2022-04-28&sort=stars&order=desc`)
      .then((res) => res.json())
      .catch(() => ({error: "Unable to connect to github. Please try again."}));
  };