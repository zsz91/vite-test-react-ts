import { useEffect, useState } from 'react';
// 自定义hooks函数 必须以 use 开头
export default function useWindowSize(){
  const [width, setWidth] = useState('0px');
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    setWidth(document.documentElement.clientWidth + 'px');
    setHeight(document.documentElement.clientHeight + 'px');
  }, []);
  useEffect(() => {
      function handleResize(){
          setWidth(document.documentElement.clientWidth + 'px');
          setHeight(document.documentElement.clientHeight + 'px');
      }
      window.addEventListener('resize', handleResize, false);
      return () => {
          window.removeEventListener('resize', handleResize, false);
      }
  }, []);
  return [width, height];
}