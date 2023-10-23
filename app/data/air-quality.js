module.exports = function getAirQuality(aqValue) {
    const value = aqValue || "3";

    const lookup = {
        "1": { band: "low", advice: "Enjoy your usual outdoor activities.", outlook:"The current spell of unsettled weather will continue, helping to keep air pollution levels low across the UK during today." },
        "2": { band: "low", advice: "Enjoy your usual outdoor activities.", outlook:"The current spell of unsettled weather will continue, helping to keep air pollution levels low across the UK during today." },
        "3": { band: "low", advice: "Enjoy your usual outdoor activities.", outlook:"The current spell of unsettled weather will continue, helping to keep air pollution levels low across the UK during today." },
        "4": { band: "moderate", advice: "Enjoy your usual outdoor activities.", outlook:"The influx of warm air from the continent is resulting in moderate air pollution levels throughout the UK today." },
        "5": { band: "moderate", advice: "Enjoy your usual outdoor activities.", outlook:"The influx of warm air from the continent is resulting in moderate air pollution levels throughout the UK today." },
        "6": { band: "moderate", advice: "Enjoy your usual outdoor activities.", outlook:"The influx of warm air from the continent is resulting in moderate air pollution levels throughout the UK today." },
        "7": { band: "high", advice: "Anyone experiencing discomfort such as sore eyes, cough or sore throat should consider reducing activity, particularly outdoors.", outlook: "Increasingly warm temperatures are expected to elevate pollution levels to high across the UK today." },
        "8": { band: "high", advice: "Anyone experiencing discomfort such as sore eyes, cough or sore throat should consider reducing activity, particularly outdoors.", outlook: "Increasingly warm temperatures are expected to elevate pollution levels to high across the UK today." },
        "9": { band: "high", advice: "Anyone experiencing discomfort such as sore eyes, cough or sore throat should consider reducing activity, particularly outdoors.", outlook: "Increasingly warm temperatures are expected to elevate pollution levels to high across the UK today." },
        "10": { band: "very high", advice: "Reduce physical exertion, particularly outdoors, especially if you experience symptoms such as cough or sore throat.", outlook: "The current heatwave shows no signs of relenting, causing air pollution levels to soar to extreme highs across the UK today."}
    };

    const defaultData = { band: "unknown", advice: "No data available." };

    const data = lookup[value] || defaultData;

    return {
        value: value,
        band: data.band,
        advice: data.advice,
        outlook: data.outlook
    };
};
