"use client";

import { Col, Grid, Row } from "antd";

import LoginForm from "../Components/Member/LoginForm";
const { useBreakpoint } = Grid;
export default function Member() {
  const { md } = useBreakpoint();
  return (
    <>
      <div className="h-screen">
        <Row style={{ height: "100%" }}>
          {md ? (
            <Col span={16}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "GrayText",
                }}
              ></div>
            </Col>
          ) : (
            <></>
          )}

          <Col span={md ? 8 : 24}>
            <div
              style={
                md
                  ? {}
                  : {
                      width: "100%",
                      height: "100%",
                      backgroundColor: "GrayText",
                    }
              }
            >
              {" "}
              <div className="flex flex-col justify-items-center items-center">
                {md ? (
                  <div className="font-bold text-2xl pb-2">Login</div>
                ) : (
                  <></>
                )}
                <div
                  style={
                    md
                      ? {}
                      : {
                          backgroundColor: "white",
                          padding: "16px",
                          borderRadius: "10px",
                          marginTop: "16px",
                        }
                  }
                >
                  {md ? (
                    <></>
                  ) : (
                    <div className="font-bold text-2xl pb-2">Login</div>
                  )}
                  <LoginForm />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
