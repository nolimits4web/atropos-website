import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';

export const ControlElementsOffsets = ({ framework = 'core' }) => {
  return (
    <>
      <SectionTitle title="Control Elements Offsets" />
      <p>
        Atropos uses special <code>data-</code> attributes to control elements
        offset (parallax effect):
      </p>

      <ul>
        <li>
          <p>
            <code>data-atropos-offset</code> - controls element offset/translate
            in percentage.
          </p>
          <div>
            For example:
            <ul>
              <li>
                <code>data-atropos-offset="5"</code> means that element will
                move <code>5%</code> of its size on max rotate angles.
              </li>
              <li>
                <code>data-atropos-offset="-5"</code> means that element will
                move <code>-5%</code> of its size on max rotate angles.
              </li>
            </ul>
          </div>
          <p>
            Basically if you want the element to appear closer (be in front of
            the scene), then this value should be positive. And if you want the
            element to appear in the distance (be behind the scene), then this
            value should be negative.
          </p>
        </li>
        <li>
          <code>data-atropos-opacity</code> - controls element opacity.
          <div>
            For example:
            <ul>
              <li>
                <code>data-atropos-opacity="0;1"</code> - means element's
                opacity will change from <code>0</code> (on initial state) and
                up to <code>1</code> (on max rotate angles).
              </li>
              <li>
                <code>data-atropos-opacity="0.1;0.8"</code> - means element's
                opacity will change from <code>0.1</code> (on initial state) and
                up to <code>0.8</code> (on max rotate angles).
              </li>
              <li>
                <code>data-atropos-opacity="1;0"</code> - means element's
                opacity will change from <code>1</code> (on initial state) and
                down to to <code>0</code> (on max rotate angles).
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <p>For example:</p>
      {framework === 'core' && (
        <Pre lang="html">{
          /* html */ `
          <div class="atropos">
            <div class="atropos-scale">
              <div class="atropos-rotate">
                <div class="atropos-inner">
                  <!--
                  Element with negative offset will move in reverse direction,
                  making it appear behind the scene
                  -->
                  <img src="image-bg.png" data-atropos-offset="-5" />
                  <!--
                  Element with no offset will not move
                  -->
                  <img src="image-middle.png" data-atropos-offset="0" />
                  <!--
                  Element with positive offset will move in same direction,
                  making it appear in front of the scene
                  -->
                  <img src="image-front.png" data-atropos-offset="5" />
                </div>
              </div>
            </div>
          </div>
        `
        }</Pre>
      )}

      {framework === 'react' && (
        <Pre lang="jsx">{
          /* jsx */ `
          <Atropos>
            {/* 
            Element with negative offset will move in reverse direction,
            making it appear behind the scene
            */}
            <img src="image-bg.png" data-atropos-offset="-5" />
            {/* 
            Element with no offset will not move
            */}
            <img src="image-middle.png" data-atropos-offset="0" />
            {/* 
            Element with positive offset will move in same direction,
            making it appear in front of the scene
            */}
            <img src="image-front.png" data-atropos-offset="5" />
          </Atropos>
        `
        }</Pre>
      )}

      {framework === 'vue' && (
        <Pre lang="html">{
          /* html */ `
          <atropos>
            <!--
            Element with negative offset will move in reverse direction,
            making it appear behind the scene
            -->
            <img src="image-bg.png" data-atropos-offset="-5" />
            <!--
            Element with no offset will not move
            -->
            <img src="image-middle.png" data-atropos-offset="0" />
            <!--
            Element with positive offset will move in same direction,
            making it appear in front of the scene
            -->
            <img src="image-front.png" data-atropos-offset="5" />
          </atropos>
        `
        }</Pre>
      )}
    </>
  );
};
