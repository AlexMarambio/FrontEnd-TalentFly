import React from 'react';
import profilePicture from './assets/WhatsApp Image 2023-06-30 at 22.55.24.jpeg'

interface User {
  name: string;
  profilePicture: string;
  course: string;
  percentage: number;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card flex items-center p-4 border-b border-gray-300">
      <img src={user.profilePicture} alt={`${user.name}'s profile`} className="w-16 h-16 rounded-full mr-4" />
      <div className="flex-grow">
        <h3 className="text-xl font-semibold">{user.name}</h3>
        <p className="text-gray-500">{user.course}</p>
        <div className="relative mt-2">
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${user.percentage}%` }}></div>
          </div>
          <div className="absolute top-0 left-0 h-4 text-xs font-semibold flex items-center justify-center w-full">
            {user.percentage}%
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminPage: React.FC = () => {
  const users: User[] = [
    {
      name: 'Alex Marambio',
      profilePicture: 'https://via.placeholder.com/150',
      course: 'Curso de Excel',
      percentage: 60,
    },
    {
      name: 'Diego Pérez',
      profilePicture: 'https://via.placeholder.com/150',
      course: 'Curso de LinkedIn',
      percentage: 70,
    },
    {
      name: 'Aaron Pozas',
      profilePicture: 'https://via.placeholder.com/150',
      course: 'Curso de Python',
      percentage: 80,
    },
    {
        name: 'Tomas Roldan',
        profilePicture: 'https://via.placeholder.com/150',
        course: 'Curso de Python',
        percentage: 70,
    },
    {
        name: 'Constanza Rain',
        profilePicture: 'https://via.placeholder.com/150',
        course: 'Curso de C++',
        percentage: 40,
    },
    {
        name: 'Diego Munoz',
        profilePicture: profilePicture,
        course: 'Curso de Brawl Stars',
        percentage: 100,
    },
    // Más usuarios...
  ];

  // Función para agrupar y ordenar los usuarios
  const groupAndSortUsers = (users: User[]) => {
    const groupedUsers: { [course: string]: User[] } = users.reduce((acc, user) => {
      if (!acc[user.course]) {
        acc[user.course] = [];
      }
      acc[user.course].push(user);
      return acc;
    }, {} as { [course: string]: User[] });

    for (const course in groupedUsers) {
      groupedUsers[course] = groupedUsers[course].sort((a, b) => b.percentage - a.percentage);
    }

    return groupedUsers;
  };

  const groupedAndSortedUsers = groupAndSortUsers(users);

  return (
    
    <div className="admin-page p-4">
        <nav className="relative h-28">
            <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src="https://talenfly.com/wp-content/uploads/2021/12/pexels-rostislav-uzunov-9150545.mp4" type="video/mp4" />
            </video>
        <div className="relative flex items-center justify-center h-full">
          <img src="https://talenfly.com/wp-content/uploads/2021/12/Logo_Talenfly-300x83.png" alt="Logo" className="h-16" />
        </div>
        </nav>

      <h1 className="text-2xl font-bold my-8 text-center">Lista de porcentajes</h1>
      {Object.keys(groupedAndSortedUsers).map(course => (
        <div key={course} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{course}</h2>
          {groupedAndSortedUsers[course].map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
