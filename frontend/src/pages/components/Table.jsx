import { For, createEffect, createSignal } from "solid-js";
import { select } from "../scripts/Api";
import "./styles/Table.css";

function Table(props) {
  const [data, setData] = createSignal();

  createEffect(() => {
    select(props.data).then((json) => setData(json));
  });
  return (
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <For each={props.headers}>
              {(headers) => <th>{headers.name}</th>}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={data()}>
            {(data) => (
              <tr>
                <For each={props.headers}>
                  {(headers) => <td>{data[headers.key]}</td>}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
