
const DATA_SOURCE_URL = "https://swapi.dev/api/starships/"

export default async function poduct(req, res) {
    const query = req.query;
    let url = DATA_SOURCE_URL+query.shipId+'/'
    //console.log(query.shipId);
    //console.log(url);
    const resourse = await fetch(url);
    
    //console.log(resourse.json())

    res.status(200).json(await resourse.json());
    
}