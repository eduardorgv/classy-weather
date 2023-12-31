import { useDebounce } from "use-debounce";
import { useFetchWeather } from "../hooks/useFetchWeather";
import { useEffect, useState } from "react";
import { Weather } from "./Weather";
import { useSetLocation } from "../hooks/useSetLocation";
import { useGetLocation } from "../hooks/useGetLocation";

export const SearchBox = () => {
  const [location, setLocation] = useState('');
  const [debouncedLocation] = useDebounce(location, 500);
  const { isLoading, displayLocation, weather } = useFetchWeather(debouncedLocation);
  
  useSetLocation(debouncedLocation);
  useGetLocation(setLocation);

  return (
    <div className='app'>
      <h1>Weather App</h1>
      <div>
        <input 
          type="text" 
          placeholder='Search from location...' 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {isLoading && <p className='loader'>Loading...</p>}
      {weather?.weathercode && <Weather weather={weather} location={displayLocation} />}
    </div>
  )
}
