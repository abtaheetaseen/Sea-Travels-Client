import React from 'react'
import aboutimg from '../assets/images/aboutimg.jpg'

const About = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-10/12 mx-auto my-[50px] gap-10'>
      <div className='flex items-center justify-center'>
            <div>
                <h1 className='text-3xl mb-5'>A B O U T</h1>
                <p className='mb-5'>Travel isn't always pretty. It isn't always comfortable. Sometimes it hurts, it even breaks your heart. But that's okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.</p>

                <p className='mb-5'>A journey is best measured in friends, rather than miles. Blessed are the curious for they shall have adventures. For my part, I travel not to go anywhere, but to go. I travel for travel's sake. The great affair is to move.</p>

                <p>Once the travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life. I travel because it makes me realize how much I haven't seen, how much I'm not going to see, and how much I still need to see.</p>
            </div>
      </div>

      <div>
        <img className='rounded-xl' src={aboutimg} alt="" />
      </div>
    </div>
  )
}

export default About
