function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: '邮箱验证无效' })
      return
    }

    console.log(userEmail)
    res.status(201).json({ message: '注册成功！' })
  }
}

export default handler
