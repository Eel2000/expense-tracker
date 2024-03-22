'use client'

import DashboardStatCard from "@/app/components/dashboardStatCard";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="py-10 text-[#304D30] text-center text-4xl font-bold mb-14">Dashboard</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 justify-center">
                <DashboardStatCard title="For expenses" overview="Total bank cards" total={5}>
                    <svg
                        className="fill-primary dark:fill-white"
                        width="50"
                        height="30"
                        viewBox="0 0 30 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                            fill=""
                        />
                        <path
                            d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                            fill=""
                        />
                    </svg>
                </DashboardStatCard>

                <DashboardStatCard title="Total sold" overview="Sum of all card's solds" total={2000}>
                    <svg className="fill-primary dark:fill-white"
                         width="35"
                         height="30"
                         viewBox="0 0 30 16"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path
                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-6H14a.5.5 0 100-1h-4a2.5 2.5 0 110-5h1V6h2v2h2.5v2H10a.5.5 0 100 1h4a2.5 2.5 0 110 5h-1v2h-2v-2H8.5v-2z"/>
                    </svg>
                </DashboardStatCard>

                <DashboardStatCard title="Total Expenses" overview="Sum of all card's expenses" total={5000}>
                    <svg className="fill-primary dark:fill-white"
                         width="40"
                         height="35"
                         viewBox="0 0 30 16"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.46 6l.54-.59V9a1 1 0 002 0V5.41l.54.55A1 1 0 0015 6a1 1 0 000-1.42l-2.29-2.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21L9 4.54A1 1 0 0010.46 6zM12 12a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zm-7-1a1 1 0 101-1 1 1 0 00-1 1zm14 0a1 1 0 10-1 1 1 1 0 001-1zm1-7h-4a1 1 0 000 2h4a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1h4a1 1 0 000-2H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3v-8a3 3 0 00-3-3z"/>
                    </svg>
                </DashboardStatCard>

                <DashboardStatCard title="Total Operations" overview="Sum of all card's operations  " total={15}>
                    <svg className="fill-primary dark:fill-white"
                         width="40"
                         height="35"
                         viewBox="0 0 30 16"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 2H10a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3zm1 10a1 1 0 01-1 1H10a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1zm-3.5-4a1.49 1.49 0 00-1 .39 1.5 1.5 0 100 2.22 1.5 1.5 0 101-2.61zM16 17a1 1 0 00-1 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-4h1a1 1 0 000-2H3v-1a1 1 0 011-1 1 1 0 000-2 3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3v-1a1 1 0 00-1-1zM6 18h1a1 1 0 000-2H6a1 1 0 000 2z"/>
                    </svg>
                </DashboardStatCard>
            </div>
        </main>
    )
}