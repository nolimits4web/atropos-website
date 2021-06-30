export const ParamsTable = () => {
  return (
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
        <tr>
          <td>el</td>
          <td>HTMLElement | string</td>
          <td />
          <td>Mariko element</td>
        </tr>
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
          <td>Transition duration when deactivated (on pointer out) (in ms)</td>
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
            Defines whether to rotate container on pointer move (when activated)
          </td>
        </tr>
        <tr>
          <td>rotateTouch</td>
          <td>boolean</td>
          <td>true</td>
          <td>
            Defines whether to rotate container on touch move (when activated),{' '}
            <code>rotate</code> must be enabled
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
        <tr>
          <td>onEnter</td>
          <td>number</td>
          <td>function</td>
          <td>
            Callback function will be executed when Mariko activated (on hover)
          </td>
        </tr>
        <tr>
          <td>onLeave</td>
          <td>number</td>
          <td>function</td>
          <td>
            Callback function will be executed when Mariko deactivated (on
            pointer out)
          </td>
        </tr>
        <tr>
          <td>onRotate</td>
          <td>number</td>
          <td>function(x, y)</td>
          <td>
            Callback function will be executed on rotate. As arguments accepts{' '}
            <code>x</code> and <code>y</code> rotation angles
          </td>
        </tr>
      </tbody>
    </table>
  );
};
