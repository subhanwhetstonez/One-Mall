import pool from "@/utils/postgres";

export async function POST(req) {
  try {
    const { username, password, email } = await req.json();

    // Check if the user already exists by username or email
    const client = await pool.connect();
    const existingUserQuery = `
      SELECT * FROM users WHERE username = $1 OR email = $2
    `;
    const existingUserResult = await client.query(existingUserQuery, [
      username,
      email,
    ]);

    if (existingUserResult.rows.length > 0) {
      client.release();
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 409,
      });
    }

    // If user doesn't exist, proceed to insert the new user
    await client.query(
      `INSERT INTO users (username, password, email) VALUES ($1, $2, $3)`,
      [username, password, email]
    );

    client.release();

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
