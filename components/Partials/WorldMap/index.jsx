import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Markers } from './Markers.jsx';
import geoUrl from './countries-50m.json';

export const WorldMap = ({ visits }) => {
  return (
    <ComposableMap width={1200}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo}
              fill="#23b723"
              fillOpacity="0.2"
              stroke="#23b723"
              strokeWidth={1}
              onClick={() => console.log(geo.properties.name)}
            />
          ))
        }
      </Geographies>

      <Markers visits={visits} />
    </ComposableMap>
  );
};
