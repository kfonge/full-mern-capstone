import EachChestPose from "../components/EachChestPose"

export default function ChestOpeningPoses({ Categories }) {
  return (
    <div>
      <h1>Index of Chest Openers:</h1>
      <div className="ChestCards">
        {Categories ? (
          Categories.items[3].yoga_poses.map((y) => {
            return <EachChestPose key={y.id} pose={y} />
          })
        ) : (
          <h1>...Loading</h1>
        )}
      </div>
    </div>
  )
}
