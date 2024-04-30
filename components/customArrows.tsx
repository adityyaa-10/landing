
import React from 'react';

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const SampleNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'blue' }}
            onClick={onClick}
        />
    );
};

export const SamplePrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'green' }}
            onClick={onClick}
        />
    );
};
