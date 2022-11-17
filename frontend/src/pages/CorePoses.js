import EachCorePose from "../components/EachCorePose"

export default function CorePoses({ Categories }) {
  return (
    <div>
    <h1>Index of Core Poses:</h1>
      <div className="CoreCards">
      {Categories ? (
        Categories.items[0].yoga_poses.map((y) => {
          return <EachCorePose key={y.id} pose={y} />
        })
      ) : (
        <h1>...Loading</h1>
      )}
          </div>
          </div>
  )
}
