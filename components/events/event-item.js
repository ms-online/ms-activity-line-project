import Link from 'next/link'
function EventItem(props) {
  return (
    <li>
      <img src='' alt='' />
      <div>
        <h2>活动标题</h2>
        <div>
          <time>活动日期</time>
        </div>
        <div>
          <address>活动地点</address>
        </div>
        <div>
          <Link href='/'>查看活动详情</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem
