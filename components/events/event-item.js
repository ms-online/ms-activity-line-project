import Link from 'next/link'
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
    <li>
      <img src={'/' + image} alt={title} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{location}</address>
        </div>
        <div>
          <Link href={exploreLink}>查看活动详情</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem
