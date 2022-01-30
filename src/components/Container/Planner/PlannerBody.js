import React, { useState, useEffect } from 'react';
import { OnlyPlanner, PlannerBackDiv } from '../../Presenter/Planner/PlannerBodyPresenter';

const PlannerBody = () => {
    return (
        <>
            <PlannerBackDiv>
                <OnlyPlanner>
                    <h3>시간표 들어갈 예정</h3>
                </OnlyPlanner>

            </PlannerBackDiv>
        </>
    )
}

export default PlannerBody;