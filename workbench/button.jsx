import { storiesOf, action } from "@kadira/storybook";
import React from "react";
import SimpleComponent from "../src/components/simpleComponent.jsx";

// Uncomment when doing the demo.
const crazyStyle = {
  border: "10px dashed red",
  width: "20rem",
  height: "20rem",
  fontSize: "5rem",
  color: "#ffff00",

  backgroundColor: "#00ff00"
};

storiesOf("SimpleComponent", module)
  .add("default", () =>
    <SimpleComponent onClick={action("clicked")}>Click Me</SimpleComponent>
  )
  .add("custom style", () =>
    <SimpleComponent onClick={action("clicked")} style={crazyStyle}>
      I'm so custom
    </SimpleComponent>
  )
  .add("disabled", () =>
    <SimpleComponent onClick={action("clicked")} disabled={true}>
      Can't click this
    </SimpleComponent>
  );
