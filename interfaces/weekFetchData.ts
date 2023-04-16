export interface WeekFecthDataI {
    city:    City;
    cnt:     number;
    cod:     string;
    list:    List[];
    message: number;
}  

interface City {
    coord:      Coord;
    country:    string;
    id:         number;
    name:       string;
    population: number;
    sunrise:    number;
    sunset:     number;
    timezone:   number;
   }
   
interface Coord {
    lat: number;
    lon: number;
}
   
interface List {
    clouds:     Clouds;
    dt:         number;
    dt_txt:     string;
    main:       MainClass;
    pop:        number;
    sys:        Sys;
    visibility: number;
    weather:    Weather[];
    wind:       Wind;
}
   
interface Clouds {
    all: number;
}
   
interface MainClass {
    feels_like: number;
    grnd_level: number;
    humidity:   number;
    pressure:   number;
    sea_level:  number;
    temp:       number;
    temp_kf:    number;
    temp_max:   number;
    temp_min:   number;
}
   
interface Sys {
    pod: Pod;
}
   
enum Pod {
    D = "d",
    N = "n",
}
   
interface Weather {
    description: Description;
    icon:        string;
    id:          number;
    main:        MainEnum;
}
   
enum Description {
    AlgoDeNubes = "algo de nubes",
    CieloClaro = "cielo claro",
    MuyNuboso = "muy nuboso",
    Nubes = "nubes",
    NubesDispersas = "nubes dispersas",
}
   
enum MainEnum {
    Clear = "Clear",
    Clouds = "Clouds",
}
   
interface Wind {
    deg:   number;
    gust:  number;
    speed: number;
}