import { Pre } from '../Pre';
import { SectionTitle } from '../SectionTitle';

export const ControlElementsOffsets = ({ framework = 'core' }) => {
  return (
    <>
      <SectionTitle title="Control Elements Offsets" />
      <p>
        Mariko uses special <code>data-</code> attributes to control elements
        offset (parallax effect):
      </p>

      <ul>
        <li>
          <p>
            <code>data-mariko-offset</code> - controls element offset/translate
            in percentage.
          </p>
          <div>
            For example:
            <ul>
              <li>
                <code>data-mariko-offset="5"</code> means that element will move{' '}
                <code>5%</code> of its size on max rotate angles.
              </li>
              <li>
                <code>data-mariko-offset="-5"</code> means that element will
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
          <code>data-mariko-opacity</code> - controls element opacity.
          <div>
            For example:
            <ul>
              <li>
                <code>data-mariko-opacity="0;1"</code> - means element's opacity
                will change from <code>0</code> (on initial state) and up to{' '}
                <code>1</code> (on max rotate angles).
              </li>
              <li>
                <code>data-mariko-opacity="0.1;0.8"</code> - means element's
                opacity will change from <code>0.1</code> (on initial state) and
                up to <code>0.8</code> (on max rotate angles).
              </li>
              <li>
                <code>data-mariko-opacity="1;0"</code> - means element's opacity
                will change from <code>1</code> (on initial state) and down to
                to <code>0</code> (on max rotate angles).
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <p>For example:</p>
      {framework === 'core' && (
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
      )}

      {framework === 'react' && (
        <Pre lang="jsx">{
          /* jsx */ `
          <Mariko>
            {/* 
            Element with negative offset will move in reverse direction,
            making it appear behind the scene
            */}
            <img src="image-bg.png" data-mariko-offset="-5" />
            {/* 
            Element with no offset will not move
            */}
            <img src="image-middle.png" data-mariko-offset="0" />
            {/* 
            Element with positive offset will move in same direction,
            making it appear in front of the scene
            */}
            <img src="image-front.png" data-mariko-offset="5" />
          </Mariko>
        `
        }</Pre>
      )}

      {framework === 'vue' && (
        <Pre lang="html">{
          /* html */ `
          <mariko>
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
          </mariko>
        `
        }</Pre>
      )}
    </>
  );
};
