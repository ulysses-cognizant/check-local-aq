const commonMessages = {
    low: {
        values: [1, 2, 3],
        advice: "Enjoy your usual outdoor activities.",
        atrisk: {
            adults: "Enjoy your usual outdoor activities.",
            asthma: "Enjoy your usual outdoor activities.",
            oldPeople: "Enjoy your usual outdoor activities."
        },
        ukToday: "Unsettled, wet and windy weather conditions will help to maintain low levels of air pollution across the United Kingdom today.",
        ukTomorrow: "The unsettled weather will continue resulting in low levels of air pollution across the country.",
        ukOutlook: "Low levels of air pollution are forecast across the country as unsettled weather conditions continue."
    },
    moderate: {
        values: [4, 5, 6],
        advice: "For most people, short term exposure to moderate levels of air pollution is not an issue.",
        atrisk: {
            adults: "Adults who have heart problems and feel unwell should consider doing less strenuous exercise, especially outside.",
            asthma: "People with asthma should be prepared to use their reliever inhaler.",
            oldPeople: "Older people should consider doing less strenuous activity, especially outside."
        },
        ukToday: "The influx of warm air from the continent is resulting in moderate air pollution levels throughout many areas today.",
        ukTomorrow: "Light winds and warm temperatures could result in moderate air pollution levels throughout many areas tomorrow.",
        ukOutlook: "Towards the end of the period there is chance warm air from the continent could increase levels of air pollution across the country"
    },
    high: {
        values: [7, 8, 9],
        advice: "Anyone experiencing discomfort such as sore eyes, cough or sore throat should consider reducing activity, particularly outdoors.",
        atrisk: {
            adults: "Adults with heart problems should reduce strenuous physical exertion, particularly outdoors, especially if they experience symptoms.",
            asthma: "People with asthma may find they need to use their reliever inhaler more often.",
            oldPeople: "Older people should reduce physical exertion."
        },
        ukToday: "Warm temperatures are expected to increase pollution levels to high across many areas today.",
        ukTomorrow: "Test tomorrrow",
        ukOutlook: "Test outlook"
    },
    veryHigh: {
        values: [10],
        advice: "Reduce physical exertion, particularly outdoors, especially if you experience symptoms such as cough or sore throat.",
        atrisk: {
            adults: "Adults with heart problems should avoid strenuous physical activity.",
            asthma: "People with asthma may need to use their reliever inhaler more often.",
            oldPeople: "Older people should avoid strenuous physical activity."
        },
        ukToday: "The current heatwave shows no signs of relenting, causing air pollution levels to remain very high across many areas today.",
        ukTomorrow: "Test tomorrrow",
        ukOutlook: "Test outlook"
        
    },
    unknown: {
        advice: "No data available."
    }
};

// Function to get common messages based on the air quality band
function getCommonMessage(band) {
    return commonMessages[band] || commonMessages.unknown;
}

// Function to get air quality data for today, tomorrow, and the day after tomorrow
function getAirQuality(aqValueToday, aqValueTomorrow, aqValueOutlook) {
    const lookup = {
        "1": { band: "low", readableBand: "low" },
        "2": { band: "low", readableBand: "low" },
        "3": { band: "low", readableBand: "low" },
        "4": { band: "moderate", readableBand: "moderate" },
        "5": { band: "moderate", readableBand: "moderate" },
        "6": { band: "moderate", readableBand: "moderate" },
        "7": { band: "high", readableBand: "high" },
        "8": { band: "high", readableBand: "high" },
        "9": { band: "high", readableBand: "high" },
        "10": { band: "veryHigh", readableBand: "very high" }
    };

    // Function for getting detailed air quality information
    function getDetailedInfo(aqValue) {
        const bandInfo = lookup[aqValue.toString()] || { band: "unknown", readableBand: "unknown" };
        const message = getCommonMessage(bandInfo.band);
        return {
            value: aqValue,
            band: bandInfo.band,
            readableBand: bandInfo.readableBand,
            advice: message.advice,
            atrisk: message.atrisk,
            ukToday: message.ukToday,
            ukTomorrow: message.ukTomorrow,
            ukOutlook: message.ukOutlook
        };
    }

    return {
        today: getDetailedInfo(aqValueToday || "2"),
        tomorrow: getDetailedInfo(aqValueTomorrow || "3"),
        outlook: getDetailedInfo(aqValueOutlook || "4")
    };
};

module.exports = {
    getAirQuality,
    getCommonMessage,
    commonMessages 
};
