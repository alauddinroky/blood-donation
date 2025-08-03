// app/api/register-donor/route.js
// A mock API endpoint to handle the donor registration POST request.
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import Donor from '../../../models/Donor';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, contactNumber, fullAddress, bloodGroup } = body;

    if (!fullName || !email || !contactNumber || !fullAddress || !bloodGroup) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    await dbConnect();

    // Create a new donor entry in the database.
    const newDonor = await Donor.create({
      name: fullName,
      email: email,
      phone: contactNumber,
      location: fullAddress,
      bloodGroup: bloodGroup,
    });

    console.log('New donor registered:', newDonor);

    return NextResponse.json(
      { message: 'Donor registered successfully!', donorId: newDonor._id },
      { status: 201 } // 201 Created
    );

  } catch (error) {
    console.error('Registration failed:', error);
    return NextResponse.json(
      { message: 'Donor registration failed', error: error.message },
      { status: 500 }
    );
  }
}