import axios from "axios";
import { useEffect, useRef, useState, useCallback } from "react";

interface DogData {
  height: number;
  id: string;
  url: string;
  width: number;
}

const App = () => {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [dogDataArray, setDogDataArray] = useState<DogData[]>([]);

  const observerTarget = useRef<HTMLDivElement>(null);
  const getDogImg = useCallback(
    async (currentPage: number): Promise<DogData[] | void> => {
      setIsLoading(true);
      const API_URL = `https://api.thedogapi.com/v1/images/search?size=small&format=json&has_breeds=true&order=ASC&page=${currentPage}&limit=10`;
      try {
        const res = await axios.get<DogData[]>(API_URL);
        setDogDataArray(prev => [...prev, ...res.data]);
        // console.log(res.data);
      } catch (error) {
        console.log("error", error);
      }
      setIsLoading(false);
    },
    [],
  );

  /**
   * IntersectionObserver 설정
   * handleObserver: 교차점이 발생했을 때 실행되는 함수
   * entries: 교차점 정보 담는 배열
   * target: 관찰 대상 요소
   * root: 관찰 대상 요소의 조상 요소
   * rootMargin: 관찰 대상 요소의 마진
   * threshold: 교차점이 발생했을 때 실행되는 함수의 실행 시점
   */
  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    if (target.isIntersecting && !isLoading) {
      console.log("페이지 증가");
      setPage(prevPage => prevPage + 1);
    }
  };

  /**
   * ### threshold
   * - 0 : 교차점이 한번만 발생해도 실행
   * - 1: 모든 영역이 교차해야 콜백 함수 실행
   */
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });
    // 관찰 시작
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    // cleanup
    return () => observer.disconnect();
  }, [isLoading]);

  useEffect(() => {
    getDogImg(page);
    console.log("page", page);
  }, [page, getDogImg]);

  return (
    <div>
      안녕하세요
      <ul className="flex flex-wrap gap-4">
        {dogDataArray.map((dog, index) => (
          <li key={index} className="w-1/4 aspect-square object-cover">
            <img
              src={dog.url}
              alt="dog"
              className="w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>
      <div id="observer" ref={observerTarget} className="py-4">
        페이징 처리 관찰 대상
      </div>
    </div>
  );
};

export default App;
