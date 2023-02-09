import React, { useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import EquipList from '../component/EquipList';
import { useDispatch, useSelector } from 'react-redux';
import { equipListLayout } from '../store/equip/equipSlice';

const Home = () => {
    const dispatch = useDispatch();
    const {listLayout} =useSelector((state) => state.equip);
  
    useEffect( () => {
      dispatch(equipListLayout('grid'))

    },[])

    return (
        <>
            <SideMenu/>
                <section className='main-content'>
                    { listLayout && <EquipList display={listLayout} /> }
                </section>
        </>
    );
};

export default Home;