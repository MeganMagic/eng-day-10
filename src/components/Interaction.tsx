import React from "react";
import Sketch, { SketchProps } from "react-p5";
import styled from "styled-components";

import p5Types from "p5";

const DOT_COLOR = "#4B34D8";
const DOT_COLOR_RGB = { r: 69, g: 43, b: 221 };
const BG_COLOR = "#000000";

const Interaction: React.FC = () => {
  const p5 = require("p5");
  const Vector = p5.Vector;

  let octagons = [];
  let globalRatio = 1;
  let gap = 300;
  let radius = 150;
  let padding = 50;
  let colNumber: number;
  let rowNumber: number;
  let boxWidth: number;
  let boxHeight: number;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    init();
    p5.createCanvas(boxWidth, boxHeight).parent(canvasParentRef);

    class Octagon {
      pos;
      mPos;
      x;
      y;
      radius;
      color;

      constructor(x: number, y: number, radius: number) {
        this.pos = new Vector(x, y);
        this.mPos = new Vector(x, y);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = DOT_COLOR;
        octagons.push(this);
      }

      display(p = this.pos, r = this.radius, c = this.color) {
        let angle = p5.TWO_PI / 8;
        let angleOffset = p5.TWO_PI / (8 * 2);
        p5.noStroke();
        p5.fill(c);

        p5.beginShape();
        for (let i = angleOffset; i < p5.TWO_PI + angleOffset; i += angle) {
          let sx = p.x + p5.cos(i) * r;
          let sy = p.y + p5.sin(i) * r;
          p5.vertex(sx, sy);
        }
        p5.endShape(p5.CLOSE);

        p5.fill("#ffffff");
        p5.ellipse(this.x, this.y, 5, 5);
      }

      update() {
        const mouse = new Vector(p5.mouseX, p5.mouseY);
        const dist = mouse.dist(this.pos);
        const maxDist =
          Math.trunc(
            Math.sqrt(Math.pow(boxWidth, 2) + Math.pow(boxHeight, 2))
          ) / 4;
        const strokeWeight = p5.map(dist, 0, maxDist, radius / 5, 0);
        const opacityWeight = p5.map(dist, 0, maxDist, 0.25, 0);
        if (strokeWeight > 0)
          this.display(
            this.pos,
            this.radius + strokeWeight,
            `rgba(${DOT_COLOR_RGB.r}, ${DOT_COLOR_RGB.g}, ${DOT_COLOR_RGB.b}, ${opacityWeight})`
          );

        this.display();

        p5.text(`(${this.pos.x}, ${this.pos.y})`, this.pos.x - 10, this.pos.y);
        p5.text(`dist: ${Math.trunc(dist)}`, this.pos.x - 10, this.pos.y + 14);
        p5.text(
          `weight: ${Math.trunc(strokeWeight)}`,
          this.pos.x - 10,
          this.pos.y + 28
        );
      }

      animate(targetX, targetY) {
        const offset = radius / 2;
        const target = new Vector(targetX, targetY);
        const velocity = target.sub(this.pos).normalize().mult(3, 3);
        this.mPos.add(velocity);
        this.display(this.mPos);
      }
    }

    let offset = radius / 2;

    for (let col = 0; col < colNumber; col += 1) {
      for (let row = 0; row < rowNumber; row += 1) {
        new Octagon(offset + gap * col, offset + gap * row, radius / 2);
      }
    }
  };

  const draw = (p5: p5Types) => {
    p5.background("rgba(0, 0, 0, 0.1)");

    for (let octa of octagons) octa.update();
    octagons[2].animate(375, 375);

    p5.text(`(${p5.mouseX}, ${p5.mouseY})`, p5.mouseX, p5.mouseY);
  };

  const init = () => {
    const parent = document.querySelector('div[data-testid="react-p5"]');
    if (!parent) return;

    const { clientWidth, clientHeight } = parent;
    const innerWidth = clientWidth - padding * 2;
    const innerHeight = clientHeight - padding * 2;

    colNumber = Math.floor((innerWidth - radius) / gap) + 1;
    rowNumber = Math.floor((innerHeight - radius) / gap) + 1;

    boxWidth = gap * (colNumber - 1) + radius;
    boxHeight = gap * (rowNumber - 1) + radius;
  };

  const windowResized: SketchProps["windowResized"] = (p5) => {
    // tablet size 인 경우
    // gap, padding, radius 수정

    // mobile size 인 경우
    // gap, padding, radius 수정

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
  height: 100vh;
  max-height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
