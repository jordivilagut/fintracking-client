import React from "react";
import {DatePicker} from "react-nice-dates";
import {enGB} from "date-fns/locale";
import 'react-nice-dates/build/style.css'

export const CustomCalendar = ({date, setDate}) => {
    return <DatePicker date={date} onDateChange={setDate} locale={enGB}>
        {({ inputProps, focused }) => (
            <input
                className={'input' + (focused ? ' -focused bootstrapBox' : '')}
                {...inputProps}/>
        )}
    </DatePicker>
}
