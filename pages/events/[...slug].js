import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'
function FilteredEventPage() {
  const router = useRouter()

  const filterData = router.query.slug
  // console.log(filterData)

  if (!filterData) {
    return <p className='center'>页面加载中...</p>
  }

  //处理捕获的路由参数
  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  //判断是否为有效年份
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2022 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return <p>无效查询，请重新选择过滤时间！</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>抱歉，查找不到该日期的活动内容！</p>
  }
  return (
    <div>
      <h1>过滤后的活动页面</h1>
    </div>
  )
}

export default FilteredEventPage
