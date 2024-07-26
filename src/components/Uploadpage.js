import React from 'react'

function Uploadpage({ Progress, setProgress, PhotoDetails, setPhotoDetails, Imgdata, setImgdata, Username, setUsername }) {

    const animateprogressbar = () => {
        const start = setInterval(() => {
            setProgress((val) => {
                if (val >= 100) {
                    clearInterval(start)
                    return 100;
                }
                return val + 25;
            })
        }, 500);
    }
    function printFile(file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
            setImgdata(evt.target.result);
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    }

    const getPhotoDetails = (e) => {
        console.log(e.target.files[0]);
        const details = {
            name: e.target.files[0].name,
            size: e.target.files[0].size,
        }
        printFile(e.target.files[0]);

        setPhotoDetails(details);
        animateprogressbar();
    }

    return (
      <>
        <div className="px-5 block border mx-2 rounded-lg py-5 mt-20">
          <input
            onChange={(e) => {
              console.log(e.target.value);
              setUsername(e.target.value);
            }}
            className="relative block m-auto w-full max-w-md px-4 py-2  border text-gray-700  placeholder:text-gray-300 outline-none rounded-full"
            type="text"
            name="user"
            id="user"
            placeholder="Enter Your Name"
          />
          {Username == "" && (
            <p className="text-blue-400 block  w-full max-w-md  text-xs  ml-3 ">
              *Enter your name here
            </p>
          )}
          <label
            id="btn"
            htmlFor="upload"
            className="uploadSec relative px-5  mt-8 m-auto w-full max-w-2xl 
                flex flex-col items-center  space-y-8 pt-10 pb-10 rounded-lg
                 "
          >
            {/* <div className=" flex justify-center items-center">
              <p className="photofilename text-xs text-gray-500">
                {PhotoDetails.name}
              </p>
            </div> */}
            <button
              onClick={() => {
                document.getElementById("btn").click();
              }}
              className="uploadBtn bg-gray-700 flex items-center justify-evenly px-5 py-2 space-x-3 rounded-lg "
            >
              <span className="text-white truncate"> Upload Photo </span>
              <span className="">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.8125 8.63464V3.03152L3.025 4.81902L2.0625 3.82214L5.5 0.384644L8.9375 3.82214L7.975 4.81902L6.1875 3.03152V8.63464H4.8125ZM1.375 11.3846C0.996876 11.3846 0.673064 11.2499 0.403564 10.9804C0.134064 10.7109 -0.000457166 10.3873 1.16723e-06 10.0096V7.94714H1.375V10.0096H9.625V7.94714H11V10.0096C11 10.3878 10.8653 10.7116 10.5958 10.9811C10.3263 11.2506 10.0027 11.3851 9.625 11.3846H1.375Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>

            {PhotoDetails.name && (
              <div className="m-auto relative w-full max-w-lg">
                <div className="progressBar text-gray-400 p-2">
                   {
                    Progress !='100' ? 'Uploading:':'Upload : '
                   }

                   {
                    Progress !='100' ? <div
                    className="inline-block mt-10  h-6 w-6 animate-spin text-green-600 rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
                  </div> :'Successful'
                }
                </div>

                
              </div>
            )}
          </label>
        </div>

        <input
          onChange={(e) => {
            console.log("first");
            if (Username != "") {
              getPhotoDetails(e);
            } else {
              alert("Please Enter Your Name");
            }
          }}
          className="hidden"
          type="file"
          name="upload"
          id="upload"
          accept=".png, .jpg, .jpeg"
        />
      </>
    );
}

export default Uploadpage