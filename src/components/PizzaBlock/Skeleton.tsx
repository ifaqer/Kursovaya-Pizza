import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton:React.FC = () => {
  return(
    <ContentLoader
    className="pizza-block"
    speed={2}
    width={310}
    height={466}
    viewBox="0 0 300 466"
    backgroundColor="#edeeee"
    foregroundColor="#e9e7e7"
  >
    <circle cx="136" cy="130" r="128" /> 
    <rect x="0" y="320" rx="10" ry="10" width="280" height="76" /> 
    <rect x="0" y="280" rx="10" ry="10" width="280" height="22" /> 
    <rect x="0" y="425" rx="10" ry="10" width="91" height="35" /> 
    <rect x="155" y="425" rx="15" ry="15" width="123" height="35" />
  </ContentLoader>
  )
}

export default Skeleton