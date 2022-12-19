
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Blog from './components/Blog/Blog';
import SignIn from './components/SignIn/SignIn';
import LanguageDetails from './components/LanguageDetails/LanguageDetails';
import SignUp from './components/SignUp/SignUp';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CheckOutPage from './components/CheckOutPage/CheckOutPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/courses',
          loader: () => fetch('https://programming-school-server-ochre.vercel.app/courses'),
          element: <Courses></Courses>
        },
        {
          path: '/courses/:id',
          loader: ({ params }) => fetch(`https://programming-school-server-ochre.vercel.app/courses/${params.id}`),
          element: <LanguageDetails></LanguageDetails>
        },
        {
          path: '/courses/:id',
          loader: ({ params }) => fetch(`https://programming-school-server-ochre.vercel.app/courses${params.id}`),
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/courses/checkOut/:id',
          loader: ({ params }) => fetch(`https://programming-school-server-ochre.vercel.app/courses${params.id}`),
          element: <PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>
        },
        {
          path: '/signIn',
          element: <SignIn></SignIn>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/*',
          element: <PageNotFound></PageNotFound>
        }
      ],

    }

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
