import React, { Fragment } from "react";
import { useSpring, animated } from "react-spring";

export default function XucXac(props) {
  let { xucXacItem } = props;

  const [propsDice, set] = useSpring(() => ({
    to: {
      xyz: [1800, 1800, 1800],
    },
    from: {
      xyz: [0, 0, 0],
    },
    config: {
      duration: 1000,
    },
    reset: true,
  }));

  set({ xyz: [1800, 1800, 1800] });

  return (
    <Fragment>
      <div className="scene ml-4">
        <animated.div
          className="cube"
          style={{
            transform: propsDice.xyz.to(
              (x, y, z) =>
                `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
            ),
          }}
        >
          <img
            className="ml-3 cube__face front"
            style={{ width: "100%" }}
            src={xucXacItem.hinhAnh}
          />
          <img
            className="ml-3 cube__face back"
            style={{ width: "100%" }}
            src="./img/BaiTapGameBauCua/bau.png"
          />
          <img
            className="ml-3 cube__face left"
            style={{ width: "100%" }}
            src="./img/BaiTapGameBauCua/ga.png"
          />
          <img
            className="ml-3 cube__face right"
            style={{ width: "100%" }}
            src="./img/BaiTapGameBauCua/ca.png"
          />
          <img
            className="ml-3 cube__face top"
            style={{ width: "100%" }}
            src="./img/BaiTapGameBauCua/tom.png"
          />
          <img
            className="ml-3 cube__face bottom"
            style={{ width: "100%" }}
            src="./img/BaiTapGameBauCua/nai.png"
          />
        </animated.div>
      </div>
    </Fragment>
  );
}
