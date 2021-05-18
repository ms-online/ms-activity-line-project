import classes from './newsletter-registration.module.css'

function NewsletterRegistration() {
  function registrationHandler(event) {
    event.preventDefault()

    // 获取用户输入内容（useState 或 useRef）
    // 可选: 输入验证
    // 发送有效数据到API
  }

  return (
    <section className={classes.newsletter}>
      <h2>注册用户</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input type='email' id='email' placeholder='邮箱' aria-label='邮箱' />
          <button>注册</button>
        </div>
      </form>
    </section>
  )
}

export default NewsletterRegistration
