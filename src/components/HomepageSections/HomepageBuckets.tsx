import drawingBackgroundImage from '../../assets/imgs/drawing-background.jpg'
import recordBackgroundImage from '../../assets/imgs/record-art-background.jpg'
import paintingBackgroundImage from '../../assets/imgs/painting-background.jpg'

const HomepageBuckets = () => {
  return (
    <>
     <div className="homepage-buckets">
            <div className="bucket"
             style={{
              backgroundImage: `url(${paintingBackgroundImage})`
            }}
             >
            </div>
            
            <div className="bucket"
             style={{
              backgroundImage: `url(${recordBackgroundImage})`
            }}
            >
            </div>

            <div className="bucket"
            style={{
              backgroundImage: `url(${drawingBackgroundImage})`
            }}>
            </div>
          </div>
          
    </>
  )
}

export default HomepageBuckets