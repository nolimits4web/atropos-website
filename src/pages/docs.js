import { useState } from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Pre } from '../components/Pre';
import { ParamsTable } from '../components/docs/ParamsTable';
import { MethodsTable } from '../components/docs/MethodsTable';
import { SectionTitle } from '../components/docs/SectionTitle';
import { TitlesContext } from '../components/docs/TitlesContext';

export default function Docs() {
  const [titles, setTitles] = useState([]);
  const addTitle = (newTitle) => {
    const hasTitle = titles.filter((t) => t.slug === newTitle.slug).length > 0;
    if (hasTitle) return;
    titles.push(newTitle);
    setTitles([...titles]);
  };
  return (
    <TitlesContext.Provider value={{ titles, addTitle }}>
      <Nav className="bg-primary" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <div className="w-80 px-4 md:px-8 hidden lg:block">
          <ul className="text-sm sticky top-0">
            {titles.map((title) => (
              <li key={title.slug}>
                <a
                  href={`#${title.slug}`}
                  className="px-2 py-1 block rounded hover:bg-primary hover:bg-opacity-10 hover:text-primary font-medium duration-100"
                >
                  {title.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-none prose px-4 md:px-8">
          <h1>Documentation</h1>

          <SectionTitle title="Browser Compatibility" />
          <p>
            Mariko is compatible with browsers which support the following
            features:
          </p>
          <ul>
            <li>
              <a href="https://caniuse.com/pointer" target="_blank">
                Pointer Events
              </a>
            </li>
            <li>
              <a href="https://caniuse.com/transforms3d" target="_blank">
                CSS 3D Transforms
              </a>
            </li>
            <li>
              <a href="https://caniuse.com/css-transitions" target="_blank">
                CSS Transitions
              </a>
            </li>
          </ul>

          <SectionTitle title="Installation" />
          <p>We can install Mariko from NPM</p>
          <Pre>npm i mariko</Pre>

          <SectionTitle title="Styles" />
          <p>First we need to include Mariko style:</p>
          <Pre lang="html">{`
          <link rel="stylesheet" href="path/to/mariko.css" />
          `}</Pre>
          <p>
            With bundler (like webpack) you can import styles directly from
            JavaScript:
          </p>
          <Pre lang="js">{`
          import 'mariko/css'
          `}</Pre>
          <p>
            If you use SCSS preprocessor you can import Mariko's styles in the
            following way:
          </p>
          <Pre lang="scss">{`
          @import 'mariko/scss'
          `}</Pre>
          <p>
            Mariko comes with stylesheets in different formats. The following
            files are available::
          </p>
          <ul>
            <li>
              <code>mariko.css</code> (exported as <code>mariko/css</code>) -
              all Mariko styles
            </li>
            <li>
              <code>mariko.min.css</code> (exported as{' '}
              <code>mariko/css/min</code>) - minified Mariko styles
            </li>
            <li>
              <code>mariko.scss</code> (exported as <code>mariko/scss</code>) -
              Mariko styles in SCSS syntax
            </li>
            <li>
              <code>mariko.less</code> (exported as <code>mariko/less</code>) -
              Mariko styles in LESS syntax
            </li>
          </ul>

          <SectionTitle title="HTML Layout" />
          <p>Now, we need to add basic Mariko layout to our app:</p>
          <Pre lang="html">{
            /* html */ `
            <!-- main Mariko container (required), add your custom class here -->
            <div class="mariko my-mariko">
              <!-- scale container (required) -->
              <div class="mariko-scale">
                <!-- rotate container (required) -->
                <div class="mariko-rotate">
                  <!-- inner container (required) -->
                  <div class="mariko-inner">
                    <!-- put your custom content here -->
                  </div>
                </div>
              </div>
            </div>
          `
          }</Pre>

          <SectionTitle title="Initialize Mariko" />
          <p>Now we need to initialize Mariko:</p>
          <Pre lang="js">{
            /* javascript */ `
            // import Mariko library
            import Mariko from 'mariko';

            // Initialize
            const myMariko = Mariko({
              el: '.my-mariko',
              // rest of parameters
            });
          `
          }</Pre>
          <p>
            If you use it in environment without ES modules, you can add Mariko
            library via <code>{`<script>`}</code> tag:
          </p>
          <Pre lang="html">{
            /* html */ `
            <script src="path/to/mariko.min.js"></script>
            <script>
              const myMariko = Mariko({
                el: '.my-mariko',
                // rest of parameters
              });
            </script>
          `
          }</Pre>
          <p>
            In addition to Mariko's main CSS styles, we may need to add some
            custom styles, for example to set Mariko size:
          </p>
          <Pre lang="css">{
            /* css */ `
          .my-mariko {
            width: 320px;
            height: 160px;
          }
          `
          }</Pre>

          <SectionTitle title="Parameters" />
          <ParamsTable />
          <p>For example:</p>
          <Pre lang="js">{`
            const myMariko = Mariko({
              el: '.my-mariko',
              activeOffset: 40,
              shadowScale: 1.05,
              onEnter() {
                console.log('Enter');
              },
              onLeave() {
                console.log('Leave');
              },
              onRotate(x, y) {
                console.log('Rotate', x, y);
              }
            });
          `}</Pre>

          <SectionTitle title="Instance Properties" />
          <p>
            After we initialize Mariko we have its initialized instance with
            some helpful methods and properties:
          </p>
          <MethodsTable />
          <p>For example:</p>
          <Pre lang="js">{`
            // init Mariko
            const myMariko = Mariko({
              el: '.my-mariko',
              activeOffset: 40,
            });

            setTimeout(() => {
              // destroy it when needed
              myMariko.destroy();
            }, 10000)
          `}</Pre>

          <SectionTitle title="Control Elements Offsets" />
          <p>
            Mariko uses special <code>data-</code> attributes to controll
            elements offset (parallax effect):
          </p>

          <ul>
            <li>
              <p>
                <code>data-mariko-offset</code> - controls element
                offset/translate in percetange.
              </p>
              <div>
                For example:
                <ul>
                  <li>
                    <code>data-mariko-offset="5"</code> means that element will
                    move <code>5%</code> of its size on max rotate angles.
                  </li>
                  <li>
                    <code>data-mariko-offset="-5"</code> means that element will
                    move <code>-5%</code> of its size on max rotate angles.
                  </li>
                </ul>
              </div>
              <p>
                Basically if you want the element to appear closer (be in front
                of the scene), then this value should be positive. And if you
                want the element to appear in the distance (be behind the
                scene), then this value should be negative.
              </p>
            </li>
            <li>
              <code>data-mariko-opacity</code> - controls element opacity.
              <div>
                For example:
                <ul>
                  <li>
                    <code>data-mariko-opacity="0;1"</code> - means element's
                    opacity will change from <code>0</code> (on initial state)
                    and up to <code>1</code> (on max rotate angles).
                  </li>
                  <li>
                    <code>data-mariko-opacity="0.1;0.8"</code> - means element's
                    opacity will change from <code>0.1</code> (on initial state)
                    and up to <code>0.8</code> (on max rotate angles).
                  </li>
                  <li>
                    <code>data-mariko-opacity="1;0"</code> - means element's
                    opacity will change from <code>1</code> (on initial state)
                    and down to to <code>0</code> (on max rotate angles).
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <p>For example:</p>
          <Pre lang="html">{
            /* html */ `
            <div class="mariko">
              <div class="mariko-scale">
                <div class="mariko-rotate">
                  <div class="mariko-inner">
                    <!--
                    Element with negative offset will move in reverse direction,
                    making it appear behind the scene
                    -->
                    <img src="image-bg.png" data-mariko-offset="-5" />
                    <!--
                    Element with no offset will not move
                    -->
                    <img src="image-middle.png" data-mariko-offset="0" />
                    <!--
                    Element with positive offset will move in same direction,
                    making it appear in front of the scene
                    -->
                    <img src="image-front.png" data-mariko-offset="5" />
                  </div>
                </div>
              </div>
            </div>
          `
          }</Pre>

          <SectionTitle title="What's next?" />
          <p>
            As you see it is easy to integrate Mariko into your website or app.
            So here are your next steps:
          </p>
          <ul>
            <li>
              If you have questions about Mariko ask them in{' '}
              <a href="https://stackoverflow.com" target="_blank">
                StackOverflow
              </a>{' '}
              and don't forget to tag your question with{' '}
              <a
                href="https://stackoverflow.com/questions/tagged/mariko"
                target="_blank"
              >
                <code>mariko</code>
              </a>{' '}
              tag.
            </li>
            <li>
              Create issue on{' '}
              <a
                href="https://github.com/nolimits4web/mariko/issues/new"
                target="_blank"
              >
                GitHub
              </a>{' '}
              if you found a bug.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </TitlesContext.Provider>
  );
}
