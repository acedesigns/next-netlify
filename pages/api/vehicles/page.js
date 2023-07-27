const DATA_SOURCE_URL = "https://swapi.dev/api/vehicles"

export default async function handler(req, res) {
    const query = req.query;
    console.log(query)
    const resourse = await fetch(DATA_SOURCE_URL);
    res.status(200).json(await resourse.json());
}
