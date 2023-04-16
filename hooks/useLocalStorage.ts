import { useState } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });
    
    const setValue = (value: any) => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));       
        } catch (error) {
            console.error(error);
        }
    }

    return [storedValue, setValue];
}

export { useLocalStorage };