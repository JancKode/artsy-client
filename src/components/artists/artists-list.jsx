import React from 'react'
import { useQuery } from '@apollo/client';
import { Box, Text } from 'rebass';

import { POPULAR_ARTISTS } from '../../api/artists/artists'

import { styles } from './styles/artists-list-rebass'
import './styles/artists-list.styles.scss'



const ArtistsList = () => {

  const { loading, error, data } = useQuery(POPULAR_ARTISTS);

  const handleRedirect = (artistId) => {
    window.location.href = (`https://artsy.net${artistId}`)
  }

  if (loading) return <Text color='black' >Loading...</Text>;
  if (error) return <Text color='black' >Error :(</Text>;

  const renderArtists = (artistData) => {

    return artistData.map((artist) => {
      if (artist.name.length < 2) return null;
      return (
        <Box
          width={1 / 2}
          sx={styles.box}
        >
          <div
            className={`artist-item`}
            onClick={() => handleRedirect(artist.href)}
          >
            <div
              className='background-image'
              style={{ backgroundImage: `url(${artist.imageUrl})` }}
            />

            <div className='content'>
              <Text fontSize={[2, 4, 5]} color='black' fontWeight='bold'>
                {artist.name}
              </Text>
              <Text fontSize={[2, 3, 4]} color='black'>
                {artist.bio}
              </Text>
              <Text fontSize={[1, 2]} color='black'>
                {artist.formattedArtworksCount}
              </Text>
            </div>
          </div>
        </Box>
      )
    })
  }

  return (

    <div>
      {data.artists && renderArtists(data.artists)}
    </div>
  )
}

export default ArtistsList
