import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDinosaurByAddress, getUrlById } from '../utils/branding';

const FuhuaComponent = () => {
  const [dinosaurData, setDinosaurData] = useState({});
  const [imageUrl, setImageUrl] = useState("");

  const { fuhuaId } = useParams();

  useEffect(() => {
    // 通过 getDinosaurByAddress 获取数据
    const fetchData = async () => {
      try {
        const data = await getDinosaurByAddress(); // 假设这是获取数据的异步函数
        setDinosaurData(data);
      } catch (error) {
        console.error('Error fetching dinosaur data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // 通过 geturlById 获取图片url
    const fetchImageUrl = async () => {
      try {
        const url = await getUrlById(fuhuaId); // 假设这是获取图片url的异步函数
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image url:', error);
      }
    };

    fetchImageUrl();
  }, [fuhuaId]);

  return (
    <div className="Fuhua">
      <h1>Fuhua Room</h1>
      <div>
        <img src={imageUrl} alt="img" />
      </div>
      <div>
        {/* 根据dinosaurData渲染其他数据 */}
        <p>data</p>
      </div>
    </div>
  );
};

export default FuhuaComponent;