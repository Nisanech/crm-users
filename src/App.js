import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Select from "./components/Select/Select";
import AddUser from "./components/AddUser/AddUser";
import UserTable from './components/UserTable/UserTable'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <>
      <Header />

      <div className="mt-4 p-5 flex flex-col lg:grid lg:grid-cols-3 lg:items-end md:container lg:justify-items-center">
        <Search />

        <Select />

        <AddUser />
      </div>

      <div className="p-5 md:container mt-10">
        <UserTable/>
      </div>

      <Footer/>
    </>
  );
}

export default App;
