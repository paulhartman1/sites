import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET(request: Request) {
    let data;
    try {
        data = await sql`SELECT i.id, i.type, i.url, p.categoryid FROM images i 
        LEFT JOIN imagecategory p
        on p.imageid = i.id`;
    } catch (error) {
        return NextResponse.error();
    }
    
    return NextResponse.json(data.rows);
}

export async function PUT(request: Request) {
    let { id, name, description, alt } = await request.json();
    try {
        sql`UPDATE images SET name = ${name}, description = ${description}, alt = ${alt} WHERE id = ${id}`;
    } catch (error) {
        return NextResponse.error();
    }
   
    return NextResponse.json('request.json()');
}

