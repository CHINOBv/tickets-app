import { Button, Col, Row, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import useHideMenu from "../hooks/useHideMenu";

const { Title, Text } = Typography;

const CreateTicket = () => {
  useHideMenu(true);
  const newTicket = () => {};
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Press The Button For New Ticket</Title>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={() => newTicket()}
          >
            New Ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>Your Number: </Text>
          <br />
          <Text style={{ fontSize: 55 }} type="success">
            56
          </Text>
        </Col>
      </Row>
    </>
  );
};

export default CreateTicket;
