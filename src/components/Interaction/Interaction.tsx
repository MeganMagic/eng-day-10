import React from "react";
import styled from "styled-components";
import Sketch, { SketchProps } from "react-p5";
import p5Types from "p5";
import {
  KEY_COLOR,
  BG_COLOR,
  MOBILE_VALUE,
  TABLET_VALUE,
  DESKTOP_VALUE,
  WIDE_VALUE,
  P5Color,
  Device,
} from "./constants";

const Interaction: React.FC = () => {
  const p5 = require("p5");
  const Vector = p5.Vector;

  let device: Device;
  let boxWidth: number;
  let boxHeight: number;
  let xMax: number;
  let yMax: number;
  let radius: number;
  let padding: number;
  let pivotGap: number;
  let edgeLength: number;

  let dots = [];
  let edges = [];

  class Dot {
    x;
    y;
    pos;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.pos = new Vector(
        padding + radius + x * pivotGap,
        padding + radius + y * pivotGap
      );
    }

    display(
      p5: p5Types,
      x = this.pos.x,
      y = this.pos.y,
      r = radius,
      c = KEY_COLOR.hex
    ) {
      let angle = p5.TWO_PI / 8;
      let angleOffset = p5.TWO_PI / (8 * 2);
      p5.noStroke();
      p5.fill(c);
      p5.beginShape();
      for (let i = angleOffset; i < p5.TWO_PI + angleOffset; i += angle) {
        let sx = x + p5.cos(i) * r;
        let sy = y + p5.sin(i) * r;
        p5.vertex(sx, sy);
      }
      p5.endShape(p5.CLOSE);
    }
  }

  class Edge extends Dot {
    mPos;
    targetPos;
    velocity;
    isMoved;
    xs;
    ys;

    constructor(x: number, y: number, tx: number, ty: number) {
      super(x, y);
      this.mPos = new Vector(this.pos.x, this.pos.y);
      this.targetPos = new Vector(
        padding + radius + tx * pivotGap,
        padding + radius + ty * pivotGap
      );
      this.velocity = window.p5.Vector.sub(this.targetPos, this.pos)
        .normalize()
        .setMag(5);
      this.isMoved = false;
      this.xs = [];
      this.ys = [];
    }

    pushLog() {
      this.xs.push(this.mPos.x);
      this.ys.push(this.mPos.y);
    }

    move(p5: p5Types, startFrame) {
      if (startFrame > p5.frameCount) {
        console.log("not yet!");
        return;
      }

      if (this.isMoved === false) {
        this.mPos.add(this.velocity);
        const dist = window.p5.Vector.dist(this.targetPos, this.mPos);
        if (dist < 5) this.isMoved = true;
        this.pushLog();
      }

      for (let i = 0; i < this.xs.length; i += 1) {
        const mappedColor = `rgba(
          ${KEY_COLOR.rgb.r},
          ${KEY_COLOR.rgb.g},
          ${KEY_COLOR.rgb.b},
          ${p5.map(i, 0, this.xs.length, 0, 1)}
        )`;

        this.display(p5, this.xs[i], this.ys[i], radius, mappedColor);
      }

      if (this.xs.length > edgeLength || this.isMoved === true) {
        this.xs.shift();
        this.ys.shift();
      }
    }
  }
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    init();
    p5.createCanvas(boxWidth, boxHeight).parent(canvasParentRef);

    const edge1 = new Edge(1, 1, 2, 2);
    edges.push(edge1);
  };

  const draw = (p5: p5Types) => {
    p5.background(BG_COLOR.hex);

    for (let edge of edges) edge.move(p5, 120);
    for (let dot of dots) dot.display(p5);
    p5.text(`(${p5.mouseX}, ${p5.mouseY})`, p5.mouseX, p5.mouseY);
  };

  const init = () => {
    const parent = document.querySelector('div[data-testid="react-p5"]');
    const { clientWidth } = parent;

    if (clientWidth >= 1920) device = "WIDE";
    else if (clientWidth >= 1280) device = "DESKTOP";
    else if (clientWidth >= 768) device = "TABLET";
    else device = "MOBILE";

    switch (device) {
      case "WIDE":
        boxWidth = WIDE_VALUE.boxWidth;
        boxHeight = WIDE_VALUE.boxHeight;
        xMax = WIDE_VALUE.xMax;
        yMax = WIDE_VALUE.yMax;
        radius = WIDE_VALUE.radius;
        padding = WIDE_VALUE.padding;
        pivotGap = WIDE_VALUE.pivotGap;
        edgeLength = WIDE_VALUE.edgeLength;
        break;
      case "DESKTOP":
        boxWidth = DESKTOP_VALUE.boxWidth;
        boxHeight = DESKTOP_VALUE.boxHeight;
        xMax = DESKTOP_VALUE.xMax;
        yMax = DESKTOP_VALUE.yMax;
        radius = DESKTOP_VALUE.radius;
        padding = DESKTOP_VALUE.padding;
        pivotGap = DESKTOP_VALUE.pivotGap;
        edgeLength = DESKTOP_VALUE.edgeLength;
        break;
      case "TABLET":
        boxWidth = TABLET_VALUE.boxWidth;
        boxHeight = TABLET_VALUE.boxHeight;
        xMax = TABLET_VALUE.xMax;
        yMax = TABLET_VALUE.yMax;
        radius = TABLET_VALUE.radius;
        padding = TABLET_VALUE.padding;
        pivotGap = TABLET_VALUE.pivotGap;
        edgeLength = TABLET_VALUE.edgeLength;
        break;
      default:
        boxWidth = MOBILE_VALUE.boxWidth;
        boxHeight = MOBILE_VALUE.boxHeight;
        xMax = MOBILE_VALUE.xMax;
        yMax = MOBILE_VALUE.yMax;
        radius = MOBILE_VALUE.radius;
        padding = MOBILE_VALUE.padding;
        pivotGap = MOBILE_VALUE.pivotGap;
        edgeLength = MOBILE_VALUE.edgeLength;
    }

    let newDots = [];
    for (let xNumber = 0; xNumber < xMax; xNumber += 1) {
      for (let yNumber = 0; yNumber < yMax; yNumber += 1) {
        newDots.push(new Dot(xNumber, yNumber));
      }
    }
    dots = newDots;
  };

  const windowResized: SketchProps["windowResized"] = (p5) => {
    init();
    p5.resizeCanvas(boxWidth, boxHeight);
  };

  return (
    <StyledSketch setup={setup} draw={draw} windowResized={windowResized} />
  );
};

export default Interaction;

const StyledSketch = styled(Sketch)`
  width: 100vw;
  height: 100%;
  max-height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
