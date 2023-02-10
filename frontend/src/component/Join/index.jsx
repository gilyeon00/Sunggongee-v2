import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div className='main-content'>
        <div className='login-container'>
            <form>
                <div className='input-box'>
                    <div className='login-field'>
                            <p htmlFor='userID'>ID</p>
                            <input type="text" id="userID" placeholder="아이디 입력"></input>
                    </div>
                    <div className='login-field'>
                        <p htmlFor='userPWD'>Password</p>
                        <input type="text" id="userPWD" placeholder="비밀번호 입력"/>
                    </div>
                    <div className='login-field'>
                        <p htmlFor='userPWD'>Check</p>
                        <input type="text" id="userPWD" placeholder="비밀번호 확인"/>
                    </div>
                    <div class="login-field">
                        <p>Birth</p>
                            <div className='userBirth'>
                                <input type="number" placeholder="년(4자)"/>                
                                <select>
                                    <option value="">월</option>
                                    <option value="">1월</option>
                                    <option value="">2월</option>
                                    <option value="">3월</option>
                                    <option value="">4월</option>
                                    <option value="">5월</option>
                                    <option value="">6월</option>
                                    <option value="">7월</option>
                                    <option value="">8월</option>
                                    <option value="">9월</option>
                                    <option value="">10월</option>
                                    <option value="">11월</option>
                                    <option value="">12월</option>
                                </select>
                                <input type="number" placeholder="일"/>
                            </div>
                    </div>
                </div> 
                <div>
                    <Link to='/login'>
                        <button type="submit" className='join-btn'>Join</button>
                    </Link>
                </div>
            </form>
            </div>
        </div>
    );
};

export default index;