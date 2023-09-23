import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from '@assets/img/IvyLeaguer.png';
import { Link } from 'react-router-dom';
import { useUserState } from '@/features/user';
import { useMutation } from '@tanstack/react-query';
import { getUser } from '@/api/user';

const Header = () => {
  const { user, setUser } = useUserState();

  const mutation = useMutation({
    mutationFn: () => getUser(),
    onSuccess: (data) => {
      setUser({ username: data.username });
    },
    onError: () => {
      sessionStorage.removeItem('token');
    },
  });

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setUser(undefined);
  };

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      mutation.mutate();
    }
  }, []);

  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      {user ? (
        <div className="user-control">
          <div className="user-info">{`${user.username}`}</div>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div className="user-btn">
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 80px);
  height: 64px;
  padding: 0 40px;
  position: fixed;
  box-shadow: 0 1px 4px 0 rgba(17, 42, 128, 0.08);
  background-color: rgba(255, 255, 255, 0.95);
  /* border: 1px solid black; */
  & .user-control {
    display: flex;
    gap: 10px;
    & > button {
      border: none;
      background-color: transparent;
    }
  }
  & img {
    /* height: 100%; */
    width: 170px;
  }
  /* & .logo {
    font-size: 24px;
    font-weight: 900;
    color: #00553d;
    & span {
      color: #549985;
    }
  } */
  & .user-btn {
    display: flex;
    gap: 20px;
    & > a {
      color: #7f8389;
      font-weight: 700;
    }
  }
  & .user-info {
    font-weight: 900;
    color: #616367;
  }
`;

export default Header;
