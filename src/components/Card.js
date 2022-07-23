import React from "react";
import { useGetPostByIdQuery } from "../service/users";
import { AiOutlineMail } from "react-icons/ai";

function Card({ id }) {
  const data = useGetPostByIdQuery(id);

  if (data.isLoading) {
    return (
      <div className="container">
        <div className="loader"></div>
      </div>
    );
  }
  if (data.isFetching || data.isUninitialized) {
    return (
      <div className="container">
        <div className="card_intital">
          <p className="card__name">
            <div className="loader"></div>
          </p>
        </div>
      </div>
    );
  }
  if (data.isError) {
    return (
      <div className="container">
        <div className="card_intital">
          <p className="card__name">
            Click any of the below buttons to know more about that user
          </p>
        </div>
      </div>
    );
  }
  const user = data.data.data;
  return (
    <div key={user.id} className="container">
      <div className="card">
        <img src={user.avatar} alt="Person" className="card__image" />
        <p className="card__name">{user.first_name + "  " + user.last_name}</p>

        <p className="card__name">
          {" "}
          <AiOutlineMail />
        </p>
        <p className="card__name"> {user.email}</p>
        <p className="card__name">{id}</p>
        <p className="card__name"></p>
      </div>
    </div>
  );
}

export default Card;
