export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.646409',
      bl_lng: '25.73094',
      tr_lat: '42.742149',
      tr_lng: '44.006668',
      limit: '300',
    },
    headers: {
      'x-rapidapi-key': 'e48aae4760msh168a32d55c6ea2fp1054afjsn68df4fe6d656',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
  };
 
  export const detailOpt = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
    params:{flight:null},
    headers: {
      'x-rapidapi-key': 'e48aae4760msh168a32d55c6ea2fp1054afjsn68df4fe6d656',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
  };
  