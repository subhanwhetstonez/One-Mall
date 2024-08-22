import User from "@/models/userModel";
import sequelize from "@/dbConfig/dbConfig";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await sequelize.authenticate();
      const { username, password, email } = req.body;

      const newUser = await User.create({
        username,
        password,
        email,
      });

      console.log("USER CREATED:", newUser);
      return res.status(201).json({ message: " USER created successfully" });
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
