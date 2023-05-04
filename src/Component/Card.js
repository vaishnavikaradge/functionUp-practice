
import './Card.css'

function UserCard({ user }) {
    return (
      <div className="card">
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        <div className="details">
          <h2>{`${user.first_name} ${user.last_name}`}</h2>
          <p>{user.email}</p>
          <p>{`ID: ${user.id}`}</p>
        </div>
      </div>
    );
  }

  export default UserCard;