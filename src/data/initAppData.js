import { useAppData } from ".";
import { initModelDB, initAniDB } from "./dbFunction";
import { fetchDataGroup } from "./fetch";
import { personalAniPromise, processPersonalAni } from "./getPersonalAni";

const setData = useAppData.getState().set;
const idbAvailable = !!indexedDB;

export const initAppData = async () => {
    const otherDataPromise = fetchDataGroup("others");
    const modelDataPromise = fetchDataGroup("model");
    const aniDataPromise = fetchDataGroup("animation");

    const otherData = await otherDataPromise;
    setData(otherData);

    const modelData = await modelDataPromise;
    setData(modelData);
    const initModelDbPromise = idbAvailable && initModelDB(modelData);

    const aniData = await aniDataPromise;
    setData(aniData);
    idbAvailable && initAniDB(aniData);

    await personalAniPromise;
    await initModelDbPromise;
    idbAvailable && (await processPersonalAni());

    console.log("Data Load Complete");
};
