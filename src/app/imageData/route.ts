import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET(request: Request) {
    let data;
    try {
        data = await sql`SELECT id, type, url FROM images`;
    } catch (error) {
        return NextResponse.error();
    }
    
    return NextResponse.json(data.rows);
}

