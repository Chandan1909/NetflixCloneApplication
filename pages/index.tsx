import React from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/BillBoard';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModel';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorite';
import useInfoModalStore from '@/hooks/useInfoModel';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const Home = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const {isOpen, closeModal} = useInfoModalStore();

  return (
    <>
      <meta name="google-site-verification" content="HH-ljedLpcOBtV0ACmwUX0hCNbE6azj0eZubRYw_YuI" />
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  )
}

export default Home;
