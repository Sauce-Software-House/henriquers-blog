import ReactGA from "react-ga"

export const initGA = () => {
  ReactGA.initialize(process.env.GATSBY_GA_ID)
  ReactGA.pageview("/")
  ReactGA.pageview("/about")
}
