import React, { useEffect } from 'react';
import axios from 'axios';

const requestNotificationPermission = async () => {
    if ('Notification' in window && navigator.serviceWorker) {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            subscribeUserToPush();
        }
    }
};

const subscribeUserToPush = async () => {
    try {
        const registration = await navigator.serviceWorker.register('/service-worker.js')

        const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array('BFGaoiHTu_EEsa3a5YpPSksJcGl11E_2kjnpqo_KW7RVXtcK4uSjrE4uxlrjWPXhN-K5uM16duDXiCcMCFNkPH4')
        });

        await axios.post('http://127.0.0.1:5000/push/subscribe', { subscription_info: subscription });
    } catch (error) {
        console.error('Failed to subscribe to notifications:', error);
    }
};

const urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};

const NotificationSetup = () => {
    useEffect(() => {
        requestNotificationPermission();
    }, []);

    return null;
};

export default NotificationSetup;
