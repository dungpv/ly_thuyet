import React from "react";
import { useSpring, animated } from "react-spring";

export default function Ex2UseSpring(props) {
  let { color, ...propsUseSpring } = useSpring({
    color: [131, 111, 255], //Màu sắc sau animation
    from: {
      color: [238, 99, 99], //Màu sắc bắt đầu
    },
    config: { duration: 2000, delay: 0 },
  });

  // Tăng font chữ tăng độ dài
  let propAnimation = useSpring({
    from: {
      width: "0%",
      height: "0%",
      fontSize: "10px",
    },
    to: async (next, cancel) => {
      await next({ width: "100%", height: "100%", fontSize: "50px" });
      await next({ width: "50%", height: "50%", fontSize: "10px" });
      await next({ width: "100%", height: "100%", fontSize: "50px" });
    },
    config: { duration: 3000 },
  });

  return (
    <div>
      <animated.div
        style={{
          color: color.to((r, g, b) => {
            return `rgb(${r},${g},${b})`;
          }),
        }}
      >
        Hello Dung, welcome 2022
      </animated.div>

      <animated.span style={propAnimation} className="bg-dark text-white">
        <span>Hello Dung, welcome 2022</span>
        <p>Fullstack Dev JS</p>
      </animated.span>
    </div>
  );
}
