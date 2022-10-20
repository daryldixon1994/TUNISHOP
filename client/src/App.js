import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/visitor/Home";
import Register from "./components/visitor/Register";
import Login from "./components/visitor/Login";
import MyList from "./components/user/MyList";
import Dashboard from "./components/admin/Dashboard";
import AdminRoute from "./routes/AdminRoute";
import AddProducts from "./components/admin/AddProducts";
import UpdateProduct from "./components/admin/UpdateProduct";
import UsersList from "./components/admin/UsersList";
import ProductsList from "./components/admin/ProductsList";
import UserRoute from "./routes/UserRoute";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="myList"
                        element={
                            <UserRoute>
                                <MyList />
                            </UserRoute>
                        }
                    />
                    <Route
                        path="dashboard"
                        element={
                            <AdminRoute>
                                <Dashboard />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="add"
                        element={
                            <AdminRoute>
                                <AddProducts />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="updateProduct/:id"
                        element={
                            <AdminRoute>
                                <UpdateProduct />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="users"
                        element={
                            <AdminRoute>
                                <UsersList />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="products"
                        element={
                            <AdminRoute>
                                <ProductsList />
                            </AdminRoute>
                        }
                    />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
