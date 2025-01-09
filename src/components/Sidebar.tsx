import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface SidebarItemProps {
  children: React.ReactNode
  isActive?: boolean
}

interface SidebarProps {
  onDesignToggle: () => void
}

function SidebarItem({ children, isActive }: SidebarItemProps) {
  return (
    <div className={`px-4 py-2 ${isActive ? 'bg-[#003a66] text-white relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#8cb2d4]' : 'text-white/80 hover:text-white'}`}>
      {children}
    </div>
  )
}

export function Sidebar({ onDesignToggle }: SidebarProps) {
  return (
    <div className="w-64 bg-[#001d33] flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-white/10 bg-[#005799]">
        <div className="flex items-center pl-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1920 410" className="header__brand-logo header-logo-atpco" style={{ height: '32px', width: 'unset' }}>
            <g>
              <g id="Layer_1">
                <g id="white_logo">
                  <path id="white_logomark" fill="currentColor" d="M207.05,18.25H26.91c-11.12,0-20.13,9.01-20.13,20.13v209.39c0,11.12,9.01,20.13,20.13,20.13h180.14c11.12,0,20.13-9.01,20.13-20.13V38.38c0-11.12-9.01-20.13-20.13-20.13ZM152.95,165.64c2.04,2.04,2.04,5.34,0,7.38l-65.02,65.02c-3.29,3.29-8.91.96-8.91-3.69v-24.99l36.35-36.35c2.04-2.04,2.04-5.34,0-7.38l-3.53-3.53-23.43,23.43c-3.29,3.29-8.91.96-8.91-3.69v-24.99l13.55-13.55-14.02-14.02v-24.99c0-4.65,5.62-6.98,8.91-3.69l23.91,23.91,4-4c2.04-2.04,2.04-5.34,0-7.38l-36.35-36.35v-24.99c0-4.65,5.62-6.98,8.91-3.69l65.02,65.02c2.04,2.04,2.04,5.34,0,7.38l-22.8,22.8,22.32,22.32v.02Z"></path>
                  <g>
                    <path fill="currentColor" d="M360.44,147.23v-18.54h21.81c40.71,0,66.15-14.54,66.15-48.34,0-26.89-19.99-41.8-54.15-41.8-26.9,0-56.33,8.36-57.06,53.06h-22.9c.73-58.15,49.43-72.33,79.96-72.33,45.07,0,76.32,22.53,76.32,59.97,0,30.89-16.72,50.88-48.34,57.06,29.08,2.91,55.61,22.9,55.61,61.79,0,41.07-32.71,70.51-83.23,70.51-37.44,0-82.14-14.9-82.87-72.69h23.26c0,41.07,26.9,53.06,59.61,53.06,37.44,0,59.97-17.45,59.97-51.25,0-37.8-29.8-50.52-71.96-50.52h-22.17v.02Z"></path>
                    <path fill="currentColor" d="M605.76,264.26L510.54,22.93h25.8l82.14,214.8,80.69-214.8h24.71l-94.5,241.33h-23.62Z"></path>
                    <path fill="currentColor" d="M767.13,264.26V22.93h23.26v241.33h-23.26Z"></path>
                    <path fill="currentColor" d="M1046.98,195.93c-10.9,46.52-44.34,72.69-94.5,72.69-67.24,0-107.58-46.88-107.58-124.66s42.89-124.66,107.94-124.66c50.16,0,82.87,25.44,93.77,68.69h-24.35c-8.36-30.89-32.35-48.34-69.42-48.34-54.52,0-83.59,38.89-83.59,104.31s29.08,103.95,83.23,103.95c39.25,0,63.6-17.81,70.87-51.97h23.63Z"></path>
                    <path fill="currentColor" d="M1147.65,264.26V42.55h-82.14v-19.62h187.54v19.62h-82.14v221.71h-23.26Z"></path>
                    <path fill="currentColor" d="M1263.23,143.96c0-77.05,42.52-124.66,110.49-124.66s110.85,47.61,110.85,124.66-42.52,124.66-110.85,124.66-110.49-47.25-110.49-124.66h0ZM1460.21,143.96c0-65.06-29.44-104.31-86.5-104.31s-86.14,39.25-86.14,104.31,29.44,103.95,86.14,103.95,86.5-38.89,86.5-103.95Z"></path>
                    <path fill="currentColor" d="M1677.92,264.26l-53.06-103.58h-62.51v103.58h-23.26V22.93h78.51c51.25,0,82.87,22.9,82.87,66.87,0,33.44-20.72,58.51-52.7,66.87l55.24,107.58h-25.09ZM1619.76,141.05c33.8,0,56.33-17.45,56.33-51.25,0-30.89-19.63-46.52-57.79-46.52h-55.97v97.77h57.43Z"></path>
                    <path fill="currentColor" d="M1887.99,86.89c-2.54-41.8-37.07-48.34-63.24-48.34-29.08,0-57.79,11.63-57.79,42.52,0,72.33,145.74,27.99,145.74,120.3,0,39.62-31.62,67.24-88.68,67.24-23.99,0-85.77-7.27-89.04-72.69h23.62c1.45,40.34,33.44,52.7,66.15,52.7,36.34,0,64.33-11.99,64.33-45.79,0-73.42-145.74-27.99-145.74-120.66,0-43.98,42.52-62.88,82.5-62.88,27.62,0,82.14,8,85.05,67.6h-22.9,0Z"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Alaska Airlines Section */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
        <div className="flex gap-3 items-center pl-2">
          <img 
            src="https://th.bing.com/th?id=ODLS.b1ae750d-8b7f-4e79-856f-44a34e968d8c&w=32&h=32&qlt=91&pcl=fffffa&r=0&o=6&pid=1.2" 
            alt="Alaska Airlines" 
            className="object-contain w-6 h-6"
          />
          <div className="flex flex-col">
            <span className="text-xs text-white/60"></span>
            <span className="text-sm text-white">Alaska Airlines</span>
          </div>
        </div>
        <button className="text-white/60 hover:text-white">
          ⇄
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <SidebarItem>
          <Link to="/customers" className="pl-2">Alaska Airlines</Link>
        </SidebarItem>
        
        <SidebarItem>
          <Link to="/collections" className="pl-2">Collections</Link>
        </SidebarItem>

        <SidebarItem isActive={true}>
          <Link to="/analytics" className="pl-2">Analytics</Link>
        </SidebarItem>

        <div className="mt-2">
          <div className="flex gap-2 items-center px-4 py-2 pl-2 cursor-pointer text-white/80 hover:text-white">
            <ChevronRight className="w-4 h-4" />
            <span>Manage</span>
          </div>
        </div>
      </nav>

      {/* User Profile */}
      <div className="flex gap-3 items-center p-4 border-t border-white/10">
        <div 
          onClick={onDesignToggle}
          className="w-8 h-8 rounded-full bg-[#003a66] flex items-center justify-center text-white font-medium cursor-pointer hover:bg-[#004a80] transition-colors"
        >
          JK
        </div>
        <div className="text-white">
          <div className="text-sm font-medium">Jim Kramer</div>
          <div className="text-xs text-white/60">Pricing Analyst</div>
        </div>
      </div>
    </div>
  )
} 