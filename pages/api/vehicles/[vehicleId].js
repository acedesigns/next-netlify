
const DATA_SOURCE_URL = "https://swapi.dev/api/vehicles/"

export default async function poduct(req, res) {
    const query = req.query;
    //const { vehicleId } = query;
    let url = DATA_SOURCE_URL+query.vehicleId+'/'
    console.log(query.vehicleId);
    console.log(url);
    const resourse = await fetch(url);
    
    //console.log(resourse.json())

    res.status(200).json(await resourse.json());
    
    // use productId to retrieve the product from your database
    // then send this data back to the client
}