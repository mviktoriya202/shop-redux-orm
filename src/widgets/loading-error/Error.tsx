import React from 'react';

interface ErrorProps {
    message?: string;
}

const Error: React.FC<ErrorProps> = ({ message = 'Something went wrong' }) => {
    return (
        <div className="flex items-center justify-center ">
            <div className="text-center">
                <p className="text-red-600 text-3xl font-bold">Error</p>
                <p className="mt-2 text-xl">{message}</p>
            </div>
        </div>
    );
};

export default Error;
