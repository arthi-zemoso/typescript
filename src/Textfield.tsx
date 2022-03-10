import React, { useState,useRef } from 'react';

interface Props{
    text: string;
    ok?: boolean;
    i?:number;
    fn?:(bob: string)=>string;
    handleChange:()=>void
}
export const Textfield: React.FC<Props>=()=>{
    const [count,setCount]=useState<{text:string}>({text:'hello'});
    const inputREf=useRef<HTMLInputElement>(null);
    const divREf=useRef<HTMLDivElement>(null);
   return(
       <div ref={divREf}>
           <input ref={inputREf}/>
       </div>
   )
}