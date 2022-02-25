import { NextApiRequest, NextApiResponse } from "next"
import { connect } from "../database/connection"
import { ResponseFuncs } from "../database/types"
import generateRandomKey from '../../utils/randomKey'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

  const catcher = (error: Error) => res.status(400).json({ error })

  const handleCase: ResponseFuncs = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { List, User } = await connect() // connect to database
      const { listName, listPrivate, listContent, listPassword, session } = req.body
      const listIdentification: string = generateRandomKey();

      try {
        const response = await List.create({
          listName, listPrivate, listContent, listIdentification, listPassword
        }).catch(catcher)

        await User.findOneAndUpdate({ userEmail: session.user.email }, {
          $push: {
            userLists: response._id
          }
        })

        res.status(204).json(response)
      } catch (error) {
        res.status(404).json({ message: "Problem to create a new list", error })
      }
    },

    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { User, List } = await connect()
      const { user } = req.query

      const response = await User.findOne({ userEmail: user })

      const userLists = await List.find({
        _id: {
          $in: response.userLists
        }
      })

      res.json({ userLists, status: 202 })


    },
  }

  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: "No Response for This Request" })
}

export default handler