import React, { FC } from 'react';

export const GoodItemWithCount: FC<{count: number, childern: React.ReactNode}> = ({count, childern}) => {
    return (
        <div>
            {childern}
            {count}
        </div>
    );
};

