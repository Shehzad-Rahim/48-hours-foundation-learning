'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
const navbar = [
    
    {title : 'Home',
     href : '/home',
    },
    {title : 'Portfolio',
     href : '/portfolio',
    },
    {title : 'Blogs',
     href : '/blog',
    },
    {title : 'Contact',
     href : '/contact',
    },
    {title : 'Products',
     href : '/products',
    },
    {title : 'Cart',
     href : '/cart',
    },
    {title : 'User Api',
     href : '/user-api',
    },
    {title : 'Proudcts Api',
     href : '/api-products',
    },
]
function Header() {
    
    const pathname = usePathname()
  return (
   <header>
    <nav className="flex justify-center py-5 px-10">
     <ul className="flex gap-8 text-xl">
      {navbar.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return (
        <li key={link.title}>
         <Link className={isActive ? 'text-cyan-400 font-semibold' : "header"} href={link.href}>{link.title}</Link>
        </li>
        )
      })}
     </ul>
    </nav>
    <hr />
   </header>
  )
}

export default Header