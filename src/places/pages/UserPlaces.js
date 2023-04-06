import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

export function Component(props) {
  const [loadedPlaces, setLoadedPlaces] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { userId } = useParams();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const requestData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/api/places/user/${userId}`
        );
        setLoadedPlaces(requestData.places);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, userId]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      { isLoading && <div className="center"><LoadingSpinner asOverlay/></div>}
      { !isLoading && loadedPlaces && <PlaceList items={loadedPlaces} />}
    </>
  );
}


Component.displayName = "UserPlaces";
