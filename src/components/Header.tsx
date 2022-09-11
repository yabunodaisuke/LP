import Image from 'next/image'
import Link from 'next/link'

import React, { useState } from 'react';
import {Link as Scroll } from 'react-scroll'


// eslint-disable-next-line import/no-default-export
export default function Header () {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const [openMenu, setOpenmenu] = useState(false);
    

    const menuFunction = () => {
        setOpenmenu(!openMenu);
    }

    const menuLists  = [
    
            {link:'top', name:'Top'},
            {link:'service', name:'Service'},
            {link:'price', name:'price'},
            {link:'company', name:'Company'},
            ];
    return (
<nav className='grid grid-cols-2'>
      <div>
        <Link href='/'>
          <a className='md:px-10 '>
            <Image src='/img/fwywd.png' alt='logo' width={200} height={100} />
          </a>
        </Link>
      </div>
      {openMenu ? (
        <div className='flex  z-10  min-h-fit min-w-full'>
          <div className='basis-1/2'></div>

          <div className='basis-1/2 bg-white text-[#d0277c]'>
          <ul className='text-center '>
                      <li>
                        <button onClick={menuFunction} className=''>close</button>
                      </li>
                      {menuLists.map((value, index) => (
                          <li className='text-primary-dark hover:opacity-50 hover' key={index}> 
                          <Scroll to={value.link} smooth={true} offset={-50} onClick={menuFunction}>
                             {value.name}
                         </Scroll>
                        
                         </li>
                  ))}
                   </ul>
          </div>
        </div>
      ) : undefined}
      <div className='flex-initial text-[#83d4d4]  m-5 '>
        <ul className='md:flex  hidden flex-initial text-left'>
          {menuLists.map((value, index) => (
            <li key={index} className='p-4 text-lg'>
              <a href={value.link}>{value.name} </a>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={menuFunction} className='flex-initial absolute top-5 right-5 md:hidden'>
        <Image src='/img/menu.png' alt='menu' width={50} height={50} />
      </button>
    </nav>
    )

}
// // eslint-disable-next-line @typescript-eslint/naming-convention
// interface menuList {
//     link: string;
//     name: string;
// }

// // eslint-disable-next-line import/no-default-export
// export default function PageHeader(this: any): JSX.Element {

//     const menuLists:  menuList  [] = [
    
//     {link:'top', name:'Top'},
//     {link:'悩み', name:'悩み'},
//     {link:'解決策', name:'解決策'},
//     {link:'料金', name:'料金'},
//     ];

   


// return (
//           <header className=' bg-primary-800 max-w'>
//               <div className='flex  items-center justify-between'>
//                   <div className='hover:opacity-75 px-10'>
//                       <Link href="/">
//                           <a>
//                           <Image src='/img/fwywd.png' alt='logo' width={200} height={100} /> 
//                           </a>
//                       </Link>
//                   </div>
//                   <div>
//                   <ul className='md:grid grid-cols-4 gap-4  hidden text-white pl-5 text-base'>
//                       {menuLists.map((value, index) => (
//                           <li className='text-primary-dark hover:opacity-50 hover' key={index}> 
//                           <Scroll to={value.link} smooth={true} offset={-50}>
//                               {value.name}
//                           </Scroll>
                        
//                           </li>
//                       ))}
//                       </ul>
//                   </div>
//                   <div id='button' className=' text-white bg-gradient-to-r from-orange to-yellow w-50 h-16  text-center pt-5 mr-5  hover:opacity-50 hover md:visible invisible'> <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfxNsbBrL_K6DrCY0ND3zdI23JiQXBy63VYHoM4Iklof8jvA/viewform?usp=sf_link">資料ダウンロード</a>
                  
//                   </div>
                  
//                   <button className='md:invisible visible'>
//                   <Image src='/img/menu.png' alt='logo' width={50} height={50} /> 
//                   </button>
//               </div>
//           </header>
//       )
//                       }