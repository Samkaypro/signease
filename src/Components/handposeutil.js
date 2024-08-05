import * as fp from "fingerpose";
import * as handpose from "@tensorflow-models/handpose";
import { aSign } from "./handsigns/aSigns";
import { bSign } from "./handsigns/bSigns";
import { cSign } from "./handsigns/cSigns";
import { dSign } from "./handsigns/dSigns";
import { eSign } from "./handsigns/eSigns";
import { fSign } from "./handsigns/fsign";
import { gSign } from "./handsigns/gsign";
import { hSign } from "./handsigns/hsign";
import { iSign } from "./handsigns/isign";
import { jSign } from "./handsigns/jsign";
import { kSign } from "./handsigns/ksign";
import { lSign } from "./handsigns/lsign";
import { mSign } from "./handsigns/msign";
import { nSign } from "./handsigns/nsign";
import { oSign } from "./handsigns/osign";
import { pSign } from "./handsigns/psign";
import { qSign } from "./handsigns/qsign";
import { rSign } from "./handsigns/rsign";
import { sSign } from "./handsigns/ssign";
import { tSign } from "./handsigns/tsign";
import { uSign } from "./handsigns/usign";
import { vSign } from "./handsigns/vsign";
import { wSign } from "./handsigns/wsign";
import { xSign } from "./handsigns/xsign";
import { ySign } from "./handsigns/ysign";
import { zSign } from "./handsigns/zsign";

export const loadSignModel = async () => {
    const model = await handpose.load();
    return model;
};

export const predictSign = async (hand) => {
    const GE = new fp.GestureEstimator([
        aSign,
        bSign,
        cSign,
        dSign,
        eSign,
        fSign,
        gSign,
        hSign,
        iSign,
        jSign,
        kSign,
        lSign,
        mSign,
        nSign,
        oSign,
        pSign,
        qSign,
        rSign,
        sSign,
        tSign,
        uSign,
        vSign,
        wSign,
        xSign,
        ySign,
        zSign,
    ]);

    const estimatedGestures = GE.estimate(hand.landmarks, 7.5);
    console.log('Estimated Gestures from util:', estimatedGestures);

    if (estimatedGestures.gestures.length > 0) {
        const result = estimatedGestures.gestures.sort(
            (a, b) => b.confidence - a.confidence
        )[0];
        console.log('Top Result from util:', result);
        return estimatedGestures;
    } else {
        console.log('No gestures detected');
        return null;
    }
};
