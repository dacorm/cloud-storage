import React from "react";
import { Input, Button, Spin, Form } from "antd";
import axios from "axios";

import styles from "./Auth.module.scss";
import { useRouter } from "next/router";
import { Api } from "../../api";
import { setCookie } from "nookies";

export const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setLoading] = React.useState(false);

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const { token } = await Api.auth.login(values);
      setCookie(null, "_token", token);
      await router.replace("/");
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formBlock}>
      {isLoading ? (
        <Spin />
      ) : (
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          onFinish={onSubmit}
        >
          <Form.Item
            label="E-Mail"
            name="email"
            rules={[
              {
                required: true,
                message: "Укажите почту",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: "Укажите пароль",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};
