import { useState, useEffect } from "react";
import Header from "./components/Header";
import axios from "axios";
import LoadingSpinnner from "./components/LoadingSpinner";
import UserCard from "./components/UserCard";
import Modal from './components/Modal';

function App() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [userDetail, setUserDetail] = useState();
  const [error,setIsError] = useState(false);
  const [errorMsg,setErrorMsg] = useState('');

  const userDetailChangeHandler = (userData) => {
    setUserDetail(userData);
  };

  const modalChangeHandler = () => {
    setIsError(false);
  }

  useEffect(() => {
    setIsLoading(true);
    const fetchUsersData = async () => {
      try {
        const { data } =
          await axios.get(`https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=
      20
      `);
        setIsLoading(false);
        setUserDetail(data.results[0]);
        setUsers(data.results);
        // console.log(data.results);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setErrorMsg(error.message);
      }
    };
    fetchUsersData();
  }, []);
  return (
    <>
      <Header />
      {isLoading && <LoadingSpinnner />}
      {error && <Modal  onClick={modalChangeHandler} message={errorMsg}  title="ERROR OCCURED !!"/>}
      {!isLoading  && !error && (
        <>
          {userDetail && (
            <>
              <div className="px-6">
                <div className="max-w-3xl mx-auto rounded-md shadow-sm mt-16 h-72 border flex flex-col sm:flex-row items-center">
                  <div className="flex justify-center items-center w-64 mt-4">
                    <img
                      className="w-32 h-32 rounded-full"
                      src={userDetail.picture.large}
                      alt={userDetail.name.title}
                    />
                  </div>
                  <div className="flex flex-col mt-10 sm:mt-20">
                    <h1 className="text-center sm:text-4xl underline text-red-500 ">
                      {userDetail.name.title} {userDetail.name.first}{" "}
                      {userDetail.name.last}
                    </h1>
                    <p className="mt-2 text-sm  text-center sm:mt-4">
                      {userDetail.location.street.number} ,{" "}
                      {userDetail.location.street.name} ,{" "}
                      {userDetail.location.city} , {userDetail.location.state} ,{" "}
                      {userDetail.location.country} , {userDetail.location.postcode}
                    </p>
                    <p className="mt-2 text-center text-sm sm:text-md">{userDetail.location.timezone.offset} , {userDetail.location.timezone.description}</p>
                    <p className="mt-1 text-center text-sm sm:text-md">{userDetail.gender}</p>
                  </div>
                </div>
              </div>
            </>
          )}
          {users && (
            <>
              <div className="md:px-10 lg:px-20 mt-10">
                <div className="flex flex-wrap justify-center">
                  {users.map((userData) => (
                    <UserCard
                      key={Math.random()}
                      userData={userData}
                      userDetailChangeHandler={userDetailChangeHandler}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
