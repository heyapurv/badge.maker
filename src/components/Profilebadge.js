'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Uploadpage from '@/components/Uploadpage';
import DownloadBadge from '@/components/DownloadBadge';
function Profilebadge() {
    const [Progress, setProgress] = useState(0);
    const [Username, setUsername] = useState("");
    const [PhotoDetails, setPhotoDetails] = useState({
        name: '', size: ''
    });
    const [Imgdata, setImgdata] = useState("");

    return (
        <div className='w-full  '>



            {!(Progress === 100) && <Uploadpage
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
            {
                (Progress === 100) && <DownloadBadge
                    Imgdata={Imgdata}
                    setImgdata={setImgdata}
                    setProgress={setProgress}
                    Username={Username}
                    setUsername={Username}
                />
            }


          
        </div>
    )
}

export default Profilebadge;