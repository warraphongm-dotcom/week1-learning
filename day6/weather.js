async function getWeather(city) {
    try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        const current = data.current_condition[0];
        const area = data.nearest_area[0];
        
        console.log(`เมือง: ${area.areaName[0].value}`);
        console.log(`อุณหภูมิตอนนี้ (°C): ${current.temp_C}`);
        console.log(`รู้สึกเหมือน (°C): ${current.FeelsLikeC}`);
        console.log(`สภาพอากาศ: ${current.weatherDesc[0].value}`);
        console.log(`ความชื้น (%): ${current.humidity}`);
        console.log(`ลม (km/h): ${current.windspeedKmph}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
}

const city = process.argv[2];
getWeather(city);

