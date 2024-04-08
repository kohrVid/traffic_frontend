import { Marker } from 'react-simple-maps';

export const Markers = ({ visits }) => {
  return (
    <>
      {
        visits && visits.map(({ latitude, longitude }, idx) => (
          <Marker key={idx} coordinates={[longitude, latitude]}>
            <circle r={6} fill="#b5f303"
              opacity={0.7}
              stroke="#f7f7f7"
              strokeWidth={4}
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
