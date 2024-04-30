/* eslint-disable @next/next/no-img-element */
import localFont from 'next/font/local';
const regularFont = localFont({
    src: '../fonts/SaansTRIAL-Regular.ttf',
    style: 'normal',
})

const semiBoldFont = localFont({
    src: '../fonts/SaansTRIAL-SemiBold.ttf',
    style: 'normal',
})

// Define props interface
interface CardProps {
    imgUrl: string;
    title: string;
    description: string;
    tags: string[];
}

const Card: React.FC<CardProps> = ({ imgUrl, title, description, tags }) => {
    return (
        <div className="flex flex-col bg-white rounded-[16px] sm:rounded-3xl md:rounded-[36px] overflow-hidden h-[470px]">
            <img
                className="object-cover w-full h-40 rounded-t-[16px] sm:rounded-t-3xl md:rounded-t-[36px]"
                src={imgUrl}
                alt="avatar"
            />

            <div className="flex flex-col justify-between p-4 flex-1">
                <div>
                    <h1 className="text-xl font-medium mb-2">{title}</h1>
                    <p className={`${regularFont.className} text-base leading-[1.35em] text-black tracking-wide mb-4 truncate-3-lines`}>
                        {description}
                    </p>
                </div>
                <div className="flex flex-wrap">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`${semiBoldFont.className} bg-[#DDFC9D] text-black rounded-lg font-medium px-2 py-1 m-[3px] text-base`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
