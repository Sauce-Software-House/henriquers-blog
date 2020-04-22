import ReactGA from "react-ga"

export const initGA = () => {
  ReactGA.initialize(process.env.GATSBY_ALGOLIA_GA_ID)
  ReactGA.pageview("/")
}
