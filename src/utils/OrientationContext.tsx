import React, { createContext, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export const OrientationContext =  createContext < 'portrait' | 'landscape' >('portrait');
export const OrientationProvider : React.FC<{children : React.ReactNode}> = ({children}) => {
    const [orientation, setOrientation] = useState<'portrait' | 'landscape' > ('portrait');

    const detectionOrientation = ()=>{
        const {width,height} = Dimensions.get('window');
        setOrientation(width > height ? 'landscape' : 'portrait');
    };

    useEffect(()=>{
        detectionOrientation();

        Dimensions.addEventListener('change',detectionOrientation);
        return ()=>{
            Dimensions.removeEventListener('change', detectionOrientation);
        };
    },[]);

    return (
        <OrientationContext.Provider value={orientation}>
            {children}
        </OrientationContext.Provider>
    )

}