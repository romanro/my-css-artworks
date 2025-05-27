import { Artwork } from '@/models/artworks.models';
import React, { FC } from 'react';
import styles from './GalleryItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { cnames } from '@/utils/cnames';
import { Icon } from '@/components/Icon/Icon';

type GalleryItemProps = {
    artwork: Artwork;
};

export const GalleryItem: FC<GalleryItemProps> = ({ artwork }) => {
    return (
        <li className={styles.ListItem}>
            <Link href={`artworks/${artwork.id}`}>
                <Image
                    src={artwork.thumbnail ? `/previews/${artwork.thumbnail}` : ''}
                    alt={artwork.description ?? 'Artwork preview'}
                    fill
                    loading='lazy'
                    style={{ objectFit: 'fill', objectPosition: 'center' }}
                />
                <div className={cnames([styles.Description, 'bg-white/90 dark:bg-black/90'])}>
                    <h3>{artwork.name}</h3>
                    <p>{artwork.description}</p>
                    <Icon name='image_search' className='text-4xl absolute right-2 bottom-2 text-orange-500' />
                </div>
            </Link>
        </li>
    );
};
