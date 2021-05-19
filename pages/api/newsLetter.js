import { MongoClient } from 'mongodb'
async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: '邮箱验证无效' })
      return
    }

    //将邮箱地址保存到数据库
    const client = await MongoClient.connect(
      'mongodb+srv://nextjs:nextjs123@msonline.menjs.mongodb.net/events?retryWrites=true&w=majority',
      { useUnifiedTopology: true }
    )
    const db = client.db()
    await db.collection('newsletter').insertOne({ email: userEmail })
    client.close()
    res.status(201).json({ message: '注册成功！' })
  }
}

export default handler
