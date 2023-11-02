module.exports = function getAirQuality(aqValue) {
    const value = aqValue || "3"; //This is the default value

    const lookup = {
        "1": 
            { 
                band: "low", 
                advice: "Enjoy your usual outdoor activities.", 
                outlook:"The current spell of unsettled weather will continue, helping to keep air pollution levels low across the UK during today." 
            },
        "2": 
            { 
                band: "low", 
                advice: "Enjoy your usual outdoor activities.", 
                outlook:"The current spell of unsettled weather will continue, helping to keep air pollution levels low across the UK during today." 
            },
        "3": 
            { 
                band: "low", 
                advice: "Enjoy your usual outdoor activities.", 
                outlook:"The current spell of unsettled weather will continue, helping to keep air pollution levels low across the UK during today." 
            },
        "4": { 
                band: "moderate", 
                advice: "Enjoy your usual outdoor activities.", 
                outlook:"The influx of warm air from the continent is resulting in moderate air pollution levels throughout many areas today." 
            },
        "5": 
            { 
                band: "moderate", 
                advice: "Enjoy your usual outdoor activities.", 
                outlook:"The influx of warm air from the continent is resulting in moderate air pollution levels throughout many areas today." 
            },
        "6": 
            { 
                band: "moderate", 
                advice: "Enjoy your usual outdoor activities.", 
                outlook:"The influx of warm air from the continent is resulting in moderate air pollution levels throughout many areas today." },
        "7": 
            { 
                band: "high", 
                advice: "Anyone experiencing discomfort such as sore eyes, cough or sore throat should consider reducing activity, particularly outdoors.", 
                outlook: "Warm temperatures are expected to increase pollution levels to high across many areas today." },
        "8": 
            { 
                band: "high", 
                advice: "Anyone experiencing discomfort such as sore eyes, cough or sore throat should consider reducing activity, particularly outdoors.", 
                outlook: "Warm temperatures are expected to increase pollution levels to high across many areas today." },
        "9": 
            { 
                band: "high", 
                advice: "Anyone experiencing discomfort such as sore eyes, cough or sore throat should consider reducing activity, particularly outdoors.", 
                outlook: "Warm temperatures are expected to increase pollution levels to high across many areas today." },
        "10": 
            { 
                band: "very high", 
                advice: "Reduce physical exertion, particularly outdoors, especially if you experience symptoms such as cough or sore throat.", 
                outlook: "The current heatwave shows no signs of relenting, causing air pollution levels to remain very high across many areas today."
            }
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
