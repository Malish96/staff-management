const db = require("../models");

module.exports = {
  //create news
  createStaffMember: async (req, res) => {
    try {
      if (!req.body) {
        return res.status(500).json({ message: "Create staff member failed failed" });
      }
      const staffMember = await db.StaffMembers.create(req.body);
      return res.json(staffMember);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  getAllMembers: async (req, res) => {
    try {
      const staffMembers = await db.StaffMembers.findAll();
      const count = await db.StaffMembers.count();
      const response = {
        error: false,
        statusCode: 200,
        message: "Data retrieved sucessfully! ",
        data: {
          data: staffMembers,
          total: count,
        },
      };
      return res.json(response);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
