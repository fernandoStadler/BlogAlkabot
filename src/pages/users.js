import { useState, useEffect } from 'react';
import Link from 'next/link';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { UserContainer, CardUser, CardHeader, CardResume, CardLabel, CardButton, Pagnination } from '../styles/styledUser';
import api from '../server/api';
import Image from 'next/image';


const Users = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(4);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(users.length / usersPerPage);
    const pageNumbers = [];

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await api.get('/users');
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getUsers();
    }, []);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handleClick = (event, pageNumber) => {
        event.preventDefault();
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Menu />
            <UserContainer>
                {currentUsers.map(user => (
                    <CardUser key={user.id}>
                        <CardHeader>
                            <picture>
                                <Image src="/MaleAvatar.svg" alt='user icon' width={100} height={100} />
                            </picture>
                        </CardHeader>
                        <CardResume>
                            <CardLabel>
                                Nome
                            </CardLabel>
                            <span>{user.name}</span>
                            <CardLabel>
                                Username
                            </CardLabel>
                            <span>{user.username}</span>
                            <CardLabel>
                                Slogan
                            </CardLabel>
                            <span>{user.company.catchPhrase}</span>
                        </CardResume>
                        <CardButton>
                            <Link href={`/detalhe_usuario/${user.id}`}>
                                Detalhes
                            </Link>
                        </CardButton>
                    </CardUser>
                ))}
            </UserContainer>
            <Pagnination>
                {pageNumbers.map(number => (
                    <a
                        href="#"
                        key={number}
                        onClick={event => handleClick(event, number)}
                    >
                        {number}
                    </a>
                ))}
            </Pagnination>
            <Footer />
        </>
    );
};

export default Users;
