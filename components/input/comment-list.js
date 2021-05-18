import classes from './comment-list.module.css'

function CommentList() {
  return (
    <ul className={classes.comments}>
      {/* 请求API路由-渲染评论列表 */}
      <li>
        <p>活动很有趣！</p>
        <div>
          ——<address>Lucy</address>
        </div>
      </li>
      <li>
        <p>认识很多新朋友，很棒！</p>
        <div>
          —— <address>Summer</address>
        </div>
      </li>
    </ul>
  )
}

export default CommentList
