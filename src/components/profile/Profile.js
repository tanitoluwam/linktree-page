import React from 'react'
import picture from "../../assets/images/profile__img.png"
import mobileIcon from "../../assets/images/mobileIcon.png"
import shareButton from "../../assets/images/shareButton.png"

export const Profile = () => {
  return (
    <div>
        <img src={shareButton} alt="share" id="share__img" className="invisible md:visible md:relative md:left-[600px] md:top-[40px] lg:visible lg:relative lg:left-[800px] xl:visible xl:relative xl:left-[1000px] "/>
        <img src={mobileIcon} alt="mobile" id="mobile__img"  className='relative left-[300px] md:invisible'/>
        <img src={picture} alt="profile" id="profile__img" />
        <h3 id="twitter" className='font-bold my-3 mx-auto'>Tanitoluwa Adenuga</h3>
        <h3 id="slack" className='invisible'>Tanitoluwa Adenuga</h3>
    </div>
  )
}
