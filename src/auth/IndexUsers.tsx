import axios from "axios";
import Swal from "sweetalert2";
import { urlAccounts } from "../endpoints";
import Button from "../Utils/Button";
import CustomConfirm from "../Utils/CustomConfirm";
import IndexEntity from "../Utils/Resuable Component/IndexEntity";
import { userDTO } from "./auth.models";

export default function IndexUsers() {
  async function doAdmin(url: string, id: string) {
    await axios.post(url, JSON.stringify(id), {
      headers: { "Content-Type": "application/json" },
    });
    Swal.fire({
      title: "Success",
      text: "Done Awesomly",
      icon: "success",
    });
  }

  async function makeAdmin(id: string) {
    await doAdmin(`${urlAccounts}/makeAdmin`, id);
  }

  async function removeAdmin(id: string) {
    await doAdmin(`${urlAccounts}/removeAdmin`, id);
  }

  return (
    <IndexEntity<userDTO> title="users" url={`${urlAccounts}/listUsers`}>
      {(users) => (
        <>
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id} >
                <td>
                  <Button
                    onClick={() =>
                      CustomConfirm(
                        () => makeAdmin(user.id),
                        `Would you like to make ${user.email} an admin ?`,
                        "let's do it"
                      )
                    }
                  >
                    Make Admin
                  </Button>

                  <Button
                    className="btn btn-danger ms-2 btn-rounded btn-floating btn-sm"
                    onClick={() =>
                      CustomConfirm(
                        () => removeAdmin(user.id),
                        `Would you like to remove ${user.email} an admin ?`,
                        "let's do it"
                      )
                    }
                  >
                    Remove Admin
                  </Button>
                </td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </>
      )}
    </IndexEntity>
  );
}
