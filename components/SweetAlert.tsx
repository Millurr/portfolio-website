import { useEffect, useState } from 'react';
import Image from 'next/image';
import swal from '@sweetalert/with-react';

interface Props {
    title: string,
    description: string,
    imgs?: {
        img: string
    }[],
    link: string
}

export const SweetAlert: React.FC<Props> = ({title, description, link}) => {
    
    return (  
        <div>
            <h1>{title}</h1>
            <p>
                {description}
            </p>

            <a href={link} target="_blank">Source code</a>
        </div>
    )
}