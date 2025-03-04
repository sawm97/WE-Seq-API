const { User } = require("../models");

class UserController {
  static async getUsers(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users", error });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user", error });
    }
  }

  static async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error });
    }
  }

  static async updateUser(req, res) {
    try {
      const [updated] = await User.update(req.body, {
        where: { id: req.params.id },
      });

      if (!updated) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ message: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error });
    }
  }

  static async deleteUser(req, res) {
    try {
      const deleted = await User.destroy({ where: { id: req.params.id } });

      if (!deleted) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error });
    }
  }
}

module.exports = UserController;
