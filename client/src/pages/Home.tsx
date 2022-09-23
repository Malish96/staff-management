import { Form, Button, Card, Table } from "antd";
import React, { useEffect, useRef, useState } from "react";
import StaffMembersService, {
  StaffMember,
} from "../services/StaffMembersService";
import AddStaffMember from "./AddStaffMemberModal";
import _ from "lodash";

const Home: React.FC = () => {
  const [addModalVisblity, setAddModalVisblity] = useState(false);
  const [dataSource, setDataSource] = useState<StaffMember[]>([]);
  const [addFormRef] = Form.useForm();

  const handleSave = async (values: StaffMember) => {
    const staffMember = new StaffMembersService();
    const response = await staffMember.addStaffMember(values);
    if (!_.isEmpty(response)) {
      setAddModalVisblity(false);
      addFormRef.resetFields();
    }
  };
  useEffect(() => {
    getAllStaffMembers();
  }, [addModalVisblity]);

  const handleCancel = () => {
    setAddModalVisblity(false);
    addFormRef.resetFields();
  };

  const getAllStaffMembers = async () => {
    const staffMember = new StaffMembersService();
    const response = await staffMember.getAllStaffMembers();
    const staffMembers = response.data.data.data;
    setDataSource(staffMembers);
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];
  return (
    <>
      <Card
        title="Staff Members"
        style={{ borderRadius: "10px", height: "600px" }}
        extra={
          <Button
            type={"primary"}
            onClick={() => setAddModalVisblity(true)}
            style={{ borderRadius: "10px" }}
          >
            + Add Teacher
          </Button>
        }
      >
        <Card
          title="Staff Members List"
          bordered={false}
          style={{ borderRadius: "10px", fontSize: 15 }}
        >
          <Table columns={columns} rowKey="key" dataSource={dataSource} />
        </Card>
        <AddStaffMember
          formRef={addFormRef}
          isModalVisible={addModalVisblity}
          onCancel={handleCancel}
          saveData={handleSave}
        />
      </Card>
    </>
  );
};

export default Home;
