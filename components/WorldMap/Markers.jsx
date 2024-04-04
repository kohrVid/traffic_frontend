import { Marker } from 'react-simple-maps';

export const Markers = ({ visits }) => {
  return (
    <>
      {
        visits.map(({ latitude, longitude }, idx) => (
          <Marker key={idx} coordinates={[longitude, latitude]}>
            <circle r={5} fill="#23b723"
              stroke="#fff"
              strokeWidth={3}
              strokeOpacity={0.5} />
            <text
              textAnchor="middle"
              y={10}
              style={{ fontFamily: "system-ui", fill: "#eaeaea" }}>
            </text>
          </Marker>
        ))
      }
    </>
  );
};
