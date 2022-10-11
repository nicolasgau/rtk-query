import {useGetAllModelApiQuery} from "../store/features/api/modelApi"

const Model = () => {
  const models = useGetAllModelApiQuery('COM')
  // console.log(models.data)
  console.log(models.isSuccess)
  return (

    <div>
      { models.isSuccess &&  models.data && 
        models.data.map(el => 
          <div>{el.ref}</div>
          )
        } 
    </div>
  )
}

export default Model
