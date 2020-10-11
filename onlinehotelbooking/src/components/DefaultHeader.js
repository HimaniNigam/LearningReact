import React from 'react'

export default function DefaultHeader({childern, defaultheader}) {
    return(
        <>
       
     <header className={defaultheader}>{childern}</header>
     </>
    )
}

DefaultHeader.defaulProps ={
    defaultheader:"defaultheader"
};

