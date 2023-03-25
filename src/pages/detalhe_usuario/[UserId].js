import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import api from '../../server/api';
import Image from 'next/image';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import { UserContainer, UserHeader, UserAvatar, ContactContainer, Pill, AddressContainer } from '../../styles/styledUserDetails';

const UserDetails = () => {
  const router = useRouter();
  const { UserId } = router.query;
  const [user, setUser] = useState([]);
  const [address, setAddress] = useState({});
  const [company, setCompany] = useState({});


  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get(`/users/${UserId}`);
      setUser(response.data);
    };

    if (UserId) {
      getUsers();
    }
  }, [UserId]);

  useEffect(() => {
    const getAddress = async () => {
      const response = await api.get(`/users/${UserId}`);
      setAddress(response.data.address);
    };
    if (UserId) {
      getAddress();
    }

  }, [UserId]);

  useEffect(() => {
    const getCompany = async () => {
      const response = await api.get(`/users/${UserId}`);
      setCompany(response.data.company);
    };

    if (UserId) {
      getCompany();
    }

  }, [UserId]);
  return (

    <>
      <Menu />
      <UserContainer>
        <UserHeader>
          <UserAvatar>
            <Image src="/UserAvatar.svg" alt='user icon' width={100} height={100} />
            <Link href={`/users`}>Voltar</Link>
          </UserAvatar>
          <span><strong>Id: </strong> {user.id}</span>
          <span><strong>Username: </strong>{user.username}</span>
          <span><strong>nome: </strong> {user.name}</span>
        </UserHeader>
        <ContactContainer>
          <Pill>Contato</Pill>
          <div>
          <span><strong>Telefone: </strong>{user.phone}</span>
            <span><strong>Site: </strong>{user.website}</span>
            <span><strong>E-mail: </strong>{user.email}</span>
          </div>
          <Pill>Comercial</Pill>
          <div>
            <span><strong>Empresa: </strong>{company.name}</span>
            <span><strong>Slogan: </strong>{company.catchPhrase}</span>
          </div>
          <div>
            <span><strong>Ramo: </strong>{company.bs}</span>
          </div>
        </ContactContainer>
        <AddressContainer>
          <Pill>Endereço</Pill>
          <div>
          <span><strong>Logradouro: </strong>{address.street}</span>
            <span><strong>Casa: </strong>{address.suite}</span>
          </div>
          <div>
            <span><strong>Cidade: </strong>{address.city}</span>
            <span><strong>CEP: </strong>{address.zipcode}</span>
          </div>
        </AddressContainer>
      
      </UserContainer>
      <Footer />
    </>
  );
};

export default UserDetails;
