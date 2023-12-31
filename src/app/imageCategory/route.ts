import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import exp from 'constants';

export async function GET(request: Request) {
  let data;
  try {
    data = await sql`SELECT imageid, categoryid FROM imagecategory`;
  } catch (error) {
    return NextResponse.error();
  }
  return NextResponse.json(data.rows);
}

export async function POST(request: Request) {
  const { imageid, categoryid } = await request.json();

  let data;
  try {
    //  data = await sql`INSERT INTO imageCategory (imageid, categoryid) VALUES (${imageid}, ${categoryid})`;
  } catch (error) {
    // return NextResponse.error();
  }

  return NextResponse.json(request.json());
}

export async function PUT(request: Request) {
  let { imageid, categoryid } = await request.json();
  if (categoryid < 0) categoryid = null;
  let data;
  try {
    data =
      await sql`UPDATE imageCategory SET categoryid = ${categoryid} WHERE imageid = ${imageid}`;
  } catch (error) {
    return NextResponse.error();
  }

  return NextResponse.json('request.json()');
}
