import axios from "axios";

export const getImages = async (searchParam='', page=1) => {
    // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
    const params = new URLSearchParams({
        q: searchParam,
        page,
        key: '40689731-12a87d22ac6b1cbae7ac2a055',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12
    })
    const {data} = await axios.get(`https://pixabay.com/api/?${params}`)
    localStorage.setItem('resp', JSON.stringify(data))
    return data.hits;
}