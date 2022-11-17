import EachSeatPose from "../components/EachSeatPose"

export default function SeatedPoses({Categories}) {
    
    return (
        <div>
            <h1>Index of Seated Poses :</h1>
        
        <div className='SeatCards'>
            
            {Categories ? (
                Categories.items[1].yoga_poses.map((y) => {
                    return (
                        <div className='pose-container'>
                        <EachSeatPose key={y.id} pose={y} />
                        </div>
                            )
                })
            ) : (
                    (
                        <h1>...Loading</h1>
                    )
            )}
            </div>
            </div>
    )
}