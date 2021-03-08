import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
const { Title, Text } = Typography;
const Dashboard = () => {
  const exit = () => {};
  const nextTicket = () => {};
  return (
    <>
      <Row>
        <Col span={20}>
          <Title>Jose</Title>
          <Text>You Working On The Desktop: </Text>
          <Text type="success">3</Text>
        </Col>
        <Col span={20} align="right">
          <Button type="danger" shape="round" onClick={() => exit()}>
            <CloseCircleOutlined />
            Exit
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text>Current Ticket: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            7
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={() => nextTicket()} shape="round" type="primary">
            Next Ticket <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
