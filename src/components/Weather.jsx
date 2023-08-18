import { formatDay } from "../hooks/useFormatDay";
import { getWeatherIcon } from "../hooks/useGetWeatherIcon";

export const Weather = ({weather, location}) => {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
  } = weather;

  return (
    <div>
      <h2>Weather {location}</h2>
      <ul className="weather">
        {dates && dates.map((date, i) => (
          <Day 
            key={i}
            date={date}
            max={max.at(i)}
            min={min.at(i)}
            code={codes.at(i)}
            isToday={i === 0}
          />
        ))}
      </ul>
    </div>
  );
};

const Day = ({ date, max, min, code, isToday }) => {
  return (
    <li className="day">
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday ? 'Today' : formatDay(date)}</p>
        <p>
          <strong>{Math.floor(min)}&deg; &mdash; {Math.ceil(max)}&deg;</strong>
        </p>
    </li>
  )
};
