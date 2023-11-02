function calculateO3Daqi(o3Value) {
  if (o3Value >= 0 && o3Value <= 33) return { label: 'Low', value: 1 };
  if (o3Value >= 34 && o3Value <= 66) return { label: 'Low', value: 2 };
  if (o3Value >= 67 && o3Value <= 100) return { label: 'Low', value: 3 };
  if (o3Value >= 101 && o3Value <= 120) return { label: 'Moderate', value: 4 };
  if (o3Value >= 121 && o3Value <= 140) return { label: 'Moderate', value: 5 };
  if (o3Value >= 141 && o3Value <= 160) return { label: 'Moderate', value: 6 };
  if (o3Value >= 161 && o3Value <= 187) return { label: 'High', value: 7 };
  if (o3Value >= 188 && o3Value <= 213) return { label: 'High', value: 8 };
  if (o3Value >= 214 && o3Value <= 240) return { label: 'High', value: 9 };
  if (o3Value >= 241) return { label: 'Very high', value: 10 };
  return { label: 'Unknown', value: 0 }; // Default for values not in the defined ranges
}

function calculateNO2Daqi(no2Value) {
  if (no2Value >= 0 && no2Value <= 33) return { label: 'Low', value: 1 };
  if (no2Value >= 34 && no2Value <= 134) return { label: 'Low', value: 2 };
  if (no2Value >= 135 && no2Value <= 200) return { label: 'Low', value: 3 };
  if (no2Value >= 201 && no2Value <= 267) return { label: 'Moderate', value: 4 };
  if (no2Value >= 268 && no2Value <= 334) return { label: 'Moderate', value: 5 };
  if (no2Value >= 335 && no2Value <= 400) return { label: 'Moderate', value: 6 };
  if (no2Value >= 401 && no2Value <= 467) return { label: 'High', value: 7 };
  if (no2Value >= 468 && no2Value <= 534) return { label: 'High', value: 8 };
  if (no2Value >= 535 && no2Value <= 600) return { label: 'High', value: 9 };
  if (no2Value >= 601) return { label: 'Very high', value: 10 };
  return { label: 'Unknown', value: 0 }; // Default for values not in the defined ranges
}

function calculateSO2Daqi(so2Value) {
  if (so2Value >= 0 && so2Value <= 88) return { label: 'Low', value: 1 };
  if (so2Value >= 89 && so2Value <= 177) return { label: 'Low', value: 2 };
  if (so2Value >= 178 && so2Value <= 266) return { label: 'Low', value: 3 };
  if (so2Value >= 267 && so2Value <= 354) return { label: 'Moderate', value: 4 };
  if (so2Value >= 355 && so2Value <= 443) return { label: 'Moderate', value: 5 };
  if (so2Value >= 444 && so2Value <= 532) return { label: 'Moderate', value: 6 };
  if (so2Value >= 533 && so2Value <= 710) return { label: 'High', value: 7 };
  if (so2Value >= 711 && so2Value <= 887) return { label: 'High', value: 8 };
  if (so2Value >= 888 && so2Value <= 1064) return { label: 'High', value: 9 };
  if (so2Value >= 1065) return { label: 'Very high', value: 10 };
  return { label: 'Unknown', value: 0 }; // Default for values not in the defined ranges
}

function calculatePM25Daqi(pm25Value) {
  if (pm25Value >= 0 && pm25Value <= 11) return { label: 'Low', value: 1 };
  if (pm25Value >= 12 && pm25Value <= 23) return { label: 'Low', value: 2 };
  if (pm25Value >= 24 && pm25Value <= 35) return { label: 'Low', value: 3 };
  if (pm25Value >= 36 && pm25Value <= 41) return { label: 'Moderate', value: 4 };
  if (pm25Value >= 42 && pm25Value <= 47) return { label: 'Moderate', value: 5 };
  if (pm25Value >= 48 && pm25Value <= 53) return { label: 'Moderate', value: 6 };
  if (pm25Value >= 54 && pm25Value <= 58) return { label: 'High', value: 7 };
  if (pm25Value >= 59 && pm25Value <= 64) return { label: 'High', value: 8 };
  if (pm25Value >= 65 && pm25Value <= 70) return { label: 'High', value: 9 };
  if (pm25Value >= 71) return { label: 'Very high', value: 10 };
  return { label: 'Unknown', value: 0 }; // Default for values not in the defined ranges
}

