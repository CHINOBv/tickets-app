import { Col, Row, Typography, List, Tag, Divider } from "antd";
import TicketList from "../components/tickets/TicketList";
import useHideMenu from "../hooks/useHideMenu";

const { Title, Text } = Typography;

const data = [
  {
    ticketNo: 33,
    desktop: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNo: 34,
    desktop: 4,
    agent: "Melissa Flores",
  },
  {
    ticketNo: 35,
    desktop: 5,
    agent: "Carlos Castro",
  },
  {
    ticketNo: 36,
    desktop: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNo: 37,
    desktop: 3,
    agent: "Fernando Herrera",
  },
  {
    ticketNo: 38,
    desktop: 2,
    agent: "Melissa Flores",
  },
  {
    ticketNo: 39,
    desktop: 5,
    agent: "Carlos Castro",
  },
];
const Queue = () => {
  useHideMenu(true);
  return (
    <>
      <Title level={1}>Serving The Client: </Title>
      <Row>
        <Col span={12}>
          <TicketList data={data} />
        </Col>
        <Col span={12}>
          <Divider> History </Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.ticketNo}`}
                  description={
                    <>
                      <Text type="secondary">On Desktop: </Text>
                      <Tag color="magenta">{item.desktop}</Tag>
                      <Text type="secondary">Agent: </Text>
                      <Tag color="cyan">{item.agent}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default Queue;
