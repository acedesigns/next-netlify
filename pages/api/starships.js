import { NextApiRequest, NextApiResponse } from 'next'

const DATA_SOURCE_URL = "https://swapi.dev/api/starships"

export default async function handler(req, res) {
    const resourse = await fetch(DATA_SOURCE_URL);

    res.status(200).json(await resourse.json())
}
