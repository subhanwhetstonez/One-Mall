// app/login/route.js

import { NextResponse } from "next/server";
import User from "../../models/userModel"; // Adjust the path based on your structure

export async function GET(req) {
  // Optional: Handle GET requests if needed, e.g., to check session status
  return NextResponse.json({ message: "Login endpoint" }, { status: 200 });
}
