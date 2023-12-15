const user_id = 4;

// POST
const postJSON = async (data) => {
  try {
    const response = await fetch("https://example.com/profile", {
      method: "POST", // 'PUT','
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

const data = { username: "example" };
postJSON(data);

// PUT
const putJSON = async (user_id, data) => {
  try {
    const response = await fetch(`https://example.com/profile/${user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response;
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

const dataPut = { username: "example" };
putJSON(user_id, dataPut);

// GET all
const getJSON = async () => {
  try {
    const response = await fetch("https://example.com/profile", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

getJSON();

// GET One
const getJSONOne = async (user_id) => {
  try {
    const response = await fetch(`https://example.com/profile/${user_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

getJSONOne(user_id);

// DELETE One
const deleteJSON = async (user_id) => {
  try {
    const response = await fetch(`https://example.com/profile/${user_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response;
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

deleteJSON(user_id);