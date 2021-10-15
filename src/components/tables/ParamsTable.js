import Link from 'next/link';

export const ParamsTable = ({ framework = 'core' }) => {
  const hasEvents = framework === 'vue' || framework === 'svelte';
  const hasSlots = framework === 'vue' || framework === 'svelte';
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
          {framework !== 'core' && framework !== 'svelte' && (
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
            <td>boolean | string</td>
            <td>true</td>
            <td>
              Defines whether to rotate container on touch move (when
              activated), <code>rotate</code> must be enabled. Also accepts
              special values:
              <ul>
                <li>
                  <code>scroll-y</code> - will not rotate container with initial
                  vertical touch-move (vertical scrolling), basically will not
                  block page vertical scrolling
                </li>
                <li>
                  <code>scroll-x</code> - will not rotate container with initial
                  horizontal touch-move (horizontal scrolling), basically will
                  not block page horizontal scrolling
                </li>
              </ul>
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
            <td>stretchX</td>
            <td>number</td>
            <td>0</td>
            <td>
              Move (translate) atropos container along the X-axis on this value
              (in percentage). E.g. `50` value will move container +-50% of its
              width. Only for multiple Atropos, when `eventsEl` is parent
              Atropos container
            </td>
          </tr>
          <tr>
            <td>stretchY</td>
            <td>number</td>
            <td>15</td>
            <td>
              Move (translate) atropos container along the Y-axis on this value
              (in percentage). E.g. `50` value will move container +-50% of its
              height. Only for multiple Atropos, when `eventsEl` is parent
              Atropos container
            </td>
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
          {hasEvents && (
            <tr>
              <th colSpan="4">Events</th>
            </tr>
          )}
          <tr>
            <td>{!hasEvents ? 'onEnter' : 'enter'}</td>
            <td>function</td>
            <td />
            <td>
              {hasEvents ? 'Event' : 'Callback function'} will be fired when
              Atropos activated (on hover)
            </td>
          </tr>
          <tr>
            <td>{!hasEvents ? 'onLeave' : 'leave'}</td>
            <td>function</td>
            <td />
            <td>
              {hasEvents ? 'Event' : 'Callback function'} will be fired when
              Atropos deactivated (on pointer out)
            </td>
          </tr>
          <tr>
            <td>{!hasEvents ? 'onRotate' : 'rotate'}</td>
            <td>function(x, y)</td>
            <td />
            <td>
              {hasEvents ? 'Event' : 'Callback function'} will be fired on
              rotate. As arguments accepts <code>x</code> and <code>y</code>{' '}
              rotation angles
            </td>
          </tr>
          {hasSlots && (
            <tr>
              <th colSpan="4">Slots</th>
            </tr>
          )}
          {framework !== 'core' && (
            <>
              <tr>
                <td>{hasSlots ? 'root' : 'rootChildren'}</td>
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
                <td>{hasSlots ? 'scale' : 'scaleChildren'}</td>
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
                <td>{hasSlots ? 'rotate' : 'rotateChildren'}</td>
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
