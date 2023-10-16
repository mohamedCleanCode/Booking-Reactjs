import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const photos = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
  ];
  const { data, loading } = useFetch("/api/hotels/countByType");
  return (
    <div className="pList">
      {loading ? (
        "loading..."
      ) : (
        <>
          {data?.map((item, i) => {
            return (
              <div className="pListItem" key={i}>
                <img src={photos[i]} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{item.type}</h1>
                  <h2>
                    {item.count} {item.type}
                  </h2>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default PropertyList;
