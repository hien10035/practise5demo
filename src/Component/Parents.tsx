import React from "react";

type PrarentProp = {
    children: React.ReactNode;
}

const Parent = (props: PrarentProp) => {
    return(
        <h2>{props.children}</h2>
    )
}

export default Parent;

