import { Weather } from "./weather"

export class WeatherForecast{
  list: Weather[]
  city: {
    name: String,
    timezone: number
  }
}