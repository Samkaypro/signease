import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const api = async (image, letter) => {
    try {
        const response = await axios({
            method: "POST",
            url: "https://detect.roboflow.com/american-sign-language-letters/6",
            params: {
                api_key: process.env.REACT_APP_ROBOFLOW_API_KEY,
                confidence: 0,
                overlap: 100
            },
            data: image,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        console.log("API Response:", response.data);

        const predictions = response.data.predictions;
        if (predictions.length > 0) {
            const detectedClass = predictions[0].class;
            return detectedClass;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error uploading image:", error.message);
        return null;
    }
};

export default api;
