import { configure } from "@kadira/storybook";

function loadStories() {
  require("../workbench/");
}

configure(loadStories, module);
