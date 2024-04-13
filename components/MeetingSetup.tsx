"use Client";

import {
 DeviceSettings,
 VideoPreview,
 useCall,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
 setIsSetupComplete,
}: {
 setIsSetupComplete: (value: boolean) => void;
}) => {
 const [isMicCamTogglesOn, setIsMicCamTogglesOn] = useState(false);
 const call = useCall();

 if (!call) {
  throw new Error("useStreamCall must be used within a StreamCall component.");
 }
 useEffect(() => {
  if (isMicCamTogglesOn) {
   call?.microphone.disable();
   call?.camera.disable();
  } else {
   call?.microphone.enable();
   call?.camera.enable();
  }
 }, [isMicCamTogglesOn, call?.microphone, call?.camera]);

 return (
  <div className="flex flex-col h-screen w-full items-center justify-center text-white">
   <h1 className="text-2xl font-bold">Camera SetUp</h1>
   <VideoPreview />
   <div className="flex h-16 items-center justify-center gap-3">
    <label className="flex items-center justify-center gap-2 font-medium">
     <input
      type="checkbox"
      checked={isMicCamTogglesOn}
      onChange={(e) => setIsMicCamTogglesOn(e.target.checked)}
     />
     Join with mic and camera off
    </label>
    <DeviceSettings />
   </div>
   <Button
    className="rounded-md bg-green-500 px-4 py-2.5"
    onClick={() => {
     call.join();

     setIsSetupComplete(true);
    }}
   >
    Join meeting
   </Button>
  </div>
 );
};

export default MeetingSetup;
