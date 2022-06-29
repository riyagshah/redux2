import React from "react";
import { useSelector } from "react-redux";

function Home() {
      const auth = useSelector((store) => store.auth.auth);
      const token = useSelector((store) => store.auth.token);
      return (
            <div>
                  {auth && (
                        <p>
                              This is the HomePage of our Todo App. You are
                              Logged in and your token is{" "}
                              <span style={{ textDecoration: "underline" }}>
                                    {token}
                              </span>
                              .
                        </p>
                  )}
                  {!auth && (
                        <p>
                              This is the HomePage of our Todo App. You are not
                              Login in.
                        </p>
                  )}
            </div>
      );
}

export default Home;
