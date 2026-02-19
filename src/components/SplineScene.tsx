"use client";

import Spline from "@splinetool/react-spline";

export default function SplineScene() {
    return (
        <div className="w-full h-full">
            <Spline
                scene="https://prod.spline.design/jpTVJZ9gF912nKnV/scene.splinecode"
                className="w-full h-full"
            />
        </div>
    );
}
