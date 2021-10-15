// eslint-disable-next-line
import { Atropos } from 'atropos/react';

export const GameBox = ({ bg, logo, studios }) => {
  return (
    <div className="w-64 m-6">
      <Atropos
        className="game-box"
        rotateTouch="scroll-y"
        rotateXMax={24}
        rotateYMax={24}
        rotateChildren={
          <>
            <span className="game-box-t" />
            <span className="game-box-r" />
            <span className="game-box-b" />
            <span className="game-box-l" />
          </>
        }
      >
        <img
          className="game-box-size"
          src="/images/game-boxes/box-size.svg"
          alt="box bg"
        />
        <img
          className="game-box-bg"
          data-atropos-offset="-4"
          src={`/images/game-boxes/${bg}`}
          alt="game cover"
        />
        <img
          className="game-box-logo"
          data-atropos-offset="2.5"
          src={`/images/game-boxes/${logo}`}
          alt="game logo"
        />
        <img src="/images/game-boxes/box-ribbon.svg" alt="" />
        <img
          className="game-box-studio"
          src={`/images/game-boxes/${studios}`}
          alt="game studio"
        />
      </Atropos>
    </div>
  );
};
