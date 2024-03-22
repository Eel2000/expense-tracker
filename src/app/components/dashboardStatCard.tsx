import {Card, CardHeader, CardBody} from "@nextui-org/react";
import React, {ReactNode} from "react";

interface DashboardStatCardProps {
    title: string;
    overview: string;
    total: number;
    children: ReactNode;
}

const DashboardStatCard: React.FC<DashboardStatCardProps> = ({
    title,
    overview,
    total,
    children
})=>{
    return(
        <Card className="py-4 w-60">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <div
                    className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                    {children}
                </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <h4 className="text-title-md text-3xl font-bold text-black dark:text-white">{total}</h4>
                <p className="text-tiny uppercase font-bold">{title}</p>
                <small className="text-default-500">{overview}</small>
            </CardBody>
        </Card>
    )
}

export default DashboardStatCard