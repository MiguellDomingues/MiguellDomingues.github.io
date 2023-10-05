import React from 'react'

import { project_tiles_datas } from '../content.js'

const is_mobile = (window.innerWidth || document.documentElement.clientWidth) <= 650;

const Work = () => {

  const getHeaderCSS = (is_mobile) =>{
    const css = ['pb-8','width-full' ,'flex']
    if(is_mobile){
      css.push('justify-center')
    }

    return css.join(' ')
  }

  return (
    <div name='work' className='w-full md:h-auto text-black bg-white py-8'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className={getHeaderCSS(is_mobile)}>
          <p className='text-4xl font-bold inline border-b-4 text-black border-pink-600'>
            Projects
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-12 '>
          {project_tiles_datas.map((project_tile, idx)=><ProjectTile key={idx} project_tile_data ={project_tile}/>)}     
        </div>
      </div>
    </div>
  );
};

const ProjectTile = ({project_tile_data:{bg_image, title, description, technology_icons_links,source_link,hosted_link}}) =>{

  const wrapCmpWithAnchorTag = (cmp, url, idx) => <a key={idx} className="pointer_link" href={url} target="_blank" rel="noopener noreferrer"><cmp.type {...cmp.props}/></a>
  //const wrapCmpWithAnchorTag = (cmp, url, idx) => <cmp.type key={idx} {...cmp.props}/>

  return (
    <div
      style={{ backgroundImage: `url(${bg_image})`}}
      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
    >
      {/* Hover Effects */}
      <div className='opacity-0 group-hover:opacity-100 h-full flex flex-col p-1 items-center justify-evenly'>
        <p className='text-2xl font-bold text-white text-center'>
          {title}
        </p>

        <div className=' text-black px-8 text-center'>   
          {description}      
        </div>
      
        <div className='flex gap-3 flex-wrap items-center justify-center'>     
          {technology_icons_links.map((icon_link, idx)=>wrapCmpWithAnchorTag(icon_link.icon_cmp, icon_link.link, idx))}
        </div>
        <div className='text-center'>
          {hosted_link ?
            <a href={hosted_link} target='_blank' rel="noreferrer">
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white'>
                Link
              </button>
            </a>
            :
              <></>}
        {source_link ?
          <a href={source_link} target='_blank' rel="noreferrer">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-black hover:text-white'>
              Code
            </button>
          </a>
          :
            <></>}
        </div>
      </div>
  </div>)
}

export default Work;

