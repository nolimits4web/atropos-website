import Link from 'next/link';

export const ParamsTable = ({ framework = 'core' }) => {
  return (
    <>
      <table className="params-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {framework === 'core' && (
            <tr>
              <td>el</td>
              <td>HTMLElement | string</td>
              <td />
              <td>Atropos element</td>
            </tr>
          )}
          {framework !== 'core' && (
            <tr>
              <td>component</td>
              <td>string</td>
              <td>'div'</td>
              <td>Atropos main component tag</td>
            </tr>
          )}

          <tr>
            <td>eventsEl</td>
            <td>HTMLElement | string</td>
            <td />
            <td>
              Pointer events target. If not specified event handlers will be
              attached to main container (<code>el</code>)
            </td>
          </tr>
          <tr>
            <td>activeOffset</td>
            <td>number</td>
            <td>50</td>
            <td>
              Main container offset when activated (on hover), basically means{' '}
              <code>translateZ</code> value
            </td>
          </tr>
          <tr>
            <td>durationEnter</td>
            <td>number</td>
            <td>300</td>
            <td>Transition duration when activated (on hover) (in ms)</td>
          </tr>
          <tr>
            <td>durationLeave</td>
            <td>number</td>
            <td>600</td>
            <td>
              Transition duration when deactivated (on pointer out) (in ms)
            </td>
          </tr>
          <tr>
            <td>rotateLock</td>
            <td>boolean</td>
            <td>true</td>
            <td>
              When enabled, it won't rotate the container until pointer move out
              from originally entered quarter
            </td>
          </tr>
          <tr>
            <td>rotate</td>
            <td>boolean</td>
            <td>true</td>
            <td>
              Defines whether to rotate container on pointer move (when
              activated)
            </td>
          </tr>
          <tr>
            <td>rotateTouch</td>
            <td>boolean</td>
            <td>true</td>
            <td>
              Defines whether to rotate container on touch move (when
              activated), <code>rotate</code> must be enabled
            </td>
          </tr>
          <tr>
            <td>rotateXMax</td>
            <td>number</td>
            <td>15</td>
            <td>Max rotation along the X-axis (in deg)</td>
          </tr>
          <tr>
            <td>rotateYMax</td>
            <td>number</td>
            <td>15</td>
            <td>Max rotation along the Y-axis (in deg)</td>
          </tr>
          <tr>
            <td>rotateXInvert</td>
            <td>boolean</td>
            <td>false</td>
            <td>Inverts rotation along the X-axis (in deg)</td>
          </tr>
          <tr>
            <td>rotateYInvert</td>
            <td>boolean</td>
            <td>false</td>
            <td>Inverts rotation along the Y-axis (in deg)</td>
          </tr>
          <tr>
            <td>shadow</td>
            <td>boolean</td>
            <td>true</td>
            <td>Enables shadow</td>
          </tr>
          <tr>
            <td>shadowOffset</td>
            <td>number</td>
            <td>50</td>
            <td>
              Shadow offset, basically shadow element's <code>translateZ</code>{' '}
              value
            </td>
          </tr>
          <tr>
            <td>shadowScale</td>
            <td>number</td>
            <td>1</td>
            <td>Shadow scale factor</td>
          </tr>
          <tr>
            <td>highlight</td>
            <td>boolean</td>
            <td>true</td>
            <td>Enables highlight</td>
          </tr>
          {framework !== 'core' && (
            <>
              <tr>
                <td>
                  {framework === 'react' ? 'scaleClassName' : 'scaleClass'}
                </td>
                <td>string</td>
                <td />
                <td>
                  Extra class name on{' '}
                  <Link href="/docs#html-layout">
                    <a>
                      <code>atropos-scale</code> element
                    </a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  {framework === 'react' ? 'rotateClassName' : 'rotateClass'}
                </td>
                <td>string</td>
                <td />
                <td>
                  Extra class name on{' '}
                  <Link href="/docs#html-layout">
                    <a>
                      <code>atropos-rotate</code> element
                    </a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  {framework === 'react' ? 'innerClassName' : 'innerClass'}
                </td>
                <td>string</td>
                <td />
                <td>
                  Extra class name on{' '}
                  <Link href="/docs#html-layout">
                    <a>
                      <code>atropos-inner</code> element
                    </a>
                  </Link>
                </td>
              </tr>
            </>
          )}
          {framework === 'vue' && (
            <tr>
              <th colSpan="4">Events</th>
            </tr>
          )}
          <tr>
            <td>{framework !== 'vue' ? 'onEnter' : 'enter'}</td>
            <td>number</td>
            <td>function</td>
            <td>
              Callback function will be executed when Atropos activated (on
              hover)
            </td>
          </tr>
          <tr>
            <td>{framework !== 'vue' ? 'onLeave' : 'leave'}</td>
            <td>number</td>
            <td>function</td>
            <td>
              Callback function will be executed when Atropos deactivated (on
              pointer out)
            </td>
          </tr>
          <tr>
            <td>{framework !== 'vue' ? 'onRotate' : 'rotate'}</td>
            <td>number</td>
            <td>function(x, y)</td>
            <td>
              Callback function will be executed on rotate. As arguments accepts{' '}
              <code>x</code> and <code>y</code> rotation angles
            </td>
          </tr>
          {framework === 'vue' && (
            <tr>
              <th colSpan="4">Slots</th>
            </tr>
          )}
          {framework !== 'core' && (
            <>
              <tr>
                <td>{framework === 'vue' ? 'root' : 'rootChildren'}</td>
                <td />
                <td />
                <td>
                  Elements passed here will be added to{' '}
                  <Link href="/docs#html-layout">
                    <a>
                      <code>atropos</code> root element
                    </a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>{framework === 'vue' ? 'scale' : 'scaleChildren'}</td>
                <td />
                <td />
                <td>
                  Elements passed here will be added to{' '}
                  <Link href="/docs#html-layout">
                    <a>
                      <code>atropos-scale</code> element
                    </a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>{framework === 'vue' ? 'rotate' : 'rotateChildren'}</td>
                <td />
                <td />
                <td>
                  Elements passed here will be added to{' '}
                  <Link href="/docs#html-layout">
                    <a>
                      <code>atropos-rotate</code> root element
                    </a>
                  </Link>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </>
  );
};
