import React from "react";
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "./themes/jsMontreal";
import SimpleComponent from "../src/components/simpleComponent.jsx";

require("normalize.css");
require("./themes/jsMontreal/index.css");

const images = {
  storybook: require("./assets/storybook-loaded.png"),
  storybookDemo: require("./assets/react_storybook_demo.gif"),
  problems: require("./assets/first_world_problems.png"),
  surprise: require("./assets/surprise.png")
};

preloader(images);

const theme = createTheme();

const Presentation = () => {
  return (
    <Spectacle theme={theme}>
      <Deck transition={["slide", "slide"]} transitionDuration={200}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1}>
            An Introduction to<br />React Storybook
          </Heading>
          <Text>JS Montreal Meetup, June 13th, 2017</Text>
        </Slide>

        <Slide>
          <Heading>Who am I?</Heading>
          <br />
          <Text>
            SDE for McAfee working on TrueKey<br />
            a.k.a just a dev
          </Text>
        </Slide>

        <Slide>
          <Heading>Find me</Heading>
          <br />
          <Text>
            On the web&nbsp;
            <Link href="http://iamdeveloper.com" target="_blank">
              iamdeveloper.com
            </Link>
          </Text>
          <br />
          <Text>
            Twitter&nbsp;
            <Link href="https://twitter.com/nickytonline" target="_blank">
              @nickytonline
            </Link>
          </Text>
          <br />
          <Text>
            Github&nbsp;
            <Link href="https://github.com/nickytonline" target="_blank">
              @nickytonline
            </Link>
          </Text>
        </Slide>

        <Slide>
          <Heading caps lineHeight={1}>
            Outline
          </Heading>
          <List>
            <ListItem>What is React Storybook?</ListItem>
            <ListItem>A demo of React Storybook</ListItem>
            <ListItem>Set up React Storybook</ListItem>
            <ListItem>Configure React Storybook</ListItem>
            <ListItem>React Storybook Alternatives</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading caps fit lineHeight={1}>
            What is a React application made of?
          </Heading>
          <br />
        </Slide>

        <Slide transition={"none"}>
          <Heading caps fit lineHeight={1}>
            What is a React application made of?
          </Heading>
          (Spoiler: Components)
        </Slide>

        <Slide bgColor="primary">
          <Heading caps lineHeight={1}>
            The Problems
          </Heading>
          <br />
          <Image height={150} src={images.problems} />
          <List>
            <ListItem>Lack of use cases</ListItem>
            <ListItem>Slow development</ListItem>
            <ListItem>Dirtiness</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary">
          <Heading caps lineHeight={1}>
            The solution
          </Heading>
          <br />
          <Image height={400} src={images.storybookDemo} />
        </Slide>

        <Slide bgColor="primary">
          <BlockQuote size={1}>
            <Quote>
              With React Storybook, you can develop and design UI components
              outside your app in an isolated
              environment. It will change how you develop UI components.
            </Quote>
            <Cite>Arunoda Susiripala</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} caps lineHeight={1}>
            Demo Time
          </Heading>
          <Text size={1} fit lineHeight={1}>
            <Link href="http://localhost:9001" target="storybook">
              http://localhost:9001
            </Link>
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading>Key benefits</Heading>
          <List>
            <ListItem>Isolation</ListItem>
            <ListItem>Props mocking</ListItem>
            <ListItem>Action logger</ListItem>
            <ListItem>Hot reloading</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary">
          <Heading>Plus</Heading>
          <List>
            <ListItem>Extensible via Storybook Add-ons</ListItem>
            <ListItem>Customizable, e.g. support *.tsx (TypeScript)</ListItem>
            <ListItem>Runs anywhere</ListItem>
            <ListItem>
              Showcase your components (<Link
                href="https://github.io"
                target="storybook"
              >
                github.io
              </Link>,
              <Link href="https://storybooks.io" target="storybook">
                storybooks.io
              </Link>...)
            </ListItem>
            <ListItem>Supports React Native</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1}>
            Setting up React Storybook
          </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Text>
            Install React Storybook
          </Text>
          <br />
          <CodePane>npm install @kadira/storybook --save-dev</CodePane>
        </Slide>

        <Slide bgColor="primary">
          <Text size={2}>
            Add an npm script to your package.json
            <br /><br />
            <CodePane>
              "workbench": "start-storybook -p 9001"
            </CodePane>
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1}>
            Configure React Storybook
          </Heading>
        </Slide>

        <Slide bgColor="primary">
          <List>
            <ListItem>
              Create a folder in the root of your project called
              <code>.storybook</code>
            </ListItem>
            <ListItem>
              In that folder create a file called <code>config.js</code>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Text>.storybook/config.js</Text>
          <br />
          <CodePane>
            {`import { configure } from '@kadira/storybook';

function loadStories() {
    require('../workbench/');
}

configure(loadStories, module);
`}
          </CodePane>
        </Slide>

        <Slide bgColor="primary">
          <List>
            <ListItem>
              Create a folder in the root of your project called
              <code>workbench</code>
            </ListItem>
            <ListItem>
              In that folder create a file called <code>index.js</code>
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary">
          <Text>workbench/index.js</Text>
          <br />
          <CodePane>
            {`import {storiesOf,action} from '@kadira/storybook';
import React from 'react';
import SimpleComponent
  from '../src/components/simpleComponent.jsx';

storiesOf('SimpleComponent', module)
  .add('default', () =>
    <SimpleComponent onClick={action('clicked')}>
            Click Me</SimpleComponent>);`}
          </CodePane>
        </Slide>

        <Slide bgColor="primary">
          <Text>
            Now run...
          </Text>
          <br />
          <CodePane>npm run workbench</CodePane>
          <br />
          <Text>
            and open a browser at
            <Link href="http://localhost:9001" target="storybook">
              http://localhost:9001
            </Link>
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Image height={500} src={images.storybook} />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} caps lineHeight={1}>
            And this?
          </Heading>
          <br />
          <Text>
            <SimpleComponent>
              I'm the button<br />you saw in the demo
            </SimpleComponent>&nbsp;&nbsp;<SimpleComponent disabled={true}>
              I'm the disabled button<br />you saw in the demo
            </SimpleComponent>
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Image height={300} src={images.surprise} />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} caps lineHeight={1}>
            Alternative tools
          </Heading>
          <br />
          <Text>
            UI Harness
            <Link href="http://www.uiharness.com" target="_blank">
              www.uiharness.com
            </Link>
          </Text>
          <Text>
            Carte Blanche
            <Link
              href="https://github.com/carteb/carte-blanche"
              target="_blank"
            >
              github.com/carteb/carte-blanche
            </Link>
          </Text>
          <Text>
            BlueKit
            <Link href="http://bluekit.blueberry.io" target="_blank">
              bluekit.blueberry.io
            </Link>
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1}>
            Why Chose Storybook?
          </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading caps>
            Thanks OSS
          </Heading>
          <List>
            <ListItem>
              Spectacle&nbsp;
              <Link
                href="https://github.com/FormidableLabs/spectacle"
                target="_blank"
              >
                github.com/FormidableLabs/spectacle
              </Link>
            </ListItem>
            <ListItem>
              React Storybook&nbsp;
              <Link href="https://storybook.js.org" target="_blank">
                storybook.js.org
              </Link>
            </ListItem>
            <ListItem>
              Arunoda&nbsp;
              <Link href="https://github.com/arunoda" target="_blank">
                github.com/arunoda
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading caps lineHeight={1}>
            Recap
          </Heading>
          <List>
            <ListItem>What is React Storybook?</ListItem>
            <ListItem>A demo of React Storybook</ListItem>
            <ListItem>Set up React Storybook</ListItem>
            <ListItem>Configure React Storybook</ListItem>
            <ListItem>React Storybook Alternatives</ListItem>
          </List>
        </Slide>

        <Slide bgColor="primary">
          <Heading fit caps lineHeight={1}>
            An image my co-worker wanted to see
          </Heading>
          <br />
          <img src="http://i.imgur.com/QONVIyz.gif" />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1}>
            Questions?
          </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1}>
            Slides/Repo can be found at <br />
            <Link href="http://story.iamdeveloper.com" target="_blank">story.iamdeveloper.com</Link>
          </Heading>
        </Slide>

      </Deck>
    </Spectacle>
  );
};

export default Presentation;
