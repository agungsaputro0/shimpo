import React from "react";

type LandingProps = {
    layoutMessage: string;
    layoutTitle: string;
}

const LandingLayouts = (props: LandingProps) => {
    const { layoutTitle, layoutMessage } = props;
    return (
        <div className="flex justify-center h-screen items-center">
            <div className="w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg p-6 space-y-4  sm:max-w-lg md:max-w-md lg:max-w-md min-w-[300px] ml-[10px] mr-[10px]">
                <div className="flex justify-start items-center flex-row flex-nowrap">
                    <span className="w-[72px] h-[2px] bg-white"></span>&nbsp;
                    <p className="text-white">SHIMPO</p>
                </div>
                <h1 className="text-4xl font-bold mb-2 text-white">{layoutTitle}</h1>
                <p className="font-medium text-2xl mb-8  text-white">
                {layoutMessage}
                </p>
                </div>
            </div>
        </div>
    )
}

export default LandingLayouts;