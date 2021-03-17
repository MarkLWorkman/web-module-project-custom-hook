import { useLS } from './useLS';
import { useEffect } from 'react';

export const useDM = (bool) => {
    const [darkMode, setDarkMode] = useLS('dark-mode', bool);

    useEffect(() => {
        const body = document.querySelector('body');
        if (darkMode) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
    }, [darkMode])

    return [darkMode, setDarkMode];
};