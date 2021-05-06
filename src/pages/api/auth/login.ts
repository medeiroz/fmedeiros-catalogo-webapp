// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    id: '1',
    name: 'Flavio Medeiros',
    email: 'smedeiros.flavio@gmail.com',
    password: 'encrypted',
  })
}
