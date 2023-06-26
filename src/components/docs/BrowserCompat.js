import { SectionTitle } from '../SectionTitle';

export const BrowserCompat = () => {
  return (
    <>
      <SectionTitle title="Browser Compatibility" />
      <p>
        Atropos is compatible with browsers which support the following
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
    </>
  );
};
