/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link';

export const ParamsTable = ({ framework = 'core' }) => {
  const hasEvents = framework === 'vue' || framework === 'svelte' || framework === 'element';
  const hasSlots = framework === 'vue' || framework === 'svelte' || framework === 'element';
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
          {(framework === 'core' || framework === 'element') && (
            <tr>
              <td>el</td>
              <td>HTMLElement | string</td>
              <td> {framework === 'element' ? 'div' : ''} </td>
              <td>Atropos element</td>
            </tr>
          )}
          {framework !== 'core' && framework !== 'svelte' && framework !== 'element' && (
            <tr>
              <td>component</td>
              <td>string</td>
              <td>'div'</td>
              <td>Atropos main component tag</td>
            </tr>
          )}
          {framework !== 'element' && (
            <tr>
              <td>eventsEl</td>
              <td>HTMLElement | string</td>
              <td />
              <td>
                Pointer events target. If not specified event handlers will be
                attached to main container (<code>el</code>)
              </td>
            </tr>
          )}
          <tr>
            <td> {framework === 'element' ? 'active-offset' : 'activeOffset'}</td>
            <td>number</td>
            <td>50</td>
            <td>
              Main container offset when activated (on hover), basically means{' '}
              <code>translateZ</code> value
            </td>
          </tr>
          <tr>
            <td>{framework === 'element' ? 'always-active' : 'alwaysActive'}</td>
            <td>boolean</td>
            <td>false</td>
            <td>Enables Atropos to be always active</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>number</td>
            <td>300</td>
            <td>
              Transition duration when activated, leave and and during rotate
              (in ms)
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
            <td>{framework === 'element' ? 'rotate-touch' : 'rotateTouch'}</td>
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
            <td>{framework === 'element' ? 'rotate-x-max' : 'rotateXMax'}</td>
            <td>number</td>
            <td>15</td>
            <td>Max rotation along the X-axis (in deg)</td>
          </tr>
          <tr>
            <td>{framework === 'element' ? 'rotate-y-max' : 'rotateYMax'}</td>
            <td>number</td>
            <td>15</td>
            <td>Max rotation along the Y-axis (in deg)</td>
          </tr>
          <tr>
            <td>{framework === 'element' ? 'rotate-x-invert' : 'rotateXInvert'}</td>
            <td>boolean</td>
            <td>false</td>
            <td>Inverts rotation along the X-axis (in deg)</td>
          </tr>
          <tr>
            <td>{framework === 'element' ? 'rotate-y-invert' : 'rotateYInvert'}</td>
            <td>boolean</td>
            <td>false</td>
            <td>Inverts rotation along the Y-axis (in deg)</td>
          </tr>
          <tr>
            <td>{framework === 'element' ? 'stretch-x' : 'stretchX'}</td>
            <td>number</td>
            <td>0</td>
            <td>
              Move (translate) atropos container along the X-axis on this value
              (in percentage). E.g. `50` value will move container +-50% of its
              width. Only for multiple Atropos, when multiple Atropos uses same
              parent `eventsEl` container
            </td>
          </tr>
          <tr>
            <td>{framework === 'element' ? 'stretch-y' : 'stretchY'}</td>
            <td>number</td>
            <td>0</td>
            <td>
              Move (translate) atropos container along the Y-axis on this value
              (in percentage). E.g. `50` value will move container +-50% of its
              height. Only for multiple Atropos, when multiple Atropos uses same
              parent `eventsEl` container
            </td>
          </tr>
          <tr>
            <td>{framework === 'element' ? 'stretch-z' : 'stretchZ'}</td>
            <td>number</td>
            <td>0</td>
            <td>
              Move (translate) atropos container along the Z-axis on this value
              (in percentage). E.g. `50` value will move container +-50% of its
              height. Only for multiple Atropos, when multiple Atropos uses same
              parent `eventsEl` container
            </td>
          </tr>
          <tr>
            <td>{framework === 'element' ? 'common-origin' : 'commonOrigin'}</td>
            <td>boolean</td>
            <td>true</td>
            <td>
              Will dynamically set `transform-origin` for all Atropos components
              with same parent to same point (usually pointer position). Only
              for multiple Atropos, when multiple Atropos uses same parent
              `eventsEl` container
            </td>
          </tr>
          <tr>
            <td>shadow</td>
            <td>boolean</td>
            <td>true</td>
            <td>Enables shadow</td>
          </tr>
          <tr>
            <td>{framework === 'element' ? 'shadow-offset' : 'shadowOffset'}</td>
            <td>number</td>
            <td>50</td>
            <td>
              Shadow offset, basically shadow element's <code>translateZ</code>{' '}
              value
            </td>
          </tr>
          <tr>
            <td>{framework === 'element' ? 'shadow-scale' : 'shadowScale'}</td>
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
          {framework !== 'core' && framework !== 'element' && (
            <>
              <tr>
                <td>
                  {framework === 'react' ? 'scaleClassName' : 'scaleClass'}
                </td>
                <td>string</td>
                <td />
                <td>
                  Extra class name on{' '}
                  <Link href="/docs#html-layout" passHref>

                    <code>atropos-scale</code> element

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
                  <Link href="/docs#html-layout" passHref>

                    <code>atropos-rotate</code> element

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
                  <Link href="/docs#html-layout" passHref>

                    <code>atropos-inner</code> element

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
                <td>{framework === 'element' ? 'function(event)' : 'function(x, y)'}</td>
                <td />
                <td>
                  {hasEvents ? 'Event' : 'Callback function'} will be fired on
                  rotate. {framework === 'element' ? '' : <span>As arguments accepts <code>x</code> and <code>y</code> rotation angles</span>}


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
                  <Link href="/docs#html-layout" passHref>

                    <code>atropos</code> root element

                  </Link>
                </td>
              </tr>
              <tr>
                <td>{hasSlots ? 'scale' : 'scaleChildren'}</td>
                <td />
                <td />
                <td>
                  Elements passed here will be added to{' '}
                  <Link href="/docs#html-layout" passHref>

                    <code>atropos-scale</code> element

                  </Link>
                </td>
              </tr>
              <tr>
                <td>{hasSlots ? 'rotate' : 'rotateChildren'}</td>
                <td />
                <td />
                <td>
                  Elements passed here will be added to{' '}
                  <Link href="/docs#html-layout" passHref>

                    <code>atropos-rotate</code> root element

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
