import React, { useState } from 'react'
import { Roboto_Mono } from 'next/font/google'
const roboto = Roboto_Mono({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

import html2canvas from 'html2canvas'

const DownloadBadge = ({ Imgdata, setImgdata, setProgress, Username, setUsername }) => {
    const [Adjustment, setAdjustment] = useState(false);
    const [Download, setDownload] = useState(false);
    const [ChangePhoto, setChangePhoto] = useState(false);



    return (
        <div className='relative w-full flex  justify-center place-items-center'>
           

            <div className="photo w-fit relative m-auto flex flex-col  my-48 ">
                <div className="relative">
                    {!Adjustment && <p className={`absolute ${roboto.className} text-2xl tracking-tight bottom-16 pl-5 z-20 w-full text-left text-[#4283F3]`}>{Username}</p>}
                    <div className=" w-fit max-w-[300px] h-[350px] overflow-scroll">
                        <img src={Imgdata} alt="your Image" className='w-max h-max' />
                    </div>
                    {!Adjustment && <img
                        className='absolute top-12 h-[300px]'
                        src="/assets/template.png"
                        width={300}
                        
                        alt="template"
                    />}

                </div>
               <div>
               
               </div>
            </div>


            <div className="w-fit relative m-auto gap-2  flex flex-col items-center justify-center flex-wrap   mt-64 p-5">
                <div className='flex gap-5'>
                <div >
                    <input
                        onChange={(e) => {
                            console.log(e.target.checked);
                            setAdjustment((val) => {
                                return !val;
                            });

                        }}
                        className='hidden peer/adjust' type="checkbox" name="option" id="adjust" />
                    <label htmlFor="adjust" className="bg-gray-700 px-10 py-2 rounded-lg hover:cursor-pointer hover:shadow-xl duration-300">Adjust Image</label>
                </div>
                <div >
                    <input
                        onChange={(e) => {
                            console.log(e.target.checked);

                            setChangePhoto((val) => {
                                return !val;
                            });

                            window.location.reload();

                        }}
                        className="hidden peer/changePhoto" type="checkbox" name="option" id="changePhoto" />
                    <label htmlFor="changePhoto" className='bg-gray-700 px-10 py-2 rounded-lg hover:cursor-pointer hover:shadow-xl duration-300'> Change Photo</label>
                </div>
                </div>
                <div className=''>
                
                <div  className=' mt-40'>
                {Download && <div
        className="inline-block my-5 ml-28 h-8 w-8 animate-spin text-green-600 rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        ></span>
      </div>}
                    <div>
                    <input
                        onChange={(e) => {
                            setAdjustment(false);
                            setDownload(true);
                            setTimeout(() => {
                                const cvs = document.querySelector('.photo');

                                html2canvas(cvs).then(function (canvas) {
                                    // document.body.appendChild(canvas);
                                    const downloadLink = document.createElement('a');
                                    downloadLink.href = canvas.toDataURL('image/jpg');
                                    downloadLink.download = `${Username}_Arcade2024.png`;
                                    downloadLink.click();
                                    setDownload(false);
                                }).catch((err) => {
                                    console.log(err)
                                    setDownload(false);

                                });

                            }, 1000);

                        }}
                        className="hidden peer/download" type="checkbox" name="option" id="download" />
                    <label htmlFor="download" className=' bg-gray-700 px-10 py-2 rounded-lg hover:cursor-pointer hover:shadow-xl duration-300'> Download Digital Badge</label>
                    </div>
                </div>
                </div>
            </div>

            

            {/* <p className="text-center w-full text-violet-600">Choose Your Badge</p>
            <div className="w-fit relative m-auto mt-5 flex flex-wrap">

                <label className="w-fit h-fit bg-yellow-300 border-2 border-blue-500 m-2 p-1">
                    <input type="radio" name="badge" id="badge1" />
                    <Image
                        className=''
                        src="/assets/template.png"
                        width={100}
                        height={100}
                        alt="template"
                    />
                </label>

            </div> */}


        </div>
    )
}

export default DownloadBadge

const  Download = () => {
    return(
        <>
          
        </>
    )
       
    
}