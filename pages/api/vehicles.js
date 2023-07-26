
const DATA_SOURCE_URL = "https://swapi.dev/api/vehicles"

export default async function handler(req, res) {
    const resourse = await fetch(DATA_SOURCE_URL)
    //console.log(resourse.body);

    res.status(200).json(
        //{
            await resourse.json()
        //}
    )
}