// app/api/donors/route.js
import { NextResponse } from 'next/server';
// Import your database connection/model (example with Mongoose)
import dbConnect from '../../../lib/dbConnect'; // You'll create this
import Donor from '../../../models/Donor';     // You'll create this

export async function GET() {
  try {
    await dbConnect(); // Connect to your database

    const donors = await Donor.find({}); // Fetch all donors
    return NextResponse.json(donors, { status: 200 }); // Return as JSON

  } catch (error) {
    console.error('Error fetching donors:', error);
    return NextResponse.json(
      { message: 'Failed to fetch donors', error: error.message },
      { status: 500 }
    );
  }
}

// Example for a POST request to add a new donor
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json(); // Get request body
    const newDonor = await Donor.create(body); // Create new donor in DB

    return NextResponse.json(newDonor, { status: 201 }); // Return created donor with 201 status

  } catch (error) {
    console.error('Error creating donor:', error);
    return NextResponse.json(
      { message: 'Failed to create donor', error: error.message },
      { status: 500 }
    );
  }
}