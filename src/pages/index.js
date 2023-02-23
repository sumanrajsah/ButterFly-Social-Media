import Head from 'next/head'
import "../flow/config";
import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";

export default function Home() {

  const [user, setUser] = useState({loggedIn: null})

  useEffect(() => fcl.currentUser.subscribe(setUser), [])

  const AuthedState = () => {
    return (
      <div class="logout">
        <button onClick={fcl.unauthenticate}>Log Out</button>
        <div class="add"> Address: {user?.addr ?? "No Address"}</div>
        <div class="homel">
          <br/>
          <a href="#">Profile</a>
          <br/>
          <br/>
          <a href="#" >Notification</a>
          <br/>
          <br/>
          <a href="#">Home</a>
          <br/>
          <br/>
          <a href="#">Explore</a>
          <br/>
          <br/>
          <a href="#">settings</a>
        </div>
        <div class="homer">
          <form class="postc">
            <textarea class="dpost" id="subject" name="subject" placeholder="Let the world Know you..."></textarea>
            <button>Post</button>
          </form>
          
        </div>
      </div>
    )
  }

  const UnauthenticatedState = () => {
    return (
      <div class="logb">
        <button onClick={fcl.logIn}>Log In</button>
        <button onClick={fcl.signUp}>Sign Up</button>
        <br/>
        <br/>

        <div class="ho">
          Welcome to Decentralized Social Media
          <br/>
          Please Login In to Enter In the Decentralized World
        </div>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>ButterFly</title>
        <meta name="description" content="My first web3 app on Flow!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1>ButterFly</h1>
      {user.loggedIn
        ? <AuthedState />
        : <UnauthenticatedState />
      }
      <br/>
      <hr></hr>
      
    </div>
  );
}