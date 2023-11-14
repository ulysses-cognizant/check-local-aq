const commonMessages = {
    low: {
        values: [1, 2, 3],
        advice: "Enjoy your usual outdoor activities.",
        atrisk: {
            adults: "Enjoy your usual outdoor activities.",
            asthma: "Enjoy your usual outdoor activities.",
            oldPeople: "Enjoy your usual outdoor activities."
        },
        outlook: "The current spell of unsettled weather will continue, helping to keep air pollution levels low across the UK during today."
    },
    moderate: {
        values: [4, 5, 6],
        advice: "Enjoy your usual outdoor activities.",
        atrisk: {
            adults: "Adults with heart problems, who experience symptoms, should consider reducing strenuous physical activity, particularly outdoors.",
            asthma: "People with asthma should be prepared to use their reliever inhaler.",
            oldPeople: "Older people should consider reducing strenuous physical activity, particularly outdoors."
        },
        outlook: "The influx of warm air from the continent is resulting in moderate air pollution levels throughout many areas today."
    },
    high: {
        values: [7, 8, 9],
        advice: "Anyone experiencing discomfort such as sore eyes, cough or sore throat should consider reducing activity, particularly outdoors.",
        atrisk: {
            adults: "Adults with heart problems should reduce strenuous physical exertion, particularly outdoors, especially if they experience symptoms.",
            asthma: "People with asthma may find they need to use their reliever inhaler more often.",
            oldPeople: "Older people should reduce physical exertion."
        },
        outlook: "Warm temperatures are expected to increase pollution levels to high across many areas today."
    },
    veryHigh: {
        values: [10],
        advice: "Reduce physical exertion, particularly outdoors, especially if you experience symptoms such as cough or sore throat.",
        atrisk: {
            adults: "Adults with heart problems should avoid strenuous physical activity.",
            asthma: "People with asthma may need to use their reliever inhaler more often.",
            oldPeople: "Older people should avoid strenuous physical activity."
        },
        outlook: "The current heatwave shows no signs of relenting, causing air pollution levels to remain very high across many areas today."
    },
    unknown: {
        advice: "No data available."
    }
};

function getCommonMessage(band) {
    return commonMessages[band] || commonMessages.unknown;
}

function getAirQuality(aqValue) {
    const value = aqValue || "4"; // Default value

    const lookup = {
        "1": { band: "low" },
        "2": { band: "low" },
        "3": { band: "low" },
        "4": { band: "moderate" },
        "5": { band: "moderate" },
        "6": { band: "moderate" },
        "7": { band: "high" },
        "8": { band: "high" },
        "9": { band: "high" },
        "10": { band: "veryHigh" }
    };

    const band = lookup[value] ? lookup[value].band : "unknown";
    const message = getCommonMessage(band);

    return {
        value: value,
        band: band,
        advice: message.advice,
        atrisk: message.atrisk,
        outlook: message.outlook
    };
};

module.exports = {
    getAirQuality,
    getCommonMessage,
    commonMessages 
};

