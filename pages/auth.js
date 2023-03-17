import React from "react";
import { Tabs } from "antd";
import { LoginForm } from "../components/auth/Login";
import { RegisterForm } from "../components/auth/Register";

export default function LoginPage() {
  return (
    <div style={{ width: 400, margin: "50px auto" }}>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `Войти`,
            key: "1",
            children: <LoginForm />,
          },
          {
            label: `Регистрация`,
            key: "2",
            children: <RegisterForm />,
          },
        ]}
      />
    </div>
  );
}
