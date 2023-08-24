export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      //'X-RapidAPI-Key': '3482027a0dmsh9550a72ff92aa47p1a4645jsn150b227c8b16',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    }
  };

export const fetchData = async(url, options)=>{
    const reponse = await fetch(url, options);
    const data = await reponse.json();

    return data;
}