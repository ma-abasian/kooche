import MapSearchModalSingleSuggestion from "@/components/elements/navbar/MapSearchModalSingleSuggestion";
import Image from "next/image";
import { useGetGamesData } from "@/hooks/useGetGamesData";

const MapSearchModalSuggestions = ({ gameName, setGameName, onClose }) => {
  const displayGames = useGetGamesData();
  console.log(displayGames);

  if (!displayGames.length) {
    return (
      <p className="absolute top-11 md:top-[52px] flex gap-2 items-center right-0 w-full h-12 rounded-xl border border-gray-200 bg-white z-[403] py-1.5 px-3 font-peyda-regular leading-leading-3 text-gray-900">
        <Image
          src="images/map/fi-rr-gamepad.svg"
          alt="gamepad"
          width={24}
          height={24}
        />
        Loading...
      </p>
    );
  }

  return (
    <ul className="absolute top-11 md:top-[52px] right-0 rounded-xl bg-white z-[403] overflow-hidden w-full">
      {displayGames.slice(0, 5).map(({ games }) => (
        <MapSearchModalSingleSuggestion
          key={games[0].id}
          gameName={games[0].name}
          searchTerm={gameName.trim().toLowerCase()}
          setGameName={setGameName}
          onClose={onClose}
        />
      ))}
    </ul>
  );
};

export default MapSearchModalSuggestions;
