import React, { FC, PropsWithChildren } from 'react';
import {Card, CardContent} from "@mui/material";

export const GoodItemWithCount: FC<PropsWithChildren<{count: number}>> = ({children, count}) => {
    return (
        <Card>
            {children}
            <CardContent>
                {count}
            </CardContent>
        </Card>
    );
};

