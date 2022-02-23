// Interface to defining our object of response functions
export interface ResponseFuncs {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
}

// Interface to define our Todo model on the frontend
export interface List {
  _id?: string
  listName: string,
  listPrivate: boolean,
  listContent: [string]
}