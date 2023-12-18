import React, { useContext } from "react";
import { Text } from "react-native-paper";
import { View, Image, StyleSheet } from "react-native";

const convertKelvinToCelsius = (kelvin) => {
  return (kelvin - 273.15).toFixed(1);
};

const Home = ({ route }) => {

  const response = route.params;
  console.log(response);
  const [weatherData, setWeather] = React.useState();
  const fetchData = async () => {
    try {
      const apiKey = "";
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=medchal&appid=${apiKey}`
      );
      const res = await data.json();
      setWeather(res);
      
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  //    console.log(weatherDatas);

  return (
    <View style={styles.container}>
      {weatherData && (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.cityName}>{weatherData.name}</Text>
          {weatherData &&
            weatherData.weather.map((item) => (
              <View style={styles.weatherContainer} key={item.id}>
                <Image
                  source={{
                    uri: `http://openweathermap.org/img/w/${item.icon}.png`,
                  }}
                  style={styles.weatherIcon}
                />
                <Text style={styles.weatherDescription}>
                  {item.description}
                </Text>
              </View>
            ))}
          <View style={styles.weatherDetails}>
            <Text style={styles.temperature}>
              {convertKelvinToCelsius(weatherData.main.temp)}°C
            </Text>
            <Text style={styles.minMaxTemp}>
              Min: {convertKelvinToCelsius(weatherData.main.temp_min)}°C | Max:{" "}
              {convertKelvinToCelsius(weatherData.main.temp_max)}°C
            </Text>
            <Text style={styles.pressure}>
              Pressure: {weatherData.main.pressure} hPa
            </Text>
            <Text style={styles.humidity}>
              Humidity: {weatherData.main.humidity}%
            </Text>
          </View>
          <View style={styles.wind}>
            <Text style={styles.windHeading}>Wind</Text>
            <Text style={styles.commonText}>
              Speed: {weatherData.wind.speed} km/hr
            </Text>
            <Text style={styles.commonText}>Gust: {weatherData.wind.gust}</Text>
            <Text style={styles.commonText}>
              Direction: {weatherData.wind.deg}°
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7EC8E3",
    padding: 20,
  },
  cityName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 20,
  },
  weatherContainer: {
    alignItems: "center",
  },
  weatherIcon: {
    height: 100,
    width: 100,
  },
  weatherDescription: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#2C3E50",
    marginTop: 10,
  },
  weatherDetails: {
    alignItems: "center",
    marginBottom: 20,
  },
  temperature: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 10,
  },
  minMaxTemp: {
    fontSize: 18,
    color: "#2C3E50",
  },
  pressure: {
    fontSize: 18,
    color: "#2C3E50",
    marginTop: 5,
  },
  humidity: {
    fontSize: 18,
    color: "#2C3E50",
    marginTop: 5,
  },
  wind: {
    flex: 1,
    justifyContent: "center",
    gap:10,
    maxHeight:150
    
  },
  windHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  commonText: {
    fontSize: 18,
    color: "#2C3E50",
    fontWeight:'bold'
  },
});

export default Home;
