import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import { useHistory } from "react-router";

const { Title } = Typography;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 14,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 14,
  },
};

const FormAccess = () => {
  const { push } = useHistory();

  const onFinish = ({ agent, desktop }) => {
    localStorage.setItem("agent", agent);
    localStorage.setItem("desktop", desktop);
    push("/dashboard");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Title level={2}>Access</Title>
      <Text>Enter You Agent Name And Number Of Desktop</Text>
      <Divider />
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Agent Name"
          name="agent"
          rules={[
            {
              required: true,
              message: "Please, We Need You Agent Name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desktop"
          name="desktop"
          rules={[
            {
              required: true,
              message: "Please Enter You Number Of Desktop",
            },
          ]}
        >
          <InputNumber min="0" max="99" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Access
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormAccess;
