import React from 'react'

function VideoCard() {
  return (
    <div>
      <img src="/photo.png" alt="photo" />
      <div className="grid  grid-cols-12">
        <div className="col-span-1">
          <img
            src="/photo.png"
            alt="abc"
            className="rounded-full w-20 h-20"
          />
          
        </div>
        <div className="col-span-10 bg-slate-300">VideoSong:South 12345</div>
      </div>
    </div>
  );
}

export default VideoCard