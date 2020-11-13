import React from "react";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

export const ToTopButton = () => (
  <ScrollUpButton
    StopPosition={0}
    ShowAtPosition={100}
    EasingType="linear"
    AnimationDuration={500}
    style={{ zIndex: 1}}
  />
);
