"use client";

import React, { useCallback, useState } from "react";
import type { CheckboxProps, FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import useLogin from "@/app/react-query/useLogin";

type FieldType = {
  username?: string;
  password?: string;
  rememberMe?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginForm = () => {
  const loginFunct = useLogin();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const handleLogin = useCallback(() => {
    loginFunct.mutate({
      name,
      password,
    });
  }, [name, password]);
  const onChangeRememberMe: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setRememberMe(e.target.checked);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item<FieldType> name="rememberMe" valuePropName={""} label={null}>
        <Checkbox checked={rememberMe} onChange={onChangeRememberMe}>
          Remember me
        </Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" onClick={handleLogin}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
