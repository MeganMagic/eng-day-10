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
  Device,
  colors,
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
  let velocity: number;

  let dots: Dot[] = [];
  let edges_mobile: Edge[][] = [];
  let edges_tablet: Edge[][] = [];
  let edges_desktop: Edge[][] = [];

  let scene: number = 200;
  let sceneNumber: number = 4;
  let totalScene: number = scene * sceneNumber;
  let frame = (frameCount) => {
    return frameCount % totalScene;
  };

  /* Dot */
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

    pulse(p5: p5Types) {
      const mousePos = new Vector(p5.mouseX, p5.mouseY);
      const dist = window.p5.Vector.dist(mousePos, this.pos);
      const maxDist = window.p5.Vector.dist(
        new Vector(0, 0),
        new Vector(boxWidth, boxHeight)
      );

      const radiusWeight = Math.trunc(p5.map(dist, 0, maxDist / 2, 10, 0));
      const opacityWeight = p5.map(dist, 0, maxDist / 2, 0.5, 0);
      const { r, g, b } = KEY_COLOR.rgb;

      this.display(
        p5,
        this.pos.x,
        this.pos.y,
        radius + radiusWeight,
        `rgba(${r}, ${g}, ${b}, ${opacityWeight})`
      );
    }
  }

  /* Edge */
  class Edge extends Dot {
    mPos;
    targetPos;
    velocity;
    isMoved;
    tx;
    ty;
    xs;
    ys;

    constructor(x: number, y: number, tx: number, ty: number) {
      super(x, y);
      this.mPos = new Vector(this.pos.x, this.pos.y);
      this.tx = tx;
      this.ty = ty;
      this.targetPos = new Vector(
        padding + radius + tx * pivotGap,
        padding + radius + ty * pivotGap
      );
      this.velocity = window.p5.Vector.sub(this.targetPos, this.pos)
        .normalize()
        .setMag(velocity);
      this.isMoved = false;
      this.xs = [];
      this.ys = [];
    }

    pushLog() {
      this.xs.push(this.mPos.x);
      this.ys.push(this.mPos.y);
    }

    resetPos() {
      this.pos = new Vector(
        padding + radius + this.x * pivotGap,
        padding + radius + this.y * pivotGap
      );
      this.mPos = new Vector(this.pos.x, this.pos.y);
      this.targetPos = new Vector(
        padding + radius + this.tx * pivotGap,
        padding + radius + this.ty * pivotGap
      );
      this.velocity = window.p5.Vector.sub(this.targetPos, this.pos)
        .normalize()
        .setMag(velocity);
      this.xs = [];
      this.ys = [];
    }

    move(p5: p5Types, startFrame) {
      if (frame(p5.frameCount) === 0) {
        this.isMoved = false;
        this.mPos = new Vector(this.pos.x, this.pos.y);
      }

      if (frame(p5.frameCount) <= startFrame) {
        return;
      }

      if (this.isMoved === false) {
        this.mPos.add(this.velocity);
        const dist = window.p5.Vector.dist(this.targetPos, this.mPos);
        if (dist < 5) this.isMoved = true;
        this.pushLog();
      }

      for (let i = 0; i < this.xs.length; i += 1) {
        const expandIndex = Math.floor(
          p5.map(
            i,
            this.xs.length - edgeLength,
            this.xs.length,
            colors.length - 1,
            0
          )
        );
        const collapseIndex = Math.floor(
          p5.map(i, 0, edgeLength, colors.length - 1, 0)
        );
        const mappedColor = !this.isMoved
          ? colors[expandIndex]
          : colors[collapseIndex];

        this.display(p5, this.xs[i], this.ys[i], radius, mappedColor);
      }

      if (this.xs.length >= edgeLength || this.isMoved === true) {
        this.xs.shift();
        this.ys.shift();
      }
    }
  }

  const checkDevice = () => {
    const parent = document.querySelector('div[data-testid="react-p5"]');
    const { clientWidth } = parent;

    if (clientWidth >= 1920) device = "WIDE";
    else if (clientWidth >= 1280) device = "DESKTOP";
    else if (clientWidth >= 768) device = "TABLET";
    else device = "MOBILE";
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    init();
    p5.createCanvas(boxWidth, boxHeight).parent(canvasParentRef);

    // animation 정의
    edges_tablet = [
      [
        new Edge(1, 1, 2, 0),
        new Edge(0, 0, 1, 1),
        new Edge(2, 1, 1, 2),
        new Edge(3, 1, 2, 2),
        new Edge(0, 2, 1, 3),
      ],
      [
        new Edge(0, 1, 1, 0),
        new Edge(2, 0, 3, 1),
        new Edge(2, 2, 1, 3),
        new Edge(1, 1, 2, 2),
        new Edge(3, 2, 2, 3),
      ],
      [
        new Edge(1, 2, 0, 3),
        new Edge(2, 2, 3, 3),
        new Edge(0, 1, 1, 2),
        new Edge(3, 1, 2, 2),
        new Edge(1, 0, 0, 1),
        new Edge(2, 0, 3, 1),
      ],
      [
        new Edge(2, 1, 3, 0),
        new Edge(1, 0, 2, 1),
        new Edge(0, 1, 1, 0),
        new Edge(1, 3, 0, 2),
        new Edge(3, 2, 2, 3),
      ],
    ];
    edges_desktop = [
      [
        new Edge(1, 1, 2, 0),
        new Edge(0, 0, 1, 1),
        new Edge(2, 1, 1, 2),
        new Edge(3, 1, 2, 2),
      ],
      [
        new Edge(0, 1, 1, 0),
        new Edge(2, 1, 3, 0),
        new Edge(2, 2, 1, 1),
        new Edge(3, 1, 2, 2),
      ],
      [
        new Edge(1, 1, 0, 0),
        new Edge(2, 1, 3, 0),
        new Edge(0, 2, 1, 1),
        new Edge(3, 2, 2, 1),
      ],
      [
        new Edge(0, 1, 1, 2),
        new Edge(1, 0, 0, 1),
        new Edge(2, 0, 3, 1),
        new Edge(3, 1, 2, 2),
      ],
    ];
    edges_mobile = [
      [
        new Edge(1, 1, 2, 0),
        new Edge(0, 0, 1, 1),
        new Edge(1, 2, 2, 3),
        new Edge(2, 3, 1, 4),
        new Edge(1, 3, 0, 4),
      ],
      [
        new Edge(1, 0, 0, 1),
        new Edge(2, 0, 1, 1),
        new Edge(1, 3, 0, 4),
        new Edge(0, 2, 1, 3),
        new Edge(1, 2, 2, 3),
      ],
      [
        new Edge(1, 0, 2, 1),
        new Edge(0, 1, 1, 0),
        new Edge(0, 3, 1, 4),
        new Edge(1, 2, 0, 3),
        new Edge(1, 4, 2, 3),
      ],
      [
        new Edge(1, 0, 0, 1),
        new Edge(2, 1, 1, 0),
        new Edge(0, 2, 1, 3),
        new Edge(1, 4, 2, 3),
        new Edge(0, 3, 1, 4),
      ],
    ];
  };

  const draw = (p5: p5Types) => {
    p5.background(BG_COLOR.hex);

    checkDevice();
    switch (device) {
      case "WIDE":
        for (let i = 0; i < edges_desktop.length; i++) {
          let session = edges_desktop[i];
          for (let edge of session) edge.move(p5, scene * i);
        }
        break;
      case "DESKTOP":
        for (let i = 0; i < edges_desktop.length; i++) {
          let session = edges_desktop[i];
          for (let edge of session) edge.move(p5, scene * i);
        }
        break;
      case "TABLET":
        for (let i = 0; i < edges_tablet.length; i++) {
          let session = edges_tablet[i];
          for (let edge of session) edge.move(p5, scene * i);
        }
        break;
      case "MOBILE":
      default:
        for (let i = 0; i < edges_mobile.length; i++) {
          let session = edges_mobile[i];
          for (let edge of session) edge.move(p5, scene * i);
        }
    }

    for (let dot of dots) {
      dot.pulse(p5);
      dot.display(p5);
    }
  };

  const init = () => {
    checkDevice();

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
        velocity = WIDE_VALUE.velocity;
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
        velocity = DESKTOP_VALUE.velocity;
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
        velocity = TABLET_VALUE.velocity;
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
        velocity = MOBILE_VALUE.velocity;
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

    for (let scene of edges_desktop) for (let edge of scene) edge.resetPos();
    for (let scene of edges_tablet) for (let edge of scene) edge.resetPos();
    for (let scene of edges_mobile) for (let edge of scene) edge.resetPos();
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
