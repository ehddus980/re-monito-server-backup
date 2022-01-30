import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarBackDiv, OnlyCalendar } from '../../Presenter/Calendar/CalendarBodyPresenter';

import CalendarTitle from './CalendarTitle';


const CalendarBody = () => {
        
    return(
        <>
            <CalendarTitle/>
            <CalendarBackDiv>
            <OnlyCalendar>
            <FullCalendar className = "FullCalendarCSS"
                plugins={[ interactionPlugin, dayGridPlugin ]}
                        initialView="dayGridMonth"
                        events={[
                            { title: '시험일', date: '2022-01-30' },
                            { title: '캡스톤 회의', date: '2022-01-20' }
                          ]}    
                    />
            </OnlyCalendar>
        </CalendarBackDiv>    
        </>
        
    )
}

export default CalendarBody;