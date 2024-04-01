import { Marker } from 'react-simple-maps';

export const Markers = () => {
  const markers = [
    {
      markerOffset: 10,
      name: "Buenos Aires",
      coordinates: [-58.3816, -34.6037]
    },
  ];

  return (
    <>
      {
        markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={3} fill="#23b723" />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#eaeaea" }}>
              {name}
            </text>
          </Marker>
        ))
      }
    </>
  );
};
