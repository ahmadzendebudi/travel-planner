import { WeatherCurrent } from "./weather"

export class WeatherForecast{
  list: WeatherCurrent[]
  city: {
    name: String,
    timezone: number
  }
}