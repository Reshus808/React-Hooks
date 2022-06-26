import React, {useState} from 'react';

const FilterSet = () => {

  const categories = [
    {id: 1,
     cateName: 'UI',
     skill1: "Figma",
     skill2: "Figma",
     skill3: "Figma",
    },
    {id: 2,
      cateName: 'Backend',
      skill1: "nodejs",
      skill2: "python",
      skill3: "ruby",
    },
    {id: 3,
      cateName: 'Frontend',
      skill1: "react",
      skill2: "css",
      skill3: "html",
    },
    {id: 4,
      cateName: 'Database',
      skill1: "mongodb",
      skill2: "mysql",
      skill3: "pgsql",
    },
  ]
  const [category, setCategory] = useState([]);
  const[search, setSearch] = useState('')


  return (
      <div className='container my-5 mx-7'>
        <form>
          <label>Search Category 😄</label>
          <input type='text' placeholder='serach category' onChange={(e) => setSearch(e.target.value)}/>
          {
            categories.filter((cate)=> cate.cateName.toLowerCase().includes(search)).map((cate, index)=>{
              return <p key={index} onClick={()=> {setSearch(cate.cateName)
              setCategory(cate.cateName)}}>{cate.cateName}</p>
            })
          }
        </form>
        <button>Submit</button>
        <div className='my-3'>
          <p>category is figma  </p>
          <p>under this category skill select is: </p>
        </div>
      </div>

  );
};

export default FilterSet;