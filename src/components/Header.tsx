/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Link as Scroll } from 'react-scroll'



// eslint-disable-next-line @typescript-eslint/naming-convention
interface menuList {
    link: string;
    name: string;
}

// eslint-disable-next-line import/no-default-export
export default function PageHeader(this: any): JSX.Element {

    const menuLists:  menuList  [] = [
    
    {link:'Home', name:'Home'},
    {link:'サービス', name:'Service'},
    {link:'Price', name:'Price'},
    {link:'Company', name:'Company'},
    ];

 

return (
          <header className=' bg-primary-800 max-w'>
              <div className='flex  items-center justify-between'>
                  <div className='hover:opacity-75 px-10'>
                      <Link href="/">
                          <a>
                          <Image src='/img/fwywd.png' alt='logo' width={200} height={100} /> 
                          </a>
                      </Link>
                  </div>
                  <div className='md:flex  hidden'>
                  <ul className='grid grid-cols-4 gap-4 text-white pl-5 text-lg '>
                      {menuLists.map((value, index) => (
                          <li className='text-primary-dark hover:opacity-50 hover' key={index}> 
                          <Scroll to={value.link} smooth={true} offset={-50}>
                              {value.name}
                          </Scroll>
                        
                          </li>
                      ))}
                      </ul>
                  </div>
                  <div id='button' className='text-white text-center bg-yellow border-2 w-60 h-16  pt-5 mr-5  hover:opacity-50 hover'> <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfxNsbBrL_K6DrCY0ND3zdI23JiQXBy63VYHoM4Iklof8jvA/viewform?usp=sf_link">ログイン</a>
                  
                  </div>
                  
              </div>
          </header>
      )
                      }