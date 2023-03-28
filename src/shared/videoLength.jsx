import React from 'react'
import Moment from 'react-moment';
import moment from 'moment'

const VideoLength = ({time}) => {

    // const videoLengthInSeconds = moment.startOf("day").seconds(time).format("H:mm:ss")
    const start = moment().add(-time, 's');
  return (
    <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
        {/* {videoLengthInSeconds} */}
        <Moment date={start} format="hh:mm:ss" durationFromNow />
    </div>
  )
}

export default VideoLength