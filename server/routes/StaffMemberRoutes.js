const StaffMemberController = require("../controllers/StaffMemberController");

module.exports = (app) => {
  app.post("/api/add-staff-member", StaffMemberController.createStaffMember); // add news-category route
  app.get("/api/get-all-staff-members", StaffMemberController.getAllMembers); // get all news category route
};
