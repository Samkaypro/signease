import React, { useEffect, useRef, useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import Webcam from "react-webcam";
import * as handpose from "@tensorflow-models/handpose";
import * as tf from "@tensorflow/tfjs";
import { loadSignModel, predictSign } from "./handposeutil";

const RealTimeHandSignVerifier = ({ onSignDetected }) => {
    const webcamRef = useRef(null);
    const [model, setModel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null); // For displaying messages

    useEffect(() => {
        const loadModel = async () => {
            try {
                setMessage('Please wait loading ML model...');
                const loadedModel = await loadSignModel();
                setModel(loadedModel);
                setLoading(false);
                setMessage('ML Model loaded successfully!');
                // Remove the message after 5 seconds
                setTimeout(() => setMessage(null), 2000);
            } catch (error) {
                console.error('Error loading ML model:', error);
                setLoading(false);
                setMessage('Error loading ML model. Please try again.');
                // Remove the message after 5 seconds
                setTimeout(() => setMessage(null), 2000);
            }
        };
        loadModel();
    }, []);

    const detectHandSign = async () => {
        if (webcamRef.current && webcamRef.current.video.readyState === 4) {
            const video = webcamRef.current.video;
            try {
                const predictions = await model.estimateHands(video);
                if (predictions.length > 0) {
                    const sign = await predictSign(predictions[0]);
                    onSignDetected(sign);
                }
            } catch (error) {
                console.error('Error detecting hand sign:', error);
            }
        }
    };

    useEffect(() => {
        if (!loading && model) {
            const interval = setInterval(detectHandSign, 100);
            return () => clearInterval(interval);
        }
    }, [loading, model]);

    return (
        <div style={{ 
            position: "relative", 
            width: "100%", 
            height: "100%", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            flexDirection: "column"
        }}>
            <div style={{ 
                position: "relative", 
                width: "80%", 
                height: "80%", 
                overflow: "hidden" 
            }}>
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover" 
                    }}
                />
            </div>
            {message && (
                <Alert variant={message.includes('Error') ? 'danger' : 'success'} style={{ marginTop: "1rem" }}>
                    {message}
                </Alert>
            )}
        </div>
    );
};

export default RealTimeHandSignVerifier;
