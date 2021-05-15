import Image from 'next/image';

interface Props {
    title: string,
    description: string,
    img?: string[],
    link: string
}

export const SweetAlert: React.FC<Props> = ({title, description, img, link}) => {
    return (  
        <div style={{height:'500px'}}>
            <h1>{title}</h1>
            <p>
            {description}
            </p>

            <a href={link} target="_blank">Source code</a>
        </div>
    )
}