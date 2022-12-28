import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FirstRequest1 from './FirstRequest.css'
// limit, if 429 wait for 15 min and try again

const url = 'https://course-api.com/react-store-products';

const FirstRequest = ({ setData }) => {
  let [dataArr,setDataArr] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      dataArr = response.data;
     // console.log("here is the data array");
     setDataArr(dataArr);
     setData(dataArr);
       console.log(dataArr);
       console.log(dataArr[0].name);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
   
  }, []);
  
  return <div className='grid'>
  
      {/* {dataArr.map( data => <li>{data.name}{data.id}</li>)} */}

      {dataArr.map( data =>   {
          return (
            // 
            <div>
               {/* {dataArr.map( data =><img src={data.image} alt="imageimage" width="400px" height="400px"/> )} */}
             
              <Link to={`/${data.id}`} >
                 <img src={data.image} alt="imageimage" width="400px" height="400px"/></Link>
            </div>
          );
        })}
                
    
     
  </div>;
};
export default FirstRequest;
