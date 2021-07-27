import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapSection from './components/Map'
import CardContainer from './components/CardContainer'

function App() {

  const [data, setData] = useState(0);

  useEffect(() => {
    axios.get('https://api.openaq.org/v1/measurements?country=GB&city=Manchester')
    .then(response => setData(response.data.results));
    }, []);

  const googleMapDefaultCenter = {
      address: 'West Didsbury, Manchester, UK',
      lat: 53.426287,
      lng: -2.2471963,
  }

  return (
    <div className="App">
      {data ?
        <>
          <MapSection
            data={data}
            location={googleMapDefaultCenter}
            zoomLevel={11.6}
          />
          <CardContainer data={data} />
        </>
        :
        <p>No data</p>
      }
    </div>
  );
}

export default App;
