"use client";
import { handleChange } from "@/app/lib/actions";
import { useActionState } from "react";

export default function Page() {
  const [state, handleChangeAction] = useActionState(handleChange, { message: ""});
  return (
    <div className="columns">
      <div className="column is-two-fifths p-4">
        <form className="box" action={handleChangeAction}>
            {state?.message && <p style={{color:"red"}}>{state?.message}</p>}
          <div className="field my-4">
            <input
              className="input is-dark"
              placeholder=" new login"
              name="login"
            />
          </div>
          <div className="field my-4">
            <input
              className="input is-dark"
              placeholder="confirm with password"
              name="password"
              type="password"
            />
          </div>
          <button className="button is-primary">submit</button>
        </form>
      </div>
    </div>
  );
}
