const config = {
    WeatherAPI: 'http://dnu5embx6omws.cloudfront.net/venues/weather.json',
    // There was so much data coming back from this API I filtered it by country (Australia) and updated the rows
    // This can be changed for testig purposes
    CityAPI: 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&rows=800&facet=country&refine.country=au',
    ProxyAPI: 'https://cors-anywhere.herokuapp.com/',
    ImagePrefix: '../assets/weathericons/',
    SortButtons: [
        {name: 'A - Z', sort: 'sortByAZ'},
        {name: 'Temperature', sort: 'sortByTemp'},
        {name: 'Last Updated', sort: 'sortByLastUpdate'}
    ]
  }
  
  export default config