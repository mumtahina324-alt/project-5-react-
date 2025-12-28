export default function PlaceTree({ place }) {
  const childPlaces = place.childPlaces;

  return (
    <li className="pl-2">
      <span className="text-gray-800 font-medium">{place.title}</span>
      {childPlaces.length > 0 && (
        <ol className="list-decimal list-inside ml-6 mt-1 space-y-1">
          {childPlaces.map((child) => (
            <PlaceTree key={child.id} place={child} />
          ))}
        </ol>
      )}
    </li>
  );
}
