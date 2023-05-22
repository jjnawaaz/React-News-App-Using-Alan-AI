import React, { useEffect, useState } from 'react';
import { getNews } from './Service/getNews';
import moment from 'moment';
import alanBtn from '@alan-ai/alan-sdk-web';

export default function NewsData() {

  const [newsData, setNewsData] = useState([]);
  const [selectOption, setSelectOption] = useState('');
  const alanKey = `c7240cb31467a873c5fcc40679dd9d372e956eca572e1d8b807a3e2338fdd0dc/stage`
  const getAllNews = async () => {
    let data = await getNews(selectOption)
    setNewsData(data.data.articles);
  }

  const selectCategory = (event) => {
    setSelectOption(event.target.value)
  }
  useEffect(() => {
    alanBtn({
        key: alanKey,
        onCommand: (commandData) => {
         setSelectOption(commandData.data)
        }
    });
  }, []);

  useEffect(() => {
    getAllNews()
  }, [selectOption])

  return (
    <div className="main">
      <h1>Voice Assistant News</h1>
      <p className='heading'> Try saying get me the news from......category</p>
      <ul className='heading'>
        <li>Try following commands:</li>
        <li>'What can I do here ?,What can I do here ?</li>
        <li>What does this App do ?</li>
        <li>Who is the Owner ?, Who made this ?</li>
        <li>Who owns you ?</li>
        <li>Can you be my best friend ?</li>
      </ul>
      
        {/* <div className='select'>
        <label for="category">Choose a Category:</label>
          <select 
          className = 'select-box'  
          name="category" 
          id="category"
          onChange={selectCategory}
          value = {selectOption}
          >
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="business">Business</option>
          <option value="sports">Sports</option>
        </select>
      </div> */}
      <div className='grid-main'>
        {newsData.map((news) => (
          <div className='grid-child'>
            <img className='news-image' src={news.urlToImage} />
            <p className='news-title'>
              {news.title}
            </p>
            <p className='news-content'>
              {news.content}
            </p>
            <div className='space-btwn'>
              <p className='news-author'>
                Author : {news.author ? news.author : 'No Author '}
              </p>
              <p className='news-date'>
                Date : {moment(news.publishedAt).format('LL')}
              </p>
            </div>
            <a href={news.url} target="_blank">
              Read More..
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

