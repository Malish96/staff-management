import BaseService from './BaseService';

export type StaffMember = {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

class StaffMemberService extends BaseService {
  public addStaffMember = async (staffMember: StaffMember) => {
    return this.connection.post('/api/add-staff-member', staffMember);
  };

  public getAllStaffMembers = async () => {
    return this.connection.get('/api/get-all-staff-members');
  };
}

export default StaffMemberService;
