import { fetchUsers } from "@/utils/actions"

fetchUsers

async function UsersList() {
  const users= await fetchUsers()
  return (
    <h3 className='text-xl-1'>
      {users.length?
      <div>
      {
        users.map((user) => (
          <h4 key={user.id} className="capitalize text-lg">
            {user.firstName} {user.lastName}
          </h4>
        ))
      }
      </div>:
      <p>No users found</p>}
    </h3>
  )
}

export default UsersList
