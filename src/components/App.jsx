import React, { useEffect, useState, useRef } from 'react'
import { getImages } from 'services/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export const App=()=> {

  const [images, setImages] = useState(null);
  const [modalImgURL, setModalImgURL] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState('idle');
  const [searchParam, setSearchParam] = useState('');
  const [page, setPage] = useState(1);
  const isFirstRender = useRef(true);

  async function fetchImagesWithParams(searchParam) {
    try{
      setStatus('pending');
      setImages(null);
      const img = await getImages(searchParam, page)
      setStatus('success');
      setImages(img);
    }
    catch{
      setStatus('error')
    }
  }

  async function fetchImagesWithPagination(page) {
    try{
      setStatus('pending');
      const img = await getImages(searchParam, page)
      setImages(prevState => prevState.concat(img));
      setStatus('success')
    }
    catch{
      setStatus('error')
    }
  }

  const handleSearchSubmit = (evt) =>{
    evt.preventDefault();
    const param = evt.target.elements.input.value;
    setSearchParam(param)
 }

  const handleLoadMore = () =>{
    setPage(prevState=>prevState+1)
  }
  
   const openModalWindow = (key) =>{
    const elem = images.find(elem=>elem.id===key);
    setModalImgURL(elem.largeImageURL);
    setIsModalOpen(true)
  }

   const closeModalWindow = () =>{
    setIsModalOpen(false)
  }

  useEffect(()=>{
    if(searchParam){
      fetchImagesWithParams()
    }
  }, [searchParam]);

  useEffect(() => {
    if(!isFirstRender.current) {
      fetchImagesWithPagination()
    }
    return () => isFirstRender.current = false
  }, [page]);
  

    const totalHits = JSON.parse(localStorage.getItem('resp'))?.totalHits;
    const shownHits = Array.isArray(images) ? images.length : undefined;
    const showButton = totalHits!==0 && status==='success';

    return (
      <div>
        <Searchbar
        handleSearchSubmit={handleSearchSubmit}/>

        <ImageGallery
        images={images}
        searchParam={searchParam}
        openModalWindow={openModalWindow}
        />

        {status==='pending' && <Loader/>}

        {(showButton && shownHits!==totalHits) && <Button handleLoadMore={handleLoadMore}/>
        }

        {totalHits===0 && <p className='errorTitle'>Nothing was found...</p>}
        {status==='error'&& <p className='errorTitle'>Oops, some error occurred.. </p>}
       
        {isModalOpen && 
        <Modal
        imgURL={modalImgURL}
        closeModalWindow={closeModalWindow}
        />}
      </div>
    )
}

