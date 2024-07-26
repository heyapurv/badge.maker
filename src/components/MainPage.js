
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Uploadpage from '@/components/Uploadpage';
import DownloadBadge from '@/components/DownloadBadge';
const MainPage = () => {
    const [Progress, setProgress] = useState(0);
    const [Username, setUsername] = useState("");
    const [PhotoDetails, setPhotoDetails] = useState({
        name: '', size: ''
    });
    const [Imgdata, setImgdata] = useState("");
  return (
    <div >
      <div className='flex flexcol  h-screen'>
          <div className='bg-slate-900  w-80 text-white'>
              <div className='flex flex-col justify-center place-items-center mt-10 gap-y-10'>
                <a className='bg-gray-600 px-10 py-2 rounded-md'>Generate Your Badge</a>
             
                { <Uploadpage
                Progress={Progress}
                setProgress={setProgress}
                PhotoDetails={PhotoDetails}
                setPhotoDetails={setPhotoDetails}
                Imgdata={Imgdata}
                setImgdata={setImgdata}
                Username={Username}
                setUsername={setUsername}
            />
            }
            <div className=''> <h1 className='text-white text-center mt-36'>Made with love by Apurv Gore</h1></div>
              </div>
          </div>
          <div className='bg-slate-950 w-screen'>
          {
                (Progress === 100) && <DownloadBadge
                    Imgdata={Imgdata}
                    setImgdata={setImgdata}
                    setProgress={setProgress}
                    Username={Username}
                    setUsername={Username}
                />
            }

            {
                (Progress !== 100) && <div>Hello</div>
            }
            
          </div>
        
      </div>
       
    </div>
  )
}

export default MainPage
