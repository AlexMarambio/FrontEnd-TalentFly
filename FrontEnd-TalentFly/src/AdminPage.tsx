import React from 'react';

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
      profilePicture: 'https://i.pravatar.cc/150?u=laexmarambio',
      course: 'Test de Excel',
      percentage: 90,
    },
    {
      name: 'Alex Marambio',
      profilePicture: 'https://i.pravatar.cc/150?u=laexmarambio',
      course: 'Test de C++',
      percentage: 90,
    },
    {
      name: 'Diego Pérez',
      profilePicture: 'https://i.pravatar.cc/150?u=Diegoperez',
      course: 'Test de LinkedIn',
      percentage: 90,
    },
    {
      name: 'Aaron Pozas',
      profilePicture: 'https://i.pravatar.cc/150?u=Aaronpozas',
      course: 'Test de Python',
      percentage: 80,
    },
    {
        name: 'Tomas Roldan',
        profilePicture: 'https://i.pravatar.cc/150?u=Tomasroldan',
        course: 'Test de Python',
        percentage: 70,
    },
    {
        name: 'Constanza Rain',
        profilePicture: 'https://i.pravatar.cc/150?u=Constanzarain',
        course: 'Test de C++',
        percentage: 40,
    },
    {
        name: 'Diego Munoz',
        profilePicture: 'https://i.pravatar.cc/150?u=DiegoMunoz',
        course: 'Test de Brawl Stars',
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

  // Función para obtener clases de color basadas en el Test
  const getCourseColorClass = (course: string) => {
    switch (course) {
      case 'Test de Excel':
        return 'bg-green-100';
      case 'Test de LinkedIn':
        return 'bg-blue-100';
      case 'Test de Python':
        return 'bg-yellow-100';
      case 'Test de C++':
        return 'bg-purple-100';
      case 'Test de Brawl Stars':
        return 'bg-red-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className="admin-page">
      <nav className="relative h-28 bg-gray-900 bg-opacity-50">
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src="https://talenfly.com/wp-content/uploads/2021/12/pexels-rostislav-uzunov-9150545.mp4" type="video/mp4" />
        </video>
        <div className="relative flex items-center justify-center h-full">
          <img src="https://talenfly.com/wp-content/uploads/2021/12/Logo_Talenfly-300x83.png" alt="Logo" className="h-16" />
        </div>
      </nav>

      <h1 className="text-2xl font-bold my-4 text-center">Lista de porcentajes</h1>
      <div className='p-4'>
      {Object.keys(groupedAndSortedUsers).map(course => (
        <div key={course} className={`mb-6 p-4 rounded ${getCourseColorClass(course)}`}>
          <h2 className="text-xl font-semibold mb-2">{course}</h2>
          {groupedAndSortedUsers[course].map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      ))}
      </div>

    </div>
  );
};

export default AdminPage;
