import { Fragment } from 'react'
import { getEventById, getAllEvents } from '../../helpers/api-util'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/ui/error-alert'
import Button from '../../components/ui/button'

function EventDetailPage(props) {
  const event = props.selectedEvent

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>查到不到活动详情！</p>
        </ErrorAlert>

        <div className='center'>
          <Button link='/events'>查看所有活动</Button>
        </div>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage

export async function getStaticProps(context) {
  const eventId = context.params.eventId

  const event = await getEventById(eventId)

  return {
    props: {
      selectedEvent: event,
    },
  }
}

export async function getStaticPaths() {
  const events = await getAllEvents()

  const paths = events.map((event) => ({
    params: {
      eventId: event.id,
    },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}
