const url = "http://192.168.1.245:8800/api/";
const name = "etapelektrik";

export const select = async (table) => {
  return await fetch(url + `select/${name}/${table}`, { method: "GET" }).then(
    (res) => {
      return res.json();
    }
  );
};

export const selectid = async (table, id) => {};

export const del = async (table, id) => {};

export const insert = async (table, data) => {};

export const update = async (table, id, data) => {};
