"use client";

import Snowfall from "react-snowfall";

export default function SnowEffect() {
  return (
 <Snowfall
  snowflakeCount={150}   // ❄️ heavy
  speed={[0.6, 1.8]}     // natural fall
  radius={[1.5, 3.5]}   // visible flakes
  color="#E6DEFF"        // 💜 subtle purple
  style={{
    position: "fixed",
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: 40,
  }}
/>

  );
}
