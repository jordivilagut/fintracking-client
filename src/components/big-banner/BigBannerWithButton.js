import {Image} from "../image/Image";
import React from "react";
import {Button} from "../button/Button";

export const BigBannerWithButton = ({
                                        mainText,
                                        secondaryText,
                                        imageUrl,
                                        color,
                                        textColor,
                                        action,
                                        buttonText,
                                        buttonSecondaryText,
                                        buttonColor,
                                        buttonTextColor
                                    }) => (

    <div className="mainPageElement banner big"
         style={{
             background: `#${color}`,
             color: `#${textColor}`
         }}>
        <Image imageUrl={imageUrl}/>
        <h2>{mainText}</h2>
        <h3>{secondaryText}</h3>
        <Button
            action={action}
            mainText={buttonText}
            secondaryText={buttonSecondaryText}
            color={buttonColor}
            textColor={buttonTextColor}/>
    </div>
);
