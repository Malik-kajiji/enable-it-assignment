import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { FaAddressCard } from 'react-icons/fa';
export type propsType = {
    jobTitle:string,
    name:string,
    company:string,
    email:string,
    emailAddress:string,
    phone:string,
    choosen:boolean,
    setChoosen: React.Dispatch<React.SetStateAction<number | null>>,
    index:number
}

const User = ({jobTitle,name,company,email,emailAddress,phone,choosen,setChoosen,index}:propsType) => {
    function handleClick(){
        if(choosen) {
            setChoosen(null)
        }else {
            setChoosen(index)
        }
    }
    return (
        <article className={`user ${choosen? 'active' : ''}`}>
            <div className='details'>
                <h2>{name}</h2>
                {jobTitle.startsWith('A') || jobTitle.startsWith('O') || jobTitle.startsWith('U') || jobTitle.startsWith('E') || jobTitle.startsWith('I')?
                    <p>works at {company} as an {jobTitle} </p>
                    :
                    <p>works at {company} as a {jobTitle} </p>
                }
            </div>
            <p onClick={handleClick} className={`icon ${choosen? 'active' : ''}`}>
                <span>
                    {RiArrowDropDownLine({})}
                </span>
            </p>
            <div className={`contact ${choosen? 'active' : ''}`}>
                <h2>Contact info</h2>
                <p><span>{ImPhone({})}</span>{phone}</p>
                <p><span>{MdEmail({})}</span>{email}</p>
                <p><span>{FaAddressCard({})}</span>{emailAddress}</p>
            </div>
        </article>
    )
}

export default User