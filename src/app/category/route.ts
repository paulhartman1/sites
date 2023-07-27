import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import exp from 'constants';

export async function GET(request: Request) {
    let data;
    try {
        data = await sql`SELECT id, name, parent FROM category`;
    } catch (error) {
        return NextResponse.error();
    }
    
    return NextResponse.json(data.rows);
}

export async function POST(request: Request) {
   
    try {
      //  data = await sql`INSERT INTO catgory (imageid, categoryid) VALUES (${imageid}, ${categoryid})`;
    } catch (error) {
       // return NextResponse.error();
    }
    
    return NextResponse.json(request.json());
}

