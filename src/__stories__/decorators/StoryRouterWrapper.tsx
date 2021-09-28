import { BrowserRouter } from "react-router-dom";

export default function StoryRouterWrapper(story: Function) {
  return <BrowserRouter>{story()}</BrowserRouter>;
}
