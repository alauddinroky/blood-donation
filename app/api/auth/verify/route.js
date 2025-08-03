// app/api/auth/verify/route.ts
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET() {
  try {
    const cGet = await cookies()
    const token = cGet.get('token')?.value;

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ message: 'Authorized', user: decoded }, { status: 200 });

  } catch (err) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
}
