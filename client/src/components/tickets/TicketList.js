import { Card, List, Tag, Typography } from "antd";
const { Title } = Typography;

const TicketList = ({ data }) => {
  return (
    <>
      <List
        dataSource={data.slice(0, 3)}
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{ width: 300, marginTop: 16 }}
              actions={[
                <Tag color="volcano">{item.agent}</Tag>,
                <Tag color="magenta">Desktop: {item.desktop}</Tag>,
              ]}
            >
              <Title>No. {item.ticketNo}</Title>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default TicketList;
