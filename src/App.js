import Homepage from "./pages/homepage/Homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Auth from "./pages/auth/auth.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="signin" element={<Auth />} />
        </Routes>
      </>
    );
  }
}

export default App;
