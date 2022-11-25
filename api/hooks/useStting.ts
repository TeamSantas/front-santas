import SettingService from "../SettingService";
import {useEffect, useState} from "react";
import {putBGMData, putPushData} from "../../util/type";

export const useGetPush = () => {
    const [pushData, setPushData] = useState<boolean>();
    const run = async () => {
        const res = await SettingService.getPush();
        setPushData(res.data.data);
    }
    useEffect(()=>{
        run();
    },[])
    return pushData;
}

export async function setPutPush(status : boolean) {
    const putData : putPushData = {
        alertStatus : status
    };
    await SettingService.putPush(putData);
}

export async function setBGM(status : boolean) {
    const putData : putBGMData = {
        bgmStatus : status
    };
    await SettingService.putBGM(putData);
}
