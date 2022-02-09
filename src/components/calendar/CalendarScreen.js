import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [
	{
		title: 'Cumpleaños del jefe',
		start: moment().toDate(),
		end: moment().add(2, 'hours').toDate(),
		bgcolor: '#fafafa',
		notes: 'Comprar el pastel',
		user: {
			_id: '123',
			name: 'Harold'
		}
	}
];

export const CalendarScreen = () => {
	const [lastview, setLastview] = useState(
		localStorage.getItem('lastView') || 'month'
	);

	const onDoubleClick = (e) => {
		console.log(e);
	};

	const onSelectEvent = (e) => {
		console.log(e);
	};

	const onViewChange = (e) => {
		setLastview(e);
		localStorage.setItem('lastView', e);
	};

	const eventStyleGetter = (event, start, end, isSelected) => {
		const style = {
			backgroundColor: '#377CF7',
			borderRadius: '0px',
			opacity: 0.8,
			display: 'block',
			color: 'white'
		};

		return {
			style
		};
	};

	return (
		<div className="calendar-screen">
			<Navbar />
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				messages={messages}
				eventPropGetter={eventStyleGetter}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelectEvent}
				onView={onViewChange}
				view={lastview}
				components={{
					event: CalendarEvent
				}}
			/>

			<CalendarModal />
		</div>
	);
};
