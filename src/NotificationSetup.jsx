import React, { useEffect } from 'react';
import axios from 'axios';

const requestNotificationPermission = async () => {
    if ('Notification' in window && navigator.serviceWorker) {
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                await subscribeUserToPush();
            } else {
                console.error('Notification permission denied.');
            }
        } catch (error) {
            console.error('Failed to request notification permission:', error);
        }
    } else {
        console.error('Notification or service worker not supported.');
    }
};

const subscribeUserToPush = async () => {
    try {
        const swRegistration = await navigator.serviceWorker.ready;
        const subscription = await swRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array("BFGaoiHTu_EEsa3a5YpPSksJcGl11E_2kjnpqo_KW7RVXtcK4uSjrE4uxlrjWPXhN-K5uM16duDXiCcMCFNkPH4") // Replace with your VAPID public key
        });
    
        await axios.post('https://fitt-track.onrender.com/push/subscribe', subscription, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
    
        console.log('User subscribed to push notifications');
      } catch (error) {
        console.error('Failed to subscribe to push notifications:', error);
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
