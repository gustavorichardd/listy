import { NextApiRequest, NextApiResponse } from "next"
import { connect } from "../database/connection"
import { ResponseFuncs } from "../database/types"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs
  const catcher = (error: Error) => res.status(400).json({ error })

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      // const { User } = await connect()
      // const { user } = req.query

      // const response = await User.findOne({ userEmail: user })

      // if (!response) {
      //   res.json({ error: 'User not found', status: 404 })
      // }
      // res.json({ response, status: 202 })


    },
    //   // RESPONSE POST REQUESTS
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Item, List } = await connect()

      const { user } = req.body

      const { name, email, image } = user

      console.log(name, email, image)

      // res.json(await User.create({
      //   userName: name,
      //   userAvatar: image,
      //   userEmail: email,
      // }).catch(catcher))
    },
  }

  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: "No Response for This Request" })
}

export default handler