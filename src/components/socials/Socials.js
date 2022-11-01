import React from 'react'
import slackImage  from "../../assets/images/slack.png"
import githubImage  from "../../assets/images/github.png"

export const Socials = () => {
  return (
    <div className='flex justify-center mt-2 mb-6'>
        <img src={slackImage} alt="slackImage"  className='mr-4'/>
        <img src={githubImage} alt="githubImage" />
    </div>
  )
}
