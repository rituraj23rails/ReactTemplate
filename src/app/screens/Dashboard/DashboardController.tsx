import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';

const DashboardController = (props: any) => {
    const [count, setCount] = useState<any>(0);
    
    useEffect(() => {
        return () => {
        }
    }, [])

    return (
        <>
            <Dashboard {...props} />
        </>
    )
}

export default DashboardController;