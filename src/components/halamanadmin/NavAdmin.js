import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const NavAdmin = () => {
  const menuData = [
    {
        path:"/dashboard",
        name:"Dashboard"
       
    },
    {
        path:"/dashboard/tabelkegiatan",
        name:"Tabel Kegiatan"
        
    },
    {
        path:"/dashboard/nilai",
        name:"Nilai"
        
    }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: "row", height: '100%', minHeight: '750px' }}>
      <Sidebar transitionDuration={1000} backgroundColor="#434242">
        <Menu menuItemStyles={{
          button: ({ level, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? '#ffffff' : '#ffffff',
              };
          },
        }}>
          {
            menuData.map((item)=>(
              <MenuItem as={Link} to={item.path} key={item.name}>
                  <div className="list_item">{item.name}</div>
              </MenuItem>
            ))
            }    
        </Menu>
      </Sidebar>
    </div>
  )
};

export default NavAdmin;