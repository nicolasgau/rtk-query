import {useGetAllModelApiQuery} from "../features/api/modelApi"

const Model = () => {
  const models = useGetAllModelApiQuery()
  console.log(models.data)
  console.log(models.isSuccess)
  return (
    <div>
      { models.isSuccess &&  models.data.map( el => 
        <div>{el.title}</div> 
      )
      }
    </div>
  )
}

export default Model
