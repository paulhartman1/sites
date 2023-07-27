import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET(request: Request) {
    let data;
    try {
        data = await sql`SELECT imageid, categoryid FROM primaryImages`;
    } catch (error) {
        return NextResponse.error();
    }
    
    return NextResponse.json(data.rows);
}

export async function POST(request: Request) {
    let { imageid, categoryid } = await request.json();
    try {
        sql`INSERT INTO primaryImages (imageid, categoryid) imageid = ${imageid}, categoryid = ${categoryid}`;
    } catch (error) {
        return NextResponse.error();
    }
   
    return NextResponse.json('request.json()');
}

