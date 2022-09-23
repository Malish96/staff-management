import React from "react";

import { Modal, FormInstance, Form, Input, Button } from "antd";
import { StaffMember } from "../services/StaffMembersService";

interface StaffMemberModalProps {
  isModalVisible: boolean;
  onCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  saveData: (formData: StaffMember) => Promise<boolean | void>;
  formRef: FormInstance;
}

const AddStaffMemberModal: React.FC<StaffMemberModalProps> = (props) => {
  return (
    <>
      <Modal
        title="Add Teacher"
        style={{ borderRadius: "10px" }}
        open={props.isModalVisible}
        onCancel={props.onCancel}
        
        footer={null}
      >
        <Form
          className="modal-body"
          form={props.formRef}
          onFinish={props.saveData}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please enter First Name",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please enter Last Name",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter Email",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ borderRadius: "6px" }}
              
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddStaffMemberModal;
