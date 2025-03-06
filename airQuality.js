function airQuality (airQualityIndex) {
    if (airQualityIndex >= 0 && airQualityIndex <= 50) {
        return "Good";
    }
    else if (airQualityIndex >= 51 && airQualityIndex <= 100) {
        return "Moderate"
    }
}

//just copy and paste and add else if for the rest of the AQI