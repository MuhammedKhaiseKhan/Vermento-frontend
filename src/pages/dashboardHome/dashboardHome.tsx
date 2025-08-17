import React from "react";
import OverviewSection from "../../components/overviewSection/overviewSection";
import MentorsSection from "../../components/mentorsSection/mentorsSection";
import ExploreMentorsSection from "../../components/exploreMentorsSection/exploreMentorsSection";

export const DashboardHome : React.FC = () => {
    return(
        <div className="content p-5">
            <h1 className="text-3xl font-bold mb-8 text-white">Welcome, John Doe!</h1>
            <OverviewSection />
            <MentorsSection />
            <ExploreMentorsSection />
        </div>
    )
}