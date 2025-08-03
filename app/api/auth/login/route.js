// app/api/auth/login/route.js
// This Route Handler handles user login and authentication via a POST request.
import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import User from '../../../../models/User';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(request) {
  try {
    await dbConnect();
    const { email, password } = await request.json();

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Compare password with hashed password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Set cookie with the token
    const cookieStore = cookies();
    cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });

    // Return success message and user details (excluding password)
    return NextResponse.json(
      {
        message: 'Login successful',
        user: { id: user._id, name: user.name, email: user.email }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Login failed:', error);
    return NextResponse.json({ message: 'Login failed', error: error.message }, { status: 500 });
  }
}