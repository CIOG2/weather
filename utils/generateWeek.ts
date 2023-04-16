import { WeekFecthDataI, WeatherWeekI, GenerateWeekI } from '@interfaces/index' ;

const generateWeek = (data: WeekFecthDataI) => {
    const list = data.list;
    const week: GenerateWeekI[] = [];
    
    for (let i = 0; i < list.length; i++) {
        const day = list[i];
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleString('en-US', { weekday: 'long' });
        const dayWeather = day.weather[0].main;
        const dayWeatherIcon = day.weather[0].icon;
        const hour = day.dt_txt.split(' ')[1].split(':', 2).join(':');
        const tempMin = Math.floor(day.main.temp_min);
        const tempMax = Math.floor(day.main.temp_max);

        const dayObj = {
            dayName,
            hour,
            dayWeather,
            dayWeatherIcon,
            tempMin,
            tempMax
        }
        week.push(dayObj);
    }

   return extraerDatos(week);    
}

const extraerDatos = (data: GenerateWeekI[]) => {
    const actualDay = new Date().toLocaleString('en-US', { weekday: 'long' });
    let days: WeatherWeekI[] = [];
    let day = '';
    let dayWeather = '';
    let dayWeatherIcon = '';
    let tempMin = data[0].tempMin;
    let tempMax = data[0].tempMax;
    let firstHourDay = true;

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (actualDay !== element.dayName) {
            if (day !== element.dayName && !firstHourDay) {
                day = element.dayName;
                days.push({ day, dayWeather, dayWeatherIcon, tempMin, tempMax });
            } else {
                if (tempMin > element.tempMin) {
                    tempMin = element.tempMin;
                }
                if (tempMax < element.tempMax) {
                    tempMax = element.tempMax;
                }
                if (element.hour === '15:00') {
                    dayWeather = element.dayWeather;
                    dayWeatherIcon = element.dayWeatherIcon;
                    firstHourDay = false;
                }
            }
        
        }
    }

    return days;
}

export { generateWeek }