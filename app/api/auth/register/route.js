// app/api/auth/register/route.js
// This Route Handler handles new user registration via a POST request.
import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import User from '../../../../models/User';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(request) {
  try {
    await dbConnect();
    const { name, email, password } = await request.json();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User with this email already exists' }, { status: 409 });
    }

    const newUser = await User.create({ name, email, password });

    // Create JWT token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    // Set cookie with the token
    const cookieStore = await cookies();
    cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });

    // Return success message and new user details (excluding password)
    return NextResponse.json(
      {
        message: 'Registration successful',
        user: { id: newUser._id, name: newUser.name, email: newUser.email }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration failed:', error);
    return NextResponse.json({ message: 'Registration failed', error: error.message }, { status: 500 });
  }
}
