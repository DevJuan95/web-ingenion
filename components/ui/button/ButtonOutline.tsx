
import Link from 'next/link'

interface Props {
    link: string;
    text: string;
    color?: string;
}

const ButtonOutline = ({link,text,color='text-white'}: Props) => {
    return (
        <>
             <Link className={`btn-outline ${color}`} href={link}>{text} &rarr;</Link>
        </>
    );
}

export default ButtonOutline;
