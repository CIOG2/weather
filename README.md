# Weather
### Descripción
##### _Weather es una aplicación web que te permite conocer el clima actual y pronóstico de cualquier ciudad del mundo._
Para usar Weather, simplemente accede a la página web desde cualquier navegador de internet en cualquier dispositivo que tengas a mano. Una vez en la página web, ingresa el nombre de la ciudad que deseas consultar en la barra de búsqueda y Weather te mostrará la temperatura actual, así como la temperatura mínima y máxima de los próximos 5 días. Además, también te proporciona un mapa de la ubicación de la ciudad y te muestra el pronóstico detallado del clima a lo largo del día.
##### Visita la página web oficial de [Weather](https://weather-ciog.vercel.app/)

### Tecnologías usadas
![Typescrpt](https://img.shields.io/static/v1?style=for-the-badge&message=Typescript&color=222222&logo=Typescript&logoColor=1572B6&label=)
![Next.js](https://img.shields.io/static/v1?style=for-the-badge&message=Next.js&color=000000&logo=Next.js&logoColor=FFFFFF&label=)
![Scss](https://img.shields.io/static/v1?style=for-the-badge&message=Sass&color=CC6699&logo=Sass&logoColor=FFFFFF&label=)

# Requerimientos
- Node.js
- yarn
> Para este proyecto se utilizo yarn como administrador de paquetes 
>En caso de no tener yarn instalado se puede instalar con el sigiente comando:
```
npm install --global yarn
```

- Llaves para las API key (en la seccion **uso** se dice como conseguirlas)
 

## Uso

#### _Instalación del repositorio_
> Clonar Repositorio con HTTPS:
```
git clone https://github.com/CIOG2/weather.git
```

> Clonar Repositorio con SSH:
```
git clone git@github.com:CIOG2/weather.git
```
> En caso de que se haga un fork instalo con el link que se genero.

#### _Instalación de dependencias_

```
yarn install
```
#### _Genera el archivo para las variables de entonrno_
En la raiz del proyecto debes generar un archivo con nombre **.env.local**
```
```
Una vez generado el archivo dentro del agrega los nombres de las variables de entonrno
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY=
```
despues del simbolo igual/= debes agregar tu API key a continuacion te comparto donde encuntreas ambas keys

- **NEXT_PUBLIC_GOOGLE_MAPS_API_KEY**: [Google link](https://cloud.google.com/cloud-console?utm_source=google&utm_medium=cpc&utm_campaign=latam-MX-all-es-dr-BKWS-all-all-trial-e-dr-1605194-LUAC0016056&utm_content=text-ad-none-any-DEV_c-CRE_540885993595-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20Management-Tools_Console-KWID_43700065922079841-kwd-844840188897&utm_term=KW_google%20console-ST_Google%20Console&gclid=Cj0KCQjwi46iBhDyARIsAE3nVrbzdBkWJ7WXclxVoqnEFVH6805WKfngSfaKydof1R5-gzP1x5R7uxUaAuJPEALw_wcB&gclsrc=aw.ds&hl=es)
- **NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY**: [Open weather link](https://home.openweathermap.org/users/sign_up)

Ya que tengas las llaves agrega cada una a su respectivo campo sin agregar espacios ni comillas de ningun tipo.

# Contribuir
- Si deseas contribuir al desarrollo de Weather, siéntete libre de hacer un fork de este repositorio y enviar un pull request con tus mejoras.

# Autor
- Weather fue desarrollado por **Carlos Ivan Ochoa Gomez @CIOG**.- 

# Licencia
- Weather se distribuye bajo la licencia (MIT). Para más información, revisa el archivo LICENSE en este repositorio.

**_Espero que esta información te sea útil. Si necesitas más ayuda, no dudes en preguntar. ¡Que tengas un buen día!_**