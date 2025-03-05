'use client';
import { SupportedArtworks } from '@/consts/artworks.consts';
import { Artwork } from '@/models/artworks.models';
import { createContext } from 'react';

export const ArtworksContext = createContext<{ artworks: Artwork[] }>({ artworks: SupportedArtworks });
