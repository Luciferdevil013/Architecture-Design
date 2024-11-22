import React ,{ useState, useRef, useEffect } from 'react';
import { GoChevronUp } from "react-icons/go";



function ServiceCard({index,expendable,setexpendable,heading,semiDetails,details}) {
    const [fullheight,setfullheight] = useState(0)
    const divheight = useRef(null);
    useEffect(() => {
        if(expendable === index && divheight.current){

            const h3 = divheight.current.querySelector('.h3-heading');
            const h5 = divheight.current.querySelector('.h5-heading');
            const para = divheight.current.querySelector('.paragraph');

            const totalHeight = h3.getBoundingClientRect().height + h5.getBoundingClientRect().height + para.getBoundingClientRect().height + 11 * 3 + 15;

            setfullheight(totalHeight);
        }
    },[expendable,index])


    const ChangeShow = () => {
        setexpendable(index === expendable ? null : index);
    }

    return (
        <>
            <div onClick={ChangeShow} 
            ref={divheight} className='serviceCard' style={{
                height: expendable === index ? `${fullheight}px` : '8vh',
                }}>
                <h3 className='h3-heading'>{heading} <GoChevronUp /></h3>
                <h5 className='h5-heading'>{semiDetails}</h5>
                <p className='paragraph'>{details}</p>
            </div>
        </>

    )
}

export default ServiceCard