function calculatePM10Daqi(pm10Value) {
  if (pm10Value >= 0 && pm10Value <= 16) return { label: 'Low', value: 1 };
  if (pm10Value >= 17 && pm10Value <= 33) return { label: 'Low', value: 2 };
  if (pm10Value >= 34 && pm10Value <= 50) return { label: 'Low', value: 3 };
  if (pm10Value >= 51 && pm10Value <= 58) return { label: 'Moderate', value: 4 };
  if (pm10Value >= 59 && pm10Value <= 66) return { label: 'Moderate', value: 5 };
  if (pm10Value >= 67 && pm10Value <= 75) return { label: 'Moderate', value: 6 };
  if (pm10Value >= 76 && pm10Value <= 83) return { label: 'High', value: 7 };
  if (pm10Value >= 84 && pm10Value <= 91) return { label: 'High', value: 8 };
  if (pm10Value >= 92 && pm10Value <= 100) return { label: 'High', value: 9 };
  if (pm10Value >= 101) return { label: 'Very high', value: 10 };
  return { label: 'Unknown', value: 0 }; // Default for values not in the defined ranges
}



const stations = [
  {
    id: 1,
    station_name: 'Thistlebrook',
    slug: 'thistlebrook',
    daqi_value: 1,
    daqi_band: 'low',
    o3: 17.762,
    o3_limit: 0,
    no2: 500,
    no2_limit: 0,
    so2: 6.785,
    so2_limit: 0,
    pm2_5: 7.642,
    pm2_5_limit: 0,
    pm10: 86,
    pm10_limit: 40,
  },
  {
    id: 2,
    station_name: 'Misthaven',
    slug: 'misthaven',
    daqi_value: 2,
    daqi_band: 'low',
    o3: 200,
    o3_limit: 0,
    no2: 4.016,
    no2_limit: 0,
    so2: 150,
    so2_limit: 0,
    pm2_5: 4.057,
    pm2_5_limit: 0,
    pm10: 7.600,
    pm10_limit: 40,
  },
  {
    id: 3, 
    station_name: 'Ravenswood Junction',
    slug: 'ravenswood-junction',
    daqi_value: 3,
    daqi_band: 'low',
    o3: 22.951,
    o3_limit: 0,
    no2: 14.726,
    no2_limit: 0,
    so2: 2.395,
    so2_limit: 0,
    pm2_5: 20,
    pm2_5_limit: 0,
    pm10: 5.660,
    pm10_limit: 40,
  },
];

stations.forEach(station => {
  // Calculating O3 DAQI
  let o3Daqi = calculateO3Daqi(station.o3);
  station.o3_daqi = o3Daqi.label;
  station.o3_daqi_value = o3Daqi.value;

  // Calculating NO2 DAQI
  let no2Daqi = calculateNO2Daqi(station.no2);
  station.no2_daqi = no2Daqi.label;
  station.no2_daqi_value = no2Daqi.value;

  // Calculating SO2 DAQI
  let so2Daqi = calculateSO2Daqi(station.so2);
  station.so2_daqi = so2Daqi.label;
  station.so2_daqi_value = so2Daqi.value;

  // Calculating PM2.5 DAQI
  let pm25Daqi = calculatePM25Daqi(station.pm2_5);
  station.pm2_5_daqi = pm25Daqi.label;
  station.pm2_5_daqi_value = pm25Daqi.value;

  // Calculating PM10 DAQI
  let pm10Daqi = calculatePM10Daqi(station.pm10);
  station.pm10_daqi = pm10Daqi.label;
  station.pm10_daqi_value = pm10Daqi.value;
});

 stations.forEach(station => {
  // Calculating DAQI for each pollutant
  let o3Daqi = calculateO3Daqi(station.o3);
  let no2Daqi = calculateNO2Daqi(station.no2);
  let so2Daqi = calculateSO2Daqi(station.so2);
  let pm25Daqi = calculatePM25Daqi(station.pm2_5);
  let pm10Daqi = calculatePM10Daqi(station.pm10);

  // Assigning individual DAQI scores and labels
  station.o3_daqi = o3Daqi.label;
  station.o3_daqi_value = o3Daqi.value;
  station.no2_daqi = no2Daqi.label;
  station.no2_daqi_value = no2Daqi.value;
  station.so2_daqi = so2Daqi.label;
  station.so2_daqi_value = so2Daqi.value;
  station.pm2_5_daqi = pm25Daqi.label;
  station.pm2_5_daqi_value = pm25Daqi.value;
  station.pm10_daqi = pm10Daqi.label;
  station.pm10_daqi_value = pm10Daqi.value;

  // Calculating average DAQI value
  let avgDaqiValue = (o3Daqi.value + no2Daqi.value + so2Daqi.value + pm25Daqi.value + pm10Daqi.value) / 5;
  station.average_daqi_value = Math.round(avgDaqiValue);

  // Assign average DAQI label based on average DAQI value
  if (avgDaqiValue <= 3) station.average_daqi_label = 'Low';
  else if (avgDaqiValue <= 6) station.average_daqi_label = 'Moderate';
  else if (avgDaqiValue <= 9) station.average_daqi_label = 'High';
  else station.average_daqi_label = 'Very High';
});

module.exports = stations;


