import { NextApiRequest, NextApiResponse } from "next"
import { v4, v3, v1 } from 'uuid';
import { connect } from "../database/connection"
import { ResponseFuncs } from "../database/types"
import generateRandomKey from '../../utils/randomKey'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs
  //function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error })

  // Potential Responses
  const handleCase: ResponseFuncs = {
    //   // RESPONSE FOR GET REQUESTS
    //   // GET: async (req: NextApiRequest, res: NextApiResponse) => {
    //   //   const { Todo } = await connect() // connect to database
    //   //   res.json(await Todo.find({}).catch(catcher))
    //   // },
    //   // GET: async (req: NextApiRequest, res: NextApiResponse) => {
    //   //   const { Todo } = await connect() // connect to database
    //   //   res.json('asd')
    //   // },
    //   // RESPONSE POST REQUESTS
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { List } = await connect() // connect to database
      const { listName, listPrivate, listContent, listPassword } = req.body
      const listIdentification: string = generateRandomKey();

      console.log(listIdentification)
      res.status(204).json(await List.create({
        listName, listPrivate, listContent, listIdentification, listPassword
      }).catch(catcher))
    },
  }

  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: "No Response for This Request" })
}

export default handler