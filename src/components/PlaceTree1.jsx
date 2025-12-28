export default function PlaceTree({ id, placesById }) {
  const placeById = placesById;
  const place = placeById[id];
  const childIds = place?.childIds;

  return (
    <li className="pl-1 text-black-800 font-bold">
      {place?.title}

      {childIds.length > 0 && (
        <ol className="list-decimal list-inside ml-6 mt-1 space-y-1 text-black-800 font-medium">
          {childIds.map((childId) => (
            <PlaceTree key={childId} id={childId} placesById={placesById} />
          ))}
        </ol>
      )}
    </li>
  );
}
