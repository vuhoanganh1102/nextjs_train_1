"use client";

import { Col, Grid, Row } from "antd";

const { useBreakpoint } = Grid;
export default function Member() {
  const { md } = useBreakpoint();

  return (
    <>
      <div className="h-screen"></div>
    </>
  );
}
