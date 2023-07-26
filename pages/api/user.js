import { NextApiRequest, NextApiResponse } from 'next'

const DATA_SOURCE_URL = "https://randomuser.me/api/"

export default async function handler(req, res) {
    const resourse = await fetch(DATA_SOURCE_URL)
    console.log(resourse.body);

    res.status(200).json(
        //{
            await resourse.json()
        //}
    )
}
