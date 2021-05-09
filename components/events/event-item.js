import Link from 'next/link'
import classes from './event-item.module.css'

function EventItem(props) {
  const { id, title, image, date, location } = props
  //日期处理
  const humanReadableDate = new Date(date).toLocaleDateString('zh-CN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  //动态路由
  const exploreLink = `/events/${id}`
  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>查看活动详情</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem
