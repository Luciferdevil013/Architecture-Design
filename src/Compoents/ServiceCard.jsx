import React ,{ useState, useRef, useEffect } from 'react';
import { GoChevronUp } from "react-icons/go";



function ServiceCard({index,expendable,setexpendable,heading,semiDetails,details}) {
    const [fullheight,setfullheight] = useState(0)
    const [height,setheight] = useState(0)
    const divheight = useRef(null);
    useEffect(() => {
        if(expendable === index && divheight.current){
            const totalHeight = divheight.current.scrollHeight;
            setfullheight(totalHeight);
        }
    },[expendable,index])

    useEffect(() => {
        if(divheight.current){
            const h3 = divheight.current.querySelector('.h3-heading');
            setheight(h3.scrollHeight + 20);
        }
    },[])


    const ChangeShow = () => {
        setexpendable(index === expendable ? null : index);
    }

    return (
        <>
            <div onClick={ChangeShow} 
            ref={divheight} className='serviceCard' style={{
                height: expendable === index ? `${fullheight}px` : `${height}px`,
                }}>
                <h3 className='h3-heading'>{heading} <GoChevronUp /></h3>
                <h5 className='h5-heading'>{semiDetails}</h5>
                <p className='paragraph'>{details}</p>
            </div>
        </>

    )
}

export default ServiceCard