import React from 'react';
import './index.css';
import EquipItem from '../EquipItem';
import { useDispatch , useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getEquipList } from '../../store/equip/equipSlice';
import {PropagateLoader} from 'react-spinners';

const EquipList = ({display}) => {

  const dispatch = useDispatch();
  const data = useSelector((state) =>state.equip.value);
  const loading = useSelector((state) =>state.equip.loading);
//   console.log(data)
  useEffect(() => {
      dispatch(getEquipList())
  },[])
  
  if(loading){
      return (
        <PropagateLoader
          size={20}
          color="var(--color-main)"
          cssOverride={{
            position: `absolute`,
            top:`50%`,
            left:`50%`,
            marginTop:`-75px`,
            marginLeft:`-75px`,
          }}
          loading
          speedMultiplier={1}
        />
      )
    }
    return (
      <ul className='equip-list'>
          {
             data && data.map((item)=>(
                <EquipItem 
                    item={item} 
                    key={item.id} 
                />
             ))
          } 
        </ul>
    );
};

export default EquipList;
