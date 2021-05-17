import { gql } from '@apollo/client';

export const POPULAR_ARTISTS = gql`
  query popular_artists {
    artists {
      name,
      id,
      bio,
      formattedArtworksCount,
      counts { 
        artworks,
        forSaleArtworks,
        articles,
        auctionArtworks
      },
      gender,
      imageUrl,
      href,
      alternateNames
    }
  }
`