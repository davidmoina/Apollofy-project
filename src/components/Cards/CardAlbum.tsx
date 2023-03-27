import { useState } from 'react';
import { Album } from '../../interfaces/songs';
import { MdPlayCircleFilled } from 'react-icons/md';
import styles from './card.module.scss';

interface AlbumProps {
   key: number,
   albums: Album
}

export const CardAlbum = ({ albums: { name, imageUrl, artist } }:AlbumProps) => {
   const [showPlay, setShowPlay] = useState(false)

   return (
      <div 
         className= {`flex flex-col w-28 md:w-32 lg:w-48 transition-all duration-200 ${styles.card} cursor-pointer hover:bg`}
         onMouseEnter={()=> setShowPlay(true)}
         onMouseLeave={()=> setShowPlay(false)}
      >
         <div className={`${styles.divPlay} relative`}>
            <img
               src={imageUrl}
               alt={name}
               className={`shadow-lg rounded-lg ${styles.songCover}`}
            />
            <MdPlayCircleFilled className={`absolute text-5xl rounded-lg z-50 bottom-3 right-0 text-[#ffff66] ${!showPlay ? 'opacity-0' : 'opacity-100 bottom-3 right-3'} transition-all duration-200`}/>
         </div>
         <h3 className={styles.songTitle}>{name}</h3>
         <h5 className={styles.songArtist}>{artist}</h5>
      </div>
   )
}