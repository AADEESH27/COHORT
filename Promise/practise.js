import fetch from "node-fetch";

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response;
  } catch (error) {
    throw error;
  }
};

const data = getData();
console.log(data);
