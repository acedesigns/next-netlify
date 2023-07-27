import { NextResponse } from 'next/server'
const DATA_SOURCE_URL = "https://swapi.dev/api/vehicles"

export default async function handler(req, res) {
    const resourse = await fetch(DATA_SOURCE_URL);

    //return NextResponse.json({ resourse })
    res.status(200).json(await resourse.json());
}
/*
import { NextResponse } from 'next/server'
const DATA_SOURCE_URL = "https://swapi.dev/api/vehicles"

export async function GET(request, res) {
    const resourse = await fetch(DATA_SOURCE_URL);

    res.status(200).json(await resourse.json())
}
/*
export async function GET() {
    const res = await fetch('https://data.mongodb-api.com/...', {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY,
      },
    })
    const data = await res.json()
   
    return NextResponse.json({ data })
  }
  */