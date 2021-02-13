import React from 'react'
import {enGB} from 'date-fns/locale'
import {DateRangePicker, END_DATE, START_DATE} from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

export const CustomCalendarWithEndDate = ({startDate, endDate, setStartDate, setEndDate}) =>  {
    return <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        minimumDate={new Date()}
        minimumLength={1}
        format='dd MMM yyyy'
        locale={enGB}>
        {({ startDateInputProps, endDateInputProps, focus }) => (
            <div className='date-range'>
                <input
                    className={'input' + (focus === START_DATE ? ' -focused' : '')}
                    {...startDateInputProps}
                    placeholder='Start date'/>
                <span className='date-range_arrow' />
                <input
                    className={'input' + (focus === END_DATE ? ' -focused' : '')}
                    {...endDateInputProps}
                    placeholder='End date'/>
            </div>
        )}
    </DateRangePicker>
}
