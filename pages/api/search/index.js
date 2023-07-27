
const DATA_SOURCE_URL = "https://swapi.dev/api/"

export default async function handler(req, res) {

    const {searchTerm, resource} = req.body;
    // https://swapi.dev/api/people/?search=r2
    /* term:"Sand Crawler", resource:"vehicles"*/

    let url = DATA_SOURCE_URL+resource+'/?search='+searchTerm;
    const resourse = await fetch(url);

    console.log(url);

    //const resourse = await fetch(url);

    res.status(200).json(await resourse.json());
}
