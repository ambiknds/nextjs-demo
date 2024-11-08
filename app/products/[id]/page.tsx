export default async function Products({params}: {params : {id:string}}) {
    const {id} = await params
  return (
    <div>Products: {id}</div>
  )
}
