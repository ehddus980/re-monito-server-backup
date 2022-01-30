import React from "react";
import { Link } from "react-router-dom";
import PlannerBody from "./PlannerBody";

const Planner = () => {
    return (
        <>
            <h1 className="planner-title">플래너</h1>
            <PlannerBody/>
        </>
    )
}

export default Planner;